"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

// Przyklejony przycisk „Zadzwoń” na telefonach — pojawia się po zjechaniu z Hero.
export default function MobileCallBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={SITE.phoneHref}
      aria-label={`Zadzwoń: ${SITE.phoneDisplay}`}
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={`fixed inset-x-3 bottom-3 z-40 flex items-center justify-between rounded-full bg-jet py-2 pl-6 pr-2 text-white shadow-[0_12px_40px_-8px_rgba(13,24,36,0.5)] transition-[transform,opacity] duration-500 ease-wash sm:hidden ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-24 opacity-0"
      }`}
    >
      <span className="eyebrow">Bezpłatna wycena</span>
      <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 font-mono text-sm font-medium text-jet-deep">
        {SITE.phoneDisplay}
      </span>
    </a>
  );
}
