import './styles/globals.css';
import './styles/components.css';

import { useScrollReveal } from './hooks/useScrollReveal';
import { Header } from './components/Header';
import { NavDots } from './components/NavDots';
import { Hero } from './components/sections/Hero';
import { Problema } from './components/sections/Problema';
import { Modelo } from './components/sections/Modelo';
import { NuevoSenior } from './components/sections/NuevoSenior';
import { Paradigma } from './components/sections/Paradigma';
import { Contexto } from './components/sections/Contexto';
import { Motor } from './components/sections/Motor';
import { Metodologia } from './components/sections/Metodologia';
import { Conocimiento } from './components/sections/Conocimiento';
import { Seguridad } from './components/sections/Seguridad';
import { Propuesta } from './components/sections/Propuesta';
import { Flujo } from './components/sections/Flujo';
import { CTA } from './components/sections/CTA';

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="logo">Dev<span className="ia">ia</span></div>
        <p>
          Modelo de equipo técnico de nueva generación ·{' '}
          <a
            href="/deviamodel/assets/devia-presentacion.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--blue-light)' }}
          >
            Descargar presentación PDF
          </a>
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <>
      <Header />
      <NavDots />
      <main>
        <Hero />
        <Problema />
        <Modelo />
        <NuevoSenior />
        <Paradigma />
        <Contexto />
        <Motor />
        <Metodologia />
        <Conocimiento />
        <Seguridad />
        <Propuesta />
        <Flujo />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
