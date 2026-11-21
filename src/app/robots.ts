import type { MetadataRoute } from "next";

// Draft and preview deployments stay out of search results. Set SITE_INDEXING=true
// only on the live koooinsurance.com.au deployment.
export default function robots(): MetadataRoute.Robots {
  if (process.env.SITE_INDEXING !== "true") {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://www.koooinsurance.com.au/sitemap.xml",
  };
}
