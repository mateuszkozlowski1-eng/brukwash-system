"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontakt" aria-labelledby="kontakt-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="grid gap-8 lg:grid-cols-12"
        >
          <p className="eyebrow text-jet-deep lg:col-span-3">(05) — Kontakt</p>
          <div className="lg:col-span-9">
            <h2 id="kontakt-heading" className="max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              Umów bezpłatną wycenę. Zadzwoń albo wyślij zdjęcia —
              odpowiadamy szybko.
            </h2>
          </div>
        </motion.div>

        {/* Numer telefonu jako główny element typograficzny sekcji */}
        <motion.a
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          href={SITE.phoneHref}
          aria-label={`Zadzwoń: ${SITE.phoneDisplay}`}
          className="group relative mt-12 block border-y border-ink/15 py-6 sm:mt-16 sm:py-10"
        >
          <span className="eyebrow flex items-center justify-between text-stone">
            <span>Telefon</span>
            <span className="transition-transform duration-500 ease-wash group-hover:translate-x-1">
              Zadzwoń teraz →
            </span>
          </span>
          <span className="display relative mt-4 block whitespace-nowrap text-[clamp(3.4rem,15.5vw,15rem)] leading-[0.8] transition-colors duration-500 group-hover:text-jet-deep">
            {SITE.phoneDisplay}
          </span>
          <span
            className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-jet transition-transform duration-700 ease-wash group-hover:scale-x-100"
            aria-hidden="true"
          />
        </motion.a>

        <motion.address
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-4 grid not-italic sm:grid-cols-2 lg:grid-cols-4"
        >
          <motion.a
            variants={fadeInUp}
            href={SITE.emailHref}
            className="group border-b border-ink/15 py-6 sm:pr-6 lg:border-b-0 lg:border-r"
          >
            <span className="eyebrow text-stone">E-mail</span>
            <span className="mt-3 block break-all text-lg font-medium group-hover:text-jet-deep">
              {SITE.email}
            </span>
          </motion.a>
          <motion.a
            variants={fadeInUp}
            href={SITE.mapsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group border-b border-ink/15 py-6 sm:pl-6 lg:border-b-0 lg:border-r lg:px-6"
          >
            <span className="eyebrow text-stone">Adres ↗</span>
            <span className="mt-3 block text-lg font-medium group-hover:text-jet-deep">
              {SITE.address.street}
              <br />
              {SITE.address.postal} {SITE.address.city}
            </span>
          </motion.a>
          <motion.div variants={fadeInUp} className="border-b border-ink/15 py-6 sm:pr-6 sm:border-b-0 lg:border-r lg:px-6">
            <span className="eyebrow text-stone">Godziny</span>
            <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-lg font-medium">
              {SITE.hours.map((h) => (
                <div key={h.label} className="contents">
                  <dt className="text-stone">{h.label}</dt>
                  <dd>{h.time}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
          <motion.div variants={fadeInUp} className="py-6 sm:pl-6">
            <span className="eyebrow text-stone">Obszar</span>
            <p className="mt-3 text-lg font-medium">{SITE.areas.join(", ")} i okolice</p>
          </motion.div>
        </motion.address>
      </div>
    </section>
  );
}
