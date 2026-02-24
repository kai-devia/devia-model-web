import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import {
  IconDatabase,
  IconBolt,
  IconCheck,
  IconCopy,
  IconSearch,
  IconUserMinus,
  IconActivity,
  IconDollar,
} from '../../icons';

const cards = [
  {
    icon: <IconDatabase />,
    title: 'Conocimiento que no se pierde',
    description: 'El activo más valioso de tu equipo, por fin estructurado y permanente.',
  },
  {
    icon: <IconBolt />,
    title: 'Onboarding instantáneo',
    description: 'Un nuevo perfil arranca en horas conociendo el proyecto al completo.',
  },
  {
    icon: <IconCheck />,
    title: 'Calidad consistente',
    description: 'El mismo estándar en cada PR, cada sprint, cada proyecto. Sin variaciones.',
  },
  {
    icon: <IconCopy />,
    title: 'Escalado cloneable',
    description: 'Duplicar la capacidad del equipo es configuración, no contratación.',
  },
  {
    icon: <IconSearch />,
    title: 'Proceso auditable',
    description: 'Cada decisión, cada acción, cada cambio: trazable desde el primer día.',
  },
  {
    icon: <IconUserMinus />,
    title: 'Sin overhead de RRHH',
    description: 'Sin selección, sin onboarding, sin gestión de expectativas ni retención.',
  },
  {
    icon: <IconActivity />,
    title: 'Velocidad de senior',
    description: 'Código con criterio de senior entregado a la velocidad de la IA.',
  },
  {
    icon: <IconDollar />,
    title: 'Coste predecible',
    description: 'Sin sorpresas. Sin rotación. Sin costes ocultos de gestión de personas.',
  },
];

export function Propuesta() {
  return (
    <section id="propuesta">
      <div className="container">
        <SectionHeader
          label="Por qué Devia"
          title="Lo que ninguna consultora tradicional puede ofrecerte"
        />
        <div className="cards-grid cols-4">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} delay={i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
}
