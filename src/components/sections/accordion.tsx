"use client";

import { useId, useState } from "react";
import { ArrowBox } from "@/components/ui/arrow-box";
import { cn } from "@/lib/utils";

type AccordionProps = {
  items: { title: string; content: string }[];
  defaultOpen?: number | null;
};

// Outlined question/answer rows; the arrow turns when a row is open.
export function Accordion({ items, defaultOpen = 0 }: AccordionProps) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const id = useId();

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className={cn("border border-navy/20 transition-colors duration-500", isOpen ? "bg-white" : "hover:bg-white/60")}>
            <h3>
              <button
                type="button"
                id={`${id}-h${i}`}
                aria-expanded={isOpen}
                aria-controls={`${id}-p${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 p-5 text-left md:p-6"
              >
                <span className="font-heading text-xl text-navy md:text-2xl">{item.title}</span>
                <ArrowBox open={isOpen} rotateOnHover={false} className="size-8" />
              </button>
            </h3>
            <div
              id={`${id}-p${i}`}
              role="region"
              aria-labelledby={`${id}-h${i}`}
              className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 leading-relaxed text-ink/80 md:px-6 md:text-lg">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
