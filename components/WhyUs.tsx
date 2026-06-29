"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";

const POINTS = [
  {
    icon: "✅",
    title: "Doświadczenie",
    desc: "Kilka lat w branży i setki zrealizowanych zleceń — wiemy, jak dobrać metodę do powierzchni.",
  },
  {
    icon: "✅",
    title: "Sprzęt profesjonalny",
    desc: "Maszyny wysokociśnieniowe i certyfikowane środki — skuteczne, a zarazem bezpieczne dla podłoża.",
  },
  {
    icon: "✅",
    title: "Gwarancja efektów",
    desc: "Jeśli nie jesteś zadowolony — wracamy i poprawiamy bez dodatkowych kosztów.",
  },
];

export default function WhyUs() {
  return (
    <section id="dlaczego-my" className="bg-navy py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="text-center font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl"
        >
          Dlaczego my
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3"
        >
          {POINTS.map((point) => (
            <motion.div
              key={point.title}
              variants={fadeInUp}
              className="text-center"
            >
              <span className="text-4xl" aria-hidden="true">
                {point.icon}
              </span>
              <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-wide text-blue">
                {point.title}
              </h3>
              <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-white/80">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
