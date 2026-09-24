"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";
import { PROCESS } from "@/lib/content";

const REASONS = [
  {
    title: "Doświadczenie",
    desc: "Kilka lat w branży i setki zrealizowanych zleceń — wiemy, jak dobrać metodę do powierzchni.",
  },
  {
    title: "Profesjonalny sprzęt",
    desc: "Maszyny wysokociśnieniowe, agregat do powierzchni płaskich i środki bezpieczne dla podłoża.",
  },
];

export default function Process() {
  return (
    <section id="jak-dzialamy" aria-labelledby="proces-heading" className="border-t border-ink/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <p className="eyebrow text-jet-deep">(03) — Jak działamy</p>
            <h2 id="proces-heading" className="display mt-8 text-[clamp(3rem,7vw,6.5rem)]">
              Od telefonu
              <br />
              do czystej
              <br />
              kostki
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone">
              Cztery proste kroki. Zawsze wiesz, ile zapłacisz i kiedy
              przyjedziemy.
            </p>
          </div>
        </div>

        <motion.ol
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="lg:col-span-7"
        >
          {PROCESS.map((p, i) => (
            <motion.li
              key={p.title}
              variants={fadeInUp}
              className="group grid grid-cols-[4.5rem_1fr] gap-4 border-t border-ink/15 py-8 sm:grid-cols-[8rem_1fr] sm:py-10"
            >
              <span
                className="display text-5xl text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_var(--color-jet-deep)] group-hover:text-jet-deep sm:text-7xl"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <div>
                <h3 className="display text-3xl sm:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-stone sm:text-lg">{p.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>

      {/* Gwarancja — jedyny mocny blok w kolorze atramentu poza usługami */}
      <motion.div
        id="dlaczego-my"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={inViewport}
        className="mx-auto mt-20 max-w-[90rem] px-4 sm:px-8"
      >
        <div className="relative overflow-hidden rounded-[1.5rem] bg-navy px-6 py-12 text-paper sm:px-12 sm:py-16">
          {/* Umyty pas — ukośny motyw strumienia */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-[140%] w-40 rotate-[18deg] bg-gradient-to-b from-jet/0 via-jet/35 to-jet/0 blur-2xl"
            aria-hidden="true"
          />
          <div className="relative grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-jet-bright">Gwarancja efektu</p>
              <p className="display mt-6 text-[clamp(2.4rem,5vw,4.5rem)]">
                Nie jesteś zadowolony?
                <br />
                <span className="text-jet-bright">Wracamy i poprawiamy</span>
                <br />— bez dopłat.
              </p>
            </div>
            <ul className="grid content-end gap-8 lg:col-span-5">
              {REASONS.map((r) => (
                <li key={r.title} className="border-t border-paper/20 pt-5">
                  <h3 className="display text-2xl">{r.title}</h3>
                  <p className="mt-2 leading-relaxed text-paper/75">{r.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
