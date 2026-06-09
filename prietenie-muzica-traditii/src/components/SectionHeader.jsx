export default function SectionHeader({ tag, title }) {
  return (
    <div className="reveal text-center mb-12">
      <p
        className="font-['IM_Fell_English'] italic text-[0.95rem] tracking-[0.25em] uppercase mb-2"
        style={{ color: 'var(--red)' }}
      >
        {tag}
      </p>
      <h2
        className="font-['Playfair_Display'] inline-block"
        style={{ fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', color: 'var(--brown)' }}
      >
        {title}
      </h2>
      <div className="flex items-center gap-3 mx-auto mt-4 max-w-380px">
        <div
          className="flex-1 h-2px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
        />
        <span style={{ color: 'var(--gold)' }}>◆</span>
        <div
          className="flex-1 h-2px"
          style={{ background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }}
        />
      </div>
    </div>
  );
}
