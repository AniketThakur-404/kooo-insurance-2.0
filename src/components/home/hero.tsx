"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, scrambleIn, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useUi } from "@/lib/ui-store";
import { categories, home } from "@/content/site";
import { RollText } from "@/components/motion/roll-text";
import { HeroFilm } from "@/components/home/hero-film";

/**
 * Reference hero: each word rises in its corner while decoding from dots,
 * then the pairs slide together (sideways only) as the photo opens from a
 * thin vertical line to fill the space between them. The hero stays pinned
 * (sticky) while the next panel scrolls up over it.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useUi((s) => s.ready);
  const words = home.hero.words;

  // Hidden until the intro plays.
  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.set("[data-word-inner]", { yPercent: 105 });
      gsap.set("[data-hero-image]", { clipPath: "inset(0% 50% 0% 50%)" });
      gsap.set("[data-hero-label]", { opacity: 0, y: 12 });

      // While the next panel covers the hero, it sinks back slightly.
      gsap.to("[data-hero-stage]", {
        scale: 0.9,
        opacity: 0.3,
        ease: "none",
        scrollTrigger: { trigger: ref.current?.parentElement, start: "top top", end: "+=100%", scrub: 0.8 },
      });
    },
    { scope: ref },
  );

  useGSAP(
    () => {
      const section = ref.current;
      if (!section || !ready || prefersReducedMotion()) return;

      // Measure now (fonts are loaded) and park each word at its edge, same row.
      const box = section.getBoundingClientRect();
      const padX = window.innerWidth >= 768 ? 32 : 20;
      const wordEls = gsap.utils.toArray<HTMLElement>("[data-word]", section);
      const inners = gsap.utils.toArray<HTMLElement>("[data-word-inner]", section);
      wordEls.forEach((word, i) => {
        const r = word.getBoundingClientRect();
        inners[i].style.width = `${inners[i].offsetWidth}px`; // keep width steady while letters decode
        const targetX = i % 2 === 0 ? padX : box.width - padX - r.width;
        gsap.set(word, { x: targetX - (r.left - box.left) });
      });

      const tl = gsap.timeline({ delay: 0.1 });
      inners.forEach((inner, i) => {
        tl.to(inner, { yPercent: 0, duration: 0.8, ease: "power4.out" }, i * 0.28).add(scrambleIn(inner, words[i], 0.85), i * 0.28);
      });
      tl.addLabel("open", "+=0.2")
        // Explicit four-value insets: browsers shorten computed clip-paths, which would skew the tween.
        .fromTo(
          "[data-hero-image]",
          { clipPath: "inset(0% 50% 0% 50%)" },
          { clipPath: "inset(0% 49.6% 0% 49.6%)", duration: 0.3, ease: "power2.out" },
          "open",
        )
        .to(wordEls, { x: 0, duration: 1.15, ease: "power3.inOut" }, "open+=0.2")
        .fromTo(
          "[data-hero-image]",
          { clipPath: "inset(0% 49.6% 0% 49.6%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 1.15, ease: "power3.inOut", immediateRender: false },
          "open+=0.2",
        )
        .fromTo("[data-film]", { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "power3.out" }, "open+=0.2")
        .to("[data-hero-label]", { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" }, "-=0.6")
        .call(() => gsap.set(inners, { clearProps: "width" }));
    },
    { dependencies: [ready], scope: ref },
  );

  const word = (i: number) => (
    <span data-word className="block will-change-transform">
      <span className="-mb-[0.12em] block overflow-hidden pb-[0.12em]">
        {/* React does not manage this text node; the scramble effect rewrites it. */}
        <span data-word-inner className="block whitespace-nowrap" dangerouslySetInnerHTML={{ __html: words[i] }} />
      </span>
    </span>
  );

  return (
    <section ref={ref} className="sticky top-0 h-svh overflow-hidden">
      <h1 className="sr-only">{words.join(" ")}</h1>
      <div
        data-hero-stage
        className="flex h-full flex-col items-center px-5 pb-[9svh] pt-[14svh] will-change-transform md:pb-[10svh] md:pt-[13svh]"
      >
        <div aria-hidden className="flex gap-[0.24em] font-heading text-[clamp(2.5rem,8.6vw,9.5rem)] leading-none text-navy">
          {word(0)}
          {word(1)}
        </div>
        <div
          data-hero-image
          className="relative my-[2svh] min-h-0 w-[min(78vw,26rem)] flex-1 overflow-hidden sm:w-[min(50vw,30rem)] md:w-[34vw] md:max-w-[38rem]"
        >
          {/* Looping brand film: logo intro, then each service. Starts once the frame has opened. */}
          <HeroFilm play={ready} delay={2.2} />
        </div>
        <div aria-hidden className="flex gap-[0.24em] font-heading text-[clamp(2.5rem,8.6vw,9.5rem)] leading-none text-navy">
          {word(2)}
          {word(3)}
        </div>
      </div>
      <ul className="absolute inset-x-0 bottom-0 hidden justify-between px-8 pb-5 font-button text-sm uppercase tracking-wider text-navy md:flex">
        {categories.map((c) => (
          <li key={c.slug} data-hero-label>
            <Link href={`/${c.slug}`} className="group inline-block">
              <RollText text={c.shortName} stagger={12} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
