import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import {
  IconTrend,
  IconClock,
  IconDatabase,
  IconBarChart,
  IconRefresh,
  IconLayers,
} from '../../icons';

const cards = [
  {
    icon: <IconTrend />,
    title: 'Coste creciente',
    description: 'Un perfil senior cuesta entre 50.000 y 90.000€/año. Escalar el equipo multiplica el gasto de forma lineal y sin garantía de calidad proporcional.',
  },
  {
    icon: <IconClock />,
    title: 'Onboarding lento',
    description: 'Un nuevo desarrollador tarda semanas o meses en ser productivo. El tiempo invertido en contexto no se recupera, y se pierde si esa persona se va.',
  },
  {
    icon: <IconDatabase />,
    title: 'Conocimiento volátil',
    description: 'Cuando alguien sale del equipo, se lleva consigo decisiones, contexto y criterio acumulado durante meses. No hay forma de retenerlo sistemáticamente.',
  },
  {
    icon: <IconBarChart />,
    title: 'Calidad inconsistente',
    description: 'El estándar de código, los criterios de arquitectura y la disciplina de proceso varían entre perfiles. La calidad depende del día y de la persona.',
  },
  {
    icon: <IconRefresh />,
    title: 'Rotación de talento',
    description: 'Los perfiles técnicos son muy demandados. La rotación genera deuda organizativa constante: selección, onboarding, gestión de expectativas.',
  },
  {
    icon: <IconLayers />,
    title: 'Escalado no lineal',
    description: 'Más proyectos = más personas = más coordinación = más fricción. El coste de gestión crece más rápido que la capacidad real del equipo.',
  },
];

export function Problema() {
  return (
    <section id="problema">
      <div className="container">
        <SectionHeader
          label="El contexto"
          title="El modelo de equipo tradicional tiene grietas"
          subtitle="Los equipos técnicos actuales enfrentan problemas estructurales que no son coyunturales, son consecuencia del propio modelo."
        />
        <div className="cards-grid cols-2">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
