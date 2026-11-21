import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { SplitReveal } from "@/components/motion/split-reveal";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";
import { ParallaxImage } from "@/components/motion/parallax-image";
import { ArrowBox } from "@/components/ui/arrow-box";
import { CornerDots } from "@/components/ui/corner-dots";
import { Accordion } from "@/components/sections/accordion";
import { cn } from "@/lib/utils";

// Building blocks shared by the product, industry and support pages. They reuse the
// home page's motion: split-text headings, rows that draw in, staggered reveals,
// photos that wipe up into view and drift as you scroll.

/** Two-column heading row: large split-reveal title on the left, supporting text on the right. */
export function SectionIntro({ title, text, className }: { title: string; text?: string; className?: string }) {
  return (
    <div className={cn("grid gap-6 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-8", className)}>
      <SplitReveal as="h2" className="text-[clamp(2.25rem,4.6vw,4.5rem)] leading-[1.04]">
        {title}
      </SplitReveal>
      {text && <SplitReveal className="text-lg leading-relaxed text-muted-foreground">{text}</SplitReveal>}
    </div>
  );
}

/** Small uppercase label beside one large paragraph, with an optional parallax photo. */
export function Statement({ label, text, image }: { label: string; text: string; image?: string }) {
  return (
    <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
      <div className={cn("grid gap-10 border-t border-navy/20 pt-12", image ? "lg:grid-cols-[1.5fr_1fr] lg:gap-16" : "lg:grid-cols-[1fr_2.3fr]")}>
        {image ? (
          <>
            <div>
              <h2 className="mb-8 font-sans text-sm uppercase tracking-[0.2em]">{label}</h2>
              <SplitReveal className="font-heading text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.3] text-navy">{text}</SplitReveal>
            </div>
            <ParallaxImage src={image} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[4/5] max-lg:aspect-[4/3]">
              <CornerDots inset="1rem" className="text-kooo-mint" />
            </ParallaxImage>
          </>
        ) : (
          <>
            <h2 className="font-sans text-sm uppercase tracking-[0.2em]">{label}</h2>
            <SplitReveal className="font-heading text-[clamp(1.5rem,2.7vw,2.6rem)] leading-[1.3] text-navy">{text}</SplitReveal>
          </>
        )}
      </div>
    </section>
  );
}

/** Tiles that fill navy on hover; with an image, a pinned parallax photo sits beside them. */
export function TileList({ title, text, items, image }: { title: string; text?: string; items: string[]; image?: string }) {
  const tiles = (
    <Reveal stagger={0.06} className={cn("grid gap-3 sm:grid-cols-2", !image && "lg:grid-cols-3")}>
      {items.map((item, i) => (
        <div
          key={item}
          className="group relative flex min-h-28 items-end justify-between gap-6 overflow-hidden border border-navy/20 bg-white/40 p-5 transition-colors duration-500 hover:text-white md:min-h-36 md:p-6"
        >
          <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
          <span className="relative font-heading text-xl leading-snug text-navy transition-colors duration-500 group-hover:text-white md:text-2xl">{item}</span>
          <span className="relative self-start text-sm tabular-nums text-navy/60 transition-colors duration-500 group-hover:text-kooo-mint">
            {String(i + 1).padStart(2, "0")}
          </span>
        </div>
      ))}
    </Reveal>
  );

  return (
    <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
      <SectionIntro title={title} text={text} className="mb-12" />
      {image ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_1.5fr] lg:gap-10">
          <div className="lg:sticky lg:top-[14svh] lg:self-start">
            <ParallaxImage src={image} sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[16/10] lg:aspect-[4/5]">
              <CornerDots inset="1rem" className="text-kooo-mint" />
            </ParallaxImage>
          </div>
          {tiles}
        </div>
      ) : (
        tiles
      )}
    </section>
  );
}

