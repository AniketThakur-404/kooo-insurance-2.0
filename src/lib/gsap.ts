"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrambleTextPlugin, useGSAP);
}

/** Shared easing so every reveal feels the same. */
export const EASE_OUT = "power4.out";
export const EASE_IN_OUT = "power3.inOut";

/**
 * "Text loading" effect from the reference: the word first shows as dots,
 * which resolve into its letters from left to right.
 */
export function scrambleIn(target: Element, text: string, duration = 0.9) {
  return gsap.to(target, {
    duration,
    ease: "none",
    scrambleText: { text, chars: ".", speed: 0.5, revealDelay: duration * 0.25, tweenLength: false },
  });
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
