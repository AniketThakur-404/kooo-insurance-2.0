import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categories, contact } from "@/content/site";
import { getIndustry, getProduct, industryHref, productHref, products } from "@/content/catalogue";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { ChecklistPanel, PageFaqs, RelatedCards, SectionIntro, Statement, TileList, type RelatedCard } from "@/components/detail/detail-sections";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/detail/json-ld";
import { QuoteAside } from "@/components/detail/quote-aside";
import { ScrollMarquee } from "@/components/motion/scroll-marquee";
import { pagePhotos } from "@/content/images";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/insurance/[slug]">): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.metaDescription,
    alternates: { canonical: productHref(product.slug) },
    openGraph: { title: `${product.name} | Kooo Insurance`, description: product.metaDescription, images: [product.image] },
  };
}

export default async function ProductPage({ params }: PageProps<"/insurance/[slug]">) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.category)!;
  const crumbs = [
    { label: "Insurance", href: "/insurancesolutions" },
    { label: category.name, href: `/${category.slug}` },
    { label: product.name, href: productHref(product.slug) },
  ];

  const relatedProducts: RelatedCard[] = product.relatedProducts.flatMap((slug) => {
    const p = getProduct(slug);
    return p ? [{ title: p.name, text: p.summary, href: productHref(p.slug), image: p.image, tag: "Insurance" }] : [];
  });
  const relatedIndustries: RelatedCard[] = product.relatedIndustries.flatMap((slug) => {
    const i = getIndustry(slug);
    return i ? [{ title: i.name, text: i.summary, href: industryHref(i.slug), image: i.image, tag: "Industry" }] : [];
  });

  const [overviewImg, whoImg, panelImg, helpImg, faqImg] = pagePhotos(product.slug, 5, [product.image]);
  const marquee = [product.name, ...product.relatedProducts.flatMap((slug) => getProduct(slug)?.name ?? [])];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: product.name,
            serviceType: product.name,
            description: product.metaDescription,
            areaServed: { "@type": "Country", name: "Australia" },
            provider: { "@type": "InsuranceAgency", name: "Kooo Insurance", telephone: contact.phone, url: "https://www.koooinsurance.com.au" },
          },
          ...(product.faqs.length ? [faqLd(product.faqs)] : []),
        ]}
      />
      <Breadcrumbs items={crumbs} />
      <PageTitle words={product.titleWords} heading={product.name} intro={product.intro} image={product.image} tags={[category.name, "Australia-wide", "General advice and broking"]} />

      <Statement label="Overview" text={product.overview} image={overviewImg} />

      <TileList title="Who it’s generally for" text={`${product.name} is commonly considered by:`} items={product.whoFor} image={whoImg} />

      <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
        <SectionIntro title="Common activities and risks" text="Situations that may lead a business to look at this cover." className="mb-10" />
        <ListRows items={product.risks.map((r) => ({ title: r.title, description: r.text }))} />
      </section>

      <NumberedRows
        title="Options through Kooo"
        intro="Policy sections and options that may be available, depending on the insurer and the policy wording."
        items={product.options}
      />

      <ScrollMarquee items={marquee} />

      <ChecklistPanel
        image={panelImg}
        columns={[
          { title: "Limitations and considerations", items: product.considerations },
          { title: "Information for a quote", intro: "It helps to have these ready. If you don’t have everything, contact us anyway.", items: product.quoteInfo },
        ]}
      />

      <ImageBand image={helpImg} title="How Kooo helps" text={product.howWeHelp} link={{ label: "Claims support", href: "/claims" }} />

      <PageFaqs items={product.faqs} image={faqImg} />

      <RelatedCards title="Related insurance" cards={relatedProducts} />
      <RelatedCards title="Related industries" cards={relatedIndustries} />

      <CtaBand
        title={`Request a ${product.name} quote`}
        text="Tell us about your business and what you’d like to insure. We’ll talk through the options available. Information on this page is general in nature and doesn’t take your objectives, financial situation or needs into account."
        label={`Call ${contact.phone}`}
        href={contact.phoneHref}
        aside={<QuoteAside insuranceType={product.name} />}
      />
    </>
  );
}
