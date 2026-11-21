import type { Metadata } from "next";
import { categories, contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { ListRows } from "@/components/sections/list-rows";
import { Reveal } from "@/components/motion/reveal";
import { SplitReveal } from "@/components/motion/split-reveal";
import { CornerDots } from "@/components/ui/corner-dots";
import { ChecklistPanel, SectionIntro, TileList } from "@/components/detail/detail-sections";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";
import { JsonLd, breadcrumbLd } from "@/components/detail/json-ld";
import { ReferralForm } from "@/components/forms/referral-form";

export const metadata: Metadata = {
  title: "Referral Partners",
  description:
    "Kooo Insurance works with accountants, finance and business brokers, vehicle dealers and property professionals across Australia who refer clients for insurance.",
  alternates: { canonical: "/referral-partners" },
};

const partners = [
  "Accountants and bookkeepers",
  "Mortgage and finance brokers",
  "Business brokers",
  "Vehicle dealers",
  "Property professionals",
  "Other businesses with clients who need insurance",
];

const process = [
  { title: "Talk to us", text: "Get in touch using the form below. We’ll learn about your business and your clients, and agree how referrals will work." },
  { title: "Introduce your client", text: "With your client’s consent, send us their details or ask them to contact us directly." },
  { title: "We contact your client", text: "Our team gets in touch, learns about what they want to insure and talks through the options available." },
  { title: "We arrange and look after the insurance", text: "If your client goes ahead, we arrange the cover and support them at renewal and if they need to make a claim." },
];

const clientCare = [
  "Prompt, friendly contact after we receive the referral",
  "Clear explanations without insurance jargon",
  "Access to a broad panel of insurers and underwriting agencies",
  "Help at renewal and when circumstances change",
  "Support through the claims process",
];

const referrerComms = [
  "Confirmation when we receive a referral",
  "An update once we’ve been in touch with your client",
  "A single point of contact at Kooo",
  "Client details shared only with your client’s consent, in line with privacy obligations",
  "Any referral arrangement discussed and agreed in writing before referrals begin",
];

const crumbs = [
  { label: "About Kooo", href: "/about" },
  { label: "Referral Partners", href: "/referral-partners" },
];

export default function ReferralPartnersPage() {
  return (
    <>
      <JsonLd data={breadcrumbLd(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <PageTitle
        words={["Referral", "Partners"]}
        intro="We work with professionals and businesses who want a dependable insurance broker for their clients. Refer a client to Kooo and we’ll look after them with care."
        image="/images/photos/pexels-327540.jpg"
        tags={["Accountants", "Brokers", "Dealers", "Property professionals"]}
      />

      <TileList title="Who we welcome" text="We welcome referrals from businesses that work closely with their clients, including:" items={partners} image="/images/photos/pexels-933964.jpg" />

      <NumberedRows title="How referrals work" intro="A simple process for you and your client." items={process} />

      <ChecklistPanel
        image="/images/photos/pexels-8961401.jpg"
        columns={[
          { title: "How we look after your client", items: clientCare },
          { title: "How we keep you informed", items: referrerComms },
        ]}
      />

      <section className="relative z-10 px-6 py-24 md:px-8 md:py-32">
        <SectionIntro title="Insurance we can help with" text="Your clients can come to us for business, trades, transport, industry, specialty and personal insurance." className="mb-10" />
        <ListRows items={categories.map((c) => ({ title: c.name, description: c.summary, image: c.image }))} />
      </section>

      <section id="become-a-partner" className="relative z-10 scroll-mt-24 px-6 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SplitReveal as="h2" className="text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05]">
              Become a Referral Partner
            </SplitReveal>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Tell us a little about your business and we’ll be in touch. Prefer email? Write to{" "}
              <a href={`mailto:${contact.partnersEmail}`} className="break-all text-navy underline">
                {contact.partnersEmail}
              </a>
              .
            </p>
          </div>
          <Reveal className="relative bg-white p-6 md:p-10">
            <CornerDots inset="-0.6rem" className="text-kooo-green-dark" />
            <ReferralForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
