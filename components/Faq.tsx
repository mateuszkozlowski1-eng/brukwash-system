import { FAQ } from "@/lib/content";
import { SITE } from "@/lib/site";

// FAQ na natywnych <details> — działa bez JS, a treść jest w HTML dla wyszukiwarek.
// Te same pytania trafiają do JSON-LD FAQPage w app/layout.tsx.
export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-paper-deep/60 py-24 sm:py-32">
      <div className="mx-auto grid max-w-[90rem] gap-12 px-4 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="eyebrow text-jet-deep">(04) — Pytania</p>
          <h2 id="faq-heading" className="display mt-8 text-[clamp(3rem,6vw,5.5rem)]">
            Częste
            <br />
            pytania
          </h2>
          <p className="mt-6 max-w-xs text-lg leading-relaxed text-stone">
            Nie ma tu Twojego pytania?{" "}
            <a href={SITE.phoneHref} className="font-medium text-ink underline decoration-jet decoration-2 underline-offset-4 hover:text-jet-deep">
              Zadzwoń
            </a>{" "}
            — odpowiemy od ręki.
          </p>
        </div>

        <div className="lg:col-span-8">
          {FAQ.map((item, i) => (
            <details
              key={item.q}
              className="group border-t border-ink/15 last:border-b"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 sm:py-7">
                <h3 className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{item.q}</h3>
                <span
                  className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/25 transition-[transform,background-color,color] duration-500 ease-wash group-open:rotate-45 group-open:bg-ink group-open:text-paper"
                  aria-hidden="true"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </summary>
              <p className="max-w-2xl pb-7 text-base leading-relaxed text-stone sm:text-lg">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
