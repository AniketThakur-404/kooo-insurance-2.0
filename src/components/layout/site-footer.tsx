"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP } from "@/lib/gsap";
import { categories, contact, legal, tagline } from "@/content/site";
import { RingsMark } from "@/components/three/rings-mark";
import { RollText } from "@/components/motion/roll-text";
import { FacebookIcon, InstagramIcon } from "@/components/ui/social-icons";

const pages = [
  { label: "Insurance" },
  { label: "Industries" },
  { label: "Claims", href: "/claims" },
  { label: "About Kooo", href: "/about" },
  { label: "Referral Partners", href: "/referral-partners" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const WORDMARK = "Kooo Insurance";

export function SiteFooter() {
  const ref = useRef<HTMLElement>(null);
  const wordBox = useRef<HTMLDivElement>(null);
  const word = useRef<HTMLSpanElement>(null);

  // Size the wordmark so it spans the panel exactly, at every width and once the font loads.
  useEffect(() => {
    const box = wordBox.current;
    const text = word.current;
    if (!box || !text) return;
    // offsetWidth is the untransformed layout width, so the panel's scale animation can't skew it.
    const fit = () => {
      text.style.fontSize = "100px";
      const natural = text.offsetWidth;
      if (natural) text.style.fontSize = `${(100 * box.clientWidth) / natural}px`;
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    ro.observe(box);
    return () => ro.disconnect();
  }, []);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const range = { trigger: ref.current, start: "top bottom", end: "bottom bottom", scrub: 0.8 };
        // The panel grows into its frame and its content settles as the footer scrolls in.
        gsap.fromTo("[data-footer-panel]", { scale: 0.93 }, { scale: 1, ease: "none", scrollTrigger: range });
        gsap.fromTo("[data-footer-inner]", { yPercent: -14 }, { yPercent: 0, ease: "none", scrollTrigger: range });
        // Wordmark letters rise one after another, tied to the scroll.
        gsap.fromTo(
          "[data-footer-char]",
          { yPercent: 105 },
          {
            yPercent: 0,
            ease: "none",
            stagger: 0.06,
            scrollTrigger: { trigger: ref.current, start: "top 70%", end: "bottom bottom", scrub: 0.8 },
          },
        );
      });
    },
    { scope: ref },
  );

  return (
    <footer ref={ref} className="bg-cloud p-2 sm:p-3 md:p-4">
      <div
        data-footer-panel
        className="origin-bottom bg-[linear-gradient(115deg,#15cb8b_0%,#b9efdc_38%,#d6dbe1_72%,#eeeeee_100%)] p-2 will-change-transform md:p-2.5"
      >
        <div className="overflow-hidden bg-navy text-white">
          <div data-footer-inner className="px-6 pb-6 pt-8 will-change-transform md:px-10 md:pt-10">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1fr_1.1fr]">
              <div>
                <RingsMark color="#b9efdc" className="-ml-4 h-28 w-48 md:h-36 md:w-60" />
                <p className="mt-2 max-w-60 font-heading text-2xl leading-snug text-kooo-mint">{tagline}</p>
              </div>

              <nav aria-label="Footer">
                <ul className="space-y-2">
                  {pages.map((p) => (
                    <li key={p.label}>
                      {p.href ? (
                        <Link href={p.href} className="group inline-block text-xl text-kooo-mint md:text-2xl">
                          <RollText text={p.label} />
                        </Link>
                      ) : (
                        <span className="text-xl text-kooo-mint/75 md:text-2xl">
                          {p.label} <span className="ml-1 text-xs text-white/70">Coming soon</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div>
                <p className="mb-3 text-base text-white/70">Insurance solutions · Coming soon</p>
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <span className="text-base text-white/75 md:text-[17px]">{c.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-5 text-base md:text-[17px]">
                <div>
                  <p className="mb-1 text-white/70">Get in touch</p>
                  <a href={contact.phoneHref} className="group block w-fit text-kooo-mint">
                    <RollText text={contact.phone} stagger={10} />
                  </a>
                  <a href={`mailto:${contact.email}`} className="block break-all text-kooo-mint hover:underline">
                    {contact.email}
                  </a>
                  <p className="mt-3 text-white/70">Claims</p>
                  <a href={`mailto:${contact.claimsEmail}`} className="block break-all text-kooo-mint hover:underline">
                    {contact.claimsEmail}
                  </a>
                  <p className="mt-3 text-white/70">Referral partners</p>
                  <a href={`mailto:${contact.partnersEmail}`} className="block break-all text-kooo-mint hover:underline">
                    {contact.partnersEmail}
                  </a>
                </div>
                <div>
                  <p className="mb-1 text-white/70">Visit us</p>
                  <p className="text-white/90">{contact.address}</p>
                </div>
                <div className="flex gap-2">
                  <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="border border-white/25 p-2.5 text-kooo-mint transition-colors hover:bg-kooo-mint hover:text-navy">
                    <FacebookIcon className="size-5" />
                  </a>
                  <a href={contact.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="border border-white/25 p-2.5 text-kooo-mint transition-colors hover:bg-kooo-mint hover:text-navy">
                    <InstagramIcon className="size-5" />
                  </a>
                </div>
              </div>
            </div>

            <div ref={wordBox} className="mt-14 md:mt-20">
              <p className="overflow-hidden whitespace-nowrap pb-[0.06em] text-center font-heading leading-[1.02] text-kooo-mint">
                <span className="sr-only">{WORDMARK}</span>
                <span ref={word} aria-hidden className="inline-flex text-[12vw]">
                  {Array.from(WORDMARK).map((char, i) => (
                    <span key={i} data-footer-char className="inline-block whitespace-pre will-change-transform">
                      {char}
                    </span>
                  ))}
                </span>
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 border-t border-white/15 pt-5 text-xs uppercase tracking-wider text-white/80 md:text-[13px] lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {legal.documents.map((doc) => (
                  <li key={doc.href}>
                    <a href={doc.href} target="_blank" rel="noopener noreferrer" className="hover:text-kooo-mint">
                      {doc.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p>All Rights Reserved | Kooo Insurance</p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-white/65 md:text-[13px]">{legal.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
