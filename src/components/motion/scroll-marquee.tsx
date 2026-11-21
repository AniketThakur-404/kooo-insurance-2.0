"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

/**
 * Two lines of large words that slide in opposite directions as the page scrolls.
 * Decorative only: the same words appear in the page content.
 */
export function ScrollMarquee({ items, className }: { items: string[]; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const st = { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.6 };
        gsap.fromTo("[data-mq='a']", { xPercent: 0 }, { xPercent: -30, ease: "none", scrollTrigger: st });
        gsap.fromTo("[data-mq='b']", { xPercent: -30 }, { xPercent: 0, ease: "none", scrollTrigger: st });
      });
    },
    { scope: ref },
  );

  const line = (key: "a" | "b", outline: boolean) => (
    <div data-mq={key} className="flex w-max gap-10 whitespace-nowrap will-change-transform">
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="flex items-center gap-10">
          <span
            className={cn(
              "font-heading text-[clamp(2.75rem,7vw,7rem)] leading-none",
              outline ? "text-transparent [-webkit-text-stroke:1px_var(--color-navy)]" : "text-navy",
            )}
          >
            {item}
          </span>
          <span className="size-3 shrink-0 rounded-full bg-kooo-green-dark md:size-4" />
        </span>
      ))}
    </div>
  );

  return (
    <div ref={ref} aria-hidden className={cn("relative z-10 space-y-4 overflow-hidden py-16 md:space-y-6 md:py-24", className)}>
      {line("a", false)}
      {line("b", true)}
    </div>
  );
}
