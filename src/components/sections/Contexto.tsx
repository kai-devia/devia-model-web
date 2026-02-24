import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import {
  IconFile,
  IconBolt,
  IconLock,
  IconTrend,
  IconSearch,
  IconDiamond,
} from '../../icons';

const cards = [
  {
    icon: <IconFile />,
    title: 'El "por qué" capturado, no solo el "qué"',
    description: 'Cada decisión de arquitectura queda registrada con su razonamiento. No solo qué se hizo, sino por qué se hizo así.',
  },
  {
    icon: <IconBolt />,
    title: 'Onboarding en horas, no en meses',
    description: 'Un nuevo perfil para el mismo cliente arranca conociendo el proyecto desde el día 1. Sin curva de aprendizaje.',
  },
  {
    icon: <IconLock />,
    title: 'El experto que no se va con su renuncia',
    description: 'Con Devia, ese conocimiento deja de ser personal: es del sistema. La organización nunca más pierde lo que sabe.',
  },
  {
    icon: <IconTrend />,
    title: 'El contexto crece con cada sprint',
    description: 'Cada PR revisada, cada bug resuelto, cada decisión tomada enriquece el conocimiento acumulado del sistema.',
  },
  {
    icon: <IconSearch />,
    title: 'El cambio de hace dos meses: recuperable en segundos',
    description: 'Un dev nuevo no sabría por qué se cambió esa query en octubre. El perfil IA sí. Lo recuerda todo.',
  },
  {
    icon: <IconDiamond />,
    title: 'El activo más valioso de tu equipo, estructurado',
    description: 'El conocimiento colectivo de un equipo técnico maduro vale millones. Por fin está organizado y accesible.',
  },
];

export function Contexto() {
  return (
    <section id="contexto">
      <div className="container">
        <SectionHeader
          label="Memoria institucional"
          title="El conocimiento que nunca se va"
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
