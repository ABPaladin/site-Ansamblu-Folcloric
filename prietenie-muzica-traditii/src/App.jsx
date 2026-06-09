import './index.css';
import { useScrollReveal } from './hooks/useScrollReveal.js';
import Navbar    from './components/Navbar.jsx';
import Hero      from './components/Hero.jsx';
import MotifBorder from './components/MotifBorder.jsx';
import About     from './components/About.jsx';
import Gallery   from './components/Gallery.jsx';
import AboutUs   from './components/AboutUs.jsx';
import Footer    from './components/Footer.jsx';

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <MotifBorder />
      <About />
      <MotifBorder />
      <Gallery />
      <MotifBorder />
      <AboutUs />
      <MotifBorder />
      <Footer />
    </>
  );
}
