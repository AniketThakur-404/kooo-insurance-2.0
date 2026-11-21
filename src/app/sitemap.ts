import type { MetadataRoute } from "next";

const SITE = "https://www.koooinsurance.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/claims",
    "/about",
    "/referral-partners",
    "/faqs",
    "/contact",
  ];
  return pages.map((path) => ({ url: `${SITE}${path === "/" ? "" : path}` }));
}
