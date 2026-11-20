"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";
import { categories, type Category } from "@/content/site";
import { ArrowBox } from "@/components/ui/arrow-box";
import { RollText } from "@/components/motion/roll-text";
import { cn } from "@/lib/utils";
import { sectionHeadingClass } from "@/components/sections/section-heading";

// Zig-zag placement from 1024px up: each card overlaps the row above by 40% of its height.
// Below that the cards sit in a plain one- or two-column grid.
const placement = [
  "lg:col-start-2 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2 lg:-mt-[40%]",
  "lg:col-start-3 lg:row-start-2 lg:-mt-[40%]",
  "lg:col-start-2 lg:row-start-3 lg:-mt-[40%]",
  "lg:col-start-1 lg:row-start-4 lg:-mt-[40%]",
  "lg:col-start-3 lg:row-start-4 lg:-mt-[40%]",
];
const scatter = [
  { x: 0.04, y: -0.28, rotation: -8 },
  { x: -0.29, y: -0.12, rotation: -16 },
  { x: 0.31, y: -0.13, rotation: 13 },
  { x: -0.22, y: 0.24, rotation: 12 },
  { x: 0.01, y: 0.27, rotation: -11 },
  { x: 0.26, y: 0.23, rotation: 15 },
];

// The showcase runs on any screen tall enough for it (phones in portrait included);
// `compact` tunes card size and orbit for screens under 1024px wide.
const showcaseDesktop = "(min-width: 1024px) and (min-height: 540px)";
const showcaseCompact = "(max-width: 1023.98px) and (min-height: 540px)";
const galleryStart = 0.57;

