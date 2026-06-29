"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SITE } from "@/lib/site";

export default function Hero() {
  const reduce = useReducedMotion();

  // Stagger wejścia — wyłączany przy prefers-reduced-motion
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.15 },
    },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Tło — zdjęcie realizacji */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600"
        alt="Mycie ciśnieniowe powierzchni zewnętrznej"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Ciemna nakładka w kolorze granatu */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30,58,95,0.75)" }}
        aria-hidden="true"
      />

      {/* Treść */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white sm:px-6"
      >
        <motion.h1
          variants={item}
          className="font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Czyste powierzchnie.
          <br />
          Solidna robota.
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/90 sm:text-xl md:text-2xl"
        >
          Mycie bruku, elewacji i ogrodzeń — Koronowo i okolice
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={SITE.phoneHref}
            aria-label={`Zadzwoń teraz: ${SITE.phoneDisplay}`}
            className="w-full rounded-lg bg-blue px-8 py-4 font-display text-xl font-semibold uppercase tracking-wide text-white shadow-lg transition-colors hover:bg-blue-dark sm:w-auto"
          >
            Zadzwoń teraz
          </a>
          <a
            href="#uslugi"
            className="w-full rounded-lg border-2 border-white px-8 py-4 font-display text-xl font-semibold uppercase tracking-wide text-white transition-colors hover:bg-white hover:text-navy sm:w-auto"
          >
            Nasze usługi
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
