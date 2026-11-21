import Link from "next/link";
import { Check } from "lucide-react";
import { SplitReveal } from "@/components/motion/split-reveal";
import { Reveal } from "@/components/motion/reveal";
import { ImageReveal } from "@/components/motion/image-reveal";
import { ArrowBox } from "@/components/ui/arrow-box";
import { Accordion } from "@/components/sections/accordion";
import { cn } from "@/lib/utils";

// Building blocks shared by the product, industry and support pages. They reuse the
// home page's motion: split-text headings, rows that draw in, staggered reveals and
// photos that wipe up into view.

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

/** Small uppercase label beside one large paragraph, as in the About page's "Who we are". */
export function Statement({ label, text }: { label: string; text: string }) {
  return (
    <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
      <div className="grid gap-8 border-t border-navy/20 pt-12 lg:grid-cols-[1fr_2.3fr]">
        <h2 className="font-sans text-sm uppercase tracking-[0.2em]">{label}</h2>
        <SplitReveal className="font-heading text-[clamp(1.5rem,2.7vw,2.6rem)] leading-[1.3] text-navy">{text}</SplitReveal>
      </div>
    </section>
  );
}

/** Tiles that fill navy on hover; used for "who it's for" and industry audiences. */
export function TileList({ title, text, items }: { title: string; text?: string; items: string[] }) {
  return (
    <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
      <SectionIntro title={title} text={text} />
      <Reveal stagger={0.06} className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <div
            key={item}
            className="group relative flex min-h-28 items-end justify-between gap-6 overflow-hidden border border-navy/20 bg-white/40 p-5 transition-colors duration-500 hover:text-white md:p-6"
          >
            <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-navy transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <span className="relative font-heading text-xl leading-snug text-navy transition-colors duration-500 group-hover:text-white md:text-2xl">{item}</span>
            <span className="relative self-start text-sm tabular-nums text-navy/60 transition-colors duration-500 group-hover:text-kooo-mint">
              {String(i + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/** Navy panel with two ticked lists side by side (e.g. considerations and quote information). */
export function ChecklistPanel({ columns }: { columns: { title: string; intro?: string; items: string[] }[] }) {
  return (
    <section className="on-dark relative z-10 bg-navy px-6 py-24 md:px-8 md:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
        {columns.map((col) => (
          <div key={col.title}>
            <SplitReveal as="h2" className="text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.05]">
              {col.title}
            </SplitReveal>
            {col.intro && <p className="mt-4 max-w-lg text-lg leading-relaxed text-white/75">{col.intro}</p>}
            <Reveal stagger={0.07} y={24} className="mt-10 border-t border-white/15">
              {col.items.map((item) => (
                <div key={item} className="flex gap-4 border-b border-white/15 py-4 text-[17px] leading-relaxed text-white/90 md:text-lg">
                  <span aria-hidden className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-kooo-mint text-navy">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Page-specific questions in the outlined accordion. */
export function PageFaqs({ title = "Common questions", text, items }: { title?: string; text?: string; items: { question: string; answer: string }[] }) {
  if (!items.length) return null;
  return (
    <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:sticky lg:top-[18svh] lg:self-start">
          <SplitReveal as="h2" className="text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05]">
            {title}
          </SplitReveal>
          {text && <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">{text}</p>}
          <Link href="/faqs" className="mt-6 inline-block border-b border-navy/40 pb-0.5 font-button text-navy transition-colors hover:border-navy">
            More questions in our FAQs
          </Link>
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
            <ImageReveal src={card.image} sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3]" />
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
