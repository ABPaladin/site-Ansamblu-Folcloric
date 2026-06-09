import { useState, useEffect, useCallback } from 'react';
import { getItemImages } from '../data/content.js';

export default function Lightbox({ item, onClose }) {
  // Normalize to an array of images (supports `book`, `images: [...]` or legacy `img`)
  const images = item ? getItemImages(item) : [];

  // Pentru cartea digitală: mapăm fiecare pagină la compoziția ei,
  // ca să afișăm dedesubt piesa audio corespunzătoare paginii curente.
  const book = item?.book ?? null;
  const trackByIndex = [];
  if (book) {
    book.forEach((comp) => comp.pages.forEach(() => trackByIndex.push(comp)));
  }
  const isBook = Boolean(book);

  // Afișează imaginea întreagă (object-contain), nu decupată — pentru carte și pliante/documente.
  const containFit = isBook || item?.fit === 'contain';

  // Conținut încorporat (ex: hartă Google Maps) afișat în locul imaginii.
  const embed = item?.embed ?? null;
  
  const video = item?.video ?? null;

  const [index, setIndex] = useState(0);

  // Reset to first image whenever a different item is opened
  useEffect(() => {
    setIndex(0);
  }, [item]);

  const hasMultiple = images.length > 1;

  const prev = useCallback(
    (e) => {
      e?.stopPropagation();
      setIndex((i) => (i - 1 + images.length) % images.length);
    },
    [images.length],
  );

  const next = useCallback(
    (e) => {
      e?.stopPropagation();
      setIndex((i) => (i + 1) % images.length);
    },
    [images.length],
  );

  // Keyboard navigation: arrows + Escape
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft' && hasMultiple) prev();
      else if (e.key === 'ArrowRight' && hasMultiple) next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [item, hasMultiple, prev, next, onClose]);

  if (!item) return null;

  const handleBackdrop = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const currentImg = images[index];

  // Piesa audio pentru pagina curentă (carte digitală),
  // sau o piesă unică setată pe item prin `audio`.
  const currentTrack = book
    ? trackByIndex[index]
    : item.audio
      ? { title: item.title, composer: item.audioComposer, audio: item.audio }
      : null;

  const arrowStyle = {
    background: 'rgba(27,58,107,0.85)',
    color: 'var(--cream)',
    border: '1px solid var(--green)',
  };

  return (
    <div
      className="fixed inset-0 z-1000 flex items-center justify-center p-8"
      style={{ background: 'rgba(15,24,43,0.95)' }}
      onClick={handleBackdrop}
    >
      <div
        className={`relative w-full p-8 max-h-[92vh] overflow-y-auto ${embed || video ? 'max-w-205' : 'max-w-175'}`}
        style={{ background: 'var(--parchment)', border: '3px solid var(--gold)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[1.2rem] cursor-pointer border-none z-10"
          style={{ background: 'var(--red)', color: 'var(--cream)' }}
        >
          ✕
        </button>

        {/* Image / embed area */}
        <div
          className="relative mb-6 flex items-center justify-center overflow-hidden"
          style={{
            aspectRatio: embed || video ? '16/9' : containFit ? undefined : '4/3',
            maxHeight: isBook ? '56vh' : containFit ? '62vh' : undefined,
            background: 'var(--cream)',
          }}
        >
          {video ? (
            <video
              src={video}
              poster={item.poster}
              controls
              preload="metadata"
              className="w-full h-full object-contain"
              style={{ background: '#000' }}
            >
              Browserul tău nu suportă redarea video.
            </video>
          ) : embed ? (
            <iframe
              src={embed}
              title={item.embedTitle || item.title}
              className="w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : currentImg ? (
            <img
              src={currentImg}
              alt={`${item.title} (${index + 1}/${images.length})`}
              className={
                containFit
                  ? `${isBook ? 'max-h-[56vh]' : 'max-h-[62vh]'} w-auto max-w-full object-contain`
                  : 'w-full h-full object-cover'
              }
            />
          ) : (
            <span
              className="font-['IM_Fell_English'] italic text-[0.9rem] opacity-70 text-center p-4 whitespace-pre-line"
              style={{ color: 'var(--brown-lt)' }}
            >
              {item.photoLabel}
            </span>
          )}

          {/* Prev / Next buttons */}
          {hasMultiple && (
            <>
              <button
                onClick={prev}
                aria-label="Imaginea anterioară"
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[1.3rem] cursor-pointer transition-opacity duration-200 hover:opacity-100 opacity-80"
                style={arrowStyle}
              >
                ‹
              </button>
              <button
                onClick={next}
                aria-label="Imaginea următoare"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[1.3rem] cursor-pointer transition-opacity duration-200 hover:opacity-100 opacity-80"
                style={arrowStyle}
              >
                ›
              </button>

              {/* Counter */}
              <div
                className="absolute bottom-3 right-3 px-2 py-[0.1rem] text-[0.75rem] tracking-wider"
                style={{ background: 'rgba(27,58,107,0.85)', color: 'var(--cream)' }}
              >
                {index + 1} / {images.length}
              </div>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {hasMultiple && (
          <div className="flex justify-center gap-2 mb-5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Mergi la imaginea ${i + 1}`}
                className="w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-200"
                style={{
                  background: i === index ? 'var(--red)' : 'transparent',
                  border: '1px solid var(--red)',
                }}
              />
            ))}
          </div>
        )}

        {/* Player audio — piesa corespunzătoare paginii curente */}
        {currentTrack && (
          <div
            className="mb-6 p-4"
            style={{ background: 'var(--cream)', border: '1px solid var(--gold)' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[1.2rem] leading-none">🎵</span>
              <div className="leading-tight">
                <div
                  className="font-['Playfair_Display'] text-[1rem]"
                  style={{ color: 'var(--brown)' }}
                >
                  {currentTrack.title}
                </div>
                {currentTrack.composer && (
                  <div className="text-[0.82rem] italic" style={{ color: 'var(--red)' }}>
                    {currentTrack.composer}
                  </div>
                )}
              </div>
            </div>
            <audio
              key={currentTrack.audio}
              src={currentTrack.audio}
              controls
              preload="metadata"
              className="w-full"
            >
              Browserul tău nu suportă redarea audio.
            </audio>
          </div>
        )}

        <div
          className="font-['Playfair_Display'] text-[1.4rem] mb-3"
          style={{ color: 'var(--brown)' }}
        >
          {item.title}
        </div>
        <div className="text-[0.9rem] italic mb-3" style={{ color: 'var(--red)' }}>
          {item.stage}
        </div>
        <div className="text-base leading-[1.7]" style={{ color: 'var(--ink)' }}>
          {item.desc}
        </div>

        {/* Buton către conținut extern (ex: tur virtual 3D al unui terț, cu credit) */}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 px-5 py-[0.6rem] font-['Crimson_Text'] text-base font-semibold tracking-wider transition-opacity duration-200 hover:opacity-90"
            style={{ background: 'var(--accent)', color: 'var(--navy)' }}
          >
            {item.linkLabel || 'Deschide ↗'}
          </a>
        )}
      </div>
    </div>
  );
}