function animateSolutionsShowcase(stage: HTMLElement, track: HTMLElement, compact = false) {
  const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-card]"));
  const orbitTitle = stage.querySelector<HTMLElement>("[data-orbit-title]");
  const galleryTitle = stage.querySelector<HTMLElement>("[data-gallery-title]");
  if (!orbitTitle || !galleryTitle) return;

  gsap.set(stage, { height: "min(82svh, calc(100svh - 7rem))", overflow: "clip" });
  gsap.set(orbitTitle, { display: "block", opacity: 0 });
  gsap.set(galleryTitle, { position: "absolute", top: 0, left: 0, right: 0, opacity: 0 });
  gsap.set(track, {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "max-content",
    height: "100%",
    x: 0,
  });
  gsap.set(cards, {
    width: compact ? "min(72vw, 48svh, 26rem)" : "min(33vw, 64svh, calc(100svh - 13rem))",
    flexShrink: 0,
    marginTop: 0,
    x: 0,
    y: 0,
    rotation: 0,
    scale: 1,
  });

  if (compact) {
    // Long titles wrap to more lines; give every card the tallest card's height so the gallery row lines up.
    const inners = Array.from(track.querySelectorAll<HTMLElement>("[data-card-inner]"));
    const tallest = Math.max(...inners.map((inner) => inner.offsetHeight));
    gsap.set(inners, { height: tallest });
  }

  const setTrackX = gsap.quickSetter(track, "x", "px");
  const setCards = cards.map((card) => gsap.quickSetter(card, "css"));
  const setOrbitTitleOpacity = gsap.quickSetter(orbitTitle, "opacity");
  const setGalleryTitleOpacity = gsap.quickSetter(galleryTitle, "opacity");
  const ease = gsap.parseEase("sine.inOut");
  const clamp = gsap.utils.clamp(0, 1);
  const wrapRotation = gsap.utils.wrap(-180, 180);
  const mix = gsap.utils.interpolate;
  const scroll = { progress: 0 };
  let width = 0;
  let height = 0;
  let travel = 0;
  let galleryOffset = 0;
  let cardCenters: number[] = [];

  const measure = () => {
    width = stage.clientWidth;
    height = stage.clientHeight;
    travel = Math.max(0, track.offsetWidth - width);
    galleryOffset = galleryTitle.offsetHeight / 2 + 14;
    cardCenters = cards.map((card) => card.offsetLeft + card.offsetWidth / 2);
  };

  function render() {
    const { progress } = scroll;
    const gather = ease(clamp((progress - 0.04) / 0.21));
    const orbit = ease(clamp((progress - 0.25) / 0.16));
    const align = ease(clamp((progress - 0.41) / (galleryStart - 0.41)));
    const gallery = clamp((progress - galleryStart) / (1 - galleryStart));
    setTrackX(-travel * gallery);
    setOrbitTitleOpacity(1 - ease(clamp((progress - 0.38) / 0.09)));
    setGalleryTitleOpacity(ease(clamp((progress - 0.47) / (galleryStart - 0.47))));

    setCards.forEach((setCard, index) => {
      const start = scatter[index % scatter.length];
      const angle = -Math.PI / 2 + (index / cards.length) * 2 * Math.PI + orbit * (2 * Math.PI / 3);
      const orbitX = Math.cos(angle) * (compact ? width * 0.36 : Math.min(width * 0.28, height * 0.55));
      const orbitY = Math.sin(angle) * height * (compact ? 0.27 : 0.3);
      const orbitRotation = wrapRotation((angle * 180) / Math.PI + 90);
      const x = mix(start.x * width, orbitX, gather);
      const y = mix(start.y * height, orbitY, gather);
      const rotation = mix(start.rotation, orbitRotation, gather);

      setCard({
        x: mix(width / 2 - cardCenters[index] + x, 0, align),
        y: mix(y, galleryOffset, align),
        rotation: mix(rotation, 0, align),
        scale: mix(compact ? mix(0.34, 0.28, gather) : mix(0.37, 0.32, gather), 1, align),
      });
    });
  }

  measure();
  render();
  const tween = gsap.to(scroll, {
    progress: 1,
    ease: "none",
    onUpdate: render,
    scrollTrigger: {
      trigger: stage,
      start: "top 104px",
      end: () => {
        measure();
        return `+=${Math.max(window.innerHeight * 1.65, travel / (1 - galleryStart))}`;
      },
      pin: true,
      scrub: 0.5,
      anticipatePin: 1,
      onRefresh: () => {
        measure();
        render();
      },
    },
  });

  // Keep keyboard focus visible when tabbing to a card outside the gallery viewport.
  function revealFocusedCard(event: FocusEvent) {
    const link = event.target;
    if (!(link instanceof HTMLElement) || !link.matches(":focus-visible")) return;

    const card = link.closest<HTMLElement>("[data-card]");
    const trigger = tween.scrollTrigger;
    if (!card || !trigger) return;

    const bounds = card.getBoundingClientRect();
    const viewport = stage.getBoundingClientRect();
    if (scroll.progress >= galleryStart && bounds.left >= viewport.left - 1 && bounds.right <= viewport.right + 1) return;

    const center = cardCenters[cards.indexOf(card)];
    const offset = travel ? clamp((center - width / 2) / travel) : 0;
    const progress = mix(galleryStart, 1, offset);
    const y = mix(trigger.start, trigger.end, progress);
    const lenis = useUi.getState().lenis;
    if (lenis) lenis.scrollTo(y, { immediate: true });
    else trigger.scroll(y);
    ScrollTrigger.update();
    trigger.getTween()?.progress(1);
  }

  stage.addEventListener("focusin", revealFocusedCard);
  return () => {
    stage.removeEventListener("focusin", revealFocusedCard);
    galleryTitle.style.removeProperty("opacity");
  };
}

type CardProps = { category: Category; index: number; open: boolean; onToggle: () => void };

/**
 * Category photo card. With a mouse, hovering sweeps a mint panel up over the
 * photo listing the covers, and the whole card links through. On touch
 * screens there is no hover, so a tap opens the same panel with the
 * category summary and an "Explore" link; tapping again closes it.
 */
