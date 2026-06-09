# Prietenie, muzică, tradiții

Site educațional pentru parteneriatul educațional internațional **Moldova–România**, dedicat
folclorului și obiceiurilor de iarnă. Proiectul unește două ansambluri folclorice:

- **„Firicel de Busuioc"** — IP Gimnaziul „Dumitru Matcovschi", Chișinău, Republica Moldova
- **„Mugurel"** — Clubul Copiilor Dorohoi, jud. Botoșani, România

Este o pagină unică (single-page) cu navigare pe ancore: prezentare, etapele proiectului,
galerie foto/video și echipa.

## Tehnologii

- [Vite](https://vitejs.dev/) + [React 19](https://react.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`)
- JavaScript (fără TypeScript), fără routing

## Comenzi

```bash
npm install      # instalează dependențele
npm run dev      # server local de dezvoltare
npm run build    # build de producție în dist/
npm run preview  # previzualizează build-ul de producție
```

## Structură

```
src/
  App.jsx                 # înșiruie secțiunile paginii
  components/             # Navbar, Hero, About, Gallery, Lightbox, AboutUs, Footer ...
  data/content.js         # sursa unică de conținut (texte, imagini, etape, galerie, echipă)
  assets/images/          # imagini optimizate (galerie, diplome, partituri, pliante)
  index.css               # paleta de culori și decorul „folk"
public/
  video/                  # fișiere video și imaginile-copertă (poster)
  favicon.svg             # logo (notă muzicală)
```

Conținutul site-ului (texte, imagini, etape, galerie) se editează în **`src/data/content.js`** —
componentele doar randează aceste date.

## Galerie

Fiecare element din galerie devine un card; la click se deschide un *lightbox*. Sunt suportate:
slider de imagini, afișare necropată pentru documente (`fit: 'contain'`), „carte digitală" cu
player audio, conținut încorporat (iframe), video local cu imagine-copertă și butoane către
resurse externe.

## Deploy

Proiectul se publică pe [Vercel](https://vercel.com/) (detectare automată Vite: build `vite build`,
output `dist`). La fiecare push pe `main`, Vercel republică automat.
