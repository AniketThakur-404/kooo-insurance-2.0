import type { Metadata } from "next";
import { industries, industryHref } from "@/content/catalogue";
import { PageTitle } from "@/components/sections/page-title";
import { CtaBand } from "@/components/sections/cta-band";
import { ImageBand } from "@/components/sections/image-band";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";
import { JsonLd, breadcrumbLd } from "@/components/detail/json-ld";
import { PhotoCardGrid } from "@/components/detail/detail-sections";
import { ScrollMarquee } from "@/components/motion/scroll-marquee";

export const metadata: Metadata = {
  title: "Industries We Support",
  description:
    "Insurance information for Australian businesses by industry, from transport, trades and hospitality to health, education, property and rural businesses.",
  alternates: { canonical: "/industries" },
};

const crumbs = [{ label: "Industries", href: "/industries" }];

export default function IndustriesPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageTitle
        words={["Industries", "We Support"]}
        intro="Every industry has its own activities and risks. Find your industry to see the risks businesses commonly face and the insurance options they consider."
        image="/images/photos/pexels-4981810.jpg"
        tags={[`${industries.length} industries`, "Australia-wide"]}
      />
      <section className="relative z-10 px-2 py-24 sm:px-3 md:px-4 md:py-32">
        <PhotoCardGrid cards={industries.map((i) => ({ title: i.name, text: i.summary, href: industryHref(i.slug), image: i.image }))} />
      </section>
      <ScrollMarquee items={industries.map((i) => i.name)} />
      <ImageBand
        image="/images/photos/pexels-2290753.jpg"
        title="Can’t see your industry?"
        text="We work with businesses of all kinds across Australia. Tell us what you do and we’ll talk through the options."
        link={{ label: "Contact our team", href: "/contact" }}
      />
      <CtaBand title="Ready to talk about your business?" text="Request a quote or ask a question. Our team is here to help." label="Request a quote" href="/contact" />
    </>
  );
}
