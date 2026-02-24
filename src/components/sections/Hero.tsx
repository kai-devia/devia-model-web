import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations';
import { IconDownload } from '../../icons';

const pdfPath = '/deviamodel/assets/devia-presentacion.pdf';

export function Hero() {
  return (
    <section id="hero">
      <div className="hero-extra-glow" />
      <div className="hero-content">
        <motion.p
          className="hero-tagline"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          Modelo de equipo técnico
        </motion.p>
        <motion.h1
          className="hero-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.1 }}
        >
          Equipos de desarrollo<br />de nueva generación
        </motion.h1>
        <motion.p
          className="hero-desc"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.2 }}
        >
          Devia redefine cómo se construyen equipos técnicos. Perfiles de IA especializados,
          coordinados por un Tech Lead humano, que trabajan con la calidad y disciplina de un senior
          — a una fracción del coste y tiempo tradicional.
        </motion.p>
        <motion.div
          className="hero-actions"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.3 }}
        >
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <IconDownload />
            Descargar PDF
          </a>
        </motion.div>
      </div>

      <div className="hero-scroll-hint">
        <span>Descubre el modelo</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </div>
    </section>
  );
}
