"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap, scrambleIn, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useUi } from "@/lib/ui-store";
import { categories, home } from "@/content/site";
import { RollText } from "@/components/motion/roll-text";

/**
 * Reference hero: each word rises in its corner while decoding from dots,
 * then the pairs slide together (sideways only) as the video opens from a
 * thin vertical line to fill the space between them.
 *
 * On scroll the hero stays pinned (sticky) and the video frame expands to
 * fill the screen while the words slide away; after one screen of scroll the
 * next panel rises over it.
 *
 * The video is a full-screen layer clipped to the frame's box (the
 * "slot"), so growing it is just a clip-path tween. Two nested clips keep the
 * intro and the scroll from fighting: the outer one follows the scroll
 * (slot -> full screen), the inner one plays the intro (line -> slot width).
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useUi((s) => s.ready);
  const words = home.hero.words;

  // The frame's box inside the stage, as clip-path insets in px. offset* ignores
  // transforms, so this stays right even while the stage is scaled down.
  const slotBox = () => {
    const stage = ref.current?.querySelector<HTMLElement>("[data-hero-stage]");
    const slot = ref.current?.querySelector<HTMLElement>("[data-hero-slot]");
    if (!stage || !slot) return { t: 0, r: 0, b: 0, l: 0 };
    const t = slot.offsetTop;
    const l = slot.offsetLeft;
    return { t, l, r: stage.offsetWidth - l - slot.offsetWidth, b: stage.offsetHeight - t - slot.offsetHeight };
  };
  const slotInset = () => {
    const { t, r, b, l } = slotBox();
    return `inset(${t}px ${r}px ${b}px ${l}px round 0px)`;
  };

  // Hidden until the intro plays; scroll-driven expand and sink.
  useGSAP(
    () => {
      const wrapper = ref.current?.parentElement;
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        // No motion: the video simply sits in its frame.
        gsap.set("[data-hero-image]", { clipPath: "none" });
        const apply = () => gsap.set("[data-hero-expand]", { clipPath: slotInset() });
        apply();
        window.addEventListener("resize", apply);
        return () => window.removeEventListener("resize", apply);
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.set("[data-word-inner]", { yPercent: 105 });
        gsap.set("[data-hero-label]", { opacity: 0, y: 12 });

        // First screen of scroll: the frame grows to fill the viewport, the words part and fade.
        gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: { trigger: wrapper, start: "top top", end: "+=100%", scrub: 0.8, invalidateOnRefresh: true },
          })
          .fromTo("[data-hero-expand]", { clipPath: slotInset }, { clipPath: "inset(0px 0px 0px 0px round 0px)" }, 0)
          .to("[data-hero-row='top']", { yPercent: -80, opacity: 0 }, 0)
          .to("[data-hero-row='bottom']", { yPercent: 80, opacity: 0 }, 0)
          .to("[data-hero-labels]", { opacity: 0, duration: 0.4 }, 0);

        // Second screen: while the next panel covers the hero, it sinks back slightly.
        gsap.to("[data-hero-stage]", {
          scale: 0.9,
          opacity: 0.3,
          ease: "none",
          scrollTrigger: { trigger: wrapper, start: "top -100%", end: "top -200%", scrub: 0.8 },
        });
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

      // The intro clip opens from a centre line to the frame's width (the outer clip handles height).
      const { l, r } = slotBox();
      const half = section.offsetWidth / 2;
      const line = (inset: number) => `inset(0px ${inset}px 0px ${inset}px)`;

      const tl = gsap.timeline({ delay: 0.1 });
      inners.forEach((inner, i) => {
        tl.to(inner, { yPercent: 0, duration: 0.8, ease: "power4.out" }, i * 0.28).add(scrambleIn(inner, words[i], 0.85), i * 0.28);
      });
      tl.addLabel("open", "+=0.2")
        .fromTo("[data-hero-image]", { clipPath: line(half) }, { clipPath: line(half - 2), duration: 0.3, ease: "power2.out" }, "open")
        .to(wordEls, { x: 0, duration: 1.15, ease: "power3.inOut" }, "open+=0.2")
        .fromTo(
          "[data-hero-image]",
          { clipPath: line(half - 2) },
          { clipPath: `inset(0px ${r}px 0px ${l}px)`, duration: 1.15, ease: "power3.inOut", immediateRender: false },
          "open+=0.2",
        )
        .fromTo("[data-film]", { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "power3.out" }, "open+=0.2")
        .to("[data-hero-label]", { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" }, "-=0.6")
        // Hand the frame over to the scroll clip so it can grow to full screen.
        .set("[data-hero-image]", { clipPath: "none" })
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
    <>
      <section ref={ref} className="sticky top-0 h-svh overflow-hidden">
        <h1 className="sr-only">{words.join(" ")}</h1>
        <div
          data-hero-stage
          className="relative flex h-full flex-col items-center px-5 pb-[9svh] pt-[14svh] will-change-transform md:pb-[10svh] md:pt-[13svh]"
        >
          {/* Full-screen video layer, clipped to the frame below and grown on scroll. */}
          <div data-hero-expand className="absolute inset-0 will-change-[clip-path]">
            <div data-hero-image className="absolute inset-0 overflow-hidden" style={{ clipPath: "inset(0% 50% 0% 50%)" }}>
              <video
                data-film
                className="absolute inset-0 h-full w-full object-cover"
                src="/KOO_no_watermark.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
              />
            </div>
          </div>

          <div
            aria-hidden
            data-hero-row="top"
            className="relative flex gap-[0.24em] font-heading text-[clamp(2.5rem,8.6vw,9.5rem)] leading-none text-navy"
          >
            {word(0)}
            {word(1)}
          </div>
          {/* Empty box that sets where the video frame sits. */}
          <div
            data-hero-slot
            aria-hidden
            className="my-[2svh] min-h-0 w-[min(78vw,26rem)] flex-1 sm:w-[min(50vw,30rem)] md:w-[34vw] md:max-w-[38rem]"
          />
          <div
            aria-hidden
            data-hero-row="bottom"
            className="relative flex gap-[0.24em] font-heading text-[clamp(2.5rem,8.6vw,9.5rem)] leading-none text-navy"
          >
            {word(2)}
            {word(3)}
          </div>
        </div>
        <ul
          data-hero-labels
          className="absolute inset-x-0 bottom-0 hidden justify-between px-8 pb-5 font-button text-sm uppercase tracking-wider text-navy md:flex"
        >
          {categories.map((c) => (
            <li key={c.slug} data-hero-label>
              <Link href={`/${c.slug}`} className="group inline-block">
                <RollText text={c.shortName} stagger={12} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* One screen of scroll for the video to expand before the next panel arrives. */}
      <div aria-hidden className="h-svh" />
    </>
  );
}
