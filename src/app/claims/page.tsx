import type { Metadata } from "next";
import { contact } from "@/content/site";
import { PageTitle } from "@/components/sections/page-title";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/motion/reveal";
import { ContactForm } from "@/app/contact/contact-form";

const intro =
  "Need to make a claim? Have your policy number and a short description of what happened ready. Contact Kooo to discuss the next step, and check your policy documents for your insurer’s claims contact details.";

export const metadata: Metadata = {
  title: "Claims",
  description: `${intro} Email ${contact.claimsEmail} or call ${contact.phone}.`,
};

export default function ClaimsPage() {
  return (
    <>
      <PageTitle words={["Claims", "Support"]} intro={intro} />

      <section className="relative z-10 px-6 pb-16 md:px-8">
        <Reveal stagger={0.1} className="space-y-5 border-t border-navy/20 pt-12">
          <a href={`mailto:${contact.claimsEmail}`} className="group flex items-center gap-4 font-heading text-[clamp(1.4rem,2.6vw,2.4rem)] text-navy">
            <span aria-hidden className="size-1.5 shrink-0 bg-kooo-green-dark" />
            <span className="break-all border-b border-transparent transition-colors group-hover:border-navy">{contact.claimsEmail}</span>
          </a>
          <a href={contact.phoneHref} className="group flex items-center gap-4 font-heading text-[clamp(1.4rem,2.6vw,2.4rem)] text-navy">
            <span aria-hidden className="size-1.5 shrink-0 bg-kooo-green-dark" />
            <span className="border-b border-transparent transition-colors group-hover:border-navy">{contact.phone}</span>
          </a>
        </Reveal>
      </section>

      <CtaBand
        title="Talk to our team"
        text="Call us, email the claims team, or send your details using the form and we will come back to you."
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
    </>
  );
}
