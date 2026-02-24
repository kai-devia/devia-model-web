import { IconDownload } from '../icons';

interface HeaderProps {
  goTo: (index: number) => void;
}

// Order must match App.tsx sections array:
// 0:Hero 1:Problema 2:Modelo 3:NuevoSenior 4:Paradigma 5:Contexto
// 6:Motor 7:Metodologia 8:Conocimiento 9:Seguridad 10:Propuesta 11:Flujo 12:CTA
const NAV_LINKS = [
  { label: 'El modelo',    index: 2 },
  { label: 'Metodología',  index: 7 },
  { label: 'Seguridad',    index: 9 },
  { label: 'Contacto',     index: 12 },
];

export function Header({ goTo }: HeaderProps) {
  const pdfPath = '/deviamodel/assets/devia-presentacion.pdf';

  return (
    <header id="site-header">
      <div className="container header-inner">
        <a href="/deviamodel" className="header-logo">
          Dev<span className="ia">ia</span>
        </a>
        <nav className="header-nav">
          {NAV_LINKS.map(({ label, index }) => (
            <button
              key={label}
              onClick={() => goTo(index)}
              className="header-nav-btn"
            >
              {label}
            </button>
          ))}
        </nav>
        <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="header-btn">
          <IconDownload />
          Descargar PDF
        </a>
      </div>
    </header>
  );
}
