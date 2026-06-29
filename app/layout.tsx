import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

// Nagłówki — industrialny, mocny krój pasujący do branży
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  display: "swap",
});

// Tekst — czytelny, neutralny
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://brukwashsystem.pl"),
  title: "BrukWash System — Mycie bruku, elewacji i ogrodzeń | Warszawa",
  description:
    "Profesjonalne mycie ciśnieniowe bruku, elewacji i ogrodzeń oraz impregnacja powierzchni. Warszawa i okolice (~50 km). Wycena bezpłatna — zadzwoń lub napisz.",
  keywords: [
    "mycie bruku",
    "mycie elewacji",
    "mycie kostki brukowej",
    "czyszczenie ogrodzeń",
    "impregnacja bruku",
    "mycie ciśnieniowe Warszawa",
  ],
  authors: [{ name: "BrukWash System" }],
  openGraph: {
    title: "BrukWash System — Czyste powierzchnie. Solidna robota.",
    description:
      "Mycie bruku, elewacji i ogrodzeń — Warszawa i okolice. Wycena bezpłatna.",
    type: "website",
    locale: "pl_PL",
    siteName: "BrukWash System",
    images: [
      {
        url: "/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "BrukWash System — logo",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${barlowCondensed.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark">
        {children}
      </body>
    </html>
  );
}