/** Navy panel with two ticked lists side by side; an optional photo drifts behind it. */
export function ChecklistPanel({ columns, image }: { columns: { title: string; intro?: string; items: string[] }[]; image?: string }) {
  return (
    <section className="on-dark relative z-10 overflow-hidden bg-navy px-6 py-24 md:px-8 md:py-32">
      {image && (
        <div aria-hidden className="absolute inset-0 opacity-25 mix-blend-luminosity">
          <ParallaxImage src={image} sizes="100vw" strength={14} className="size-full" />
        </div>
      )}
      {image && <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy via-navy/85 to-navy" />}
      <CornerDots inset="1.25rem" className="text-kooo-mint" />
      <div className="relative grid gap-16 lg:grid-cols-2 lg:gap-20">
        {columns.map((col) => (
          <div key={col.title}>
            <SplitReveal as="h2" className="text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.05]">
              {col.title}
            </SplitReveal>
            {col.intro && <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">{col.intro}</p>}
            <Reveal stagger={0.07} y={24} className="mt-10 border-t border-white/15">
              {col.items.map((item) => (
                <div key={item} className="group flex gap-4 border-b border-white/15 py-4 text-[17px] leading-relaxed text-white/90 transition-colors hover:text-white md:text-lg">
                  <span aria-hidden className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-kooo-mint text-navy transition-transform duration-500 group-hover:scale-125">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span className="transition-transform duration-500 group-hover:translate-x-1">{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Page-specific questions in the outlined accordion, beside a pinned heading and photo. */
export function PageFaqs({
  title = "Common questions",
  text,
  items,
  image,
}: {
  title?: string;
  text?: string;
  items: { question: string; answer: string }[];
  image?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:sticky lg:top-[14svh] lg:self-start">
          <SplitReveal as="h2" className="text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05]">
            {title}
          </SplitReveal>
          {text && <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">{text}</p>}
          <Link href="/faqs" className="mt-6 inline-block border-b border-navy/40 pb-0.5 font-button text-navy transition-colors hover:border-navy">
            More questions in our FAQs
          </Link>
          {image && <ParallaxImage src={image} sizes="(min-width: 1024px) 36vw, 100vw" className="mt-10 hidden aspect-[4/3] lg:block" />}
        </div>
        <Accordion items={items.map((f) => ({ title: f.question, content: f.answer }))} defaultOpen={0} />
      </div>
    </section>
  );
}

export type RelatedCard = { title: string; text: string; href: string; image: string; tag?: string };

/** Photo cards linking to related products or industries. */
export function RelatedCards({ title, text, cards }: { title: string; text?: string; cards: RelatedCard[] }) {
  if (!cards.length) return null;
  return (
    <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
      <SectionIntro title={title} text={text} />
      <Reveal stagger={0.08} className="mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Link key={card.href} href={card.href} className="group block">
            <div className="relative">
              <ImageReveal src={card.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
              <span aria-hidden className="absolute inset-0 bg-navy/0 transition-colors duration-500 group-hover:bg-navy/25" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4">
              <div>
                {card.tag && <p className="mb-1 text-sm uppercase tracking-[0.16em] text-kooo-green-dark">{card.tag}</p>}
                <h3 className="text-xl leading-snug md:text-2xl">{card.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
              <ArrowBox className="mt-1 shrink-0" />
            </div>
          </Link>
        ))}
      </Reveal>
    </section>
  );
}

/**
 * Large photo cards with the title over the image; the photo zooms and a navy wash
 * deepens on hover. Used for hub pages (industries, insurance categories).
 */
export function PhotoCardGrid({ cards }: { cards: RelatedCard[] }) {
  return (
    <Reveal stagger={0.06} className="grid grid-flow-dense gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
      {cards.map((card, i) => (
        <Link
          key={card.href}
          href={card.href}
          className={cn("group relative isolate block overflow-hidden bg-navy", i % 5 === 0 ? "aspect-[4/5] sm:row-span-2 sm:aspect-auto" : "aspect-[4/3]")}
        >
          <Image
            src={card.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="-z-10 object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-navy via-navy/40 to-navy/5 transition-opacity duration-700 group-hover:opacity-90" />
          <div className="flex h-full flex-col justify-between p-5 text-white md:p-7">
            <span className="self-start rounded-full bg-white/15 px-3 py-1 text-sm tabular-nums ring-1 ring-white/25 backdrop-blur-sm">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-2xl leading-tight text-white md:text-3xl">{card.title}</h3>
              <p className="mt-2 max-h-0 overflow-hidden text-[15px] leading-relaxed text-white/85 opacity-0 transition-all duration-700 group-hover:max-h-40 group-hover:opacity-100 max-md:max-h-40 max-md:opacity-100">
                {card.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 font-button text-kooo-mint">
                Explore <span aria-hidden className="transition-transform duration-500 group-hover:translate-x-1.5">→</span>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </Reveal>
  );
}
