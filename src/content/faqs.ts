import type { FaqItem } from "@/components/home/faq";
import { contact, legal } from "./site";

const doc = (label: string) => legal.documents.find((d) => d.label === label)!;

// General questions for the central FAQs page. Page-specific questions live on each product and industry page.
export const generalFaqs: FaqItem[] = [
  {
    category: "Using a broker",
    question: "What does an insurance broker do?",
    answer: "A broker works with you to understand what you want to insure, approaches insurers on your behalf, explains the options available and arranges the cover you choose. We also help at renewal and if you need to make a claim.",
  },
  {
    category: "Using a broker",
    question: "How is Kooo paid?",
    answer: "Brokers are generally paid a commission by the insurer and may also charge a broker fee. Any fees are disclosed to you before you go ahead. Our Financial Services Guide explains how we’re paid.",
    links: [{ label: "Financial Services Guide (PDF)", href: doc("Financial Services Guide").href }],
  },
  {
    category: "Using a broker",
    question: "Is the information on this website advice for my situation?",
    answer: "No. Information on this website is general in nature and doesn’t take your objectives, financial situation or needs into account. Please read the relevant Product Disclosure Statement and policy wording, and talk to us before making a decision.",
  },
  {
    category: "Using a broker",
    question: "Which insurers do you work with?",
    answer: "Kooo works with a broad panel of insurers and underwriting agencies. A selection of them is shown on our home page.",
    links: [{ label: "See insurers we work with", href: "/#insurers" }],
  },
  {
    category: "Getting a quote",
    question: "What do I need to request a quote?",
    answer: "Generally your contact details, a description of your business or what you want to insure, when you’d like cover to start, and any current policy or claims history. If you don’t have everything, contact us anyway and we’ll guide you.",
    links: [{ label: "Request a quote", href: "/contact" }],
  },
  {
    category: "Getting a quote",
    question: "Can I ask about both business and personal cover?",
    answer: "Yes. Tell us about your business, home or vehicles when you get in touch so we can talk through the options.",
  },
  {
    category: "Getting a quote",
    question: "Can I work with Kooo outside Sydney?",
    answer: "Yes. Our team is based in Bella Vista, NSW, and works with businesses and families across Australia.",
  },
  {
    category: "Getting a quote",
    question: "What if I don’t know which insurance to ask about?",
    answer: "Select Other on the contact form and describe what you want to insure. Our team will help you find a starting point.",
    links: [{ label: "Open the contact form", href: "/contact" }],
  },
  {
    category: "Claims",
    question: "How do I make a claim?",
    answer: "Contact our claims team or notify us online. Have your policy number and a short description of what happened ready if you can, but you can contact us without them.",
    links: [
      { label: "Claims support", href: "/claims" },
      { label: contact.claimsEmail, href: `mailto:${contact.claimsEmail}` },
      { label: `Call ${contact.phone}`, href: contact.phoneHref },
    ],
  },
  {
    category: "Claims",
    question: "Does notifying Kooo mean my claim is accepted?",
    answer: "No. Notifying us starts the process. Your insurer assesses each claim under the terms of your policy and makes the decision. We support you along the way.",
  },
  {
    category: "Contact & documents",
    question: "How can I get in touch with Kooo?",
    answer: "Call or email our team, or send an enquiry and we’ll come back to you.",
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
    links: legal.documents.map((d) => ({ label: `${d.label} (PDF)`, href: d.href })),
  },
  {
    category: "Contact & documents",
    question: "How do I make a complaint?",
    answer: "Please tell us first so we can try to resolve it. Our complaints document explains the process, including how to contact the Australian Financial Complaints Authority (AFCA) if a complaint isn’t resolved.",
    links: [{ label: "Complaints (PDF)", href: doc("Complaints").href }],
  },
  {
    category: "Contact & documents",
    question: "Can I get extra support?",
    answer: "Yes. If you’d like extra help, for example because of illness, financial hardship, language or accessibility needs, let us know. Our supporting vulnerable clients document explains how we can help.",
    links: [{ label: "Supporting Vulnerable Clients (PDF)", href: doc("Supporting Vulnerable Clients").href }],
  },
  {
    category: "Referral partners",
    question: "How can my business refer clients to Kooo?",
    answer: "We work with accountants, finance and business brokers, vehicle dealers, property professionals and others. Get in touch to talk about how referrals could work.",
    links: [
      { label: "Referral Partners", href: "/referral-partners" },
      { label: contact.partnersEmail, href: `mailto:${contact.partnersEmail}` },
    ],
  },
];
