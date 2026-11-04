"use client";

import dynamic from "next/dynamic";

// WebGL only runs in the browser, so skip SSR for the Three.js scene.
export const KoooRingsCanvas = dynamic(() => import("./kooo-rings"), { ssr: false });
