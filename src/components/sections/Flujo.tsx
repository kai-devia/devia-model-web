import { motion } from 'framer-motion';
import { SectionHeader } from '../shared/SectionHeader';
import { fadeInUp, defaultViewport } from '../../animations';

interface Step {
  number: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: 'Contexto precargado',
    description: 'El perfil IA arranca con todo el contexto del proyecto: arquitectura, decisiones, estilo de código.',
  },
  {
    number: 2,
    title: 'Análisis y preguntas PO',
    description: 'El perfil analiza el requisito, detecta ambigüedades y hace las preguntas correctas antes de empezar.',
  },
  {
    number: 3,
    title: 'Historias de Usuario en Jira',
    description: 'Genera las historias de usuario, criterios de aceptación y estimaciones directamente en el backlog.',
  },
  {
    number: 4,
    title: 'Definición de arquitectura',
    description: 'Propone la solución técnica siguiendo los patrones del equipo. El Tech Lead la valida o ajusta.',
  },
  {
    number: 5,
    title: 'Desarrollo + Pull Request',
    description: 'Implementa la solución, con tests, documentación y PR lista para review desde el primer intento.',
  },
  {
    number: 6,
    title: 'Review y comentarios',
    description: 'El Tech Lead revisa con comentarios de alto nivel. El perfil incorpora los cambios de forma autónoma.',
  },
  {
    number: 7,
    title: 'Merge y despliegue',
    description: 'Una vez aprobado, el proceso de merge y despliegue sigue el workflow acordado. Trazable y documentado.',
  },
  {
    number: 8,
    title: 'Actualización de contexto',
    description: 'Cada entrega enriquece el contexto del sistema: el equipo sabe más al final que al principio.',
  },
];

export function Flujo() {
  return (
    <section id="flujo">
      <div className="container">
        <SectionHeader
          label="El proceso completo"
          title="De requisito a producción con proceso auditable"
        />
        <div className="steps-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="step-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={defaultViewport}
              transition={{ delay: i * 0.08 }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
