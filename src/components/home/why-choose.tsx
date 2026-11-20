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

/**
 * Photo grid with captions and a closing mint card, matching the
 * "Who we work with" section on the About page.
 */
export function WhyChoose({ title, accent, intro, items, feature }: WhyChooseProps) {
  return (
    <section className="relative z-10 bg-cloud px-6 py-16 md:px-8 md:py-36">
      <SectionHeading lead={title} accent={accent} intro={intro} />

      <Reveal
        stagger={0.08}
        className="-mx-6 mt-10 flex snap-x snap-mandatory scroll-px-6 gap-4 overflow-x-auto px-6 pb-2 [scrollbar-width:none] sm:mx-0 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <figure key={item.title} className={`group ${slide}`}>
            <ImageReveal src={item.image} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 80vw" className="aspect-[4/5]" />
            <figcaption className="mt-4 flex items-start justify-between gap-6">
              <div>
                <h3 className="text-xl leading-snug md:text-2xl">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{item.text}</p>
              </div>
              <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-kooo-green-dark" />
            </figcaption>
          </figure>
        ))}

        <div className={`flex flex-col justify-between gap-10 bg-kooo-mint p-6 sm:col-span-2 sm:min-h-[22rem] md:p-9 ${slide}`}>
          <div className="max-w-xl">
            <h3 className="text-[clamp(1.6rem,2.4vw,2.25rem)] leading-tight">{feature.title}</h3>
            <p className="mt-4 leading-relaxed text-navy/80 md:mt-5">{feature.text}</p>
            <CtaLink href="/contact" className="mt-6 md:mt-8">
              Let&apos;s Talk
            </CtaLink>
          </div>
          <KoooLogo wordmarkOnly className="w-28 self-end text-navy md:w-40" title="" />
        </div>
      </Reveal>

      <p aria-hidden className="mt-5 flex items-center gap-2 font-button text-sm text-navy/60 sm:hidden">
        Swipe to see more <ArrowRight className="size-4" />
      </p>
    </section>
  );
}
