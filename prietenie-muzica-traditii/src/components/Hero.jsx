const BADGES = ['📍 Republica Moldova', '🎶 Folclor & Tradiții', '📍 România'];

export default function Hero() {
  const scrollToAbout = () =>
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      className="hero-bg-deco relative min-h-screen pt-750px flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #F3F6EE 0%, #EAF1E2 55%, #E3EAF4 100%)',
        borderBottom: '4px solid var(--green)',
      }}
    >
      <div className="folk-diamonds" />

      <div className="hero-rise text-center px-8 py-8 relative z-2 max-w-2000px mx-auto w-full">
        <p
          className="hero-fade-1 font-['IM_Fell_English'] italic text-[2rem] tracking-[0.2em] mb-4"
          style={{ color: 'var(--navy-lt)' }}
        >
          Parteneriat Educațional Internațional · Atestare 2025–2026
        </p>

        <div
          className="hero-fade-0 text-[2.5rem] tracking-[1rem] mb-4 opacity-70"
          style={{ color: 'var(--accent)' }}
        >
          ✦ ◆ ✦
        </div>

        <h1
          className="hero-fade-2 font-['Playfair_Display'] leading-[1.15] mb-2"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 5rem)',
            color: 'var(--navy)',
            textShadow: '0 1px 8px rgba(27,58,107,0.12)',
          }}
        >
          „Prietenie, muzică, tradiții"
        </h1>

        <p
          className="hero-fade-3 font-['Crimson_Text'] text-[1.35rem] max-w-600px mx-auto mt-4"
          style={{ color: 'var(--green-dk)' }}
        >
          Educația elevilor în spiritul înțelegerii valorilor culturale, a tradițiilor
          și obiceiurilor de iarnă de pe ambele maluri ale Prutului.
        </p>

        <p
          className="hero-fade-3 font-['Crimson_Text'] text-[1.05rem] max-w-600px mx-auto mt-3"
          style={{ color: 'var(--ink)' }}
        >
          IP Gimnaziul „Dumitru Matcovschi", Chișinău, Republica Moldova
          &nbsp;⟺&nbsp; Clubul Copiilor Dorohoi, jud. Botoșani, România
        </p>

        <div className="hero-fade-4 flex items-center gap-4 mx-auto my-8 max-w-100">
          <div className="flex-1 h-px opacity-60" style={{ background: 'var(--green)' }} />
          <span className="text-[1.5rem]" style={{ color: 'var(--accent)' }}>❧</span>
          <div className="flex-1 h-px opacity-60" style={{ background: 'var(--green)' }} />
        </div>

        <p
          className="hero-fade-5 font-['IM_Fell_English'] italic text-[1.15rem] max-w-600px mx-auto mb-8"
          style={{ color: 'var(--navy)' }}
        >
          „Dacă trăiesc în prietenie, copiii învață să iubească."
          <span className="block not-italic text-[0.9rem] mt-1" style={{ color: 'var(--green-dk)' }}>
            — Dorothy Law Nolte
          </span>
        </p>

        <div className="hero-fade-6 flex gap-6 justify-center flex-wrap">
          {BADGES.map(badge => (
            <span
              key={badge}
              className="px-[1.2rem] py-[0.4rem] text-[0.9rem] tracking-0.1em font-['Crimson_Text']"
              style={{
                background: 'rgba(27,58,107,0.07)',
                border: '1px solid rgba(78,140,58,0.4)',
                color: 'var(--navy)',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="hero-bounce absolute bottom-8 text-[1.5rem] opacity-50 cursor-pointer border-none bg-transparent"
        style={{ color: 'var(--navy)' }}
      >
        ↓
      </button>
    </section>
  );
}
