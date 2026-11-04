import { cn } from "@/lib/utils";

type RollTextProps = {
  text: string;
  className?: string;
  /** Delay between letters, in ms. */
  stagger?: number;
};

/**
 * Hover text animation: each letter rolls up and is replaced by a copy rising
 * from below. Triggers when the nearest `group` ancestor is hovered or focused.
 */
export function RollText({ text, className, stagger = 16 }: RollTextProps) {
  return (
    <span className={cn("relative inline-block overflow-hidden align-bottom leading-[1.15]", className)}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline-flex">
        {Array.from(text).map((char, i) => (
          <span
            key={i}
            className="relative inline-block whitespace-pre transition-transform duration-[650ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full group-focus-visible:-translate-y-full"
            style={{ transitionDelay: `${i * stagger}ms` }}
          >
            <span className="block">{char}</span>
            <span className="absolute left-0 top-full block">{char}</span>
          </span>
        ))}
      </span>
    </span>
  );
}
