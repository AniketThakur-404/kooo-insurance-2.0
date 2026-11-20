import { SplitReveal } from "@/components/motion/split-reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  /** Navy opening words. */
  lead: string;
  /** Closing words in brand green. */
  accent?: string;
  intro?: React.ReactNode;
  id?: string;
  className?: string;
};

/** Shared home page section title: centred, navy with a green accent (as on "Industries we support"). */
export const sectionHeadingClass = "text-center text-[clamp(2.2rem,4vw,4rem)] leading-[1.05]";

// Title and intro rise into view line by line from behind a mask.
export function SectionHeading({ lead, accent, intro, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-4xl text-center", className)}>
      <SplitReveal as="h2" id={id} className={sectionHeadingClass}>
        {lead}
        {accent && <> <span className="text-kooo-green-dark">{accent}</span></>}
      </SplitReveal>
      {intro && (
        <SplitReveal delay={0.15} className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:mt-5 sm:text-lg">
          {intro}
        </SplitReveal>
      )}
    </div>
  );
}
