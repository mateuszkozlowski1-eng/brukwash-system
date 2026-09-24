// Dane kontaktowe i konfiguracja firmy — w jednym miejscu, łatwe do edycji.
export const SITE = {
  name: "BrukWash System",
  url: "https://brukwashsystem.pl",
  tagline: "Elewacje & Ogrodzenia",
  phoneDisplay: "452 008 005",
  phoneHref: "tel:+48452008005",
  phoneE164: "+48452008005",
  email: "brukwashsystem@gmail.com",
  emailHref: "mailto:brukwashsystem@gmail.com",
  area: "Koronowo, Bydgoszcz i okolice",
  areas: ["Koronowo", "Bydgoszcz", "Nakło nad Notecią", "Sępólno Krajeńskie"],
  hours: [
    { label: "Pon–Pt", time: "8:00–18:00" },
    { label: "Sob", time: "9:00–14:00" },
  ],
  address: {
    street: "ul. Tucholska 36",
    postal: "86-010",
    city: "Koronowo",
    region: "kujawsko-pomorskie",
  },
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=ul.+Tucholska+36,+86-010+Koronowo",
} as const;
