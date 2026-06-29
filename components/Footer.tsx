import Image from "next/image";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="BrukWash System"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full"
          />
          <span className="font-display text-xl font-semibold uppercase tracking-wide">
            {SITE.name}
          </span>
        </div>

        <p className="text-center text-sm text-white/60">
          © 2025 {SITE.name}. Wszelkie prawa zastrzeżone.
        </p>

        <nav aria-label="Linki stopki">
          {/* TODO: klient — docelowy odnośnik do polityki prywatności */}
          <a
            href="#"
            className="text-sm text-white/60 underline-offset-4 transition-colors hover:text-white hover:underline"
          >
            Polityka prywatności
          </a>
        </nav>
      </div>
    </footer>
  );
}
