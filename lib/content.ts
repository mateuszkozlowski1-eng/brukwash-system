// Treści sekcji współdzielone przez komponenty i dane strukturalne (JSON-LD).

export const SERVICES = [
  {
    id: "mycie-kostki-brukowej",
    title: "Mycie kostki brukowej",
    short: "Podjazdy, chodniki, tarasy",
    desc: "Usuwamy mech, glony, porosty i zastały brud ze spoin. Pracujemy agregatem do powierzchni płaskich, który czyści równomiernie i nie wypłukuje nawierzchni bez potrzeby.",
    tags: ["Podjazdy", "Chodniki", "Tarasy", "Place"],
    img: "/images/IMG20260413111638.jpg",
    alt: "Kostka brukowa w trakcie mycia — wyraźna granica między umytą a brudną częścią",
  },
  {
    id: "mycie-elewacji",
    title: "Mycie elewacji",
    short: "Tynk, cegła, beton",
    desc: "Czyścimy fasady z zazielenień, zacieków i osadów atmosferycznych. Ciśnienie i środki dobieramy do podłoża, żeby elewacja odzyskała kolor bez uszkodzeń tynku.",
    tags: ["Tynk", "Cegła", "Beton", "Podmurówki"],
    img: "/images/IMG20260331085115.jpg",
    alt: "Elewacja domu w trakcie mycia — usuwanie zacieków i zazielenień",
  },
  {
    id: "ogrodzenia",
    title: "Ogrodzenia",
    short: "Montaż i mycie",
    desc: "Montujemy i myjemy ogrodzenia. Usuwamy rdzawe naloty, mech i zabrudzenia z ogrodzeń metalowych, betonowych i kamiennych.",
    tags: ["Metal", "Beton", "Kamień", "Montaż"],
    img: "/images/IMG20260401093638.jpg",
    alt: "Dom z ogrodzeniem po odświeżeniu elewacji",
  },
  {
    id: "impregnacja",
    title: "Impregnacja",
    short: "Ochrona na lata",
    desc: "Po umyciu i wyschnięciu zabezpieczamy nawierzchnię impregnatem. Ogranicza wnikanie wody i brudu oraz spowalnia ponowne zarastanie — nawet na kilka lat.",
    tags: ["Kostka", "Płyty tarasowe", "Beton"],
    img: "/images/Messenger_creation_BDDC1287-525C-49E0-B89E-DD3EDFF33CC2.jpg",
    alt: "Ścieżka z kostki brukowej po myciu i zabezpieczeniu",
  },
] as const;

export const PROCESS = [
  {
    title: "Telefon albo zdjęcie",
    desc: "Zadzwoń lub wyślij kilka zdjęć powierzchni. Wstępnie ocenimy zabrudzenie i metraż.",
  },
  {
    title: "Bezpłatna wycena",
    desc: "Podajemy cenę i termin przed rozpoczęciem pracy. Bez ukrytych kosztów.",
  },
  {
    title: "Mycie",
    desc: "Profesjonalny sprzęt wysokociśnieniowy i środki dobrane do podłoża. Po pracy sprzątamy teren.",
  },
  {
    title: "Impregnacja i odbiór",
    desc: "Na życzenie zabezpieczamy powierzchnię. Odbierasz robotę dopiero, gdy efekt Ci odpowiada.",
  },
] as const;

export const FAQ = [
  {
    q: "Ile kosztuje mycie kostki brukowej?",
    a: "Cena zależy od metrażu, rodzaju nawierzchni i stopnia zabrudzenia. Wycena jest bezpłatna — wystarczy telefon albo kilka zdjęć, a podamy konkretną kwotę przed rozpoczęciem pracy.",
  },
  {
    q: "Czy mycie ciśnieniowe nie zniszczy kostki?",
    a: "Nie, jeśli jest robione z głową. Dobieramy ciśnienie do nawierzchni i używamy agregatu do powierzchni płaskich, który rozkłada strumień równomiernie. Dzięki temu czyścimy skutecznie, bez żłobienia kostki.",
  },
  {
    q: "Kiedy można zaimpregnować kostkę po myciu?",
    a: "Dopiero gdy nawierzchnia całkowicie wyschnie — zwykle po jednym–dwóch dniach suchej pogody. Termin impregnacji ustalamy razem przy wycenie.",
  },
  {
    q: "Czy myjecie elewacje z tynku i cegły?",
    a: "Tak. Czyścimy fasady z tynku, cegły i betonu — usuwamy zazielenienia, zacieki i osady. Metodę i środki dobieramy do konkretnego podłoża.",
  },
  {
    q: "Na jakim terenie działacie?",
    a: "Mamy siedzibę w Koronowie i obsługujemy Bydgoszcz oraz okolice, m.in. Nakło nad Notecią i Sępólno Krajeńskie. Jeśli jesteś trochę dalej — zadzwoń, na pewno się dogadamy.",
  },
] as const;

// Galeria realizacji (public/images) — pierwsze pozycje trafiają do układu bento.
export const PHOTOS = [
  { src: "/images/IMG20260413111624.jpg", alt: "Kostka brukowa w połowie umyta — efekt przed i po myciu ciśnieniowym", tag: "Przed / po" },
  { src: "/images/IMG20260618115728.jpg", alt: "Podjazd z kostki brukowej przy wiacie po renowacji", tag: "Podjazd" },
  { src: "/images/IMG20260331142806.jpg", alt: "Elewacja domu przed myciem ciśnieniowym", tag: "Elewacja" },
  { src: "/images/IMG20260327095146.jpg", alt: "Mycie ciśnieniowe betonowego podjazdu — widoczny umyty pas", tag: "Przed / po" },
  { src: "/images/Messenger_creation_D14D1FB2-9FD3-4956-8CD9-80CE73157187.jpg", alt: "Ścieżka ogrodowa z kostki brukowej po myciu", tag: "Ścieżka" },
  { src: "/images/IMG20260413134519.jpg", alt: "Podjazd z kostki brukowej z czerwonym obramowaniem po czyszczeniu", tag: "Podjazd" },
  { src: "/images/IMG20260327163652.jpg", alt: "Mycie płyt tarasowych — efekt przed i po czyszczeniu", tag: "Taras" },
  { src: "/images/IMG20260518152753.jpg", alt: "Czysty podjazd z kostki brukowej wzdłuż żywopłotu", tag: "Podjazd" },
  { src: "/images/IMG20260401093536.jpg", alt: "Czysta elewacja budynku po renowacji", tag: "Elewacja" },
  { src: "/images/IMG20260413120422.jpg", alt: "Mycie kostki brukowej agregatem do powierzchni płaskich", tag: "W trakcie" },
  { src: "/images/IMG20260416074735.jpg", alt: "Ścieżka z kostki brukowej w trakcie mycia ciśnieniowego", tag: "Ścieżka" },
  { src: "/images/IMG20260401092139.jpg", alt: "Elewacja domu z widocznymi zabrudzeniami przed myciem", tag: "Elewacja" },
  { src: "/images/IMG20260518082806.jpg", alt: "Zabrudzony podjazd z kostki przy żywopłocie — stan przed myciem", tag: "Przed" },
  { src: "/images/IMG20260618092744.jpg", alt: "Zabrudzony podjazd pod wiatą — stan przed myciem", tag: "Przed" },
  { src: "/images/IMG20260618081833.jpg", alt: "Ten sam podjazd pod wiatą po myciu ciśnieniowym", tag: "Po" },
] as const;
