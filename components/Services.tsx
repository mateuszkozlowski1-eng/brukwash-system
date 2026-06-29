"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";

const SERVICES = [
  {
    icon: "🧱",
    title: "Mycie bruku i kostki",
    desc: "Usuwamy mech, glony i zabrudzenia z nawierzchni brukowych. Przywracamy pierwotny wygląd bez uszkadzania powierzchni.",
  },
  {
    icon: "🏠",
    title: "Mycie elewacji",
    desc: "Czyszczenie fasad budynków — cegła, tynk, beton. Usuwamy zanieczyszczenia biologiczne i atmosferyczne.",
  },
  {
    icon: "🚧",
    title: "Ogrodzenia",
    desc: "Montaż oraz mycie ogrodzeń. Usuwamy rdzę, mech i zabrudzenia — metal, beton, kamień.",
  },
  {
    icon: "🛡️",
    title: "Impregnacja",
    desc: "Zabezpieczamy oczyszczone powierzchnie impregnatami. Ochrona przed ponownym zarastaniem nawet na kilka lat.",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="bg-light py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-navy sm:text-5xl">
            Co robimy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark/70">
            Kompleksowa pielęgnacja powierzchni zewnętrznych — od mycia po
            długotrwałe zabezpieczenie.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              whileHover={{
                y: -4,
                boxShadow: "0 12px 32px rgba(30,58,95,0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col rounded-2xl border border-navy/10 bg-white p-7 shadow-md"
            >
              <span className="text-4xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-navy">
                {service.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-dark/75">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
