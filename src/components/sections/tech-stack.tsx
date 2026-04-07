import { type CSSProperties } from 'react';
import { SiDocker, SiKubernetes, SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const technologies = [
  { name: 'Java', category: 'Backend enterprise', icon: FaJava, color: '#f97316', tint: '#fff7ed' },
  { name: 'Node.js', category: 'APIs e integrações', icon: SiNodedotjs, color: '#339933', tint: '#f0fdf4' },
  { name: 'Python', category: 'Dados, IA e automação', icon: SiPython, color: '#3776ab', tint: '#eff6ff' },
  { name: 'React', category: 'Interfaces web', icon: SiReact, color: '#7c3aed', tint: '#f5f3ff' },
  { name: 'TypeScript', category: 'Código tipado', icon: SiTypescript, color: '#3178c6', tint: '#eff6ff' },
  { name: 'React Native', category: 'Aplicativos mobile', icon: SiReact, color: '#8b5cf6', tint: '#f5f3ff' },
  { name: 'Docker', category: 'Containerização', icon: SiDocker, color: '#2496ed', tint: '#eff6ff' },
  { name: 'Kubernetes', category: 'Escala em cloud', icon: SiKubernetes, color: '#326ce5', tint: '#eff6ff' },
  { name: 'PostgreSQL', category: 'Dados relacionais', icon: SiPostgresql, color: '#4169e1', tint: '#eef2ff' },
  { name: 'MongoDB', category: 'Dados documentais', icon: SiMongodb, color: '#47a248', tint: '#f0fdf4' }
];

export function TechStackSection(): JSX.Element {
  return (
    <section id="stack" className="mx-auto w-[92%] max-w-7xl border-t border-neutral-200 py-24">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">Radar Técnico</p>
        <div>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-[#172554] md:text-5xl">Stack pragmático para plataformas robustas e escaláveis.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Unimos confiabilidade enterprise com velocidade de produto, escolhendo tecnologias que mantêm sistemas observáveis, extensíveis e prontos para integrações avançadas.
          </p>
        </div>
      </div>
      <div className="mt-14 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-5">
        {technologies.map((tech) => (
          <article
            key={tech.name}
            className="group border-b border-r border-neutral-200 bg-card p-6 transition-colors hover:border-[var(--stack-color)] hover:bg-[var(--stack-tint)]"
            style={{ '--stack-color': tech.color, '--stack-tint': tech.tint } as CSSProperties}
          >
            <div className="mb-8 flex size-11 items-center justify-center text-neutral-700 transition-colors group-hover:text-[var(--stack-color)]">
              <tech.icon className="size-6" aria-hidden="true" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-950">{tech.name}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-500">{tech.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
