"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// GSAP ScrollTrigger example: cards fade/slide in, scrubbed to scroll position.
export function RevealSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".reveal-card", {
        y: 120,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "center center",
          scrub: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="mx-auto grid max-w-6xl gap-6 px-6 py-32 md:grid-cols-3">
      {["Health", "Life", "Vehicle"].map((title) => (
        <div key={title} className="reveal-card rounded-2xl border bg-card p-8 shadow-sm">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-3 text-muted-foreground">Coverage that moves with you.</p>
        </div>
      ))}
    </section>
  );
}
