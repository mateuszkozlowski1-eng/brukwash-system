import type { Metadata, Viewport } from "next";
import { Archivo, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import { SERVICES, FAQ } from "@/lib/content";
import "./globals.css";

// Nagłówki — Archivo z osią szerokości: wąski krój „kostki” i szeroki wordmark
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

// Tekst — spokojny grotesk z dobrym polskim składem
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

// Etykiety techniczne (numeracja, metadane) — mono
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
});

const TITLE = "Mycie kostki brukowej i elewacji Koronowo, Bydgoszcz | BrukWash System";
const DESCRIPTION =
  "Profesjonalne mycie kostki brukowej, elewacji i ogrodzeń oraz impregnacja nawierzchni. Koronowo, Bydgoszcz i okolice. Bezpłatna wycena — zadzwoń: 452 008 005.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: SITE.name,
  keywords: [
    "mycie kostki brukowej",
    "mycie bruku",
    "mycie elewacji",
    "mycie ciśnieniowe",
    "impregnacja kostki brukowej",
    "mycie ogrodzeń",
    "mycie kostki Bydgoszcz",
    "mycie kostki Koronowo",
    "czyszczenie elewacji Bydgoszcz",
  ],
  authors: [{ name: SITE.name }],
  category: "Usługi porządkowe",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    title: "BrukWash System — mycie bruku, elewacji i ogrodzeń",
    description:
      "Mycie ciśnieniowe i impregnacja powierzchni zewnętrznych. Koronowo, Bydgoszcz i okolice. Bezpłatna wycena.",
    url: SITE.url,
    siteName: SITE.name,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        // Ścieżka względna — rozwijana do pełnego URL przez metadataBase
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrukWash System – mycie bruku, elewacji i ogrodzeń",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrukWash System — mycie bruku, elewacji i ogrodzeń",
    description:
      "Mycie ciśnieniowe i impregnacja powierzchni zewnętrznych. Koronowo, Bydgoszcz i okolice.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#efece6",
  colorScheme: "light",
};

// Dane strukturalne: firma lokalna + usługi + FAQ + witryna (jeden @graph)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${SITE.url}/#firma`,
      name: SITE.name,
      description: DESCRIPTION,
      url: SITE.url,
      logo: `${SITE.url}/logo.jpg`,
      image: [`${SITE.url}/og-image.jpg`, `${SITE.url}/images/podjazd-po.jpg`],
      telephone: SITE.phoneE164,
      email: SITE.email,
      priceRange: "Wycena bezpłatna",
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        postalCode: SITE.address.postal,
        addressRegion: SITE.address.region,
        addressCountry: "PL",
      },
      areaServed: SITE.areas.map((name) => ({ "@type": "City", name })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "14:00",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Usługi BrukWash System",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.desc,
            areaServed: SITE.area,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#witryna`,
      url: SITE.url,
      name: SITE.name,
      inLanguage: "pl-PL",
      publisher: { "@id": `${SITE.url}/#firma` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${archivo.variable} ${instrument.variable} ${jetbrains.variable} h-full`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#tresc"
          className="eyebrow sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Przejdź do treści
        </a>
        {children}
      </body>
    </html>
  );
}
