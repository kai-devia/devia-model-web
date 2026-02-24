import { SectionHeader } from '../shared/SectionHeader';
import { CompareTable } from '../shared/CompareTable';
import { BlueBanner } from '../shared/BlueBanner';

const rows = [
  {
    old: 'Semanas de trial & error hasta una configuración que funcione mínimamente',
    new: 'Proceso estructurado desde el día 1, con metodología probada en múltiples implementaciones',
  },
  {
    old: 'El agente trabaja sin contexto real: sin arquitectura, sin cultura, sin decisiones del equipo',
    new: 'Contexto construido bien desde el inicio: el agente conoce el proyecto desde el primer sprint',
  },
  {
    old: 'Reglas genéricas copiadas de una plantilla que nadie adapta ni mantiene',
    new: 'Reglas adaptadas a cada equipo, revisadas y ajustadas hasta que funcionan de verdad',
  },
  {
    old: 'El equipo pierde la fe antes de ver resultados tangibles',
    new: 'Formamos a los Tech Leads para trabajar en este nuevo modelo y sacarle el máximo partido',
  },
  {
    old: 'La curva de aprendizaje la paga el cliente en tiempo, errores y frustración',
    new: 'Valor visible en semanas, con una base sólida que escala sin necesidad de rehacer',
  },
];

export function Metodologia() {
  return (
    <section id="metodologia">
      <div className="container">
        <SectionHeader
          label="Por qué el setup importa"
          title={<>Configurarlo bien lleva tiempo.<br />Hacerlo mal, también.</>}
          subtitle="Cualquier empresa puede instalar OpenClaw. Configurarlo para que dé resultados reales requiere metodología, experiencia y criterio acumulado."
        />
        <CompareTable
          oldHeader="Sin experiencia previa"
          newHeader="Con Devia"
          rows={rows}
          delay={0.24}
        />
        <BlueBanner delay={0.32}>
          <strong>El proceso existe de todas formas. La diferencia es cómo sale.</strong>
          <br />No vendemos magia. Vendemos metodología probada.
        </BlueBanner>
      </div>
    </section>
  );
}
