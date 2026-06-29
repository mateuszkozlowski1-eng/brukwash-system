"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";

// TODO: klient — ZDJĘCIA REALIZACJI: zastąp placeholdery Unsplash właściwymi zdjęciami.
// Zdjęcia zostaną dostarczone przez klienta — placeholder do zastąpienia.
const PHOTOS = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800",
  "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
  "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800",
  "https://images.unsplash.com/photo-1530563885674-66db50a1af19?w=800",
  "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800",
  "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?w=800",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  // Lightbox: zamykanie klawiszem Escape + blokada scrolla tła
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="realizacje" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="text-center"
        >
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight text-navy sm:text-5xl">
            Nasze realizacje
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm italic text-dark/50">
            {/* TODO: klient — placeholdery do zastąpienia */}
            Zdjęcia zostaną dostarczone przez klienta — placeholder do zastąpienia.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PHOTOS.map((src, i) => (
            <motion.button
              key={src}
              variants={fadeInUp}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Powiększ zdjęcie realizacji nr ${i + 1}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={src}
                alt={`Realizacja BrukWash System — zdjęcie ${i + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-navy/0 transition-colors group-hover:bg-navy/20" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox modal */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Zdjęcie realizacji nr ${active + 1}`}
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Zamknij podgląd"
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-3xl leading-none text-white hover:bg-white/20"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </svg>
          </button>
          <div
            className="relative h-[80vh] w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={PHOTOS[active]}
              alt={`Realizacja BrukWash System — zdjęcie ${active + 1} (podgląd)`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
