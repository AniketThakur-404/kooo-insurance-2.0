"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt?: string;
  sizes: string;
  className?: string;
  /** How far the photo drifts inside its frame while scrolling, in percent. */
  strength?: number;
  /** Navy wash over the photo, for text laid on top. */
  shade?: boolean;
  children?: React.ReactNode;
};

/**
 * Photo that wipes up into view, then drifts inside its frame as the page
 * scrolls (parallax). Children are laid over the photo.
 */
export function ParallaxImage({ src, alt = "", sizes, className, strength = 10, shade, children }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } })
          .fromTo(ref.current, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut" })
          .fromTo("[data-px-zoom]", { scale: 1.35 }, { scale: 1, duration: 2, ease: "expo.out" }, 0);
        gsap.fromTo(
          "[data-px-move]",
          { yPercent: -strength },
          { yPercent: strength, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-navy", className)}>
      <div data-px-move className="absolute -inset-y-[14%] inset-x-0 will-change-transform">
        <div data-px-zoom className="absolute inset-0 will-change-transform">
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
        </div>
      </div>
      {shade && <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-navy/10" />}
      {children}
    </div>
  );
}
