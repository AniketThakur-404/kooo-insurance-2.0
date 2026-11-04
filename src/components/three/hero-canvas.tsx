"use client";

import dynamic from "next/dynamic";

// WebGL only runs in the browser, so skip SSR for the Three.js scene.
export const HeroCanvas = dynamic(() => import("./hero-scene"), { ssr: false });
