"use client";

import { create } from "zustand";
import type Lenis from "lenis";

type UiState = {
  /** The Lenis smooth-scroll instance, once mounted. */
  lenis: Lenis | null;
  /** True once the preloader / page transition has uncovered the page. */
  ready: boolean;
  menuOpen: boolean;
  setLenis: (lenis: Lenis | null) => void;
  setReady: (ready: boolean) => void;
  setMenuOpen: (open: boolean) => void;
};

export const useUi = create<UiState>((set) => ({
  lenis: null,
  ready: false,
  menuOpen: false,
  setLenis: (lenis) => set({ lenis }),
  setReady: (ready) => set({ ready }),
  setMenuOpen: (menuOpen) => set({ menuOpen }),
}));

export function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
