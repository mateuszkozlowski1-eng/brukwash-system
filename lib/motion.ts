import type { Variants } from "framer-motion";

// Standardowy wariant dla elementów wjeżdżających przy scroll / wejściu
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Kontener ze staggerem dla list / grup elementów
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

// Wspólne ustawienia viewport dla animacji whileInView
export const inViewport = { once: true, margin: "-50px" } as const;
