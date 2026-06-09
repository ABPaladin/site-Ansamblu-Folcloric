import { useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import Lightbox from './Lightbox.jsx';
import { galleryItems, getItemImages } from '../data/content.js';

const FILTERS = [
  { key: 'all',        label: 'Toate' },
  { key: 'lansare',    label: 'Lansare' },
  { key: 'activitati', label: 'Activități' },
  { key: 'concurs',    label: 'Concurs & Cercetare' },
  { key: 'online',     label: 'Online' },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <section id="gallery" className="relative" style={{ background: 'var(--bg)' }}>
      {/* Subtle line texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(78,140,58,0.06) 47px, rgba(78,140,58,0.06) 48px)',
        }}
      />

      <div className="section-inner relative">
        <SectionHeader tag="Momente din Proiect" title="Galerie Foto" />

        {/* Filter buttons */}
        <div className="reveal flex gap-3 flex-wrap justify-center mb-10">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className="px-[1.3rem] py-[0.45rem] font-['Crimson_Text'] text-base tracking-wider cursor-pointer transition-all duration-200"
              style={
                activeFilter === key
                  ? { background: 'var(--red)', border: '1px solid var(--red)', color: 'var(--cream)' }
                  : { background: 'transparent', border: '1px solid var(--gold)', color: 'var(--brown)' }
              }
            >
              {label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
        >
          {galleryItems.map((item) => {
            const visible = activeFilter === 'all' || item.cat === activeFilter;
            const images = getItemImages(item);
            // Pentru item-urile video (fără `images`/`img`), folosim posterul drept copertă.
            const cover = images[0] ?? item.poster;
            return (
              <div
                key={item.title}
                className="reveal group relative cursor-pointer overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(27,58,107,0.18)]"
                style={{
                  display: visible ? '' : 'none',
                  border: '2px solid var(--green)',
                  background: 'var(--parchment)',
                }}
                onClick={() => setSelectedItem(item)}
              >
                {/* Image / placeholder */}
                <div
                  className="relative overflow-hidden flex items-center justify-center"
                  style={{ aspectRatio: '4/3', background: 'var(--parchment)' }}
                >
                  {cover ? (
                    <img
                      src={cover}
                      alt={item.title}
                      className={
                        item.fit === 'contain'
                          ? 'w-full h-full object-contain p-2'
                          : 'w-full h-full object-cover'
                      }
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center p-4"
                      style={{
                        background: 'linear-gradient(135deg, var(--parchment) 0%, #D6E2C4 100%)',
                      }}
                    >
                      <span
                        className="font-['IM_Fell_English'] italic text-[0.9rem] opacity-70 text-center whitespace-pre-line"
                        style={{ color: 'var(--brown-lt)' }}
                      >
                        {item.photoLabel}
                      </span>
                    </div>
                  )}

                  {/* Multi-image badge */}
                  {images.length > 1 && (
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1 px-2 py-[0.15rem] text-[0.72rem] tracking-wider z-10"
                      style={{ background: 'rgba(27,58,107,0.85)', color: 'var(--cream)' }}
                    >
                      ▦ {images.length}
                    </div>
                  )}

                  {/* Badge video — semnalează redarea videoului la click */}
                  {item.video && (
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1 px-2 py-[0.15rem] text-[0.72rem] tracking-wider z-10"
                      style={{ background: 'var(--red)', color: 'var(--cream)' }}
                    >
                      ▶ Video
                    </div>
                  )}

                  {/* Badge tur 360° — semnalează vizualizarea interactivă la click */}
                  {item.embed && (
                    <div
                      className="absolute top-3 right-3 flex items-center gap-1 px-2 py-[0.15rem] text-[0.72rem] tracking-wider z-10"
                      style={{ background: 'var(--red)', color: 'var(--cream)' }}
                    >
                      ◉ 360°
                    </div>
                  )}

                  {/* Hover overlay — triggered by group-hover on parent */}
                  <div
                    className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(27,58,107,0.92) 0%, rgba(27,58,107,0.32) 60%, transparent 100%)',
                    }}
                  >
                    <div>
                      <div
                        className="text-[0.78rem] tracking-[0.12em] uppercase mb-1"
                        style={{ color: 'var(--gold-lt)' }}
                      >
                        {item.stage}
                      </div>
                      <div
                        className="font-['Playfair_Display'] text-[1.05rem] leading-[1.3]"
                        style={{ color: 'var(--cream)' }}
                      >
                        {item.title}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-5 py-4" style={{ borderTop: '1px solid rgba(78,140,58,0.3)' }}>
                  <h4
                    className="font-['Playfair_Display'] text-base mb-1"
                    style={{ color: 'var(--brown)' }}
                  >
                    {item.title}
                  </h4>
                  <p className="text-[0.9rem] opacity-80 leading-normal" style={{ color: 'var(--ink)' }}>
                    {item.caption}
                  </p>
                  <span
                    className="inline-block text-[0.75rem] px-2 py-[0.15rem] mt-2 tracking-[0.08em]"
                    style={{ background: 'var(--red)', color: 'var(--cream)' }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedItem && (
        <Lightbox item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
