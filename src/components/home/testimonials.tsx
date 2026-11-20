"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import Image from "next/image";
import { UserRound } from "lucide-react";
import { home } from "@/content/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/sections/section-heading";

type Review = { id: string; author: string; quote: string; photo?: string };

const savedReviewsKey = "kooo-custom-reviews";
const reviewPortraits = [
  "/images/reviews/small-business-avatar.webp",
  "/images/reviews/professional-avatar.webp",
  "/images/reviews/commercial-avatar.webp",
];
const seedReviews = home.testimonials.map((review, index) => ({
  ...review,
  id: `client-${index}`,
  photo: reviewPortraits[index],
}));
const markerOffsets = ["translate-y-10 md:translate-y-24", "translate-y-4 md:translate-y-16", "translate-y-9 md:translate-y-24"];
const accentPortraits = [
  { review: seedReviews[1], position: "left-[9%] top-3 size-7" },
  { review: seedReviews[2], position: "left-[24%] top-24 size-9 md:top-48 md:size-12" },
  { review: seedReviews[0], position: "right-[24%] top-28 size-8 md:top-48 md:size-11" },
  { review: seedReviews[1], position: "right-[9%] top-[1.25rem] size-8" },
];

function subscribeToReviews(update: () => void) {
  window.addEventListener("storage", update);
  window.addEventListener(savedReviewsKey, update);
  return () => {
    window.removeEventListener("storage", update);
    window.removeEventListener(savedReviewsKey, update);
  };
}

function savedReviewsSnapshot() {
  try {
    return window.localStorage.getItem(savedReviewsKey);
  } catch {
    return null;
  }
}

function readReviews(snapshot: string | null): Review[] {
  if (!snapshot) return [];
  try {
    const parsed: unknown = JSON.parse(snapshot);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((review): review is Review =>
      review && typeof review.id === "string" && typeof review.author === "string" &&
      typeof review.quote === "string" &&
      (review.photo === undefined || (typeof review.photo === "string" && /^data:image\/(jpeg|png|webp);base64,/.test(review.photo))),
    );
  } catch {
    return [];
  }
}

function ReviewAvatar({ review }: { review: Review }) {
  return (
    <span aria-hidden="true" className="grid size-full place-items-center overflow-hidden rounded-full bg-navy/5 text-navy">
      {review.photo ? (
        <Image src={review.photo} alt="" width={64} height={64} unoptimized className="size-full object-cover" />
      ) : (
        <UserRound strokeWidth={1.5} className="size-[48%]" />
      )}
    </span>
  );
}

function ReviewWaves() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = getComputedStyle(canvas).color;
    context.globalAlpha = 0.24;
    context.lineWidth = 1;
    for (let line = 0; line < 9; line++) {
      context.beginPath();
      for (let x = 0; x <= canvas.width; x += 5) {
        const y = 31 + line * 16 + 21 * Math.sin((x - 610) / 235 + line * 0.025) + 6 * Math.sin(x / 520);
        if (x === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.stroke();
    }
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-44 overflow-hidden sm:h-48 md:h-full">
      <canvas
        ref={ref}
        width={1400}
        height={208}
        className="testimonials-waves absolute -left-[5%] h-full w-[110%] text-kooo-green-dark motion-safe:animate-[testimonial-wave-drift_7s_ease-in-out_infinite_alternate]"
      />
    </div>
  );
}

function TypedQuote({ text }: { text: string }) {
  const [visibleText, setVisibleText] = useState("");
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const characters = Array.from(text);
    let frame: number;
    let start: number | undefined;

    function type(now: number) {
      start ??= now;
      const length = Math.min(characters.length, Math.floor((now - start) / 19) + 1);
      setVisibleText(characters.slice(0, length).join(""));
      if (length < characters.length) frame = requestAnimationFrame(type);
    }

    frame = requestAnimationFrame(type);
    return () => cancelAnimationFrame(frame);
  }, [text]);

  return (
    <blockquote className="font-heading text-base leading-snug text-navy [overflow-wrap:anywhere]">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="relative block motion-reduce:hidden">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {visibleText}
          {visibleText !== text && <span className="ml-px inline-block h-[0.85em] w-px bg-kooo-green-dark" />}
        </span>
      </span>
      <span aria-hidden="true" className="hidden motion-reduce:inline">{text}</span>
    </blockquote>
  );
}

