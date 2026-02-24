import { motion } from 'framer-motion';
import { fadeInUp, defaultViewport } from '../../animations';
import { IconDownload } from '../../icons';

const pdfPath = '/deviamodel/assets/devia-presentacion.pdf';

const bullets = [
  'Un requisito de tu producto, procesado de principio a fin',
  'Análisis, historias de usuario, código y PR en una sola sesión',
  'El Tech Lead coordina, el equipo IA ejecuta: lo ves en directo',
  'Sin preparación previa ni scripts, todo en tiempo real',
];

export function CTA() {
  return (
    <section id="cta">
      <div className="container cta-content">
        <motion.span
          className="section-label"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
        >
          ¿Listo para verlo funcionar?
        </motion.span>
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.08 }}
          style={{ marginTop: 8, fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          No te lo contamos.<br />Te lo mostramos.
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.16 }}
          style={{ maxWidth: 560, margin: '16px auto 0', fontSize: '1.05rem' }}
        >
          La mejor forma de entender el modelo Devia es verlo funcionar en tiempo real:
          un requisito real, un flujo completo, código en producción.
        </motion.p>

        <motion.ul
          className="cta-bullets"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.24 }}
        >
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </motion.ul>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.32 }}
        >
          <a href={pdfPath} target="_blank" rel="noopener noreferrer" className="btn-cta">
            <IconDownload />
            Descargar presentación completa
          </a>
        </motion.div>
      </div>
    </section>
  );
}
