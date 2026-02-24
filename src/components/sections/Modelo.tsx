import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import { fadeInUp, defaultViewport } from '../../animations';
import { IconUser, IconCpu, IconShare } from '../../icons';

const cards = [
  {
    icon: <IconUser />,
    title: 'Tech Lead humano',
    description: 'El único perfil humano del equipo. Define qué construir, valida resultados y es el puente entre negocio y tecnología.',
  },
  {
    icon: <IconCpu />,
    title: 'Perfiles IA especializados',
    description: 'Cada perfil tiene un rol concreto: frontend, backend, QA... Ejecutan con precisión de senior, disponibles en todo momento.',
  },
  {
    icon: <IconShare />,
    title: 'Contexto compartido',
    description: 'Todo el equipo comparte el mismo contexto: arquitectura, decisiones pasadas, estilo de código. Sin silos de conocimiento.',
  },
];

const ArrowDown = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5v14M5 12l7 7 7-7"/>
  </svg>
);

export function Modelo() {
  return (
    <section id="modelo">
      <div className="container">
        <SectionHeader
          label="Cómo funciona"
          title={<>Un Tech Lead humano.<br />Un equipo siempre disponible.</>}
        />

        <motion.div
          className="diagram"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          transition={{ delay: 0.16 }}
        >
          <div className="diagram-box primary">
            Tech Lead Humano
            <div style={{ fontSize: '0.75rem', fontWeight: 400, marginTop: 4, opacity: 0.7 }}>
              Cara al cliente · Decisiones · Arquitectura
            </div>
          </div>

          <div className="diagram-arrow">
            <div className="diagram-line" />
            <ArrowDown />
            <div className="diagram-line" style={{ background: 'linear-gradient(to bottom, transparent, var(--blue))' }} />
          </div>

          <div className="diagram-row">
            <div className="diagram-box secondary">
              Perfil IA #1<br />
              <span style={{ color: 'var(--blue-light)', fontSize: '0.78rem' }}>Frontend</span>
            </div>
            <div className="diagram-box secondary">
              Perfil IA #2<br />
              <span style={{ color: 'var(--blue-light)', fontSize: '0.78rem' }}>Backend</span>
            </div>
            <div className="diagram-box secondary">
              Perfil IA #3<br />
              <span style={{ color: 'var(--blue-light)', fontSize: '0.78rem' }}>QA / Testing</span>
            </div>
          </div>

          <div className="diagram-arrow">
            <div className="diagram-line" />
            <ArrowDown />
            <div className="diagram-line" style={{ background: 'linear-gradient(to bottom, transparent, var(--blue-dim))' }} />
          </div>

          <div className="diagram-box tertiary">
            Contexto compartido · Decisiones · Estilo de código
          </div>
        </motion.div>

        <div className="cards-grid cols-3" style={{ marginTop: 8 }}>
          {cards.map((card, i) => (
            <Card key={card.title} {...card} delay={0.24 + i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
