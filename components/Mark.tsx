// Sygnet z logo (dom + kostka) przerysowany wektorowo — ostry w każdym rozmiarze.
export default function Mark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="4 6 56 50" className={className} aria-hidden="true">
      <path d="M8 31 32 11l24 20" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square" />
      <path d="M14 27v26h36" fill="none" stroke="currentColor" strokeWidth="5" />
      <g fill="var(--color-jet)">
        <rect x="21" y="30" width="11" height="6" rx="1" />
        <rect x="34" y="30" width="10" height="6" rx="1" />
        <rect x="21" y="38" width="6" height="6" rx="1" />
        <rect x="29" y="38" width="15" height="6" rx="1" />
        <rect x="21" y="46" width="12" height="4" rx="1" />
        <rect x="35" y="46" width="9" height="4" rx="1" />
      </g>
    </svg>
  );
}
