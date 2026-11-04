import type { Metadata } from "next";
import { categories, solutionsPage } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { Testimonials } from "@/components/home/testimonials";

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
      <PageTitle words={["Our Insurance", "Solutions"]} intro={`${solutionsPage.intro} ${solutionsPage.explore}`} />
      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <ListRows items={categories.map((c) => ({ title: c.name, description: c.description, href: `/${c.slug}` }))} />
      </section>
      <ImageBand image="/images/photos/pexels-1451040.jpg" rotating={{ prefix: "Cover for", items: sampleCovers }} />
      <Testimonials />
      <CtaBand title={solutionsPage.cta.title} text={solutionsPage.cta.text} />
    </>
  );
}
