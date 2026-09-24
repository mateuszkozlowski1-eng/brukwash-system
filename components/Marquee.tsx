const ITEMS = [
  "Mycie kostki brukowej",
  "Mycie elewacji",
  "Ogrodzenia",
  "Impregnacja",
  "Podjazdy",
  "Tarasy",
  "Chodniki",
];

// Taśma usług — ciemny pas oddzielający Hero od treści. Druga kopia listy
// jest tylko wizualna (aria-hidden), żeby pętla była bezszwowa.
export default function Marquee() {
  const row = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="display whitespace-nowrap px-6 text-4xl sm:text-5xl">{item}</span>
          <span className="h-3 w-3 rotate-45 bg-jet" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden bg-ink py-5 text-paper">
      <div className="flex w-max animate-marquee motion-reduce:animate-none">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
