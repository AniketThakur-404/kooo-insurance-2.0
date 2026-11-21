import type { Metadata } from "next";
import { CtaLink } from "@/components/ui/cta-link";

export const metadata: Metadata = {
  title: "Coming soon",
  robots: { index: false, follow: true },
};

export default function ComingSoon() {
  return (
    <section className="flex min-h-[65svh] flex-col items-center justify-center bg-cloud px-6 pb-16 pt-36 text-center">
      <h1 className="text-[clamp(3rem,8vw,6rem)] leading-none">Coming soon</h1>
      <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
        We’re preparing our insurance and industry pages. If you need help with cover, get in touch with our team.
      </p>
      <CtaLink href="/contact" className="mt-8">Contact us</CtaLink>
    </section>
  );
}
