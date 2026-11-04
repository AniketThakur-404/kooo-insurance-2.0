import { categories, type Category } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";

// Shared layout for the six insurance category pages.
export function CategoryPage({ category }: { category: Category }) {
  const others = categories
    .filter((c) => c.slug !== category.slug)
    .map((c) => ({ label: c.name, href: `/${c.slug}` }));

  return (
    <>
      <PageTitle words={[category.shortName, "Insurance"]} intro={category.intro} />
      <section className="relative z-10 px-6 pb-28 md:px-8 md:pb-36">
        <ListRows items={category.items} />
      </section>
      <ImageBand image={category.image} rotating={{ prefix: "Also explore:", items: others }} />
      <CtaBand title={category.cta.title} text={category.cta.text} />
    </>
  );
}
