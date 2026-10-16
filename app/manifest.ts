import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE.name} — mycie kostki brukowej i elewacji`,
    short_name: SITE.name,
    description:
      "Mycie kostki brukowej, elewacji i ogrodzeń oraz impregnacja. Koronowo, Bydgoszcz i okolice.",
    lang: "pl",
    start_url: "/",
    display: "browser",
    background_color: "#efece6",
    theme_color: "#efece6",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
