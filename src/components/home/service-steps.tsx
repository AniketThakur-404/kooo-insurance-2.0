"use client";

import Image from "next/image";
import { SectionHeading } from "@/components/sections/section-heading";
import { CtaLink } from "@/components/ui/cta-link";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";

type ServiceStepsProps = {
  title: string;
  /** Green closing words of the heading. */
  accent?: string;
  intro?: string;
  steps: { title: string; text: string; image: string }[];
};

/**
 * "How our service works" as a stack of step cards: each card pins under the
 * header while the next slides up over it, and the cards below shrink a
 * little so the deck stays visible.
 */
export function ServiceSteps({ title, accent, intro, steps }: ServiceStepsProps) {
  return (
    <section className="relative z-10 bg-cloud px-4 pt-16 sm:px-6 md:px-8 md:pt-36">
      <SectionHeading lead={title} accent={accent} intro={intro} className="px-2 sm:px-0" />

      <StackingCards totalCards={steps.length} className="mt-2 pb-[6svh] md:mt-6 md:pb-[10svh]">
        {steps.map((step, i) => {
          const last = i === steps.length - 1;
          return (
            <StackingCardItem key={step.title} index={i} topPosition={`calc(6.5rem + ${i * 1.25}rem)`} className="h-[86svh] md:h-[92svh]">
              <article className="relative isolate mx-auto flex h-[80%] w-full flex-col overflow-hidden bg-navy p-5 text-white shadow-[0_-12px_40px_-20px_rgba(6,20,46,0.45)] sm:p-6 md:h-[72%] md:w-11/12 md:p-10 lg:p-12">
                {/* Full-bleed photo with the same navy wash as the solution cards. */}
                <Image src={step.image} alt="" fill sizes="(min-width: 768px) 92vw, 100vw" className="-z-10 object-cover" />
                <div aria-hidden className="absolute inset-0 -z-10 bg-linear-to-t from-navy/95 via-navy/35 to-navy/75" />

                <div className="flex flex-col-reverse items-start gap-4 sm:flex-row sm:justify-between sm:gap-6">
                  <h3 className="max-w-3xl text-[clamp(1.85rem,4vw,4.25rem)] leading-[1.05] text-white">{step.title}</h3>
                  <span className="shrink-0 rounded-full bg-white/10 px-3 py-1 text-sm tabular-nums text-white ring-1 ring-white/20 backdrop-blur-sm">
                    {String(i + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-auto flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-6">
                  <p className="max-w-xl text-base leading-relaxed text-white/90 sm:text-lg md:text-xl">{step.text}</p>
                  <CtaLink href="/contact" variant={last ? "mint" : "light"} className="w-fit shrink-0">
                    {last ? "Start an enquiry" : "Talk to Kooo"}
                  </CtaLink>
                </div>
              </article>
            </StackingCardItem>
          );
        })}
      </StackingCards>
    </section>
  );
}
