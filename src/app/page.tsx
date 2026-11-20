import { about, contact, home, legal } from "@/content/site";
import { Hero } from "@/components/home/hero";
import { SolutionsGrid } from "@/components/home/solutions-grid";
import { Testimonials } from "@/components/home/testimonials";
import { InsurersGrid } from "@/components/home/insurers-grid";
import { Industries } from "@/components/home/industries";
import { Faq, type FaqItem } from "@/components/home/faq";
import { ImageBand } from "@/components/sections/image-band";
import { CtaBand } from "@/components/sections/cta-band";
import { ContactForm } from "@/app/contact/contact-form";
import { WhyChoose } from "@/components/home/why-choose";
import { ServiceSteps } from "@/components/home/service-steps";


const questions: FaqItem[] = [
  { category: "Getting started", question: "Can I work with Kooo outside Sydney?", answer: "Yes. Our team is based in Bella Vista and works with businesses and families across Australia." },
  { category: "Getting started", question: "Can I ask about both business and personal cover?", answer: "Yes. Tell us about your business, home or vehicles when you get in touch so we can discuss the cover you need." },
  { category: "Getting started", question: "What if I don’t know which category to choose?", answer: "Select Other on the contact form and describe what you want to insure. Our team will help you find a starting point.", links: [{ label: "Open the contact form", href: "/contact" }] },
  { category: "Claims", question: "How do I make a claim?", answer: "Have your policy number and a short description of what happened ready. Contact Kooo to discuss the next step, and check your policy documents for your insurer’s claims contact details.", links: [{ label: `Call ${contact.phone}`, href: contact.phoneHref }] },
  {
    category: "Contact & documents",
    question: "How can I get in touch with Kooo?",
    answer: "Call or email our team, or send an enquiry and we will come back to you.",
    links: [
      { label: contact.phone, href: contact.phoneHref },
      { label: contact.email, href: `mailto:${contact.email}` },
      { label: "Send an enquiry", href: "/contact" },
    ],
  },
  {
    category: "Contact & documents",
    question: "Where can I find Kooo’s documents?",
    answer: "Our Financial Services Guide, Privacy Policy and other relevant documents are available to download as PDFs.",
    links: legal.documents.map((doc) => ({ label: `${doc.label} (PDF)`, href: doc.href })),
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <SolutionsGrid />
      <Industries />
      <WhyChoose title="Why clients" accent="choose Kooo" items={home.whyChooseUs} feature={home.trusted} />
      <ServiceSteps title="How our" accent="service works" steps={home.serviceSteps} />
      <Testimonials title="Client" accent="reviews" />
      <InsurersGrid />
      <CtaBand
        title="Claims support"
        text="Need to make a claim? Have your policy number and a short description of what happened ready. Contact Kooo to discuss the next step, and check your policy documents for your insurer’s claims contact details."
        label={`Call ${contact.phone}`}
        href={contact.phoneHref}
        aside={
          <>
            <h3 className="mb-1 text-2xl md:text-3xl">Start a claim enquiry</h3>
            <p className="mb-6 text-muted-foreground">Leave your details and we will be in touch about the next step.</p>
            <ContactForm variant="compact" insuranceType="Claim" messageLabel="Policy number and what happened" submitLabel="Send" />
          </>
        }
      />
      <ImageBand image={about.images[1]} title={about.title}
        text="Kooo Insurance is a brokerage based in Bella Vista, serving businesses and families across Australia. We help you understand your options and choose cover for what matters to you."
        link={{ label: "Meet Kooo Insurance", href: "/about" }} />
      <Faq
        lead="Frequently asked"
        accent="questions"
        intro="Answers, contact options and documents, all in one place."
        items={questions}
        fallback={{ label: "Ask our team directly", href: "/contact" }}
      />
    </>
  );
}
