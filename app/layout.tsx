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
  title: "BrukWash System – Mycie Bruku, Elewacji i Ogrodzeń | Koronowo",
  description:
    "Profesjonalne mycie bruku, elewacji i ogrodzeń. Impregnacja nawierzchni. Obsługujemy Koronowo, Bydgoszcz i okolice. Zadzwoń: 452 008 005.",
  keywords: [
    "mycie bruku",
    "mycie elewacji",
    "ogrodzenia",
    "impregnacja",
    "Koronowo",
    "Bydgoszcz",
    "BrukWash",
  ],
  authors: [{ name: "BrukWash System" }],
  openGraph: {
    title: "BrukWash System – Mycie Bruku, Elewacji i Ogrodzeń",
    description:
      "Profesjonalne mycie i impregnacja powierzchni zewnętrznych. Koronowo i okolice.",
    url: "https://brukwashsystem.pl",
    siteName: "BrukWash System",
    locale: "pl_PL",
    type: "website",
    images: [
      {
        // Ścieżka względna — Next.js rozwinie ją do pełnego URL na podstawie
        // metadataBase (https://brukwashsystem.pl/og-image.jpg), czego wymagają
        // crawlery Facebooka/Messengera.
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "BrukWash System – Mycie Bruku, Elewacji i Ogrodzeń",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BrukWash System – Mycie Bruku, Elewacji i Ogrodzeń",
    description:
      "Profesjonalne mycie i impregnacja powierzchni zewnętrznych. Koronowo i okolice.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://brukwashsystem.pl",
  },
};

// Structured data (Schema.org LocalBusiness) — dla wyszukiwarek / lokalnego SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "BrukWash System",
  description:
    "Profesjonalne mycie bruku, elewacji i ogrodzeń. Impregnacja nawierzchni.",
  telephone: "+48452008005",
  email: "brukwashsystem@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ul. Tucholska 36",
    addressLocality: "Koronowo",
    postalCode: "86-010",
    addressCountry: "PL",
  },
  areaServed: ["Koronowo", "Bydgoszcz", "Nakło nad Notecią", "Sępólno Krajeńskie"],
  url: "https://brukwashsystem.pl",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
