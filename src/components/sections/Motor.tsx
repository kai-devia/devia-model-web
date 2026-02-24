import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import { fadeInUp, defaultViewport } from '../../animations';
import { IconBolt, IconUser, IconAward } from '../../icons';

const cards = [
  {
    icon: <IconBolt />,
    title: 'Mejora instantánea sin fricciones',
    description: 'Cuando llega un modelo IA más capaz, el sistema lo adopta en minutos. Sin reconfigurar, sin reentrenar, sin migrar datos.',
  },
  {
    icon: <IconUser />,
    title: 'Ningún dev humano puede actualizarse así',
    description: 'Un desarrollador necesita meses para aprender una nueva tecnología. El motor del sistema se actualiza de forma inmediata.',
  },
  {
    icon: <IconAward />,
    title: 'El valor está en el sistema, no en el modelo',
    description: 'El contexto acumulado, las reglas y la metodología son el activo real. El modelo es la herramienta: intercambiable.',
  },
];

export function Motor() {
  return (
    <section id="motor">
      <div className="container">
        <SectionHeader
          label="Motor intercambiable"
          title="El sistema que mejora con la IA"
        />

        <motion.div
          className="engine-diagram"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.08 }}
        >
          <div className="engine-box system">
            Sistema Devia<br />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 400 }}>
              Contexto · Reglas · Metodología
            </span>
          </div>
          <div className="engine-arrow">&#8644;</div>
          <div className="engine-box model">
            Modelo IA<br />
            <span className="engine-swap-note">GPT-4 · Claude · Gemini…</span>
          </div>
        </motion.div>

        <div className="cards-grid cols-3">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} delay={0.16 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
