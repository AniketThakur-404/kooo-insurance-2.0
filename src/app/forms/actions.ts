"use server";

// Claim notifications and referral partner enquiries.
// TODO: deliver submissions (e.g. an email service such as Resend, or the team's CRM):
// claims to care@koooinsurance.com.au, referral enquiries to partners@koooinsurance.com.au.
// Until that is wired up they are only logged on the server, and uploads are validated but not stored.

export type FormState = {
  status: "idle" | "success" | "error";
  errors?: Record<string, string>;
  /** Echo of the first name, for the acknowledgement. */
  name?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_FILES = 5;
const MAX_FILE_BYTES = 4 * 1024 * 1024;
const MAX_TOTAL_BYTES = 10 * 1024 * 1024;
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);
const ALLOWED_EXT = /\.(pdf|jpe?g|png|webp|heic|heif|docx?)$/i;

const text = (formData: FormData, name: string, max = 2000) => String(formData.get(name) ?? "").trim().slice(0, max);
const isBot = (formData: FormData) => text(formData, "website") !== "";

export async function submitClaim(_prev: FormState, formData: FormData): Promise<FormState> {
  const claim = {
    name: text(formData, "name", 120),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 40),
    businessName: text(formData, "businessName", 200),
    policyNumber: text(formData, "policyNumber", 80),
    incidentDate: text(formData, "incidentDate", 20),
    incidentLocation: text(formData, "incidentLocation", 300),
    description: text(formData, "description", 4000),
  };

  const errors: Record<string, string> = {};
  if (!claim.name) errors.name = "Please enter your name.";
  if (!EMAIL_RE.test(claim.email)) errors.email = "Please enter a valid email address.";
  if (!claim.phone) errors.phone = "Please enter a phone number we can reach you on.";
  if (!claim.description) errors.description = "Please briefly describe what happened.";
  if (claim.incidentDate && new Date(claim.incidentDate) > new Date()) errors.incidentDate = "The incident date can’t be in the future.";

  const files = formData.getAll("uploads").filter((f): f is File => f instanceof File && f.size > 0);
  if (files.length > MAX_FILES) errors.uploads = `Please attach up to ${MAX_FILES} files.`;
  else if (files.some((f) => f.size > MAX_FILE_BYTES)) errors.uploads = "Each file needs to be 4 MB or smaller.";
  else if (files.reduce((sum, f) => sum + f.size, 0) > MAX_TOTAL_BYTES) errors.uploads = "Attachments need to total 10 MB or less.";
  else if (files.some((f) => !ALLOWED_TYPES.has(f.type) && !ALLOWED_EXT.test(f.name)))
    errors.uploads = "Please attach PDF, Word or image files (JPG, PNG, HEIC).";

  if (Object.keys(errors).length) return { status: "idle", errors };
  if (isBot(formData)) return { status: "success", name: claim.name.split(" ")[0] };

  console.info("New Kooo claim notification", {
    ...claim,
    uploads: files.map((f) => ({ name: f.name, type: f.type, size: f.size })),
  });

  return { status: "success", name: claim.name.split(" ")[0] };
}

export async function submitReferral(_prev: FormState, formData: FormData): Promise<FormState> {
  const referral = {
    name: text(formData, "name", 120),
    businessName: text(formData, "businessName", 200),
    industry: text(formData, "industry", 120),
    email: text(formData, "email", 200),
    phone: text(formData, "phone", 40),
    message: text(formData, "message", 3000),
  };

  const errors: Record<string, string> = {};
  if (!referral.name) errors.name = "Please enter your name.";
  if (!referral.businessName) errors.businessName = "Please enter your business name.";
  if (!EMAIL_RE.test(referral.email)) errors.email = "Please enter a valid email address.";
  if (!referral.phone) errors.phone = "Please enter your phone number.";
  if (Object.keys(errors).length) return { status: "idle", errors };
  if (isBot(formData)) return { status: "success", name: referral.name.split(" ")[0] };

  console.info("New Kooo referral partner enquiry", referral);

  return { status: "success", name: referral.name.split(" ")[0] };
}
