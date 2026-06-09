// ─────────────────────────────────────────────────────────────────────────────
//  SURSA UNICĂ DE CONȚINUT a site-ului „Prietenie, muzică, tradiții".
//  Ca să schimbi textele/datele, editezi AICI (nu componentele).
//
//  IMAGINI: deocamdată folosim doar `photoLabel` (text-placeholder afișat în card).
//  Ca să adaugi poze reale:
//    1. pune fișierele în `src/assets/images/...` (nume fără spații/diacritice);
//    2. importă-le sus, ex:  import poza1 from '../assets/images/galerie/poza1.jpg';
//    3. pe item adaugă:      images: [poza1, poza2],   (devin slider în lightbox)
//  Pentru pliante/diplome (verticale, cu text) adaugă și `fit: 'contain'`.
// ─────────────────────────────────────────────────────────────────────────────
import muzeu1 from '../assets/images/galerie/muzeu1.jpg';
import muzeu2 from '../assets/images/galerie/muzeu2.jpg';
import muzeu3 from '../assets/images/galerie/muzeu3.jpg';
import muzeu4 from '../assets/images/galerie/muzeu4.jpg';
import muzeu5 from '../assets/images/galerie/muzeu5.jpg';
import muzeu6 from '../assets/images/galerie/muzeu6.jpg';
import muzeu7 from '../assets/images/galerie/muzeu7.jpg';
import diploma1 from '../assets/images/Diplome/005.png';
import diploma2 from '../assets/images/Diplome/006.png';
import diploma3 from '../assets/images/Diplome/007.png';
import diploma4 from '../assets/images/Diplome/008.png'; 
import part1 from '../assets/images/partituri/001.png';
import part2 from '../assets/images/partituri/002.png';
import part3 from '../assets/images/partituri/003.png';
import part4 from '../assets/images/partituri/004.png';
import capra from '../assets/images/galerie/Pliant Caprita.png';
import kahoot from '../assets/images/galerie/kahoot.jpg';

import masc1 from '../assets/images/masti/masc1.jpg';
import masc2 from '../assets/images/masti/masc2.jpg';
import masc3 from '../assets/images/masti/masc3.jpg';
import masc4 from '../assets/images/masti/masc4.jpg';
import masc5 from '../assets/images/masti/masc5.jpg';
import masc6 from '../assets/images/masti/masc6.jpg';
import masc7 from '../assets/images/masti/masc7.jpg';
import masc8 from '../assets/images/masti/masc8.jpg';
import masc9 from '../assets/images/masti/masc9.jpg';

import conc1 from '../assets/images/concans/con1.jpg';
import conc2 from '../assets/images/concans/con2.jpg';
import conc3 from '../assets/images/concans/con3.jpg';
import conc4 from '../assets/images/concans/con4.jpg';
import conc5 from '../assets/images/concans/con5.jpg';
import conc6 from '../assets/images/concans/con6.jpg';
import conc7 from '../assets/images/concans/con7.jpg';
import conc8 from '../assets/images/concans/con8.jpg';
import conc9 from '../assets/images/concans/con9.jpg';
import conc10 from '../assets/images/concans/con10.jpg';
import conc11 from '../assets/images/concans/con11.jpg';
import conc12 from '../assets/images/concans/con12.jpg';

export const aboutCards = [
  {
    icon: '🎯',
    title: 'Scopul Proiectului',
    text: 'Educația elevilor în spiritul înțelegerii valorilor culturale, a tradițiilor și obiceiurilor de iarnă. Prin platforme digitale dezvoltăm comunicarea, competențele digitale și cunoașterea portului popular din spațiul românesc.',
  },
  {
    icon: '❄️',
    title: 'Motivația',
    text: 'Cultivăm dragostea elevilor față de tradițiile de iarnă și valorile naționale. Elevii sunt dornici să învețe obiceiuri și tradiții și să descopere diversitatea culturală — o sursă de inovație și creativitate.',
  },
  {
    icon: '💻',
    title: 'Instrumente Digitale',
    text: 'Google Meet, Zoom, Kahoot, Google Sites și diverse platforme educaționale online au stat la baza colaborării virtuale dintre cele două ansambluri folclorice de pe ambele maluri ale Prutului.',
  },
  {
    icon: '🤝',
    title: 'Parteneriat Internațional',
    text: 'Protocol de colaborare semnat la 20 ianuarie 2026, unind IP Gimnaziul „Dumitru Matcovschi" din Chișinău și Clubul Copiilor Dorohoi (jud. Botoșani) într-un proiect educațional comun.',
  },
];

export const stages = [
  {
    num: 'I',
    period: 'Septembrie 2025',
    desc: 'Lansarea proiectului: prezentarea obiectivelor, poster, tur virtual al instituției, reguli de navigare sigură pe internet',
  },
  {
    num: 'II',
    period: 'Octombrie 2025',
    desc: 'Tur virtual la Muzeul de Etnografie Botoșani, concurs de desene „Obiceiurile de iarnă", masă rotundă online și inițierea proiectului de cercetare',
  },
  {
    num: 'III',
    period: 'Noiembrie–Decembrie 2025',
    desc: 'Joc Kahoot, cartea digitală „Colinde de Crăciun" și pliantul „Teatrul popular" (Căprița)',
  },
  {
    num: 'IV',
    period: 'Ianuarie–Februarie 2026',
    desc: 'Concurs cu oferirea de diplome și prezentarea proiectelor de cercetare pe platforme educaționale',
  },
  {
    num: 'V',
    period: 'Martie 2026',
    desc: 'Realizarea unui site Google Sites — expoziție virtuală cu toate produsele proiectului',
  },
];

