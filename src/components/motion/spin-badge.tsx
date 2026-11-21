import { cn } from "@/lib/utils";

/**
 * Round badge: the tagline runs around the edge and turns slowly, with Kooo's
 * overlapping circles in the middle.
 */
export function SpinBadge({ text = "Protect your tomorrow, today · Kooo Insurance · ", className }: { text?: string; className?: string }) {
  return (
    <div aria-hidden className={cn("relative grid size-32 place-items-center rounded-full bg-navy text-kooo-mint md:size-40", className)}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 size-full motion-safe:animate-[spin_22s_linear_infinite]">
        <defs>
          <path id="spin-badge-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
        </defs>
        <text className="fill-current font-button text-[15px] uppercase tracking-[0.28em]">
          <textPath href="#spin-badge-circle">{text}</textPath>
        </text>
      </svg>
      <svg viewBox="0 0 64 40" className="w-14 md:w-16" fill="none" stroke="currentColor" strokeWidth="3">
        <circle cx="20" cy="20" r="16" />
        <circle cx="32" cy="20" r="16" />
        <circle cx="44" cy="20" r="16" />
      </svg>
    </div>
  );
}
