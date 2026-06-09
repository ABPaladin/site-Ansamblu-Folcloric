import SectionHeader from './SectionHeader.jsx';
import { aboutCards, stages } from '../data/content.js';

function AboutCard({ icon, title, text }) {
  return (
    <div
      className="about-card-deco p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(27,58,107,0.15)]"
      style={{ background: 'var(--card)', border: '2px solid var(--green)' }}
    >
      <span className="text-[2.5rem] mb-3 block">{icon}</span>
      <h3
        className="font-['Playfair_Display'] text-[1.25rem] mb-3 pb-2"
        style={{ color: 'var(--navy)', borderBottom: '1px solid var(--green)' }}
      >
        {title}
      </h3>
      <p className="text-base leading-[1.7]" style={{ color: 'var(--ink)' }}>{text}</p>
    </div>
  );
}

function StageCard({ num, period, desc }) {
  return (
    <div
      className="reveal p-5 text-center transition-transform duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--card)',
        border: '1px solid var(--green)',
        borderTop: '4px solid var(--accent)',
      }}
    >
      <div className="font-['Playfair_Display'] text-[1.8rem] font-bold" style={{ color: 'var(--accent)' }}>
        {num}
      </div>
      <div className="text-[0.9rem] italic mb-1" style={{ color: 'var(--green-dk)' }}>{period}</div>
      <div className="text-[1rem] leading-4" style={{ color: 'var(--ink)' }}>{desc}</div>
    </div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg)',
        borderTop: '6px solid var(--navy)',
        borderBottom: '6px solid var(--navy)',
      }}
    >
      <div className="section-inner">
        <SectionHeader tag="Prezentarea Proiectului" title="Scopul și Viziunea Noastră" />

        {/* Cards grid */}
        <div className="grid grid-cols-2 gap-10 mt-8 max-sm:grid-cols-1">
          {aboutCards.map(card => (
            <div key={card.title} className="reveal">
              <AboutCard {...card} />
            </div>
          ))}

          {/* Quote — full width */}
          <div
            className="reveal col-span-2 quote-block px-12 py-8 text-center max-sm:col-span-1 max-sm:px-6"
            style={{
              background: 'var(--navy)',
              color: '#ffffff',
              border: '2px solid var(--accent)',
            }}
          >
            <blockquote className="font-['IM_Fell_English'] italic text-[1.35rem] leading-[1.6]">
              „Dacă trăiesc în prietenie, copiii învață să iubească."
            </blockquote>
            <cite
              className="block mt-3 text-[0.95rem] not-italic tracking-0.1em"
              style={{ color: 'var(--accent-lt)' }}
            >
              — Dorothy Law Nolte
            </cite>
          </div>
        </div>

        {/* Partners strip */}
        <div
          className="reveal mt-12 p-8 flex items-center justify-around gap-8 flex-wrap text-center"
          style={{ border: '2px solid var(--accent)', background: 'var(--navy)' }}
        >
          <div style={{ color: 'var(--cream)' }}>
            <strong
              className="block font-['Playfair_Display'] text-[1.05rem] mb-1"
              style={{ color: 'var(--accent-lt)' }}
            >
              IP Gimnaziul „Dumitru Matcovschi"
            </strong>
            <span className="text-[0.9rem] opacity-80">Chișinău, Republica Moldova</span>
            <span className="block mt-1 text-[0.85rem] italic" style={{ color: 'var(--green-lt)' }}>
              Ansamblul folcloric „Firicel de Busuioc"
            </span>
          </div>

          <div className="w-px h-60px opacity-30" style={{ background: 'var(--green-lt)' }} />
          <div className="text-2rem opacity-60" style={{ color: 'var(--accent)' }}>♪ ⟺ ♪</div>
          <div className="w-px h-60px opacity-30" style={{ background: 'var(--green-lt)' }} />

          <div style={{ color: 'var(--cream)' }}>
            <strong
              className="block font-['Playfair_Display'] text-[1.05rem] mb-1"
              style={{ color: 'var(--accent-lt)' }}
            >
              Clubul Copiilor Dorohoi
            </strong>
            <span className="text-[0.9rem] opacity-80">Dorohoi, jud. Botoșani, România</span>
            <span className="block mt-1 text-[0.85rem] italic" style={{ color: 'var(--green-lt)' }}>
              Ansamblul folcloric „Mugurel"
            </span>
          </div>
        </div>

        {/* Stages timeline */}
        <h3
          className="reveal font-['Playfair_Display'] text-[1.5rem] text-center mt-12 mb-6"
          style={{ color: 'var(--navy)' }}
        >
          Etapele Proiectului
        </h3>
        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))' }}
        >
          {stages.map(stage => (
            <StageCard key={stage.num} {...stage} />
          ))}
        </div>
      </div>
    </section>
  );
}
