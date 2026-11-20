import Image from "next/image";
import { home, insurers } from "@/content/site";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";

const midpoint = Math.ceil(insurers.length / 2);
const insurerRows = [insurers.slice(0, midpoint), insurers.slice(midpoint)];

export function InsurersGrid() {
  return (
    <section className="relative z-10 bg-cloud pb-28 md:pb-36">
      <div className="px-6 md:px-8">
        <SectionHeading
          lead={home.insurersTitle.lead}
          accent={home.insurersTitle.accent}
          intro={home.insurersText}
          className="border-t border-navy/20 pt-16"
        />
      </div>

      <Reveal y={24} className="insurers-marquee mt-16 border-t border-navy/15">
        {insurerRows.map((row, index) => (
          <div key={index} className="insurers-marquee-track" data-reverse={index === 1}>
            {[false, true].map((isCopy) => (
              <ul
                key={isCopy ? "copy" : "original"}
                aria-hidden={isCopy || undefined}
                className="insurers-marquee-row grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              >
                {row.map((insurer) => (
                  <li
                    key={insurer.name}
                    className="group relative min-w-0 aspect-[3/2] border-b border-r border-navy/15 transition-colors duration-500 hover:bg-white/70"
                  >
                    <div className="absolute inset-x-[12%] inset-y-[19%]">
                      <Image
                        src={insurer.logo}
                        alt={isCopy ? "" : `${insurer.name} logo`}
                        fill
                        sizes="(min-width: 1024px) 16vw, (min-width: 640px) 26vw, 38vw"
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        ))}
      </Reveal>
    </section>
  );
}
