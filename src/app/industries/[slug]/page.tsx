import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contact } from "@/content/site";
import { getIndustry, getProduct, industries, industryHref, productHref } from "@/content/catalogue";
import { PageTitle } from "@/components/sections/page-title";
import { ListRows } from "@/components/sections/list-rows";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { ChecklistPanel, PageFaqs, RelatedCards, SectionIntro, TileList, type RelatedCard } from "@/components/detail/detail-sections";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/detail/json-ld";
import { QuoteAside } from "@/components/detail/quote-aside";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  const title = `${industry.name} Insurance`;
  return {
    title,
    description: industry.metaDescription,
    alternates: { canonical: industryHref(industry.slug) },
    openGraph: { title: `${title} | Kooo Insurance`, description: industry.metaDescription, images: [industry.image] },
  };
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();

  const crumbs = [
    { label: "Industries", href: "/industries" },
    { label: industry.name, href: industryHref(industry.slug) },
  ];

  const insuranceRows = industry.insurance.map((item) => ({
    title: item.title,
    description: item.text,
    href: item.product ? productHref(item.product) : undefined,
  }));

  const productCards: RelatedCard[] = [...new Set(industry.insurance.flatMap((i) => (i.product ? [i.product] : [])))]
    .slice(0, 4)
    .flatMap((slug) => {
      const p = getProduct(slug);
      return p ? [{ title: p.name, text: p.summary, href: productHref(p.slug), image: p.image, tag: "Insurance" }] : [];
    });
  const industryCards: RelatedCard[] = industry.relatedIndustries.flatMap((slug) => {
    const i = getIndustry(slug);
    return i ? [{ title: i.name, text: i.summary, href: industryHref(i.slug), image: i.image, tag: "Industry" }] : [];
  });

  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), ...(industry.faqs.length ? [faqLd(industry.faqs)] : [])]} />
      <Breadcrumbs items={crumbs} />
      <PageTitle words={industry.titleWords} heading={`${industry.name} Insurance`} intro={industry.intro} />

      <TileList title="Who this page is for" text="Businesses and organisations we work with in this industry include:" items={industry.audiences} />

      <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
        <SectionIntro title="Activities and risks" text="Everyday activities in this industry and the risks that can come with them." className="mb-10" />
        <ListRows items={industry.risks.map((r) => ({ title: r.title, description: r.text }))} />
      </section>

      <ImageBand image={industry.image} title="How Kooo helps" text={industry.howWeHelp} link={{ label: "Claims support", href: "/claims" }} />

      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <SectionIntro
          title="Insurance options"
          text="Cover commonly considered in this industry. Select an option to read more about the insurance itself."
          className="mb-10"
        />
        <ListRows items={insuranceRows} />
      </section>

      <ChecklistPanel
        columns={[
          { title: "Things to consider", items: industry.considerations },
          { title: "Information for a quote", intro: "It helps to have these ready. If you don’t have everything, contact us anyway.", items: industry.quoteInfo },
        ]}
      />

      <PageFaqs items={industry.faqs} />

      <RelatedCards title="Insurance for this industry" cards={productCards} />
      <RelatedCards title="Related industries" cards={industryCards} />

      <CtaBand
        title={`Talk to us about ${industry.name.toLowerCase()} insurance`}
        text="Tell us about your business and what you’d like to insure. We’ll talk through the options available. Information on this page is general in nature and doesn’t take your objectives, financial situation or needs into account."
        label={`Call ${contact.phone}`}
        href={contact.phoneHref}
        aside={<QuoteAside insuranceType={`${industry.name} insurance`} />}
      />
    </>
  );
}