export const galleryItems = [
  {
    cat: 'online',
    title: 'Lansarea Proiectului — Sesiune Online',
    stage: 'Etapa I · Septembrie 2025',
    desc: 'Cei 100 de elevi din ambele ansambluri s-au conectat prin Google Meet pentru lansarea oficială. Au fost prezentate obiectivele și planul de activitate, s-a creat posterul echipei și s-au discutat regulile de navigare sigură pe internet.',
    caption: '100 de elevi conectați din Moldova și România pentru primul pas comun',
    tag: 'Online · Lansare',
    photoLabel: 'Sesiune video online\nGoogle Meet',
  },
    {
    cat: 'online',
    title: 'Tur virtual al Instituției Gimnaziului „Dumitru Matcovschi"',
    stage: 'Etapa I · Septembrie 2025',
    desc: 'Elevii au făcut un tur virtual al instituției din Chișinău, prezentând sălile de clasă, biblioteca și spațiile comune. A fost o oportunitate de a se cunoaște mai bine și de a împărtăși mediul lor de învățare.',
    caption: 'Tur virtual al școlii din Chișinău — Gimnaziul „Dumitru Matcovschi"',
    tag: 'Online · Lansare',
    // Video local: pune fișierul în folderul `public/video/` cu EXACT acest nume.
    // (Fișierele din public/ NU se importă sus — se referă direct prin URL, ca aici.)
    // Pentru a schimba videoul, înlocuiește fișierul sau modifică numele de mai jos.
    video: `${import.meta.env.BASE_URL}video/tur-virtual-matcovschi.mp4`,
    // Opțional: o imagine-copertă (poster) pentru card și pentru previzualizarea videoului.
    // Pune-o în public/video/ și decomentează linia de mai jos:
    poster: `${import.meta.env.BASE_URL}video/tur-virtual-matcovschi.jpg`,
  },
  {
    cat: 'lansare',
    title: 'Tur Virtual — Muzeul de Etnografie Botoșani',
    stage: 'Etapa II · Octombrie 2025',
    desc: 'Elevii au explorat virtual Muzeul de Etnografie din Botoșani, descoperind portul popular, obiceiurile și meșteșugurile tradiționale din zonă — un moment de conexiune culturală peste Prut.',
    caption: 'Explorarea digitală a patrimoniului etnografic din Botoșani',
    tag: 'Lansare · Cultural',
    images: [muzeu1, muzeu2, muzeu3, muzeu4, muzeu5, muzeu6, muzeu7],
    photoLabel: 'Tur virtual\nMuzeul de Etnografie',
  },
  {
    cat: 'concurs',
    title: 'Concurs de confecționare a măștilor tradiționale  folosite în obiceiurile de iarnă „Jocul Măștilor”',
    stage: 'Etapa III · Decembrie 2025',
    desc: 'Elevii au participat cu entuziasm la concursul de confecționare a măștilor tradiționale folosite în obiceiurile de iarnă „Jocul Măștilor” — o ocazie de a explora arta populară și de a se conecta cu tradițiile locale.',
    caption: 'Concurs de confecționare a măștilor tradiționale pentru „Jocul Măștilor”',
    tag: 'Activitate · Concurs',
    images: [masc1, masc2, masc3, masc4, masc5, masc6, masc7,masc9 , masc8],
  },
  // {
  //   cat: 'activitati',
  //   title: 'Concurs de Desene și Postere — „Obiceiurile de Iarnă"',
  //   stage: 'Etapa II · Octombrie 2025',
  //   desc: 'Elevii au participat cu entuziasm la concursul de desene și postere cu tema „Obiceiurile de iarnă" — o ocazie de a explora arta vizuală în legătură cu tradițiile și folclorul de iarnă.',
  //   caption: 'Concurs de desene și postere la tema „Obiceiurile de iarnă"',
  //   tag: 'Activitate · Concurs',
  //   photoLabel: 'Desene și postere\nObiceiurile de iarnă',
  // },
  {
    cat: 'concurs',
    title: 'Proiect de Cercetare — „Folclorul și obiceiurile de iarnă"',
    stage: 'Etapa II–IV · 2025–2026',
    desc: 'Masă rotundă online „Cunoașterea obiceiurilor și tradițiilor de iarnă de pe ambele maluri ale Prutului" și proiectul de cercetare „Folclorul și obiceiurile de iarnă din centrul Basarabiei și Botoșani", la care s-au implicat toți elevii.',
    caption: 'Masă rotundă online și cercetarea folclorului de iarnă din ambele zone',
    tag: 'Cercetare · Online',
    link: 'https://create.kahoot.it/share/traditii-si-obiceiuri-de-iarna/eada4809-ddae-4ee5-ad73-9c9f06e049c4',
    linkLabel: '🎮 Joacă Kahoot — Tradiții și obiceiuri de iarnă ↗',
    img: kahoot,
  },
  {
    cat: 'activitati',
    title: 'Cartea Digitală — „Colinde de Crăciun"',
    stage: 'Etapa III · Noiembrie–Decembrie 2025',
    desc: 'Carte digitală realizată de elevi, în care au adunat colinde tradiționale de Crăciun. Majoritatea elevilor au participat la crearea ei, valorificând repertoriul folcloric de iarnă.',
    caption: 'Colinde tradiționale adunate de elevi într-o carte digitală',
    tag: 'Activitate · Digital',
    images: [part1, part2, part3, part4],
    photoLabel: 'Carte digitală\nColinde de Crăciun',
  },
  {
    cat: 'activitati',
    title: 'Pliant — „Teatrul Popular" (Căprița)',
    stage: 'Etapa III · Decembrie 2025',
    desc: 'Pliant informativ realizat de elevi despre teatrul popular și jocul „Căprița", obicei tradițional de iarnă din spațiul românesc.',
    caption: 'Pliant despre teatrul popular și obiceiul „Căprița"',
    tag: 'Expoziție',
    images: [capra],
    fit: 'contain',
    photoLabel: 'Pliant\nTeatrul popular',
  },
  {
    //Concursul onli-ne de totalizare a obiceiurilor și tradițiilor de iarnă „Florile Dalbe”
    cat: 'concurs',
    title: 'Poze din activitatea ansamblurilor folclorice „Firicel de Busuioc” Chișinău și Ansamblul folcloric „Mugurelul” din Dorohoi Botoșani',
    stage: 'Etapa IV · Februarie 2026',
    desc: 'Poze din activitatea ansamblurilor folclorice.',
    caption: 'Poze din activitatea ansamblurilor folclorice ',
    tag: 'Concurs · Online',
    images: [conc12, conc1, conc2, conc3, conc4, conc5, conc6, conc10, conc7, conc8, conc9, conc11],
  },
  {
    cat: 'concurs',
    title: 'Concurs! Oferirea de Diplome',
    stage: 'Etapa IV · Februarie 2026',
    desc: 'Concursul a culminat cu oferirea de diplome și prezentarea proiectelor de cercetare realizate de elevi pe parcursul proiectului.',
    caption: 'Concurs!!! Oferirea de diplome și prezentarea proiectelor',
    tag: 'Concurs · Expoziție',
    images: [diploma1, diploma2, diploma3, diploma4],
    fit: 'contain',
    photoLabel: 'Expoziție diplome\nConcurs de Excelență',
  },
];

