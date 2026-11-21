import type { Metadata } from "next";
import { generalFaqs } from "@/content/faqs";
import { Faq } from "@/components/home/faq";
import { PageTitle } from "@/components/sections/page-title";
import { CtaBand } from "@/components/sections/cta-band";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/detail/json-ld";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers to common questions about using an insurance broker, requesting a quote, making a claim and finding Kooo Insurance’s documents.",
  alternates: { canonical: "/faqs" },
};

const crumbs = [{ label: "FAQs", href: "/faqs" }];

export default function FaqsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(generalFaqs)]} />
      <Breadcrumbs items={crumbs} />
      <PageTitle
        words={["Common", "Questions"]}
        heading="Frequently asked questions"
        intro="Using a broker, getting a quote, claims and our documents. Questions about specific insurance are answered on each insurance and industry page."
        image="/images/photos/pexels-585419.jpg"
        tags={["Using a broker", "Quotes", "Claims", "Documents"]}
      />
      <Faq lead="Search" accent="our FAQs" items={generalFaqs} fallback={{ label: "Ask our team directly", href: "/contact" }} />
      <CtaBand title="Still have a question?" text="Our team is happy to help. Call us or send an enquiry." />
    </>
  );
}
