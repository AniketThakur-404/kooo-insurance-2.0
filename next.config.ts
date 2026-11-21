import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async rewrites() {
    // Keep draft pages in place while the public catalogue is paused.
    return {
      beforeFiles: [
        "/insurance/:path*",
        "/industries/:path*",
        "/insurancesolutions",
        "/businessinsurance",
        "/tradesconstructioninsurance",
        "/truckfleetinsurance",
        "/specialtyinsurance",
        "/industryinsurance",
        "/personalinsurance",
      ].map((source) => ({ source, destination: "/coming-soon" })),
      afterFiles: [],
      fallback: [],
    };
  },
  experimental: {
    // Claim notifications can include supporting files (up to 10 MB in total, checked in the action).
    serverActions: { bodySizeLimit: "11mb" },
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
