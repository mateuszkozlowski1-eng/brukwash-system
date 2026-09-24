"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, inViewport } from "@/lib/motion";
import { PHOTOS } from "@/lib/content";

// Rytm bento (8 pozycji, potem powtórka): duży kadr, poziomy, pionowy, poziomy —
// a w drugim bloku lustrzane odbicie. grid-flow-dense domyka luki.
const SPANS = [
  "col-span-2 row-span-2 lg:col-span-5",
  "lg:col-span-4",
  "row-span-2 lg:col-span-3",
  "lg:col-span-4",
  "row-span-2 lg:col-span-3",
  "lg:col-span-4",
  "col-span-2 row-span-2 lg:col-span-5",
  "lg:col-span-4",
];
const INITIAL = 8;

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visible = showAll ? PHOTOS : PHOTOS.slice(0, INITIAL);

  // Natywny <dialog>: pułapka fokusu i Escape „za darmo”
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active !== null && !d.open) d.showModal();
    if (active === null && d.open) d.close();
  }, [active]);

  const step = (dir: 1 | -1) =>
    setActive((i) => (i === null ? i : (i + dir + PHOTOS.length) % PHOTOS.length));

  return (
    <section id="realizacje" aria-labelledby="realizacje-heading" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="grid gap-8 lg:grid-cols-12"
        >
          <p className="eyebrow text-jet-deep lg:col-span-3">(02) — Realizacje</p>
          <div className="lg:col-span-9 lg:flex lg:items-end lg:justify-between lg:gap-12">
            <h2 id="realizacje-heading" className="display text-[clamp(3rem,8vw,7.5rem)]">
              Efekt widać
              <br />
              <span className="text-jet-deep">od razu</span>
            </h2>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-stone lg:mt-0">
              Prawdziwe zdjęcia z naszych zleceń — podjazdy, ścieżki, tarasy
              i elewacje z Koronowa, Bydgoszczy i okolic. Bez filtrów.
            </p>
          </div>
        </motion.div>

        <ul className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-2 grid-flow-dense sm:auto-rows-[15rem] sm:gap-3 lg:auto-rows-[17rem] lg:grid-cols-12">
          {visible.map((photo, i) => (
            <li key={photo.src} className={SPANS[i % SPANS.length]}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Powiększ zdjęcie: ${photo.alt}`}
                className="group relative block h-full w-full overflow-hidden rounded-xl bg-paper-deep"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 40vw"
                  className="object-cover transition-transform duration-[1.2s] ease-wash group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="eyebrow absolute bottom-3 left-3 flex items-center gap-2 text-paper">
                  <span className="text-jet-bright">R/{String(i + 1).padStart(2, "0")}</span>
                  {photo.tag}
                </span>
              </button>
            </li>
          ))}
        </ul>

        {!showAll && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="eyebrow rounded-full border border-ink/25 px-6 py-3.5 transition-colors hover:border-ink hover:bg-ink hover:text-paper"
            >
              Pokaż wszystkie ({PHOTOS.length})
            </button>
          </div>
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={active !== null ? PHOTOS[active].alt : "Podgląd zdjęcia"}
        onClose={() => setActive(null)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        onClick={(e) => e.target === e.currentTarget && setActive(null)}
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none bg-ink/95 p-0 text-paper backdrop:bg-ink/80 backdrop:backdrop-blur-sm"
      >
        {active !== null && (
          <div className="flex h-full flex-col" onClick={(e) => e.target === e.currentTarget && setActive(null)}>
            <div className="flex items-center justify-between px-4 py-4 sm:px-8">
              <span className="eyebrow">
                <span className="text-jet-bright">{String(active + 1).padStart(2, "0")}</span> / {PHOTOS.length}
              </span>
              <button
                type="button"
                onClick={() => setActive(null)}
                className="eyebrow rounded-full border border-paper/30 px-4 py-2.5 hover:bg-paper hover:text-ink"
              >
                Zamknij ✕
              </button>
            </div>
            <div className="relative mx-4 flex-1 sm:mx-20">
              <Image
                key={PHOTOS[active].src}
                src={PHOTOS[active].src}
                alt={PHOTOS[active].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-5 sm:px-8">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Poprzednie zdjęcie"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/30 hover:bg-paper hover:text-ink"
              >
                ←
              </button>
              <p className="text-center text-sm text-paper/75">{PHOTOS[active].alt}</p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Następne zdjęcie"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-paper/30 hover:bg-paper hover:text-ink"
              >
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
