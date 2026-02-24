import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import {
  IconBook,
  IconLayout,
  IconCheckSquare,
  IconTarget,
  IconUsers,
  IconBolt,
} from '../../icons';

const cards = [
  {
    icon: <IconBook />,
    title: 'Manual del stack técnico',
    description: 'Pasa la documentación de tu stack y el agente razona con tu lenguaje, tus convenciones y tus dependencias desde ese momento.',
  },
  {
    icon: <IconLayout />,
    title: 'Guías de arquitectura',
    description: 'Los patrones de tu equipo se convierten en reglas que el agente aplica siempre. Sin desvíos, sin excepciones.',
  },
  {
    icon: <IconCheckSquare />,
    title: 'Estándares de testing',
    description: 'Tu estrategia de cobertura, tus convenciones de test: el agente lo interioriza sin que nadie tenga que recordárselo.',
  },
  {
    icon: <IconTarget />,
    title: 'Decisiones de producto y negocio',
    description: 'El agente conoce el contexto de lo que construye: por qué existe cada funcionalidad, qué restricciones hay, qué no se puede tocar.',
  },
  {
    icon: <IconUsers />,
    title: 'Cultura y forma de trabajar del equipo',
    description: 'El agente no es genérico, es tuyo. Trabaja exactamente como trabaja tu equipo — con su ritmo, su estilo y sus prioridades.',
  },
  {
    icon: <IconBolt />,
    title: 'Actualizable en tiempo real',
    description: 'Cuando cambia una guía o llega una nueva versión del stack, el agente se actualiza al instante. Sin reentrenamiento.',
  },
];

export function Conocimiento() {
  return (
    <section id="conocimiento">
      <div className="container">
        <SectionHeader
          label="Tu empresa, en minutos"
          title="La IA aprende lo que tú le enseñas"
        />
        <div className="cards-grid cols-3">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
