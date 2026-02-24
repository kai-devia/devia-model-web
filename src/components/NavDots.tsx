import { useState, useEffect } from 'react';

interface SectionDot {
  id: string;
  label: string;
}

const SECTIONS: SectionDot[] = [
  { id: 'hero',         label: 'Inicio' },
  { id: 'problema',     label: 'El Problema' },
  { id: 'modelo',       label: 'El Modelo' },
  { id: 'senior',       label: 'El Nuevo Senior' },
  { id: 'paradigma',    label: 'El Paradigma' },
  { id: 'contexto',     label: 'Contexto' },
  { id: 'motor',        label: 'Motor' },
  { id: 'metodologia',  label: 'Metodología' },
  { id: 'conocimiento', label: 'Conocimiento' },
  { id: 'seguridad',    label: 'Seguridad' },
  { id: 'propuesta',    label: 'Propuesta' },
  { id: 'flujo',        label: 'Flujo' },
  { id: 'cta',          label: 'Contacto' },
];

export function NavDots() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="nav-dots" aria-label="Navegación por secciones">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`nav-dot${activeSection === id ? ' active' : ''}`}
          data-label={label}
          aria-label={label}
          onClick={() => scrollTo(id)}
        />
      ))}
    </nav>
  );
}
