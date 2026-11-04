"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type ImageRevealProps = {
  src: string;
  alt?: string;
  sizes: string;
  className?: string;
};

// Photo that wipes up into view and settles from a slight zoom; zooms a touch on group hover.
export function ImageReveal({ src, alt = "", sizes, className }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ scrollTrigger: { trigger: ref.current, start: "top 88%", once: true } })
          .fromTo(ref.current, { clipPath: "inset(100% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "expo.inOut" })
          .fromTo("img", { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out" }, 0);
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={cn("relative overflow-hidden bg-navy/10", className)}>
      <div className="absolute inset-0 transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105">
        <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
      </div>
    </div>
  );
}
