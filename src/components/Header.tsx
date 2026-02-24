import { IconDownload } from '../icons';

export function Header() {
  const pdfPath = '/deviamodel/assets/devia-presentacion.pdf';

  return (
    <header id="site-header">
      <div className="container header-inner">
        <a href="/deviamodel" className="header-logo">
          Dev<span className="ia">ia</span>
        </a>
        <nav className="header-nav">
          <a href="#modelo">El modelo</a>
          <a href="#metodologia">Metodología</a>
          <a href="#seguridad">Seguridad</a>
          <a href="#cta">Contacto</a>
        </nav>
        <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="header-btn">
          <IconDownload />
          Descargar PDF
        </a>
      </div>
    </header>
  );
}