export const impactStats = [
  { num: '100', label: 'Elevi implicați\nactiv' },
  { num: '2',   label: 'Țări partenere\nMoldova & România' },
  { num: '5',   label: 'Etape de\nactivitate' },
  { num: '6',   label: 'Sesiuni de\ninstruire' },
];

export const teamMembers = [
  {
    initials: 'BM',
    name: 'Barbănouă Marina',
    role: 'Conducător de cerc, ansamblu folcloric · Grad Didactic II',
    school: 'IP Gimnaziul „Dumitru Matcovschi"',
    location: 'Chișinău, Republica Moldova',
    ensemble: 'Ansamblul folcloric „Firicel de Busuioc"',
  },
  {
    initials: 'MD',
    name: 'Marcel Dupu',
    role: 'Profesor, Director · Grad Didactic I',
    school: 'Clubul Copiilor Dorohoi',
    location: 'Dorohoi, jud. Botoșani, România',
    ensemble: 'Ansamblul folcloric „Mugurel"',
  },
];

export const durabilityItems = [
  { icon: '📅', text: 'Vom continua proiectul în fiecare an cu activități noi și relevante' },
  { icon: '📚', text: 'Îmbogățirea continuă a bibliotecii digitale create de elevi' },
  { icon: '💻', text: 'Dezvoltarea în continuare a competențelor digitale' },
  { icon: '📖', text: 'Crearea de noi cărți digitale cu repertoriul folcloric' },
  { icon: '🏆', text: 'Participare activă în obținerea de performanțe la concursuri' },
  { icon: '🤝', text: 'Noi acorduri de parteneriat pe parcursul următorilor 5 ani' },
];

// Site-uri unde sunt diseminate rezultatele proiectului (folosite în Footer).
export const disseminationLinks = [
  { label: 'Gimnaziul „Dumitru Matcovschi"', url: 'https://dumitrumatcovschichisinau.educ.md/' },
  { label: 'Orizont', url: 'https://orizont.org/ro/' },
  { label: 'Școala Dorohoi', url: 'http://www.scoala8dorohoi.ro/' },
];

// Întoarce lista de imagini a unui item (suportă `book` cu pagini, `images` sau `img`).
export function getItemImages(item) {
  if (item.book?.length) return item.book.flatMap((comp) => comp.pages);
  if (item.images?.length) return item.images;
  if (item.img) return [item.img];
  return [];
}
