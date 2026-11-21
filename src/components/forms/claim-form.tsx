"use client";

import { startTransition, useActionState, useRef, useState } from "react";
import { CheckCircle2, Loader2, Paperclip, X } from "lucide-react";
import { contact } from "@/content/site";
import { submitClaim, type FormState } from "@/app/forms/actions";
import { Honeypot, TextArea, TextField } from "./fields";

const initial: FormState = { status: "idle" };

/** "Notify us of a claim": only name, contact details and a short description are required. */
export function ClaimForm() {
  const [state, action, pending] = useActionState(submitClaim, initial);
  const [files, setFiles] = useState<File[]>([]);
  const fileInput = useRef<HTMLInputElement>(null);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-6" role="status">
        <CheckCircle2 className="size-12 text-kooo-green-dark" />
        <h3 className="text-2xl text-navy md:text-3xl">Thanks{state.name ? `, ${state.name}` : ""}. We’ve received your claim notification.</h3>
        <p className="text-muted-foreground">Here’s what happens next:</p>
        <ol className="list-decimal space-y-2 pl-5 text-ink/85">
          <li>A member of our team will review your details and contact you during business hours.</li>
          <li>We’ll let you know what information or documents the insurer is likely to need.</li>
          <li>We’ll help you lodge the claim with your insurer and keep you updated as it progresses.</li>
        </ol>
        <p className="border-l-2 border-navy/30 pl-4 text-sm text-muted-foreground">
          Receiving this notification doesn’t confirm that you’re covered or the outcome of a claim. Your insurer assesses each claim under the terms of your policy.
        </p>
        <p className="text-sm text-muted-foreground">
          If it’s urgent, call us on{" "}
          <a href={contact.phoneHref} className="text-navy underline">
            {contact.phone}
          </a>
          . In an emergency, call 000 first.
        </p>
      </div>
    );
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    data.delete("uploads");
    files.forEach((f) => data.append("uploads", f));
    // Submitting this way keeps what was typed if there's an error.
    startTransition(() => action(data));
  };

  const addFiles = (list: FileList | null) => {
    if (list) setFiles((prev) => [...prev, ...Array.from(list)].slice(0, 5));
    if (fileInput.current) fileInput.current.value = "";
  };

  const e = state.errors ?? {};

  return (
    <form onSubmit={onSubmit} className="relative grid gap-5 sm:grid-cols-2" noValidate>
      <Honeypot />
      <TextField label="Your name" name="name" required autoComplete="name" error={e.name} className="sm:col-span-2" />
      <TextField label="Email" name="email" type="email" required autoComplete="email" error={e.email} />
      <TextField label="Phone" name="phone" type="tel" required autoComplete="tel" error={e.phone} />
      <TextField label="Business name" name="businessName" hint="if applicable" autoComplete="organization" />
      <TextField label="Policy number" name="policyNumber" hint="if known" />
      <TextField label="Incident date" name="incidentDate" type="date" error={e.incidentDate} />
      <TextField label="Incident location" name="incidentLocation" hint="suburb or address" />
      <TextArea label="Briefly, what happened?" name="description" required rows={5} error={e.description} className="sm:col-span-2" />

      <div className="sm:col-span-2">
        <span className="mb-1.5 block text-[15px] font-medium text-navy">
          Supporting files <span className="font-normal text-muted-foreground">(optional: photos, quotes, invoices or reports)</span>
        </span>
        <label className="flex cursor-pointer items-center justify-center gap-3 border border-dashed border-navy/35 bg-cloud/50 px-4 py-6 text-navy transition hover:border-navy hover:bg-white focus-within:ring-3 focus-within:ring-navy/10">
          <Paperclip className="size-5" />
          <span>Add files</span>
          <input
            ref={fileInput}
            type="file"
            name="uploads"
            multiple
            accept=".pdf,.jpg,.jpeg,.png,.webp,.heic,.heif,.doc,.docx"
            className="sr-only"
            onChange={(ev) => addFiles(ev.target.files)}
          />
        </label>
        <p className="mt-1.5 text-sm text-muted-foreground">Up to 5 files, 4 MB each. You can also send documents later.</p>
        {files.length > 0 && (
          <ul className="mt-3 space-y-2">
            {files.map((f, i) => (
              <li key={`${f.name}-${i}`} className="flex items-center justify-between gap-3 bg-white px-3 py-2 text-sm text-navy">
                <span className="truncate">{f.name}</span>
                <button type="button" onClick={() => setFiles(files.filter((_, j) => j !== i))} aria-label={`Remove ${f.name}`} className="shrink-0 p-1 hover:text-red-700">
                  <X className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        )}
        {e.uploads && <span className="mt-1 block text-sm text-red-700">{e.uploads}</span>}
      </div>

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
        Notify us of a claim
      </button>
    </form>
  );
}
