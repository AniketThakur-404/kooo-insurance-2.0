"use server";

export type EnquiryState = {
  status: "idle" | "success" | "error";
  errors?: Partial<Record<"firstName" | "lastName" | "email" | "phone", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const field = (name: string) => String(formData.get(name) ?? "").trim();

  const enquiry = {
    firstName: field("firstName"),
    lastName: field("lastName"),
    email: field("email"),
    phone: field("phone"),
    businessName: field("businessName"),
    abn: field("abn"),
    insuranceType: field("insuranceType"),
    message: field("message"),
  };

  const errors: EnquiryState["errors"] = {};
  if (!enquiry.firstName) errors.firstName = "Please enter your first name.";
  if (!enquiry.lastName) errors.lastName = "Please enter your last name.";
  if (!EMAIL_RE.test(enquiry.email)) errors.email = "Please enter a valid email address.";
  if (!enquiry.phone) errors.phone = "Please enter your phone number.";
  if (Object.keys(errors).length) return { status: "idle", errors };

  // TODO: deliver the enquiry (email service such as Resend, or the team's CRM).
  // Until that is wired up, submissions are only logged on the server.
  console.info("New Kooo enquiry", enquiry);

  return { status: "success" };
}
