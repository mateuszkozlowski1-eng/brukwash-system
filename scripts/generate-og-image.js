// Generuje public/og-image.jpg (1200×630) — obrazek Open Graph do podglądu
// linku w social media. Kompozycja odwzorowuje sekcję Hero: zdjęcie realizacji
// w tle, granatowa nakładka, logo jako zaokrąglony kafelek + nagłówek/telefon.
//
// Uruchom: node scripts/generate-og-image.js

const sharp = require("sharp");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const W = 1200;
const H = 630;

// Kolory marki (z app/globals.css)
const NAVY = "#1e3a5f";
const BLUE = "#2d8fd4";

const BG_PHOTO = path.join(ROOT, "public/images/IMG20260413111624.jpg"); // to samo zdjęcie co Hero
const LOGO = path.join(ROOT, "public/logo.jpg");
const OUT = path.join(ROOT, "public/og-image.jpg");

// Zaokrąglona maska (PNG, biały kształt na przezroczystym) — do wycięcia kafelka logo
function roundedMask(size, radius) {
  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
       <rect width="${size}" height="${size}" rx="${radius}" ry="${radius}" fill="#fff"/>
     </svg>`
  );
}

// Nakładka: granatowy gradient (czytelność tekstu po lewej) + tekst + akcent
function overlaySvg() {
  return Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0"   stop-color="${NAVY}" stop-opacity="0.94"/>
      <stop offset="0.55" stop-color="${NAVY}" stop-opacity="0.86"/>
      <stop offset="1"   stop-color="${NAVY}" stop-opacity="0.62"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#g)"/>
  <!-- dolny akcent w kolorze marki -->
  <rect x="0" y="${H - 12}" width="${W}" height="12" fill="${BLUE}"/>

  <g font-family="Arial, Helvetica, sans-serif">
    <text x="70" y="165" fill="${BLUE}" font-size="25" font-weight="700"
          letter-spacing="4">MYCIE CIŚNIENIOWE</text>

    <text x="68" y="250" fill="#ffffff" font-size="54" font-weight="800">Czyste powierzchnie.</text>
    <text x="68" y="318" fill="#ffffff" font-size="54" font-weight="800">Solidna robota.</text>

    <text x="70" y="378" fill="#e8f1f9" font-size="29" font-weight="400">Mycie bruku, elewacji i ogrodzeń</text>
    <text x="70" y="416" fill="#aecbe6" font-size="23" font-weight="400">Koronowo &#183; Bydgoszcz i okolice</text>

    <!-- pigułka z telefonem -->
    <rect x="70" y="450" width="430" height="72" rx="36" fill="${BLUE}"/>
    <text x="285" y="497" fill="#ffffff" font-size="33" font-weight="700"
          text-anchor="middle">Zadzwoń: 452 008 005</text>
  </g>
</svg>`);
}

async function main() {
  // Tło — zdjęcie realizacji przeskalowane „cover" do 1200×630
  const photo = await sharp(BG_PHOTO).resize(W, H, { fit: "cover" }).toBuffer();

  // Logo jako zaokrąglony kafelek (natywne jasne tło logo → jasny kafel na granacie)
  const LOGO_SIZE = 400;
  const logoTile = await sharp(LOGO)
    .resize(LOGO_SIZE, LOGO_SIZE, { fit: "cover" })
    .composite([{ input: roundedMask(LOGO_SIZE, 44), blend: "dest-in" }])
    .png()
    .toBuffer();

  await sharp(photo)
    .composite([
      { input: overlaySvg(), top: 0, left: 0 },
      { input: logoTile, top: Math.round((H - LOGO_SIZE) / 2), left: 730 },
    ])
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(OUT);

  const meta = await sharp(OUT).metadata();
  console.log(`OG image wygenerowany: ${OUT} (${meta.width}×${meta.height})`);
}

main().catch((err) => {
  console.error("Błąd generowania OG image:", err);
  process.exit(1);
});
