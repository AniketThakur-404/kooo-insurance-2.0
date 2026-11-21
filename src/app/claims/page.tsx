import type { Metadata } from "next";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { NumberedRows } from "@/components/sections/numbered-rows";
import { ImageBand } from "@/components/sections/image-band";
import { Reveal } from "@/components/motion/reveal";
import { SplitReveal } from "@/components/motion/split-reveal";
import { CornerDots } from "@/components/ui/corner-dots";
import { ChecklistPanel, PageFaqs } from "@/components/detail/detail-sections";
import { Breadcrumbs } from "@/components/detail/breadcrumbs";
import { JsonLd, breadcrumbLd, faqLd } from "@/components/detail/json-ld";
import { ClaimForm } from "@/components/forms/claim-form";

const intro =
  "If something has happened, contact us as soon as you can. We’ll explain the next steps, help you prepare and lodge your claim with the insurer, and keep in touch while it’s assessed.";

export const metadata: Metadata = {
  title: "Claims Support",
  description: `Need to make an insurance claim? Kooo Insurance helps clients across Australia prepare, lodge and follow up claims. Email ${contact.claimsEmail} or call ${contact.phone}.`,
  alternates: { canonical: "/claims" },
};

const steps = [
  { title: "Contact us", text: "Call, email or use the form below. Tell us what happened, even if you don’t have every detail or document yet." },
  { title: "We talk through the next steps", text: "We’ll explain what the insurer is likely to need and anything you can do now, such as preventing further damage where it’s safe." },
  { title: "We help lodge your claim", text: "We help you prepare the claim and lodge it with your insurer, along with the supporting information." },
  { title: "We stay in touch", text: "We liaise with the insurer and any assessor or loss adjuster, and keep you updated as the claim progresses." },
  { title: "The insurer’s decision", text: "The insurer assesses the claim under your policy and makes the decision. We help you understand it and your options, including how to raise a concern if you disagree." },
];

const helpful = [
  "Your name, contact details and policy number, if you know it",
  "The date, time and location of the incident",
  "A short description of what happened and what was damaged or lost",
  "Photos or video of the damage",
  "Details of anyone else involved, and any witnesses",
  "A police event or report number for theft, break-ins or malicious damage",
  "Repair quotes, invoices or receipts, if you have them",
];

const meanwhile = [
  "Make sure everyone is safe. In an emergency, call 000 first.",
  "Take reasonable steps to prevent further damage, where it’s safe to do so.",
  "Report theft, break-ins and malicious damage to the police.",
  "Keep damaged items until the insurer confirms they can be disposed of.",
  "Avoid admitting fault or agreeing to pay anyone before speaking with us or the insurer.",
  "Check with us before arranging non-urgent repairs.",
];

const faqs = [
  { question: "Can I contact you if I don’t have my policy documents?", answer: "Yes. Contact us with what you have. We can usually find your policy details and let you know what else is needed." },
  { question: "How soon should I let you know about a claim?", answer: "As soon as you reasonably can. Most policies ask you to notify the insurer promptly, and acting early can help with preventing further loss and gathering information." },
  { question: "Does notifying Kooo mean my claim is accepted?", answer: "No. Notifying us starts the process. Your insurer assesses each claim under the terms, conditions, limits and excesses of your policy and makes the decision." },
  { question: "Will I need to pay an excess?", answer: "Many policies include an excess, which is the amount you contribute towards a claim. The amount and how it applies depend on your policy. We can help you check your policy schedule." },
  { question: "What if I disagree with the insurer’s decision?", answer: "Talk to us. We can help you understand the reasons for the decision and the insurer’s internal complaints process. If it isn’t resolved, you may be able to take the matter to the Australian Financial Complaints Authority (AFCA)." },
  { question: "My policy wasn’t arranged through Kooo. Can you help?", answer: "Our claims support is for policies arranged through Kooo. If your policy is with another broker or directly with an insurer, contact them first. You’re welcome to talk to us about your insurance for the future." },
];

const crumbs = [{ label: "Claims", href: "/claims" }];

export default function ClaimsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbLd(crumbs), faqLd(faqs)]} />
      <Breadcrumbs items={crumbs} />
      <PageTitle words={["Claims", "Support"]} intro={intro} image="/images/photos/pexels-1128317.jpg" tags={["Help at every step", "Australia-wide"]} />

      <section className="relative z-10 px-6 pb-24 md:px-8 md:pb-32">
        <div className="grid gap-10 border-t border-navy/20 pt-12 lg:grid-cols-[1fr_1.3fr]">
          <h2 className="font-sans text-sm uppercase tracking-[0.2em]">Contact our claims team</h2>
          <Reveal stagger={0.1} className="space-y-5">
            <a href={`mailto:${contact.claimsEmail}`} className="group flex items-center gap-4 font-heading text-[clamp(1.5rem,3vw,2.8rem)] text-navy">
              <span aria-hidden className="size-1.5 shrink-0 bg-kooo-green-dark" />
              <span className="break-all border-b border-transparent transition-colors group-hover:border-navy">{contact.claimsEmail}</span>
            </a>
            <a href={contact.phoneHref} className="group flex items-center gap-4 font-heading text-[clamp(1.5rem,3vw,2.8rem)] text-navy">
              <span aria-hidden className="size-1.5 shrink-0 bg-kooo-green-dark" />
              <span className="border-b border-transparent transition-colors group-hover:border-navy">{contact.phone}</span>
            </a>
            <a href="#notify" className="inline-block border-b border-navy/40 pb-0.5 font-button text-navy transition-colors hover:border-navy">
              Or notify us of a claim online
            </a>
          </Reveal>
        </div>
      </section>

      <NumberedRows title="How we help with your claim" intro="What happens after you contact us." items={steps} />

      <ChecklistPanel
        image="/images/photos/pexels-6230973.jpg"
        columns={[
          { title: "Information that may help", intro: "Send what you have. You can always add more later.", items: helpful },
          { title: "In the meantime", items: meanwhile },
        ]}
      />

      <section id="notify" className="relative z-10 scroll-mt-24 px-6 py-24 md:px-8 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <SplitReveal as="h2" className="text-[clamp(2.25rem,4.4vw,4.25rem)] leading-[1.05]">
              Notify us of a claim
            </SplitReveal>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted-foreground">
              Fill in what you can. Only your name, contact details and a short description are needed to get started.
            </p>
          </div>
          <Reveal className="relative bg-white p-6 md:p-10">
            <CornerDots inset="-0.6rem" className="text-kooo-green-dark" />
            <ClaimForm />
          </Reveal>
        </div>
      </section>

      <PageFaqs title="Claims questions" items={faqs} image="/images/photos/pexels-840996.jpg" />

      <ImageBand
        image="/images/photos/pexels-585419.jpg"
        title="We’re with you from the first call."
        text="Claims can be stressful. Our role is to make the process clearer and to support you while the insurer assesses your claim."
        link={{ label: "Contact Kooo", href: "/contact" }}
      />
    </>
  );
}
