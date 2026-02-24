import './styles/globals.css';
import './styles/components.css';

import { useFullPageScroll } from './hooks/useFullPageScroll';
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

const TOTAL_SECTIONS = 13;

export default function App() {
  const { currentIndex, goTo } = useFullPageScroll(TOTAL_SECTIONS);

  return (
    <>
      <Header goTo={goTo} />
      <NavDots currentIndex={currentIndex} goTo={goTo} />

      {/*
        #sections-wrapper — positioned fixed so it never interacts with
        the browser scroll engine. We slide it via CSS transform + transition.
        This is the same technique used by fullpage.js and Linear.app.
      */}
      <div
        id="sections-wrapper"
        style={{ transform: `translateY(${-currentIndex * 100}vh)` }}
      >
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
      </div>
    </>
  );
}
