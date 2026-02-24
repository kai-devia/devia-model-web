/**
 * NavDots — sidebar navigation dots.
 * Receives currentIndex + goTo from App (driven by useFullPageScroll).
 * No IntersectionObserver needed — the scroll state lives in the hook.
 */

const SECTIONS = [
  { label: 'Inicio' },
  { label: 'El Problema' },
  { label: 'El Modelo' },
  { label: 'El Nuevo Senior' },
  { label: 'El Paradigma' },
  { label: 'Contexto' },
  { label: 'Motor' },
  { label: 'Metodología' },
  { label: 'Conocimiento' },
  { label: 'Seguridad' },
  { label: 'Propuesta' },
  { label: 'Flujo' },
  { label: 'Contacto' },
];

interface NavDotsProps {
  currentIndex: number;
  goTo: (index: number) => void;
}

export function NavDots({ currentIndex, goTo }: NavDotsProps) {
  return (
    <nav id="nav-dots" aria-label="Navegación por secciones">
      {SECTIONS.map(({ label }, i) => (
        <button
          key={i}
          className={`nav-dot${currentIndex === i ? ' active' : ''}`}
          data-label={label}
          aria-label={label}
          onClick={() => goTo(i)}
        />
      ))}
    </nav>
  );
}
