"use client";

import Link from "next/link";
import { useId, useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/sections/section-heading";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
  category: string;
  links?: { label: string; href: string }[];
};

type FaqProps = {
  lead: string;
  accent?: string;
  intro?: string;
  items: FaqItem[];
  /** Shown when a search finds nothing. */
  fallback?: { label: string; href: string };
};

const isRoute = (href: string) => href.startsWith("/") && !/\.[a-z0-9]+$/i.test(href);

/** Answer text that sharpens in word by word, from blurred to clear, as the panel opens. */
function BlurWords({ text, open }: { text: string; open: boolean }) {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      <span
        className={cn(
          "inline-block transition-[opacity,filter,translate] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
          open ? "translate-y-0 opacity-100 blur-0" : "translate-y-1 opacity-0 blur-[6px]",
        )}
        style={{ transitionDelay: open ? `${150 + i * 22}ms` : "0ms" }}
      >
        {word}
      </span>{" "}
    </span>
  ));
}

/**
 * Searchable FAQ with category filters. Contact options and documents live
 * inside it as questions with link chips, so the home page needs one section
 * instead of two.
 */
export function Faq({ lead, accent, intro, items, fallback }: FaqProps) {
  const id = useId();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  // Only one answer is open at a time.
  const [open, setOpen] = useState<string | null>(items[0]?.question ?? null);

  const categories = useMemo(() => {
    const counts = new Map<string, number>();
    items.forEach((item) => counts.set(item.category, (counts.get(item.category) ?? 0) + 1));
    return [...counts];
  }, [items]);

  const q = query.trim().toLowerCase();
  const visible = items.filter(
    (item) =>
      (!category || item.category === category) &&
      (!q || [item.question, item.answer, ...(item.links ?? []).map((l) => l.label)].join(" ").toLowerCase().includes(q)),
  );

  const toggle = (question: string) => setOpen((cur) => (cur === question ? null : question));

  const chip = (active: boolean) =>
    cn(
      "inline-flex h-10 items-center rounded-full border px-4 font-button text-sm transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy",
      active ? "border-navy bg-navy text-white" : "border-navy/15 bg-white/70 text-navy hover:border-navy/40 hover:bg-white",
    );

  return (
    <section className="relative z-10 bg-cloud px-6 py-16 md:px-8 md:py-28">
      <SectionHeading lead={lead} accent={accent} intro={intro} />

      <Reveal stagger={0.1} y={32} className="mx-auto mt-8 max-w-4xl md:mt-14">
        {/* Search */}
        <label className="relative block">
          <span className="sr-only">Search questions</span>
          <Search aria-hidden className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-navy/50" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search e.g. claims, documents…"
            className="h-13 w-full sm:h-14 rounded-xl border border-navy/15 bg-white/70 pl-12 pr-12 text-base text-navy outline-none transition placeholder:text-navy/45 focus:border-navy focus:bg-white focus:ring-3 focus:ring-navy/10 [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-navy/60 hover:bg-navy/5 hover:text-navy"
            >
              <X className="size-4" />
            </button>
          )}
        </label>

        {/* Filters */}
        <div className="mt-4 sm:mt-5">
          {/* Phones: one swipeable row of chips. Larger screens: wrap. */}
          <div
            role="group"
            aria-label="Filter questions by topic"
            className="-mx-6 flex gap-2 overflow-x-auto px-6 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden [&>button]:shrink-0"
          >
            <button type="button" aria-pressed={!category} onClick={() => setCategory(null)} className={chip(!category)}>
              All questions ({items.length})
            </button>
            {categories.map(([name, count]) => (
              <button key={name} type="button" aria-pressed={category === name} onClick={() => setCategory(name)} className={chip(category === name)}>
                {name} ({count})
              </button>
            ))}
          </div>
        </div>

        {/* Questions */}
        <ul className="mt-6 space-y-3 sm:mt-8">
          {visible.map((item, i) => {
            const isOpen = open === item.question;
            const key = `${id}-${i}`;
            return (
              <li
                key={item.question}
                className={cn(
                  "border transition-[border-color,background-color,box-shadow] duration-500",
                  isOpen
                    ? "border-kooo-green-dark bg-white shadow-[0_24px_48px_-32px_rgba(10,31,68,0.5)]"
                    : "border-navy/15 bg-white/60 hover:border-navy/35 hover:bg-white",
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={`${key}-q`}
                    aria-expanded={isOpen}
                    aria-controls={`${key}-a`}
                    onClick={() => toggle(item.question)}
                    className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-navy sm:gap-6 sm:px-5 sm:py-5 md:px-7 md:py-6"
                  >
                    <span className="font-heading text-lg leading-snug text-navy sm:text-xl md:text-2xl">{item.question}</span>
                    {/* Plus that folds into a minus. */}
                    <span
                      aria-hidden
                      className={cn(
                        "relative grid size-9 shrink-0 place-items-center rounded-full transition-colors duration-500",
                        isOpen ? "bg-kooo-green-dark text-white" : "bg-navy/5 text-navy",
                      )}
                    >
                      <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                      <span
                        className={cn(
                          "absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                          isOpen && "rotate-90 scale-y-0",
                        )}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`${key}-a`}
                  role="region"
                  aria-labelledby={`${key}-q`}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden" inert={!isOpen}>
                    <div className="mx-4 border-t border-navy/10 pb-5 pt-4 sm:mx-5 sm:pb-6 sm:pt-5 md:mx-7">
                      <p className="text-[15px] leading-relaxed text-ink/80 sm:text-base md:text-lg">
                        <BlurWords text={item.answer} open={isOpen} />
                      </p>
                      {item.links && (
                        <ul
                          className={cn(
                            "mt-5 flex flex-wrap gap-2 transition-[opacity,translate] duration-700 motion-reduce:transition-none",
                            isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                          )}
                          style={{ transitionDelay: isOpen ? `${250 + item.answer.split(" ").length * 22}ms` : "0ms" }}
                        >
                          {item.links.map((link) => {
                            // Page routes use Link; phone, email and PDF links are plain anchors.
                            const Anchor = isRoute(link.href) ? Link : "a";
                            return (
                              <li key={link.href}>
                                <Anchor
                                  href={link.href}
                                  className="group inline-flex h-10 items-center gap-2 rounded-full border border-navy/15 bg-cloud/60 px-4 font-button text-sm text-navy transition-colors duration-300 hover:border-navy hover:bg-navy hover:text-white"
                                >
                                  {link.label}
                                  <ArrowUpRight className="size-4 text-kooo-green-dark transition-[color,translate] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-kooo-mint" />
                                </Anchor>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {visible.length === 0 && (
          <div role="status" className="mt-8 border border-dashed border-navy/25 px-6 py-10 text-center">
            <p className="text-lg text-navy">No questions match “{query.trim()}”.</p>
            {fallback && (
              <Link href={fallback.href} className="mt-3 inline-block font-button text-kooo-green-dark underline underline-offset-4">
                {fallback.label}
              </Link>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
}
