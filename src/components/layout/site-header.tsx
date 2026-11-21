"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { gsap, useGSAP, EASE_OUT } from "@/lib/gsap";
import { useUi } from "@/lib/ui-store";
import { categories, contact, tagline } from "@/content/site";
import { KoooLogo } from "@/components/brand/kooo-logo";
import { RollText } from "@/components/motion/roll-text";
import { cn } from "@/lib/utils";

const menuLinks = [
  { label: "Insurance" },
  { label: "Industries" },
  { label: "Claims", href: "/claims" },
  { label: "About Kooo", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const menuOpen = useUi((s) => s.menuOpen);
  const setMenuOpen = useUi((s) => s.setMenuOpen);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const lenis = useUi.getState().lenis;
    if (menuOpen) lenis?.stop();
    else if (useUi.getState().ready) lenis?.start();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen, setMenuOpen]);

  // Explicit four-value insets on both ends (browsers shorten computed clip-paths, which breaks the wipe).
  const hasOpened = useRef(false);
  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;
      if (menuOpen) {
        hasOpened.current = true;
        gsap
          .timeline()
          .set(menu, { visibility: "visible" })
          .fromTo(menu, { clipPath: "inset(0% 0% 100% 0%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.8, ease: "power4.inOut" })
          .fromTo("[data-menu-link]", { yPercent: 110 }, { yPercent: 0, duration: 0.9, stagger: 0.06, ease: EASE_OUT }, "-=0.35")
          .fromTo("[data-menu-fade]", { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.04 }, "<0.2");
      } else if (hasOpened.current) {
        gsap
          .timeline()
          .fromTo(menu, { clipPath: "inset(0% 0% 0% 0%)" }, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.65, ease: "power3.inOut" })
          .set(menu, { visibility: "hidden" });
      }
    },
    { dependencies: [menuOpen], scope: menuRef },
  );

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
        <div className="flex items-start justify-between px-4 pt-4 md:px-8 md:pt-6">
          <Link
            href="/"
            aria-label="Kooo Insurance home"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "pointer-events-auto rounded-xl px-3 py-2 transition-[background-color,color,box-shadow] duration-500",
              menuOpen
                ? "text-kooo-mint"
                : scrolled
                  ? "bg-cloud/85 text-navy shadow-sm backdrop-blur-md"
                  : "text-navy",
            )}
          >
            <KoooLogo className="h-11 w-auto md:h-12" title="" />
          </Link>

          <div className="pointer-events-auto mt-2 flex items-center gap-2">
          {/* Phone and quote stay in reach on tablets and up; phones get the bottom bar instead. */}
          <a
            href={contact.phoneHref}
            className={cn(
              "hidden h-11 items-center gap-2 px-4 font-button text-base font-medium transition-colors duration-500 md:inline-flex",
              menuOpen ? "text-kooo-mint" : scrolled ? "bg-cloud/85 text-navy backdrop-blur-md" : "text-navy",
            )}
          >
            <Phone className="size-4" aria-hidden />
            {contact.phone}
          </a>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={cn(
              "group hidden h-11 items-center px-5 font-button text-base font-medium transition-colors duration-500 md:inline-flex",
              menuOpen ? "border border-kooo-mint/60 text-kooo-mint hover:bg-kooo-mint hover:text-navy" : "border border-navy bg-white/70 text-navy hover:bg-navy hover:text-white",
            )}
          >
            <RollText text="Request a Quote" />
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            className={cn(
              "group flex h-11 items-center gap-3 px-5 font-button text-base font-medium transition-colors duration-500",
              menuOpen ? "bg-kooo-mint text-navy" : "bg-navy text-white hover:bg-navy-deep",
            )}
          >
            <RollText key={menuOpen ? "close" : "menu"} text={menuOpen ? "Close" : "Menu"} />
            <span aria-hidden className="relative block h-3 w-5">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-500",
                  menuOpen ? "top-1/2 rotate-45" : "top-0.5",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-500",
                  menuOpen ? "top-1/2 -rotate-45" : "bottom-0.5",
                )}
              />
            </span>
          </button>
          </div>
        </div>
      </header>

      {/* Phones: call and quote always one tap away. */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px bg-navy/20 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_-12px_rgba(6,20,46,0.4)] transition-transform duration-500 md:hidden",
          menuOpen && "translate-y-full",
        )}
      >
        <a href={contact.phoneHref} className="flex h-14 items-center justify-center gap-2 bg-white font-button font-medium text-navy">
          <Phone className="size-4" aria-hidden />
          Call {contact.phone}
        </a>
        <Link href="/contact" className="flex h-14 items-center justify-center bg-navy font-button font-medium text-white">
          Request a Quote
        </Link>
      </div>

      <div
        ref={menuRef}
        id="site-menu"
        inert={!menuOpen}
        className="invisible fixed inset-0 z-40 flex flex-col bg-navy text-kooo-mint [clip-path:inset(0%_0%_100%_0%)]"
        data-lenis-prevent
      >
        <div className="mx-auto grid w-full flex-1 content-center gap-12 px-6 pb-10 pt-32 md:px-8 lg:grid-cols-[1.4fr_1fr]">
          <nav aria-label="Main">
            <ul className="menu-list space-y-1">
              {menuLinks.map((link) => (
                <li key={link.label} className="overflow-hidden transition-opacity duration-500">
                  {link.href ? (
                    <Link
                      href={link.href}
                      data-menu-link
                      onClick={() => setMenuOpen(false)}
                      className="group block w-fit font-heading text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[1.1] text-kooo-mint"
                    >
                      <RollText text={link.label} stagger={14} />
                    </Link>
                  ) : (
                    <span data-menu-link className="flex items-baseline gap-x-4 font-heading text-[clamp(1.75rem,5.5vw,3.75rem)] leading-[1.1] text-kooo-mint/75">
                      {link.label} <span className="font-button text-xs text-white/70 sm:text-sm">Coming soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="self-end">
            <p data-menu-fade className="mb-4 text-sm uppercase tracking-[0.2em] text-white/70">
              Insurance solutions · Coming soon
            </p>
            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {categories.map((c) => (
                <li key={c.slug} data-menu-fade>
                  <span className="text-lg text-white/75 md:text-xl">{c.name}</span>
                </li>
              ))}
            </ul>
            <ul data-menu-fade className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-base text-white/75">
              {[
                { label: "Referral Partners", href: "/referral-partners" },
                { label: "FAQs", href: "/faqs" },
                { label: "Notify us of a claim", href: "/claims#notify" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} onClick={() => setMenuOpen(false)} className="hover:text-kooo-mint">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div data-menu-fade className="flex flex-col gap-2 px-6 pb-8 text-base text-white/75 sm:flex-row sm:justify-between md:px-8">
          <p>{tagline}</p>
          <p className="flex flex-wrap gap-x-6">
            <a href={contact.phoneHref} className="hover:text-kooo-mint">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="hover:text-kooo-mint">{contact.email}</a>
          </p>
        </div>
      </div>
    </>
  );
}
