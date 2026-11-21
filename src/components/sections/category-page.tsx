import { categories, type Category } from "@/content/site";
import { getProduct, productForCoverItem, productHref, productsInCategory } from "@/content/catalogue";
import { ScrollMarquee } from "@/components/motion/scroll-marquee";
import { pagePhotos } from "@/content/images";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { RelatedCards } from "@/components/detail/detail-sections";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";

// Shared layout for the six insurance category pages. Items with their own product
// page link through to it; products in this category not listed above appear as cards.
export function CategoryPage({ category }: { category: Category }) {
  const others = categories
    .filter((c) => c.slug !== category.slug)
    .map((c) => ({ label: c.name, href: `/${c.slug}` }));

  const rows = category.items.map((item) => {
    const slug = productForCoverItem[item.title];
    return { ...item, href: slug ? productHref(slug) : undefined, image: slug ? getProduct(slug)?.image : undefined };
  });
  const linked = new Set(rows.map((r) => r.href));
  const moreProducts = productsInCategory(category.slug)
    .filter((p) => !linked.has(productHref(p.slug)))
    .map((p) => ({ title: p.name, text: p.summary, href: productHref(p.slug), image: p.image, tag: "Insurance" }));

  return (
    <>
      <Breadcrumbs items={[{ label: "Insurance", href: "/insurancesolutions" }, { label: category.name, href: `/${category.slug}` }]} />
      <PageTitle words={[category.shortName, "Insurance"]} heading={category.name} intro={category.intro} image={category.image} tags={[`${category.items.length} insurance options`, "Australia-wide"]} />
      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <ListRows items={rows} />
      </section>
      <ScrollMarquee items={category.items.slice(0, 6).map((i) => i.title)} />
      <RelatedCards title="More in this category" text="Read more about these products." cards={moreProducts} />
      <ImageBand image={pagePhotos(category.slug, 1, [category.image])[0]} rotating={{ prefix: "Also explore:", items: others }} />
      <CtaBand title={category.cta.title} text={category.cta.text} />
    </>
  );
}
