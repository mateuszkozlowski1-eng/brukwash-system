import Mark from "@/components/Mark";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink pb-20 text-paper sm:pb-0">
      <div className="mx-auto grid max-w-[90rem] gap-10 px-4 pt-16 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3 text-paper">
            <Mark className="h-9 w-9" />
            <span className="eyebrow">{SITE.name}</span>
          </div>
          <p className="mt-5 max-w-xs leading-relaxed text-paper/65">
            Mycie kostki brukowej, elewacji i ogrodzeń oraz impregnacja.
            {" "}{SITE.area}.
          </p>
        </div>

        <nav aria-label="Usługi" className="md:col-span-3">
          <p className="eyebrow text-jet-bright">Usługi</p>
          <ul className="mt-4 space-y-2">
            {SERVICES.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="text-paper/75 transition-colors hover:text-paper">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-4">
          <p className="eyebrow text-jet-bright">Kontakt</p>
          <ul className="mt-4 space-y-2 text-paper/75">
            <li>
              <a href={SITE.phoneHref} className="hover:text-paper">
                tel. {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={SITE.emailHref} className="hover:text-paper">
                {SITE.email}
              </a>
            </li>
            <li>
              {SITE.address.street}, {SITE.address.postal} {SITE.address.city}
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 flex max-w-[90rem] flex-col gap-3 border-t border-paper/10 px-4 py-5 text-sm text-paper/50 sm:flex-row sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {SITE.name}. Wszelkie prawa zastrzeżone.
        </p>
        {/* TODO: klient — docelowy odnośnik do polityki prywatności */}
        <a href="#" className="underline-offset-4 hover:text-paper hover:underline">
          Polityka prywatności
        </a>
      </div>

      {/* Wordmark na całą szerokość, przycięty dolną krawędzią */}
      <p
        aria-hidden="true"
        className="display-wide -mb-[1.6vw] select-none whitespace-nowrap text-center text-[12.2vw]"
      >
        Bruk<span className="text-jet">wash</span>
      </p>
    </footer>
  );
}
