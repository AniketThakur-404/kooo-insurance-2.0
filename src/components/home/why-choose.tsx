import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { CtaLink } from "@/components/ui/cta-link";

type WhyChooseProps = {
  title: string;
  /** Green closing words of the heading. */
  accent?: string;
  intro?: string;
  items: { title: string; text: string; image: string }[];
  /** Mint call-to-action card that closes the grid. */
  feature: { title: string; text: string };
};

// Phones: a swipeable row with the next card peeking in. From 640px: the grid.
const slide = "w-[80%] shrink-0 snap-start sm:w-auto";
const photoSizes = "(min-width: 1504px) 464px, (min-width: 1024px) calc((100vw - 7rem) / 3), (min-width: 768px) calc((100vw - 5.5rem) / 2), (min-width: 640px) calc((100vw - 4.5rem) / 2), 80vw";

/**
 * Photo grid with captions and a closing mint card, matching the
 * "Who we work with" section on the About page.
 */
export function WhyChoose({ title, accent, intro, items, feature }: WhyChooseProps) {
  return (
    <section aria-labelledby="why-choose-heading" className="relative z-10 bg-cloud px-6 py-16 md:px-8 md:py-28">
      <SectionHeading id="why-choose-heading" lead={title} accent={accent} intro={intro} />

      <Reveal
        stagger={0.08}
        className="-mx-6 mt-8 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-auto sm:mt-12 sm:grid sm:max-w-[90rem] sm:grid-cols-2 sm:gap-x-6 sm:gap-y-9 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <figure key={item.title} className={`group ${slide}`}>
            <ImageReveal src={item.image} sizes={photoSizes} className="aspect-[4/3]" />
            <figcaption className="mt-4 flex items-start justify-between gap-4 md:mt-5">
              <div>
                <h3 className="text-[clamp(1.375rem,2vw,1.875rem)] leading-tight">{item.title}</h3>
                <p className="mt-2 max-w-[36ch] text-base leading-relaxed text-muted-foreground lg:text-lg">{item.text}</p>
              </div>
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-kooo-green-dark" />
            </figcaption>
          </figure>
        ))}

        <div className={`flex flex-col gap-5 bg-kooo-mint p-6 sm:col-span-2 sm:p-8 lg:p-10 xl:p-12 ${slide}`}>
          <div className="flex flex-1 flex-col items-start justify-center">
            <h3 className="max-w-[25ch] text-[clamp(1.625rem,3vw,3rem)] leading-tight text-balance">{feature.title}</h3>
            <p className="mt-3 max-w-[46ch] leading-relaxed text-navy/80 md:text-lg">{feature.text}</p>
            <CtaLink href="/contact" className="mt-5 md:mt-6">
              Let&apos;s Talk
            </CtaLink>
          </div>
          <KoooLogo wordmarkOnly className="w-24 self-end text-navy sm:w-32" title="" />
        </div>
      </Reveal>

      <p aria-hidden className="mt-5 flex items-center gap-2 font-button text-sm text-navy/60 sm:hidden">
        Swipe to see more <ArrowRight className="size-4" />
      </p>
    </section>
  );
}
