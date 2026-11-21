"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, scrambleIn, useGSAP } from "@/lib/gsap";
import { prefersReducedMotion, useUi } from "@/lib/ui-store";
import { SplitReveal } from "@/components/motion/split-reveal";
import { SpinBadge } from "@/components/motion/spin-badge";
import { cn } from "@/lib/utils";

type PageTitleProps = {
  /** Two halves: the first ends up on the left edge, the second on the right. */
  words: [string, string];
  intro?: string;
  /** Full heading text for search engines and screen readers, when it differs from the two halves. */
  heading?: string;
  /** Banner photo shown under the title. It wipes in after the title, then widens and drifts as you scroll. */
  image?: string;
  /** Short labels laid over the banner's lower edge. */
  tags?: string[];
};

// Font size steps down for longer titles so both halves always fit one line on desktop.
function sizeFor(length: number) {
  if (length <= 14) return "text-[clamp(3.25rem,9.5vw,10rem)]";
  if (length <= 20) return "text-[clamp(3rem,7.6vw,8.25rem)]";
  if (length <= 26) return "text-[clamp(2.75rem,6.2vw,6.75rem)]";
  return "text-[clamp(2.5rem,5vw,5.5rem)]";
}

/**
 * Inner-page title, as on the reference contact/team pages: the words decode
 * from dots side by side in the centre, then slide apart to the screen edges.
 * With an image, a banner then wipes up beneath it and opens to full width on scroll.
 */
export function PageTitle({ words, intro, heading, image, tags }: PageTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const ready = useUi((s) => s.ready);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.set("[data-part-inner]", { yPercent: 105 });
      gsap.set("[data-hero-clip]", { clipPath: "inset(100% 0% 0% 0%)" });
      gsap.set("[data-hero-zoom]", { scale: 1.35 });
      gsap.set("[data-hero-badge]", { scale: 0, rotate: -120 });
      gsap.set("[data-hero-tag]", { yPercent: 120, opacity: 0 });

      // Scroll: the banner frame grows to full width and the photo drifts (parallax).
      if (image) {
        const trigger = ref.current?.querySelector("[data-hero-frame]");
        gsap.fromTo("[data-hero-frame]", { scale: 0.94 }, { scale: 1, ease: "none", scrollTrigger: { trigger, start: "top 75%", end: "top 10%", scrub: 0.8 } });
        gsap.fromTo("[data-hero-move]", { yPercent: -8 }, { yPercent: 10, ease: "none", scrollTrigger: { trigger, start: "top bottom", end: "bottom top", scrub: 0.8 } });
      }
    },
    { scope: ref },
  );

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !ready || prefersReducedMotion()) return;
      const parts = gsap.utils.toArray<HTMLElement>("[data-part]", el);
      const inners = gsap.utils.toArray<HTMLElement>("[data-part-inner]", el);
      inners.forEach((inner) => (inner.style.width = `${inner.offsetWidth}px`)); // steady while decoding

      // Desktop: start with both halves side by side in the centre.
      const row = el.querySelector("h1")!.getBoundingClientRect();
      const [a, b] = parts.map((p) => p.getBoundingClientRect());
      const gap = parseFloat(getComputedStyle(parts[0]).fontSize) * 0.26;
      const spread = window.innerWidth >= 768 && a.width + gap + b.width <= row.width;
      if (spread) {
        const startA = row.left + (row.width - (a.width + gap + b.width)) / 2;
        gsap.set(parts[0], { x: startA - a.left });
        gsap.set(parts[1], { x: startA + a.width + gap - b.left });
      }

      const tl = gsap.timeline({ delay: 0.05 });
      inners.forEach((inner, i) => {
        tl.to(inner, { yPercent: 0, duration: 0.7, ease: "power4.out" }, i * 0.32).add(scrambleIn(inner, words[i], 0.8), i * 0.32);
      });
      if (spread) tl.to(parts, { x: 0, duration: 1.2, ease: "expo.inOut" }, "+=0.15");
      tl.call(() => gsap.set(inners, { clearProps: "width" }));

      if (image) {
        // Banner "loads" in: wipes up from the bottom while the photo settles from a zoom.
        tl.to("[data-hero-clip]", { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" }, 0.7)
          .to("[data-hero-zoom]", { scale: 1, duration: 2.2, ease: "expo.out" }, 0.9)
          .to("[data-hero-badge]", { scale: 1, rotate: 0, duration: 1.2, ease: "back.out(1.6)" }, 1.6)
          .to("[data-hero-tag]", { yPercent: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: "power3.out" }, 1.8);
      }
    },
    { dependencies: [ready], scope: ref },
  );

  const part = (i: number, extra?: string) => (
    <span data-part className={cn("block will-change-transform", extra)}>
      <span className="-mb-[0.14em] block overflow-hidden pb-[0.14em]">
        {/* React does not manage this text node; the scramble effect rewrites it. */}
        <span data-part-inner className="inline-block whitespace-nowrap" dangerouslySetInnerHTML={{ __html: words[i] }} />
      </span>
    </span>
  );

  return (
    <div ref={ref}>
      <section
        className={cn(
          "relative flex flex-col justify-between px-6 pt-36 md:px-8 md:pt-40",
          image ? "gap-10 pb-10 md:gap-14 md:pb-14" : "min-h-[80svh] gap-16 pb-12",
        )}
      >
        <h1 className={cn("flex flex-col font-heading leading-[0.98] text-navy md:flex-row md:justify-between", sizeFor(words.join(" ").length))}>
          <span className="sr-only">{heading ?? words.join(" ")}</span>
          <span aria-hidden className="contents">
            {part(0)}
            {part(1, "self-end md:self-auto")}
          </span>
        </h1>
        <div className="flex items-end justify-between gap-8">
          {intro && (
            <SplitReveal trigger="ready" delay={0.9} className="max-w-xl text-lg leading-relaxed md:text-xl">
              {intro}
            </SplitReveal>
          )}
          <span aria-hidden className="ml-auto size-2 shrink-0 bg-kooo-green-dark" />
        </div>
      </section>

      {image && (
        <section className="relative z-10 px-2 sm:px-3 md:px-4">
          <div data-hero-frame className="relative origin-top will-change-transform">
            <div data-hero-clip className="relative h-[58svh] min-h-[320px] overflow-hidden bg-navy md:h-[82svh]">
              <div data-hero-move className="absolute -inset-y-[12%] inset-x-0 will-change-transform">
                <div data-hero-zoom className="absolute inset-0 will-change-transform">
                  <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
                </div>
              </div>
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent" />
              {tags && tags.length > 0 && (
                <ul className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 p-5 md:p-8">
                  {tags.map((tag) => (
                    <li key={tag} className="overflow-hidden">
                      <span data-hero-tag className="inline-block rounded-full bg-white/15 px-4 py-1.5 font-button text-sm text-white ring-1 ring-white/30 backdrop-blur-md md:text-base">
                        {tag}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div data-hero-badge className="absolute right-4 top-4 z-10 md:-top-20 md:right-10">
              <SpinBadge className="size-24 md:size-40" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
