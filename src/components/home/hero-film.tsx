"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/ui-store";
import { categories, tagline } from "@/content/site";
import { KoooLogo } from "@/components/brand/kooo-logo";

/**
 * Looping "brand film" for the hero frame, built from the logo and the
 * service photos: the Kooo logo wipes in on navy, then each insurance
 * category crossfades in with a slow zoom and its name, then it starts over.
 */
export function HeroFilm({ play, delay = 0 }: { play: boolean; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!play) return;
      if (prefersReducedMotion()) {
        // Still frame: the first service photo with its caption.
        gsap.set(gsap.utils.toArray("[data-slide]")[0] ?? null, { opacity: 1 });
        return;
      }
      const slides = gsap.utils.toArray<HTMLElement>("[data-slide]");
      const BEAT = 2.2; // seconds each service is on screen
      const FADE = 1; // crossfade length
      const tl = gsap.timeline({ repeat: -1, delay, defaults: { ease: "sine.inOut" } });

      // Brand intro.
      tl.set("[data-film-bar]", { scaleX: 0 })
        .set(slides, { opacity: 0 })
        .fromTo("[data-film-logo]", { clipPath: "inset(0% 100% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power3.out" })
        .fromTo("[data-film-tag]", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.35")
        .to({}, { duration: 0.6 });

      // Services crossfade one into the next; each photo keeps zooming slowly through its fade.
      slides.forEach((slide, i) => {
        const at = `slide${i}`;
        const caps = slide.querySelectorAll("[data-cap]");
        tl.addLabel(at)
          .fromTo(slide, { opacity: 0 }, { opacity: 1, duration: FADE }, at)
          .fromTo(slide.querySelector("img"), { scale: 1.12 }, { scale: 1, duration: BEAT + FADE * 2, ease: "none" }, at)
          .fromTo(caps, { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.7, stagger: 0.06, ease: "power3.out" }, `${at}+=0.35`)
          .to("[data-film-bar]", { scaleX: (i + 1) / slides.length, duration: FADE, ease: "power2.inOut" }, at);
        // Once covered, the previous scene can go (keeps only two layers live).
        if (i > 0) tl.set(slides[i - 1], { opacity: 0 }, `${at}+=${FADE}`);
        tl.to(caps, { opacity: 0, duration: 0.35 }, `${at}+=${BEAT - 0.1}`);
        tl.to({}, { duration: BEAT - FADE }, `${at}+=${FADE}`);
      });

      // Fade back to the logo for the next loop.
      tl.to(slides[slides.length - 1], { opacity: 0, duration: FADE }).to("[data-film-bar]", { scaleX: 0, duration: FADE }, "<");
    },
    { dependencies: [play], scope: ref },
  );

  return (
    <div ref={ref} data-film className="absolute inset-0 overflow-hidden bg-navy">
      {/* Brand intro frame */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-kooo-mint">
        <div data-film-logo style={{ clipPath: "inset(0% 100% 0% 0%)" }} className="w-[62%] max-w-72">
          <KoooLogo className="w-full" title="" />
        </div>
        <p data-film-tag className="text-center font-heading text-base text-white/80 opacity-0 md:text-lg">
          {tagline}
        </p>
      </div>

      {/* Service frames */}
      {categories.map((c, i) => (
        <div
          key={c.slug}
          data-slide
          className="absolute inset-0"
          style={{ opacity: 0 }}
        >
          <Image src={c.image} alt="" fill sizes="(min-width: 768px) 34vw, 78vw" className="object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy/60 to-transparent" />
          <KoooLogo wordmarkOnly title="" className="absolute right-3 top-3 w-11 text-white/90 drop-shadow md:w-12" />
          <div className="absolute inset-x-4 bottom-4 text-white md:inset-x-5">
            <span className="block overflow-hidden">
              <span data-cap className="block text-[11px] tabular-nums tracking-wider text-kooo-mint">
                {String(i + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-cap className="block font-heading text-[clamp(1rem,1.35vw,1.4rem)] leading-tight">
                {c.name}
              </span>
            </span>
          </div>
        </div>
      ))}

      <span aria-hidden className="absolute inset-x-0 bottom-0 h-[3px] bg-white/15">
        <span data-film-bar className="block h-full origin-left scale-x-0 bg-kooo-green" />
      </span>
    </div>
  );
}
