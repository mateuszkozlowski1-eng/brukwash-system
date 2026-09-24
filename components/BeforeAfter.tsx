"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: { src: string; alt: string };
  after: { src: string; alt: string };
  caption: string;
  priority?: boolean;
  sizes: string;
};

// Suwak przed/po na prawdziwej parze zdjęć. Linia podziału to „strumień” —
// przeciągasz ją palcem/myszą albo strzałkami (ukryty input range = dostępność).
export default function BeforeAfter({ before, after, caption, priority, sizes }: Props) {
  const frameRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(94);

  // Wejście: lanca „przejeżdża” z prawej do połowy kadru (raz, bez reduced-motion)
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 0 : 1600;
    const start = performance.now() + (reduce ? 0 : 500);
    let raf = 0;
    const tick = (now: number) => {
      const t = duration ? Math.min(Math.max((now - start) / duration, 0), 1) : 1;
      const eased = 1 - Math.pow(1 - t, 4);
      if (!dragging.current) setPos(94 - 44 * eased);
      if (t < 1 && !dragging.current) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const moveTo = useCallback((clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  return (
    <figure className="relative">
      <div
        ref={frameRef}
        className="group relative aspect-[3/4] w-full cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[1.25rem] bg-paper-deep"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          moveTo(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && moveTo(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <Image
          src={after.src}
          alt={after.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="pointer-events-none object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt={before.alt}
            fill
            priority={priority}
            sizes={sizes}
            className="pointer-events-none object-cover"
          />
        </div>

        {/* Etykiety */}
        <span className="eyebrow pointer-events-none absolute left-3 top-3 rounded-full bg-ink/75 px-3 py-1.5 text-paper backdrop-blur-sm">
          Przed
        </span>
        <span className="eyebrow pointer-events-none absolute right-3 top-3 rounded-full bg-paper/85 px-3 py-1.5 text-ink backdrop-blur-sm">
          Po
        </span>

        {/* Linia strumienia + uchwyt */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0"
          style={{ left: `${pos}%` }}
          aria-hidden="true"
        >
          <div className="absolute inset-y-0 -left-px w-[2px] bg-jet-bright shadow-[0_0_24px_4px_rgba(108,192,247,0.55)]" />
          <div className="absolute left-0 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-ink/80 text-paper shadow-xl backdrop-blur-md transition-transform duration-300 group-active:scale-90">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 7-5 5 5 5M15 7l5 5-5 5" />
            </svg>
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={Math.round(pos)}
          onChange={(e) => {
            dragging.current = true;
            setPos(Number(e.target.value));
          }}
          aria-label="Porównanie przed i po myciu — przesuń, aby odsłonić efekt"
          aria-valuetext={`${Math.round(pos)}% kadru przed myciem`}
          className="peer absolute inset-x-0 bottom-0 h-px w-full cursor-ew-resize opacity-0 focus-visible:opacity-0"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[1.25rem] ring-jet-bright ring-offset-0 peer-focus-visible:ring-4" />
      </div>
      <figcaption className="eyebrow mt-3 flex items-center justify-between gap-4 text-stone">
        <span>{caption}</span>
        <span className="hidden sm:inline">← przeciągnij →</span>
      </figcaption>
    </figure>
  );
}