function SolutionCard({ category: c, index, open, onToggle }: CardProps) {
  return (
    <article
      data-card-inner
      data-open={open}
      className="group relative isolate flex min-h-[26rem] flex-col overflow-hidden bg-navy p-5 md:p-6 lg:aspect-square lg:min-h-0"
    >
      <div
        aria-hidden
        className="absolute inset-0 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      >
        <Image src={c.image} alt="" fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-navy/55" />
      <div
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-kooo-mint transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-has-[a:focus-visible]:scale-y-100 group-data-[open=true]:scale-y-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <span className="text-sm tabular-nums text-white transition-opacity duration-300 group-hover:opacity-0 group-has-[a:focus-visible]:opacity-0 group-data-[open=true]:opacity-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowBox open={open} />
        </div>

        <div className="-mt-6 space-y-3 pr-12 text-navy">
          <p className="hidden translate-y-2 text-base leading-relaxed opacity-0 transition-[opacity,translate] duration-500 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100 pointer-coarse:block">
            {c.summary}
          </p>
          <ul className="space-y-1.5 text-base md:text-[17px]">
            {c.items.slice(0, 5).map((item, j) => (
              <li
                key={item.title}
                style={{ transitionDelay: `${j * 45}ms` }}
                className={cn(
                  "translate-y-2 opacity-0 transition-[opacity,translate] duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-has-[a:focus-visible]:translate-y-0 group-has-[a:focus-visible]:opacity-100 group-data-[open=true]:translate-y-0 group-data-[open=true]:opacity-100",
                  j >= 3 && "pointer-coarse:hidden",
                )}
              >
                {item.title}
              </li>
            ))}
          </ul>
          <Link
            href={`/${c.slug}`}
            tabIndex={open ? 0 : -1}
            className="pointer-events-none relative z-[3] hidden items-center gap-2 border-b border-navy pb-0.5 font-button text-base font-medium opacity-0 transition-opacity duration-500 group-data-[open=true]:pointer-events-auto group-data-[open=true]:opacity-100 pointer-coarse:inline-flex"
          >
            Explore {c.shortName} insurance <ArrowRight className="size-4" />
          </Link>
        </div>

        <h3 className="mt-auto pt-6 text-[clamp(1.75rem,2.5vw,2.6rem)] leading-tight text-white transition-colors duration-500 group-hover:text-navy group-has-[a:focus-visible]:text-navy group-data-[open=true]:text-navy">
          {c.name}
        </h3>
      </div>

      {/* Mouse/keyboard: the whole card is a link. Touch: the card toggles its panel. */}
      <Link href={`/${c.slug}`} aria-label={c.name} className="absolute inset-0 z-[2] outline-none pointer-coarse:hidden" />
      <button
        type="button"
        aria-expanded={open}
        aria-label={`${open ? "Hide" : "Show"} ${c.name} details`}
        onClick={onToggle}
        className="absolute inset-0 z-[2] hidden pointer-coarse:block"
      />
    </article>
  );
}

export function SolutionsGrid() {
  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [openCard, setOpenCard] = useState<string | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(`${showcaseDesktop} and (prefers-reduced-motion: no-preference)`, () => {
        if (stageRef.current && trackRef.current) {
          return animateSolutionsShowcase(stageRef.current, trackRef.current);
        }
      });
      mm.add(`${showcaseCompact} and (prefers-reduced-motion: no-preference)`, () => {
        if (stageRef.current && trackRef.current) {
          return animateSolutionsShowcase(stageRef.current, trackRef.current, true);
        }
      });
      // Too short for the pinned showcase (e.g. a phone in landscape): cards just fade up.
      mm.add("(height < 540px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>("[data-card-inner]").forEach((card) => {
          gsap.from(card, {
            opacity: 0,
            y: 60,
            duration: 1.1,
            ease: "power4.out",
            scrollTrigger: { trigger: card, start: "top 90%", once: true },
          });
        });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} aria-labelledby="home-solutions-title" className="relative z-10 bg-cloud px-6 py-12 md:px-8 md:py-16">
      <div className="mb-6 flex justify-end">
        <Link
          href="/insurancesolutions"
          className="group border-b border-navy pb-1 font-button text-lg text-navy"
        >
          <RollText text="All solutions" />
        </Link>
      </div>
      {/* Below 1024px the stage bleeds to the screen edges so gallery cards slide off-screen;
          the margin sits on this wrapper because ScrollTrigger moves margins off a pinned element. */}
      <div className="max-md:-mx-6 md:max-lg:-mx-8">
      <div ref={stageRef} className="relative">
        <h2
          aria-hidden="true"
          data-orbit-title
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden w-max -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(1.35rem,3vw,3.5rem)] leading-[1.02]"
        >
          Choose your<br /><span className="text-kooo-green-dark">insurance cover</span>
        </h2>
        <h2
          id="home-solutions-title"
          data-gallery-title
          className={cn("pointer-events-none relative z-10 mb-8", sectionHeadingClass)}
        >
          Insurance <span className="text-kooo-green-dark">categories</span>
        </h2>
        <div ref={trackRef} data-grid className="grid gap-5 max-md:px-6 sm:grid-cols-2 md:max-lg:px-8 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {categories.map((c, i) => (
            <div key={c.slug} data-card className={placement[i]}>
              <SolutionCard
                category={c}
                index={i}
                open={openCard === c.slug}
                onToggle={() => setOpenCard((cur) => (cur === c.slug ? null : c.slug))}
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
