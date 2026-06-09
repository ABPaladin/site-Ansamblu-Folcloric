import { useState } from 'react';

const LINKS = [
  ['#home',     'Acasă'],
  ['#about',    'Proiect'],
  ['#gallery',  'Galerie'],
  ['#about-us', 'Despre Noi'],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-8 h-18 max-sm:px-5"
      style={{
        background: 'var(--cream)',
        boxShadow: '0 3px 16px rgba(27,58,107,0.15)',
        borderBottom: '3px solid var(--green)',
      }}
    >
      <a href="#home" onClick={close} className="flex items-center gap-2 no-underline">
        {/* Aceeași notă muzicală ca faviconul (din public/favicon.svg) */}
        <img src="/favicon.svg" alt="" width="34" height="34" className="block" />
        <span
          className="font-['Playfair_Display'] tracking-wider"
          style={{ color: 'var(--navy)' }}
        >
          <span className="hidden sm:inline text-[1.05rem]">Prietenie · Muzică · Tradiții</span>
          <span className="sm:hidden text-[1.1rem]">Folclor</span>
        </span>
      </a>

      {/* Linkuri — orizontale pe desktop */}
      <ul className="hidden sm:flex gap-8 list-none">
        {LINKS.map(([href, label]) => (
          <li key={href}>
            <a href={href} className="nav-link">{label}</a>
          </li>
        ))}
      </ul>

      {/* Buton burger — doar pe mobil (☰ ⇄ ✕) */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Închide meniul' : 'Deschide meniul'}
        aria-expanded={open}
        className="hidden max-sm:flex flex-col justify-center items-center w-10 h-10 cursor-pointer bg-transparent border-none"
        style={{ gap: '5px' }}
      >
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--brown)', transition: 'all .3s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--brown)', transition: 'all .3s', opacity: open ? 0 : 1 }} />
        <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--brown)', transition: 'all .3s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
      </button>

      {/* Meniu mobil — dropdown sub navbar */}
      {open && (
        <ul
          className="sm:hidden absolute top-full left-0 right-0 flex flex-col list-none"
          style={{
            background: 'var(--cream)',
            borderBottom: '3px solid var(--green)',
            boxShadow: '0 8px 16px rgba(27,58,107,0.15)',
          }}
        >
          {LINKS.map(([href, label]) => (
            <li key={href} style={{ borderTop: '1px solid rgba(78,140,58,0.3)' }}>
              <a href={href} onClick={close} className="nav-link block px-8 py-4">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
