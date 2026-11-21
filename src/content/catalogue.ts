import type { Industry, IndustrySlug, Product, ProductSlug } from "./catalogue-types";
import { productsA } from "./products/products-a";
import { productsB } from "./products/products-b";
import { productsC } from "./products/products-c";
import { industriesA } from "./industries/industries-a";
import { industriesB } from "./industries/industries-b";

export * from "./catalogue-types";

export const products: Product[] = [...productsA, ...productsB, ...productsC];
export const industries: Industry[] = [...industriesA, ...industriesB];

export const productHref = (slug: ProductSlug) => `/insurance/${slug}`;
export const industryHref = (slug: IndustrySlug) => `/industries/${slug}`;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);

export const productsInCategory = (category: string) => products.filter((p) => p.category === category);

/**
 * Category list items (from site.ts) that have their own product page.
 * Keyed by the item title as written on the category pages.
 */
export const productForCoverItem: Record<string, ProductSlug> = {
  "Business Package Insurance": "business-insurance",
  "Public Liability Insurance": "public-liability-insurance",
  "Product Liability Insurance": "product-liability-insurance",
  "Professional Indemnity Insurance": "professional-indemnity-insurance",
  "Management Liability Insurance": "management-liability-insurance",
  "Cyber Insurance": "cyber-insurance",
  "Directors and Officers Insurance (D&O)": "directors-and-officers-insurance",
  "Business Interruption Insurance": "business-interruption-insurance",
  "Commercial Property Insurance": "commercial-property-insurance",
  "Commercial Motor and Fleet Insurance": "fleet-insurance",
  "Tools and Portable Equipment": "tools-and-equipment-insurance",
  "Marine Cargo and Transit Insurance": "marine-cargo-insurance",
  "Contract Works Insurance": "contract-works-insurance",
  "Tools and Equipment Insurance": "tools-and-equipment-insurance",
  "Commercial Motor and Ute Insurance": "commercial-motor-insurance",
  "Plant and Machinery Insurance": "plant-and-machinery-insurance",
  "Commercial Motor Insurance": "commercial-motor-insurance",
  "Fleet Insurance": "fleet-insurance",
  "Heavy Vehicle and Truck Insurance": "truck-insurance",
  "Goods in Transit Insurance": "goods-in-transit-insurance",
  "Downtime and Business Interruption Insurance": "business-interruption-insurance",
  "Event Insurance": "event-insurance",
  "Vacant Building Insurance": "unoccupied-property-insurance",
  "Strata Insurance": "commercial-strata-insurance",
  "Car Yards and Dealerships": "motor-trades-insurance",
  "Landlord Insurance": "landlord-insurance",
};
