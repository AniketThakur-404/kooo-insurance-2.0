"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type RotatingLinkProps = {
  prefix: string;
  items: { label: string; href: string }[];
  interval?: number;
};

// "Also explore: …" line whose link rolls through a list of pages.
export function RotatingLink({ prefix, items, interval = 2600 }: RotatingLinkProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % items.length), interval);
    return () => window.clearInterval(id);
  }, [items.length, interval]);

  const item = items[index];

  return (
    <p className="font-heading text-[clamp(1.5rem,3.2vw,2.75rem)] leading-tight text-white">
      <span className="text-kooo-mint">{prefix}</span>{" "}
      <span className="relative inline-flex overflow-hidden pb-[0.1em] align-bottom">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={item.href + index}
            initial={{ y: "105%" }}
            animate={{ y: 0 }}
            exit={{ y: "-105%" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block"
          >
            <Link
              href={item.href}
              className="underline decoration-kooo-mint/50 decoration-1 underline-offset-[0.18em] transition-colors hover:decoration-kooo-mint"
            >
              {item.label}
            </Link>
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}
