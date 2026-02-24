import { SectionHeader } from '../shared/SectionHeader';
import { Card } from '../shared/Card';
import { BlueBanner } from '../shared/BlueBanner';
import {
  IconShield,
  IconKey,
  IconAlertOctagon,
  IconFileSearch,
  IconXCircle,
  IconBolt,
} from '../../icons';

const cards = [
  {
    icon: <IconShield />,
    title: 'Aislamiento por cliente',
    description: 'El contexto de cada cliente está completamente aislado. Ningún dato cruza entre proyectos ni organizaciones.',
  },
  {
    icon: <IconKey />,
    title: 'Credenciales cifradas y aisladas',
    description: 'Las credenciales se almacenan cifradas en vault dedicado, con acceso estrictamente controlado y auditado.',
  },
  {
    icon: <IconAlertOctagon />,
    title: 'Regla de no-acción externa',
    description: 'El agente no ejecuta acciones externas sin consentimiento explícito. El humano siempre aprueba antes de que algo salga al exterior.',
  },
  {
    icon: <IconFileSearch />,
    title: 'Auditabilidad total',
    description: 'Cada acción del agente queda registrada: qué hizo, cuándo, con qué contexto. Trazabilidad completa desde el primer sprint.',
  },
  {
    icon: <IconXCircle />,
    title: 'Sin entrenamiento con datos del cliente',
    description: 'Los datos del cliente no se usan para entrenar modelos. Lo que entra no alimenta a nadie más allá del proyecto.',
  },
  {
    icon: <IconBolt />,
    title: 'Revocabilidad inmediata',
    description: 'Cualquier acceso puede revocarse en segundos. Si un perfil o integración deja de ser necesaria, se desactiva al instante.',
  },
];

export function Seguridad() {
  return (
    <section id="seguridad">
      <div className="container">
        <SectionHeader
          label="Gestión del riesgo"
          title="Seguridad por diseño, no como parche"
        />
        <div className="cards-grid cols-3">
          {cards.map((card, i) => (
            <Card key={card.title} {...card} delay={i * 0.08} />
          ))}
        </div>
        <BlueBanner delay={0.56} centered>
          <strong>El humano siempre tiene el control.</strong> La IA ejecuta. La persona decide.
        </BlueBanner>
      </div>
    </section>
  );
}
