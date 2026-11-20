"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP, EASE_OUT } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";

type Tag = "p" | "h1" | "h2" | "h3" | "span" | "div";

type SplitRevealProps = {
  children: React.ReactNode;
  as?: Tag;
  id?: string;
  className?: string;
  /** "scroll" waits for the text to enter the viewport; "ready" plays when the page is uncovered. */
  trigger?: "scroll" | "ready";
  delay?: number;
  stagger?: number;
};

// Text that rises into view line by line from behind a mask.
export function SplitReveal({
  children,
  as: Tag = "p",
  id,
  className,
  trigger = "scroll",
  delay = 0,
  stagger = 0.09,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const ready = useUi((s) => s.ready);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || (trigger === "ready" && !ready)) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(el, {
          type: "lines",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.1,
              delay,
              stagger,
              ease: EASE_OUT,
              scrollTrigger: trigger === "scroll" ? { trigger: el, start: "top 88%", once: true } : undefined,
            }),
        });
        return () => split.revert();
      });
    },
    { dependencies: [ready, trigger], scope: ref },
  );

  return (
    // Hidden until the reveal starts so lines never flash in place first.
    <Tag
      ref={ref as React.Ref<never>}
      id={id}
      className={className}
      style={trigger === "ready" && !ready ? { visibility: "hidden" } : undefined}
    >
      {children}
    </Tag>
  );
}
