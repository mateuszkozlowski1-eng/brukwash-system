"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { SERVICES } from "@/lib/content";

const FULL = "inset(0% 0% 0% 0%)";

// Usługi jako scroll-story: numerowane pozycje przewijają się po lewej,
// a przyklejona rama po prawej „zmywa” zdjęcia pasem od góry / od dołu
// (wzorowane na BYQ Sticky Media Swap, odtworzone na framer-motion).
export default function Services() {
  const stepRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [layers, setLayers] = useState([{ idx: 0, key: 0 }]);
  const reduce = useReducedMotion();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const i = Number((e.target as HTMLElement).dataset.index);
          setActive(i);
          setLayers((prev) => {
            const top = prev[prev.length - 1];
            if (top.idx === i) return prev;
            return [top, { idx: i, key: top.key + 1 }];
          });
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section id="uslugi" aria-labelledby="uslugi-heading" className="bg-ink text-paper">
      <div className="mx-auto max-w-[90rem] px-4 pb-10 pt-24 sm:px-8 sm:pt-32">
        <div className="grid gap-8 border-b border-paper/15 pb-12 lg:grid-cols-12">
          <p className="eyebrow text-jet-bright lg:col-span-3">(01) — Usługi</p>
          <div className="lg:col-span-9">
            <h2 id="uslugi-heading" className="display text-[clamp(3rem,8vw,7.5rem)]">
              Co myjemy
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
              Kompleksowa pielęgnacja powierzchni zewnętrznych — od mycia
              ciśnieniowego kostki brukowej i elewacji, przez ogrodzenia, po
              impregnację, która chroni efekt na lata.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 lg:gap-12">
          <ol className="lg:col-span-6">
            {SERVICES.map((s, i) => {
              const isActive = active === i;
              return (
                <li
                  key={s.id}
                  id={s.id}
                  data-index={i}
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="border-b border-paper/10 py-12 last:border-b-0 lg:flex lg:min-h-[85svh] lg:items-center lg:border-b-0 lg:py-0"
                >
                  <article
                    className={`grid grid-cols-[auto_1fr] gap-x-5 transition-opacity duration-700 ease-wash sm:gap-x-8 ${
                      isActive ? "lg:opacity-100" : "lg:opacity-30"
                    }`}
                  >
                    <span
                      className={`eyebrow pt-2 transition-colors duration-500 ${
                        isActive ? "text-jet-bright" : "text-paper/60"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <div>
                      <p className="eyebrow text-paper/50">{s.short}</p>
                      <h3 className="display mt-3 text-[clamp(2.5rem,5.5vw,5rem)]">{s.title}</h3>
                      <p className="mt-5 max-w-[36ch] text-base leading-relaxed text-paper/75 sm:text-lg">
                        {s.desc}
                      </p>
                      <ul className="mt-6 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <li
                            key={t}
                            className="eyebrow rounded-full border border-paper/20 px-3 py-1.5 text-paper/80"
                          >
                            {t}
                          </li>
                        ))}
                      </ul>
                      {/* Zdjęcie w treści — tylko mobile/tablet */}
                      <div className="relative mt-8 aspect-[4/3] overflow-hidden rounded-2xl lg:hidden">
                        <Image
                          src={s.img}
                          alt={s.alt}
                          fill
                          sizes="100vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ol>

          {/* Przyklejona rama ze zdjęciami — desktop */}
          <div className="hidden lg:col-span-6 lg:block" aria-hidden="true">
            <div className="sticky top-24 h-[calc(100svh-8rem)] overflow-hidden rounded-[1.25rem] border border-paper/10 bg-ink-soft [isolation:isolate]">
              {layers.map((layer, n) => {
                const s = SERVICES[layer.idx];
                const fromTop = layer.key % 2 === 1;
                const isIncoming = n === layers.length - 1 && layer.key > 0;
                return (
                  <motion.div
                    key={layer.key}
                    className="absolute inset-0"
                    style={{ zIndex: n + 1 }}
                    initial={
                      isIncoming && !reduce
                        ? {
                            clipPath: fromTop ? "inset(0% 0% 100% 0%)" : "inset(100% 0% 0% 0%)",
                            scale: 1.12,
                          }
                        : false
                    }
                    animate={{ clipPath: FULL, scale: 1 }}
                    transition={{
                      clipPath: { duration: 0.85, ease: [0.65, 0, 0.35, 1] },
                      scale: { duration: 1.25, ease: [0.33, 1, 0.68, 1] },
                    }}
                  >
                    <Image
                      src={s.img}
                      alt=""
                      fill
                      sizes="50vw"
                      className="object-cover"
                    />
                  </motion.div>
                );
              })}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex items-end justify-between bg-gradient-to-t from-ink/80 to-transparent p-6 pt-24">
                <span className="display text-3xl">{SERVICES[active].title}</span>
                <span className="eyebrow text-jet-bright">
                  0{active + 1} / 0{SERVICES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
