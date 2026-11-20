"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap, useGSAP } from "@/lib/gsap";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { CornerDots } from "@/components/ui/corner-dots";
import { CtaLink } from "@/components/ui/cta-link";
import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";

type CtaBandProps = {
  title: string;
  text: string;
  label?: string;
  /** Where the button goes; defaults to the contact page. */
  href?: string;
  image?: string;
  /** Optional panel (e.g. a short form) shown on a white card beside the text. */
  aside?: React.ReactNode;
};

// Framed navy call to action that grows to full width as it scrolls in.
export function CtaBand({ title, text, label = "Let’s Talk Insurance", href = "/contact", image = "/images/photos/pexels-327540.jpg", aside }: CtaBandProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          "[data-cta-frame]",
          { scale: 0.86 },
          { scale: 1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "top 15%", scrub: 0.8 } },
        );
        gsap.fromTo(
          "[data-cta-img]",
          { yPercent: -10 },
          { yPercent: 10, ease: "none", scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 0.8 } },
        );
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} className="relative z-10 bg-cloud px-2 py-12 sm:px-3 sm:py-20 md:px-4 md:py-28">
      <div data-cta-frame className="on-dark relative min-h-[80svh] overflow-hidden bg-navy will-change-transform">
        <div data-cta-img className="absolute -inset-y-[12%] inset-x-0">
          <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-55" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <CornerDots inset="1.25rem" className="text-kooo-mint" />
        <div
          className={cn(
            "relative min-h-[80svh] gap-16 px-5 py-12 sm:p-8 md:p-14",
            aside ? "grid items-center gap-10 lg:grid-cols-[1fr_minmax(0,32rem)] lg:gap-16" : "flex flex-col justify-between",
          )}
        >
          <div className={cn(aside && "flex h-full flex-col justify-between gap-12")}>
            <div className="max-w-xl">
              <SplitReveal as="h2" className="text-[clamp(2.25rem,4.6vw,4.75rem)] leading-[1.04]">
                {title}
              </SplitReveal>
              <SplitReveal className="mt-5 text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg">{text}</SplitReveal>
              <CtaLink href={href} variant="mint" className="mt-8 sm:mt-10">
                {label}
              </CtaLink>
            </div>
            {aside && <KoooLogo wordmarkOnly className="hidden w-[min(40vw,20rem)] text-kooo-mint/90 lg:block" title="" />}
          </div>
          {aside ? (
            <div className="relative bg-white p-5 text-navy [--heading-color:var(--color-navy)] sm:p-6 md:p-8">
              <CornerDots inset="-0.6rem" className="text-kooo-mint" />
              {aside}
            </div>
          ) : (
            <KoooLogo wordmarkOnly className="w-[min(62vw,26rem)] self-end text-kooo-mint/90" title="" />
          )}
        </div>
      </div>
    </section>
  );
}
