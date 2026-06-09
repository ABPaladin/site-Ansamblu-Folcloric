import { disseminationLinks } from '../data/content.js';

export default function Footer() {
  return (
    <footer
      className="text-center px-8 py-8 text-[0.9rem] leading-[1.8]"
      style={{
        background: 'var(--navy)',
        color: 'var(--cream)',
        borderTop: '4px solid var(--accent)',
      }}
    >
      <div
        className="font-['Playfair_Display'] text-[1.15rem] mb-2"
        style={{ color: 'var(--accent-lt)' }}
      >
        „Prietenie, muzică, tradiții" · 2025–2026
      </div>
      <p>
        IP Gimnaziul „Dumitru Matcovschi", Chișinău &nbsp;⟺&nbsp; Clubul Copiilor Dorohoi, Dorohoi
      </p>
      <p className="mt-2 opacity-70 text-[0.85rem]">
        Coordonatori: Barbănouă Marina &amp; Marcel Dupu · Atestare 2025–2026
      </p>

      {/* Diseminarea rezultatelor — publicații pe site */}
      <div
        className="mt-5 pt-4 flex flex-wrap gap-x-6 gap-y-2 justify-center text-[0.82rem]"
        style={{ borderTop: '1px solid rgba(127,184,95,0.35)' }}
      >
        <span className="opacity-70">Diseminare:</span>
        {disseminationLinks.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-opacity duration-200 hover:opacity-100 opacity-85"
            style={{ color: 'var(--green-lt)' }}
          >
            {label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
