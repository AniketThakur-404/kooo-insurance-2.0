import { ContactForm } from "@/app/contact/contact-form";

/** Short quote request form for the white card inside a CtaBand. */
export function QuoteAside({ insuranceType, title = "Request a quote" }: { insuranceType: string; title?: string }) {
  return (
    <>
      <h3 className="mb-1 text-2xl md:text-3xl">{title}</h3>
      <p className="mb-6 text-muted-foreground">Leave your details and our team will be in touch.</p>
      <ContactForm variant="compact" insuranceType={insuranceType} messageLabel="What would you like to insure?" submitLabel="Request a quote" />
    </>
  );
}
