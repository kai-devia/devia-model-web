import { SectionHeader } from '../shared/SectionHeader';
import { CompareTable } from '../shared/CompareTable';
import { BlueBanner } from '../shared/BlueBanner';

const rows = [
  {
    old: 'El desarrollador sigue tecleando; la IA autocompleta líneas',
    new: 'La IA ejecuta autónomamente; el desarrollador define qué construir',
  },
  {
    old: 'Contexto limitado a los ficheros abiertos',
    new: 'Contexto completo y persistente: arquitectura, historial, decisiones',
  },
  {
    old: 'Cada sesión empieza desde cero',
    new: 'Memoria acumulada de meses: el perfil recuerda todo lo vivido',
  },
  {
    old: 'Un dev, un editor, una tarea a la vez',
    new: 'Un arquitecto coordinando N perfiles en paralelo',
  },
  {
    old: 'Las reglas dependen de que cada persona las recuerde',
    new: 'Las reglas son configuración que se aplica siempre, sin excepción',
  },
  {
    old: 'Escalar significa contratar más personas',
    new: 'Escalar es configuración: nuevo perfil activo en horas, no en meses',
  },
  {
    old: 'Cada desarrollador trabaja a su manera',
    new: 'Todos los perfiles siguen el mismo criterio sin excepción',
  },
];

export function Paradigma() {
  return (
    <section id="paradigma">
      <div className="container">
        <SectionHeader
          label="Un cambio de paradigma"
          title="IA como copiloto… o como el equipo"
        />
        <CompareTable
          oldHeader="IA como asistente"
          newHeader="Modelo Devia"
          rows={rows}
          delay={0.08}
        />
        <BlueBanner delay={0.24}>
          <strong>El salto no es añadir IA a lo que ya hacías.</strong>
          {' '}Es replantear quién hace qué.
        </BlueBanner>
      </div>
    </section>
  );
}