export function Testimonials({ title, accent }: { title?: string; accent?: string }) {
  const headingId = useId();
  const snapshot = useSyncExternalStore(subscribeToReviews, savedReviewsSnapshot, () => null);
  const items = [...seedReviews, ...readReviews(snapshot)];
  const [active, setActive] = useState<{ id: string; left: number; top: number } | null>(null);
  const markers = useRef<HTMLDivElement>(null);
  const activeReview = items.find((review) => review.id === active?.id);
  const quoteId = `${headingId}-quote`;

  function openQuote(id: string, button: HTMLButtonElement) {
    const box = markers.current?.getBoundingClientRect();
    if (!box) return;
    const marker = button.getBoundingClientRect();
    setActive({ id, left: (marker.left + marker.width / 2 - box.left) / box.width * 100, top: marker.bottom - box.top + 8 });
  }

  return (
    <section aria-labelledby={headingId} className="relative z-10 bg-cloud px-5 py-16 md:py-24">
      <SectionHeading
        id={headingId}
        lead={title ?? "What our clients"}
        accent={title ? accent : (accent ?? "say about us")}
        intro="Clear advice and responsive support, in our clients’ own words."
        className="px-6"
      />

      <div className="relative isolate z-10 mx-auto mt-5 max-w-[90rem] pb-32 sm:pb-24 md:mt-7 md:min-h-72 md:w-[88%]">
        <ReviewWaves />
        {items.length === seedReviews.length && accentPortraits.map(({ review, position }) => (
          <span
            key={position}
            aria-hidden="true"
            className={cn("testimonial-portrait pointer-events-none absolute hidden rounded-full border border-white/90 opacity-75 shadow-sm sm:block", position)}
          >
            <ReviewAvatar review={review} />
          </span>
        ))}
        <div
          ref={markers}
          className="relative flex min-h-28 flex-wrap items-start justify-around gap-x-5 gap-y-12 py-5"
          onPointerLeave={(event) => {
            if (event.pointerType === "mouse" && !event.currentTarget.querySelector(":focus-visible")) setActive(null);
          }}
          onBlur={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) setActive(null);
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") setActive(null);
          }}
        >
          {items.map((review, index) => (
            <button
              key={review.id}
              type="button"
              aria-label={`Read testimonial from ${review.author}`}
              aria-expanded={active?.id === review.id}
              aria-controls={active?.id === review.id ? quoteId : undefined}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") openQuote(review.id, event.currentTarget);
              }}
              onFocus={(event) => {
                if (event.currentTarget.matches(":focus-visible")) openQuote(review.id, event.currentTarget);
              }}
              onClick={(event) => {
                if (active?.id === review.id) setActive(null);
                else openQuote(review.id, event.currentTarget);
              }}
              className={cn(
                "testimonial-portrait relative z-10 grid size-11 cursor-pointer place-items-center rounded-full border border-white bg-white p-0.5 shadow-md shadow-navy/15 outline-offset-4 focus-visible:outline-2 focus-visible:outline-kooo-green-dark motion-safe:transition-[scale,box-shadow] sm:size-12 md:size-14",
                markerOffsets[index % markerOffsets.length],
                active?.id === review.id && "scale-110 border-kooo-green-dark shadow-[0_0_0_5px_var(--color-kooo-mint)]",
              )}
            >
              <ReviewAvatar review={review} />
            </button>
          ))}

          {active && activeReview && (
            <div
              key={active.id}
              id={quoteId}
              style={{ "--review-left": `${active.left}%`, "--review-top": `${active.top}px` } as CSSProperties}
              className="absolute left-1/2 top-full z-20 w-full max-w-xs -translate-x-1/2 pt-2 sm:left-[clamp(7rem,var(--review-left),100%_-_7rem)] sm:top-[var(--review-top)] sm:w-56"
            >
              <span aria-hidden="true" className="absolute left-1/2 top-0 hidden h-2 w-px bg-kooo-green-dark/40 sm:block" />
              <figure className="border border-navy/10 bg-white p-4 shadow-lg shadow-navy/10 motion-safe:transition-[opacity,translate] motion-safe:duration-200 motion-safe:starting:translate-y-2 motion-safe:starting:opacity-0">
                <TypedQuote text={`“${activeReview.quote}”`} />
                <figcaption className="mt-3 text-right text-sm font-semibold text-navy [overflow-wrap:anywhere]">{activeReview.author}</figcaption>
              </figure>
            </div>
          )}
        </div>
      </div>

      <div className="testimonials-marquee relative z-0 mx-auto w-full max-w-[72rem] md:w-[72%]">
        <div className="testimonials-track" style={{ animationDuration: `${items.length * 8}s` }}>
          {[false, true].map((copy) => (
            <div key={String(copy)} aria-hidden={copy || undefined} className="testimonials-row">
              {items.map((review) => (
                <figure
                  key={review.id}
                  className={cn(
                    "testimonials-card flex flex-col justify-between gap-5 border border-navy/10 bg-white/90 p-5 sm:p-6",
                    review.id === active?.id && "border-kooo-green-dark/60",
                  )}
                >
                  <blockquote className="font-heading text-lg leading-snug text-navy [overflow-wrap:anywhere] lg:text-xl">“{review.quote}”</blockquote>
                  <figcaption className="flex items-center gap-3 text-sm font-semibold text-navy [overflow-wrap:anywhere]">
                    <span className="size-9 shrink-0 rounded-full shadow-sm shadow-navy/15"><ReviewAvatar review={review} /></span>
                    {review.author}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-3">
        <div aria-hidden="true" className="flex -space-x-2">
          {items.slice(0, 4).map((review) => (
            <span key={review.id} className="size-9 rounded-full border-2 border-cloud">
              <ReviewAvatar review={review} />
            </span>
          ))}
        </div>
        <div className="text-sm text-navy">
          <span aria-hidden="true" className="block tracking-widest text-kooo-green-dark">★★★★★</span>
          {items.length} client reviews
        </div>
      </div>
    </section>
  );
}
