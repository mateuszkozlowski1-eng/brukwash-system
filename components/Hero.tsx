import BeforeAfter from "@/components/BeforeAfter";
import { SITE } from "@/lib/site";

const FACTS = ["Wycena 0 zł", "Sprzęt wysokociśnieniowy", "Poprawki bez dopłat"];

export default function Hero() {
  return (
    <section
      id="start"
      aria-labelledby="hero-heading"
      className="relative mx-auto grid max-w-[90rem] gap-10 px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8 lg:pb-12"
    >
      <div className="flex flex-col lg:col-span-7">
        {/* Metadane w stylu tabliczki znamionowej */}
        <div className="eyebrow grid grid-cols-2 gap-4 border-y border-ink/15 py-3 text-stone sm:grid-cols-3">
          <span>
            <span className="text-jet-deep">●</span> Mycie ciśnieniowe
          </span>
          <span className="text-right sm:text-center">
            {SITE.address.city} / Bydgoszcz
          </span>
          <span className="hidden text-right sm:block">Bruk · Elewacje · Ogrodzenia</span>
        </div>

        <h1 id="hero-heading" className="mt-8 sm:mt-12">
          <span className="wash-text display block text-[clamp(3.6rem,9.2vw,8.75rem)]">
            Mycie
            <br />
            bruku
            <br />i elewacji
          </span>
          <span className="eyebrow mt-5 block text-stone">
            — Koronowo, Bydgoszcz i okolice
          </span>
        </h1>

        <p className="mt-8 max-w-[34rem] text-lg leading-relaxed text-ink/80 sm:text-xl">
          Zmywamy mech, glony i lata brudu z kostki brukowej, elewacji
          i ogrodzeń — a potem zabezpieczamy je impregnatem, żeby efekt został
          na dłużej.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={SITE.phoneHref}
            className="group inline-flex items-center justify-between gap-6 rounded-full bg-jet py-2 pl-7 pr-2 text-white transition-colors hover:bg-jet-deep"
          >
            <span className="font-display text-lg font-bold uppercase tracking-wide [font-variation-settings:'wdth'_90]">
              Bezpłatna wycena
            </span>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-jet-deep transition-transform duration-500 ease-wash group-hover:rotate-[-45deg]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          <a
            href="#realizacje"
            className="inline-flex items-center justify-center rounded-full border border-ink/25 px-7 py-4 font-display text-lg font-bold uppercase tracking-wide transition-colors [font-variation-settings:'wdth'_90] hover:border-ink hover:bg-ink hover:text-paper"
          >
            Zobacz realizacje
          </a>
        </div>

        <ul className="eyebrow mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-10 text-stone">
          {FACTS.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="h-px w-4 bg-jet" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5 lg:flex lg:items-end lg:justify-end">
        <div className="w-full lg:max-w-[min(100%,calc((100svh-10rem)*0.75))]">
          <BeforeAfter
            priority
            sizes="(max-width: 1024px) 100vw, 40vw"
            before={{
              src: "/images/podjazd-przed.jpg",
              alt: "Zabrudzony podjazd z kostki brukowej pod wiatą — przed myciem",
            }}
            after={{
              src: "/images/podjazd-po.jpg",
              alt: "Ten sam podjazd z kostki brukowej po myciu ciśnieniowym BrukWash System",
            }}
            caption="Realizacja · podjazd z wiatą · 06/2026"
          />
        </div>
      </div>
    </section>
  );
}
