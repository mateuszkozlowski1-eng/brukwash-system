"use client";

import { useEffect, useState } from "react";
import Mark from "@/components/Mark";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#jak-dzialamy", label: "Jak działamy" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menu mobilne: Escape zamyka, tło nie przewija się pod nakładką
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled && !menuOpen
          ? "border-b border-ink/10 bg-paper/80 backdrop-blur-lg"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Główna nawigacja"
        className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-4 sm:h-20 sm:px-8"
      >
        <a
          href="#"
          aria-label="BrukWash System — strona główna"
          className={`relative z-10 flex items-center gap-2.5 ${menuOpen ? "text-paper" : "text-navy"}`}
        >
          <Mark className="h-8 w-8" />
          <span className="font-display text-[1.35rem] font-extrabold leading-none tracking-tight [font-variation-settings:'wdth'_85]">
            <span className={menuOpen ? "text-paper" : "text-ink"}>Bruk</span>
            <span className="text-jet">Wash</span>
            <span className="eyebrow ml-1.5 align-middle text-[0.6rem] opacity-60">System</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="eyebrow rounded-full px-3.5 py-2 text-ink/75 transition-colors hover:bg-ink/5 hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="relative z-10 flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            aria-label={`Zadzwoń: ${SITE.phoneDisplay}`}
            className="group hidden items-center gap-2.5 rounded-full bg-ink py-2.5 pl-3.5 pr-5 text-paper transition-colors hover:bg-navy sm:flex"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-jet-bright opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-jet-bright" />
            </span>
            <span className="font-mono text-sm font-medium tracking-wide">{SITE.phoneDisplay}</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobilne"
            className={`eyebrow flex h-11 items-center gap-2 rounded-full border px-4 transition-colors lg:hidden ${
              menuOpen ? "border-paper/30 text-paper" : "border-ink/20 text-ink"
            }`}
          >
            <span className="relative block h-2.5 w-4" aria-hidden="true">
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 h-[1.5px] w-4 bg-current transition-transform duration-300 ${
                  menuOpen ? "top-1 -rotate-45" : "top-2"
                }`}
              />
            </span>
            {menuOpen ? "Zamknij" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Menu mobilne — pełnoekranowa nakładka z dużą typografią */}
      <div
        id="menu-mobilne"
        hidden={!menuOpen}
        className="fixed inset-0 flex flex-col justify-between bg-ink px-4 pb-8 pt-24 text-paper sm:px-8 lg:hidden"
      >
        <ul>
          {NAV_LINKS.map((link, i) => (
            <li key={link.href} className="border-b border-paper/10">
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline gap-4 py-4"
              >
                <span className="eyebrow text-jet-bright">0{i + 1}</span>
                <span className="display text-5xl">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-between rounded-2xl bg-jet px-6 py-5 text-white"
        >
          <span className="eyebrow">Zadzwoń</span>
          <span className="display text-3xl">{SITE.phoneDisplay}</span>
        </a>
      </div>
    </header>
  );
}
