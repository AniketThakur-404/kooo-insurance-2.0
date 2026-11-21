"use client";

import { startTransition, useActionState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { contact } from "@/content/site";
import { submitReferral, type FormState } from "@/app/forms/actions";
import { Honeypot, SelectField, TextArea, TextField } from "./fields";

const initial: FormState = { status: "idle" };

const industries = [
  "Accounting",
  "Mortgage or finance broking",
  "Business broking",
  "Vehicle dealership",
  "Real estate or property",
  "Other",
];

/** "Become a Referral Partner" enquiry. */
export function ReferralForm() {
  const [state, action, pending] = useActionState(submitReferral, initial);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-6" role="status">
        <CheckCircle2 className="size-12 text-kooo-green-dark" />
        <h3 className="text-2xl text-navy md:text-3xl">Thanks{state.name ? `, ${state.name}` : ""}. We’ve received your enquiry.</h3>
        <p className="text-muted-foreground">
          Our team will be in touch to talk about how a referral arrangement could work. You can also reach us at{" "}
          <a href={`mailto:${contact.partnersEmail}`} className="text-navy underline">
            {contact.partnersEmail}
          </a>
          .
        </p>
      </div>
    );
  }

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    startTransition(() => action(data));
  };
  const e = state.errors ?? {};

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2" noValidate>
      <Honeypot />
      <TextField label="Contact name" name="name" required autoComplete="name" error={e.name} />
      <TextField label="Business name" name="businessName" required autoComplete="organization" error={e.businessName} />
      <SelectField label="Industry" name="industry" options={industries} className="sm:col-span-2" />
      <TextField label="Email" name="email" type="email" required autoComplete="email" error={e.email} />
      <TextField label="Phone" name="phone" type="tel" required autoComplete="tel" error={e.phone} />
      <TextArea label="Message" name="message" hint="optional" rows={4} className="sm:col-span-2" />

      {Object.keys(e).length > 0 && (
        <p className="bg-red-50 p-4 text-sm text-red-700 sm:col-span-2" role="alert">
          Please check the highlighted fields and try again.
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex h-12 items-center justify-center gap-2 bg-navy px-8 font-button font-medium text-white transition-colors hover:bg-navy-deep disabled:opacity-60 sm:col-span-2 sm:justify-self-start"
      >
        {pending && <Loader2 className="size-4 animate-spin" />}
        Become a Referral Partner
      </button>
    </form>
  );
}
