"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";
import { SITE } from "@/lib/site";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-navy sm:text-5xl">
            Skontaktuj się z nami
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark/70">
            Zadzwoń lub napisz — wycena bezpłatna, odpowiadamy szybko.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {/* Telefon */}
          <motion.a
            variants={fadeInUp}
            href={SITE.phoneHref}
            aria-label={`Zadzwoń: ${SITE.phoneDisplay}`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center rounded-2xl border border-navy/10 bg-light p-10 text-center shadow-md transition-shadow hover:shadow-xl"
          >
            <span className="text-5xl" aria-hidden="true">
              📞
            </span>
            <span className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-navy">
              Telefon
            </span>
            <span className="mt-2 font-display text-3xl font-bold text-blue">
              {SITE.phoneDisplay}
            </span>
          </motion.a>

          {/* Email */}
          <motion.a
            variants={fadeInUp}
            href={SITE.emailHref}
            aria-label={`Napisz e-mail: ${SITE.email}`}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="flex flex-col items-center rounded-2xl border border-navy/10 bg-light p-10 text-center shadow-md transition-shadow hover:shadow-xl"
          >
            <span className="text-5xl" aria-hidden="true">
              ✉️
            </span>
            <span className="mt-4 font-display text-xl font-semibold uppercase tracking-wide text-navy">
              Email
            </span>
            <span className="mt-2 break-all font-display text-2xl font-bold text-blue">
              {SITE.email}
            </span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-10 text-center text-dark/70"
        >
          <p className="text-lg font-medium">Obsługujemy {SITE.area}</p>
          <p className="mt-1 text-base">{SITE.hours}</p>
        </motion.div>
      </div>
    </section>
  );
}
