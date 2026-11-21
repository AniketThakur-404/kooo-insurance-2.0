// Shared shapes for insurance product pages (/insurance/<slug>) and industry pages (/industries/<slug>).
// All copy is general information only, in Australian English. It is drafted for the client's
// review before publication.

export const productSlugs = [
  // Business
  "business-insurance",
  "public-liability-insurance",
  "professional-indemnity-insurance",
  "cyber-insurance",
  "commercial-property-insurance",
  "management-liability-insurance",
  "directors-and-officers-insurance",
  "product-liability-insurance",
  "business-interruption-insurance",
  "personal-accident-and-sickness-insurance",
  "marine-cargo-insurance",
  // Truck & fleet
  "truck-insurance",
  "fleet-insurance",
  "commercial-motor-insurance",
  "goods-in-transit-insurance",
  "carriers-liability-insurance",
  // Trades & construction
  "contract-works-insurance",
  "plant-and-machinery-insurance",
  "tools-and-equipment-insurance",
  // Industry
  "commercial-strata-insurance",
  "motor-trades-insurance",
  // Specialty
  "unoccupied-property-insurance",
  "farm-and-rural-insurance",
  "event-insurance",
  // Personal
  "landlord-insurance",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

export const industrySlugs = [
  "transport-and-logistics",
  "trades-and-construction",
  "professional-services",
  "food-and-hospitality",
  "grocery-and-retail",
  "fuel-and-automotive",
  "education",
  "health-and-care",
  "places-of-worship-and-community",
  "accommodation",
  "caravan-parks-and-tourism",
  "beauty-and-personal-services",
  "fitness-and-recreation",
  "manufacturing-and-distribution",
  "property",
  "agriculture-and-rural",
] as const;

export type IndustrySlug = (typeof industrySlugs)[number];

/** Slugs of the six existing category pages, which keep their current addresses (/<slug>). */
export type CategorySlug =
  | "businessinsurance"
  | "tradesconstructioninsurance"
  | "truckfleetinsurance"
  | "specialtyinsurance"
  | "industryinsurance"
  | "personalinsurance";

export type PageFaq = { question: string; answer: string };
export type TitledText = { title: string; text: string };

export type Product = {
  slug: ProductSlug;
  /** Full product name, used in the H1, page title and links, e.g. "Public Liability Insurance". */
  name: string;
  /** The big animated title in two halves, each 12 characters or fewer, e.g. ["Public", "Liability"]. */
  titleWords: [string, string];
  category: CategorySlug;
  /** One of the photos in /public/images/photos. */
  image: string;
  /** Search result description, 150–160 characters. */
  metaDescription: string;
  /** One sentence for cards and lists. */
  summary: string;
  /** Two or three sentences under the page title. */
  intro: string;
  /** One paragraph: what this insurance generally is. */
  overview: string;
  /** Who it is generally relevant to: 4–7 short items. */
  whoFor: string[];
  /** Common business activities and risks: 4–6 items. */
  risks: TitledText[];
  /** Insurance options and policy sections that may be available through Kooo: 4–7 items. */
  options: TitledText[];
  /** Important limitations and considerations: 4–6 items. */
  considerations: string[];
  /** Information generally needed for a quote: 5–8 items. */
  quoteInfo: string[];
  /** How Kooo assists with this insurance and with claims: one paragraph. */
  howWeHelp: string;
  /** Page-specific questions: 3–5. */
  faqs: PageFaq[];
  relatedProducts: ProductSlug[];
  relatedIndustries: IndustrySlug[];
};

export type Industry = {
  slug: IndustrySlug;
  /** e.g. "Transport and Logistics". */
  name: string;
  /** The big animated title in two halves, each 12 characters or fewer. */
  titleWords: [string, string];
  image: string;
  metaDescription: string;
  summary: string;
  intro: string;
  /** The businesses and audiences this page is for (from the client's industry table). */
  audiences: string[];
  /** Common business activities and the risks that come with them: 4–6 items. */
  risks: TitledText[];
  /** Insurance options commonly considered. Link to a product page with `product` where one exists. */
  insurance: { title: string; text: string; product?: ProductSlug }[];
  considerations: string[];
  quoteInfo: string[];
  howWeHelp: string;
  faqs: PageFaq[];
  relatedIndustries: IndustrySlug[];
};
