"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, inViewport } from "@/lib/motion";

// Zdjęcia realizacji BrukWash System (public/images) — kostka brukowa, podjazdy,
// tarasy i elewacje. Zdjęcie tła Hero (przed/po) nie jest tu duplikowane.
const PHOTOS = [
  { src: "/images/IMG20260327095146.jpg", alt: "Mycie ciśnieniowe kostki brukowej — czysty podjazd po renowacji" },
  { src: "/images/Messenger_creation_BDDC1287-525C-49E0-B89E-DD3EDFF33CC2.jpg", alt: "Ścieżka ogrodowa z kostki brukowej po myciu ciśnieniowym" },
  { src: "/images/IMG20260413134519.jpg", alt: "Podjazd z kostki brukowej z czerwonym obramowaniem po czyszczeniu" },
  { src: "/images/IMG20260413111638.jpg", alt: "Kolorowa kostka brukowa po profesjonalnym myciu ciśnieniowym" },
  { src: "/images/IMG20260327163652.jpg", alt: "Mycie tarasu — efekt przed i po czyszczeniu ciśnieniowym" },
  { src: "/images/IMG20260413120422.jpg", alt: "Mycie kostki brukowej agregatem do powierzchni płaskich" },
  { src: "/images/IMG20260331142806.jpg", alt: "Elewacja domu po myciu ciśnieniowym" },
  { src: "/images/IMG20260401093536.jpg", alt: "Czysta elewacja budynku po renowacji" },
  { src: "/images/IMG20260331085115.jpg", alt: "Mycie elewacji domu — usuwanie zabrudzeń i zazielenień" },
  { src: "/images/IMG20260401092139.jpg", alt: "Elewacja domu — efekt przed i po myciu ciśnieniowym" },
  { src: "/images/IMG20260401093638.jpg", alt: "Odświeżona elewacja budynku po czyszczeniu" },
  { src: "/images/IMG20260416074735.jpg", alt: "Ścieżka z kostki brukowej w trakcie mycia ciśnieniowego" },
  { src: "/images/IMG20260518082806.jpg", alt: "Podjazd z kostki brukowej przy żywopłocie po myciu" },
  { src: "/images/IMG20260518152753.jpg", alt: "Czysty podjazd z kostki brukowej wzdłuż żywopłotu" },
  { src: "/images/IMG20260618081833.jpg", alt: "Kostka brukowa przy wiacie po myciu ciśnieniowym" },
  { src: "/images/IMG20260618092744.jpg", alt: "Mycie kostki brukowej przy garażu — efekt po czyszczeniu" },
  { src: "/images/IMG20260618115728.jpg", alt: "Podjazd z kostki brukowej w ogrodzie po renowacji" },
  { src: "/images/Messenger_creation_D14D1FB2-9FD3-4956-8CD9-80CE73157187.jpg", alt: "Ścieżka z kostki brukowej w ogrodzie po myciu ciśnieniowym" },
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
          <p className="mx-auto mt-4 max-w-2xl text-dark/70">
            Zobacz efekty naszej pracy — kostka brukowa, podjazdy, tarasy i elewacje
            przed i po myciu ciśnieniowym.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.src}
              variants={fadeInUp}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Powiększ zdjęcie realizacji: ${photo.alt}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
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
          aria-label={PHOTOS[active].alt}
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
              src={PHOTOS[active].src}
              alt={PHOTOS[active].alt}
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
