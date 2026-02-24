import { SectionHeader } from '../shared/SectionHeader';
import { CompareTable } from '../shared/CompareTable';
import { BlueBanner } from '../shared/BlueBanner';

const rows = [
  {
    old: 'Escribe boilerplate y CRUD durante horas',
    new: 'Define arquitectura y decisiones que requieren criterio humano',
  },
  {
    old: 'Interrumpido constantemente por el equipo',
    new: 'Resuelve qué construir, cómo y por qué. No teclea: diseña',
  },
  {
    old: 'Su tiempo se consume en código rutinario',
    new: 'Valida el trabajo del equipo IA con comentarios de alto nivel',
  },
  {
    old: 'Onboarda a cada nuevo perfil desde cero',
    new: 'El equipo IA ya conoce el proyecto desde el primer día',
  },
  {
    old: 'Cuello de botella en revisiones de código',
    new: 'Multiplica su impacto: sus decisiones se ejecutan por todo el equipo',
  },
  {
    old: 'Su conocimiento no escala más allá de él',
    new: 'Su conocimiento queda documentado y accesible para siempre',
  },
  {
    old: '1 senior = 1 proyecto a la vez',
    new: '1 senior puede coordinar N proyectos en paralelo',
  },
];

export function NuevoSenior() {
  return (
    <section id="senior">
      <div className="container">
        <SectionHeader
          label="Redefiniendo el rol"
          title="El senior deja de ser una máquina de escribir"
        />
        <CompareTable
          oldHeader="Modelo tradicional"
          newHeader="Con Devia"
          rows={rows}
          delay={0.08}
        />
        <BlueBanner delay={0.24}>
          <strong>El Tech Lead como arquitecto de equipos —</strong>
          {' '}El senior que trabaja con Devia tiene por primera vez un equipo totalmente alineado con su forma de trabajar,
          que no olvida nada, que no se va, y que ejecuta exactamente según su criterio — escalando su impacto de forma ilimitada.
        </BlueBanner>
      </div>
    </section>
  );
}
