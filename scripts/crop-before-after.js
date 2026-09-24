/* eslint-disable @typescript-eslint/no-require-imports -- skrypt Node (CommonJS) */
// Przycina parę zdjęć przed/po (podjazd z wiatą) tak, by kadry się pokrywały —
// źródło dla suwaka przed/po w sekcji Hero. Przesunięcie dobrane ręcznie
// (nałożenie 50/50), oba wyjścia mają ten sam rozmiar 1260×1680 (3:4).
//
// Uruchom: node scripts/crop-before-after.js

const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "public/images");
const W = 1260;
const H = 1680;

const jobs = [
  { src: "IMG20260618092744.jpg", left: 150, top: 60, out: "podjazd-przed.jpg" },
  { src: "IMG20260618081833.jpg", left: 0, top: 0, out: "podjazd-po.jpg" },
];

(async () => {
  for (const j of jobs) {
    await sharp(path.join(IMG, j.src))
      .extract({ left: j.left, top: j.top, width: W, height: H })
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(path.join(IMG, j.out));
    console.log("✓", j.out);
  }
})();
