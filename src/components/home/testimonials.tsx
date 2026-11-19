"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { home } from "@/content/site";
import { CornerDots } from "@/components/ui/corner-dots";
import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";

const CARD = "h-[22rem] w-[min(78vw,27rem)] md:h-[24rem]";

// Carousel that keeps the active quote centred inside a set of corner marks.
// Arrows on every screen; on touch screens the cards can also be swiped.
export function Testimonials() {
  const items = home.testimonials;
  const [active, setActive] = useState(Math.floor(items.length / 2));
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const first = useRef(true);

  const centre = useCallback((index: number, duration: number) => {
    const vp = viewport.current;
    const tr = track.current;
    const card = tr?.children[index] as HTMLElement | undefined;
    if (!vp || !tr || !card) return;
    gsap.to(tr, { x: vp.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2), duration, ease: "power3.inOut" });
  }, []);

  useEffect(() => {
    centre(active, first.current ? 0 : 0.9);
    first.current = false;
    const onResize = () => centre(active, 0);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active, centre]);

  useEffect(() => {
    const tr = track.current;
    return () => {
      gsap.killTweensOf(tr);
    };
  }, []);

  const go = (step: number) => setActive((i) => (i + step + items.length) % items.length);

  // Touch swipe: the track follows the finger sideways, and on release a
  // flick past the threshold moves one card; otherwise it springs back.
  const drag = useRef<{ x0: number; y0: number; base: number; axis: "x" | "y" | null; id: number } | null>(null);
  const swiped = useRef(false);
  const SWIPE = 50; // px

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" || !track.current) return;
    gsap.killTweensOf(track.current);
    drag.current = { x0: e.clientX, y0: e.clientY, base: Number(gsap.getProperty(track.current, "x")), axis: null, id: e.pointerId };
    swiped.current = false;
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId || !track.current) return;
    const dx = e.clientX - d.x0;
    const dy = e.clientY - d.y0;
    // Decide once per gesture whether this is a sideways swipe or a page scroll.
    if (!d.axis && Math.hypot(dx, dy) > 8) d.axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
    if (d.axis !== "x") return;
    swiped.current = true;
    gsap.set(track.current, { x: d.base + dx });
  };
  const onPointerEnd = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    if (d.axis !== "x") return;
    const dx = e.clientX - d.x0;
    if (Math.abs(dx) > SWIPE) go(dx < 0 ? 1 : -1);
    else centre(active, 0.4);
  };

  return (
    <section className="relative z-10 overflow-hidden bg-cloud py-28 md:py-36">
      <div className="px-6 md:px-8">
        <SplitReveal as="h2" className="max-w-3xl text-[clamp(1.9rem,3.4vw,3rem)] leading-snug">
          {home.testimonialsIntro}
        </SplitReveal>
      </div>

      <div
        ref={viewport}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        className="relative mt-16 touch-pan-y select-none md:select-auto"
      >
        <div ref={track} className="flex w-max gap-6 will-change-transform">
          {items.map((t, i) => (
            <figure
              key={t.author}
              onClick={() => {
                // A swipe ends with a click on the card under the finger; ignore it.
                if (swiped.current) return void (swiped.current = false);
                setActive(i);
              }}
              className={cn(
                CARD,
                "flex shrink-0 cursor-pointer flex-col justify-between bg-white p-8 transition-opacity duration-500 md:p-10",
                i === active ? "opacity-100" : "opacity-40 hover:opacity-70",
              )}
            >
              <blockquote className="font-heading text-[1.4rem] leading-snug text-navy md:text-[1.7rem]">“{t.quote}”</blockquote>
              <figcaption className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">{t.author}</figcaption>
            </figure>
          ))}
        </div>
        <div aria-hidden className={cn(CARD, "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2")}>
          <CornerDots inset="-0.9rem" className="text-kooo-green-dark" />
        </div>
      </div>

      <div className="mt-14 flex justify-center gap-2">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => go(-1)}
          className="flex size-12 items-center justify-center bg-navy/10 text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ArrowLeft className="size-4" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => go(1)}
          className="flex size-12 items-center justify-center bg-navy/10 text-navy transition-colors hover:bg-navy hover:text-white"
        >
          <ArrowRight className="size-4" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        Testimonial {active + 1} of {items.length}
      </p>
    </section>
  );
}
