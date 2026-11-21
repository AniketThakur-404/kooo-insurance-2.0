"use client";

import { useRef } from "react";
import { gsap, scrambleIn, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useUi } from "@/lib/ui-store";
import { categories, home } from "@/content/site";

/**
 * Full-bleed video hero. The video fills the screen edge to edge; the tagline
 * sits in the bottom-left corner and the category names run along the bottom,
 * both in soft white over a dark fade so the video stays the focus.
 *
 * Intro: the video settles from a slight zoom while each word rises and
 * decodes from dots.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const ready = useUi((s) => s.ready);
  const words = home.hero.words;

  // Hidden until the intro plays.
  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        gsap.set("[data-word-mask]", { overflow: "visible" });
        return;
      }
      gsap.set("[data-word-inner]", { yPercent: 105 });
      gsap.set("[data-hero-label]", { opacity: 0, y: 12 });
    },
    { scope: ref },
  );

  useGSAP(
    () => {
      const section = ref.current;
      if (!section || !ready || prefersReducedMotion()) return;

      const inners = gsap.utils.toArray<HTMLElement>("[data-word-inner]", section);
      inners.forEach((inner) => (inner.style.width = `${inner.offsetWidth}px`)); // keep width steady while letters decode

      const tl = gsap.timeline({ delay: 0.1 });
      tl.fromTo("[data-film]", { scale: 1.15 }, { scale: 1, duration: 2.2, ease: "power3.out" }, 0);
      inners.forEach((inner, i) => {
        tl.to(inner, { yPercent: 0, duration: 0.8, ease: "power4.out" }, 0.3 + i * 0.2).add(scrambleIn(inner, words[i], 0.85), 0.3 + i * 0.2);
      });
      tl.to("[data-hero-label]", { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out" }, "-=0.5").call(() => {
        gsap.set(inners, { clearProps: "width" });
        // The mask is only needed while words slide in; drop it so no letter tail gets clipped.
        gsap.set("[data-word-mask]", { overflow: "visible" });
      });
    },
    { dependencies: [ready], scope: ref },
  );

  const word = (i: number) => (
    <span data-word className="block">
      <span data-word-mask className="-mb-[0.3em] block overflow-hidden pb-[0.3em]">
        {/* React does not manage this text node; the scramble effect rewrites it. */}
        <span data-word-inner className="block whitespace-nowrap" dangerouslySetInnerHTML={{ __html: words[i] }} />
      </span>
    </span>
  );

  return (
    <section ref={ref} className="relative aspect-video w-full overflow-hidden bg-navy md:aspect-auto md:h-svh">
      {/* Phones: as tall as the video (16:9), not the full screen. From md up: full screen. */}
      <h1 className="sr-only">{words.join(" ")}</h1>
      <div className="relative h-full">
        {/* Full-bleed looping video, muted so browsers allow autoplay. */}
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
        {/* Dark fade at the bottom so the white text reads over any frame. */}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/75 via-navy/15 to-transparent" />

        <div
          aria-hidden
          className="absolute bottom-4 left-4 font-heading text-[clamp(1.4rem,4.5vw,4.75rem)] leading-[1.05] text-white/85 md:bottom-[11svh] md:left-8"
        >
          <div className="flex gap-[0.24em]">
            {word(0)}
            {word(1)}
          </div>
          <div className="flex gap-[0.24em]">
            {word(2)}
            {word(3)}
          </div>
        </div>
      </div>
      <ul className="absolute inset-x-0 bottom-0 hidden justify-between px-8 pb-5 font-button text-sm uppercase tracking-wider text-white/70 md:flex">
        {categories.map((c) => (
          <li key={c.slug} data-hero-label>{c.shortName}</li>
        ))}
      </ul>
    </section>
  );
}
