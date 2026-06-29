"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#dlaczego-my", label: "Dlaczego my" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Navbar scroll effect — tło pojawia się po przekroczeniu 80px
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Główna nawigacja"
      >
        {/* Logo */}
        <a href="#" className="flex items-center" aria-label="BrukWash System — strona główna">
          <Image
            src="/logo.jpg"
            alt="BrukWash System"
            width={180}
            height={180}
            priority
            className="h-12 w-auto rounded-full sm:h-14"
          />
        </a>

        {/* Linki — desktop */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`font-display text-lg font-semibold uppercase tracking-wide transition-colors hover:text-blue ${
                  scrolled ? "text-navy" : "text-white drop-shadow"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA — desktop */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.phoneHref}
            aria-label={`Zadzwoń: ${SITE.phoneDisplay}`}
            className={`font-display text-lg font-semibold tracking-wide transition-colors hover:text-blue ${
              scrolled ? "text-navy" : "text-white drop-shadow"
            }`}
          >
            {SITE.phoneDisplay}
          </a>
          <a
            href={SITE.emailHref}
            aria-label="Napisz do nas e-mail"
            className="rounded-lg bg-blue px-5 py-2.5 font-display text-lg font-semibold tracking-wide text-white shadow-md transition-colors hover:bg-blue-dark"
          >
            Napisz do nas
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className={`lg:hidden ${scrolled || menuOpen ? "text-navy" : "text-white"}`}
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="6" y1="18" x2="18" y2="6" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Menu mobilne */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-light bg-white px-4 pb-6 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-lg px-3 py-3 font-display text-xl font-semibold uppercase tracking-wide text-navy hover:bg-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={SITE.phoneHref}
              aria-label={`Zadzwoń: ${SITE.phoneDisplay}`}
              className="rounded-lg border-2 border-navy px-5 py-3 text-center font-display text-xl font-semibold tracking-wide text-navy"
            >
              📞 {SITE.phoneDisplay}
            </a>
            <a
              href={SITE.emailHref}
              aria-label="Napisz do nas e-mail"
              className="rounded-lg bg-blue px-5 py-3 text-center font-display text-xl font-semibold tracking-wide text-white"
            >
              Napisz do nas
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
