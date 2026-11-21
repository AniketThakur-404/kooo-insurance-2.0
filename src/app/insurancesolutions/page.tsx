import type { Metadata } from "next";
import { categories, solutionsPage } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { Testimonials } from "@/components/home/testimonials";
import { ScrollMarquee } from "@/components/motion/scroll-marquee";

export const metadata: Metadata = {
  title: solutionsPage.title,
  description: solutionsPage.intro,
};

// Two example covers from each category, linking to that category.
const sampleCovers = categories.flatMap((c) =>
  c.items.slice(0, 2).map((item) => ({ label: item.title, href: `/${c.slug}` })),
);

export default function InsuranceSolutionsPage() {
  return (
    <>
      <PageTitle
        words={["Our Insurance", "Solutions"]}
        intro={`${solutionsPage.intro} ${solutionsPage.explore}`}
        image="/images/photos/pexels-7579041.jpg"
        tags={[`${categories.length} categories`, "Business and personal", "Australia-wide"]}
      />
      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <ListRows items={categories.map((c) => ({ title: c.name, description: c.description, href: `/${c.slug}`, image: c.image }))} />
      </section>
      <ScrollMarquee items={categories.map((c) => c.shortName)} />
      <ImageBand image="/images/photos/pexels-1451040.jpg" rotating={{ prefix: "Cover for", items: sampleCovers }} />
      <Testimonials />
      <CtaBand title={solutionsPage.cta.title} text={solutionsPage.cta.text} />
    </>
  );
}
