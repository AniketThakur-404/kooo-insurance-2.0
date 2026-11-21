"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/sections/section-heading";

const industries = [
  { title: "Trades and construction", text: "Builders, electricians and contractors working on site.", image: "/images/photos/pexels-4981810.jpg" },
  { title: "Transport and logistics", text: "Owner-drivers, freight operators and commercial fleets.", image: "/images/photos/pexels-2199293.jpg" },
  { title: "Health and community care", text: "Healthcare practices, NDIS providers and aged care services.", image: "/images/photos/industry-healthcare.webp" },
  { title: "Hospitality", text: "Restaurants, cafés, hotels and licensed venues.", image: "/images/photos/pexels-2290753.jpg" },
  { title: "Retail", text: "Independent shops, chemists, market stalls and kiosks.", image: "/images/photos/industry-retail.webp" },
];

export function Industries() {
  const [active, setActive] = useState(0);

  return (
    <section aria-labelledby="industries-title" className="relative z-10 bg-cloud px-6 py-16 md:px-8 md:py-24">
      <SectionHeading id="industries-title" lead="Industries" accent="we support" />
      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 md:mt-14 md:h-[clamp(24rem,38vw,32rem)] md:flex-row md:gap-4">
        {industries.map((industry, index) => {
          const open = index === active;
          return (
            <article key={industry.title}
              onPointerEnter={(event) => { if (event.pointerType === "mouse") setActive(index); }}
              className={cn(
                "relative isolate min-w-0 overflow-hidden bg-navy md:h-full md:basis-0 motion-safe:transition-[height,flex-grow] motion-safe:duration-500",
                open ? "h-72 md:grow-[4]" : "h-20 md:grow",
              )}
            >
              <Image src={industry.image} alt="" fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/35 to-navy/10" />
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`industry-details-${index}`}
                  onClick={() => setActive(index)}
                  className="absolute inset-0 z-10 cursor-pointer text-left font-heading text-white focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-kooo-mint"
                >
                  <span className={cn(
                    "absolute font-heading leading-tight",
                    open ? "sr-only" : "bottom-6 left-5 text-xl md:bottom-8 md:left-1/2 md:-translate-x-1/2 md:rotate-180 md:text-2xl md:whitespace-nowrap md:[writing-mode:vertical-rl]",
                  )}>{industry.title}</span>
                </button>
              </h3>
              <div id={`industry-details-${index}`} hidden={!open} className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-6 text-white md:p-8">
                <span aria-hidden="true" className="font-heading text-3xl md:text-4xl">{industry.title}</span>
                <p className="mt-2 max-w-md text-base text-white/90">{industry.text}</p>
                <p className="mt-4 font-button text-sm text-kooo-mint">Industry pages coming soon</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
