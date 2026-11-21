"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { ArrowBox } from "@/components/ui/arrow-box";
import { cn } from "@/lib/utils";

type Row = { title: string; description: string; href?: string; image?: string };

// Service-style list: title on the left, description on the right, hairline between rows.
// Linked rows fill with mint on hover. Rows with photos show a preview that follows the
// cursor on desktop, and a thumbnail on smaller screens.
export function ListRows({ items }: { items: Row[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const preview = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const hasImages = items.some((i) => i.image);

  useGSAP(
    () => {
      if (preview.current) gsap.set(preview.current, { xPercent: -50, yPercent: -50, scale: 0.6 });
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-row]").forEach((row) => {
          const st = { trigger: row, start: "top 90%", once: true };
          gsap.from(row.querySelector("[data-line]"), { scaleX: 0, duration: 1.2, ease: "power3.inOut", scrollTrigger: st });
          gsap.from(row.querySelectorAll("[data-cell]"), { y: 30, opacity: 0, duration: 1, stagger: 0.08, ease: EASE_OUT, scrollTrigger: st });
        });
      });
    },
    { scope: ref },
  );

  // The preview eases towards the cursor rather than snapping to it.
  const move = (e: React.PointerEvent) => {
    if (!hasImages || e.pointerType !== "mouse" || !preview.current || !ref.current) return;
    const box = ref.current.getBoundingClientRect();
    gsap.to(preview.current, { x: e.clientX - box.left, y: e.clientY - box.top, duration: 0.6, ease: "power3.out", overwrite: "auto" });
  };
  const show = (i: number | null) => {
    setActive(i);
    if (!preview.current) return;
    gsap.to(preview.current, { scale: i === null ? 0.6 : 1, opacity: i === null ? 0 : 1, duration: 0.5, ease: "power3.out" });
  };

  return (
    <div ref={ref} className="relative" onPointerMove={move} onPointerLeave={() => show(null)}>
      <ul className="border-b border-navy/20">
        {items.map((item, i) => {
          const body = (
            <>
              <span data-line aria-hidden className="absolute inset-x-0 top-0 h-px origin-left bg-navy/25" />
              {item.href && (
                <span
                  aria-hidden
                  className="absolute inset-0 origin-bottom scale-y-0 bg-kooo-mint transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100"
                />
              )}
              <div data-cell className="relative flex items-center gap-4 md:items-baseline">
                <span className="w-7 shrink-0 text-sm tabular-nums text-navy/80">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[1.6rem] leading-tight transition-transform duration-500 group-hover:translate-x-2 md:text-[2rem]">{item.title}</h3>
                {item.image && (
                  <span className="relative ml-auto size-16 shrink-0 overflow-hidden md:hidden">
                    <Image src={item.image} alt="" fill sizes="64px" className="object-cover" />
                  </span>
                )}
              </div>
              <div data-cell className="relative flex items-start justify-between gap-6 pl-10 md:pl-0">
                <p className="max-w-2xl text-[17px] leading-relaxed text-ink/85 md:text-lg">{item.description}</p>
                {item.href && <ArrowBox className="hidden md:inline-flex" />}
              </div>
            </>
          );
          const rowClass = "group relative grid gap-3 px-1 py-8 outline-none md:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] md:gap-10 md:px-3 md:py-10";
          return (
            <li key={item.title} data-row onPointerEnter={(e) => e.pointerType === "mouse" && hasImages && show(item.image ? i : null)}>
              {item.href ? (
                <Link href={item.href} className={rowClass}>
                  {body}
                </Link>
              ) : (
                <div className={rowClass}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>

      {hasImages && (
        <div
          ref={preview}
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 z-20 hidden h-60 w-80 overflow-hidden opacity-0 shadow-2xl md:block"
        >
          {items.map((item, i) =>
            item.image ? (
              <Image
                key={item.title}
                src={item.image}
                alt=""
                fill
                sizes="320px"
                className={cn("object-cover transition-[opacity,scale] duration-500", active === i ? "scale-100 opacity-100" : "scale-110 opacity-0")}
              />
            ) : null,
          )}
        </div>
      )}
    </div>
  );
}
