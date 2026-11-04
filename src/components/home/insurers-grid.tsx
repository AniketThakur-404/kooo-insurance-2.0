import Image from "next/image";
import { home, insurers } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SplitReveal } from "@/components/motion/split-reveal";

// Insurer panel as a hairline grid; logos sit in greyscale until hovered.
export function InsurersGrid() {
  return (
    <section className="relative z-10 bg-cloud pb-28 md:pb-36">
      <div className="px-6 md:px-8">
        <div className="grid gap-8 border-t border-navy/20 pt-16 md:grid-cols-[1fr_1.1fr] md:items-end">
          <SplitReveal as="h2" className="max-w-[14ch] text-[clamp(2.25rem,4.4vw,4.5rem)] leading-[1.05]">
            {home.insurersTitle}
          </SplitReveal>
          <SplitReveal className="text-lg leading-relaxed text-muted-foreground">{home.insurersText}</SplitReveal>
        </div>

        <Reveal stagger={0.04} y={24} className="mt-16 grid grid-cols-2 border-l border-t border-navy/15 sm:grid-cols-3 lg:grid-cols-5">
          {insurers.map((insurer) => (
            <div
              key={insurer.name}
              className="group flex aspect-[3/2] items-center justify-center border-b border-r border-navy/15 p-6 transition-colors duration-500 hover:bg-white md:p-10"
            >
              <Image
                src={insurer.logo}
                alt={`${insurer.name} logo`}
                width={180}
                height={90}
                className="max-h-14 w-auto object-contain opacity-70 mix-blend-multiply grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
