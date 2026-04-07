import { SiDocker, SiKubernetes, SiMongodb, SiNodedotjs, SiPostgresql, SiPython, SiReact, SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa6';

const technologies = [
  { name: 'Java', category: 'Backend enterprise', icon: FaJava },
  { name: 'Node.js', category: 'APIs e integrações', icon: SiNodedotjs },
  { name: 'Python', category: 'Dados, IA e automação', icon: SiPython },
  { name: 'React', category: 'Interfaces web', icon: SiReact },
  { name: 'TypeScript', category: 'Código tipado', icon: SiTypescript },
  { name: 'React Native', category: 'Aplicativos mobile', icon: SiReact },
  { name: 'Docker', category: 'Containerização', icon: SiDocker },
  { name: 'Kubernetes', category: 'Escala em cloud', icon: SiKubernetes },
  { name: 'PostgreSQL', category: 'Dados relacionais', icon: SiPostgresql },
  { name: 'MongoDB', category: 'Dados documentais', icon: SiMongodb }
];

export function TechStackSection(): JSX.Element {
  return (
    <section id="stack" className="mx-auto w-[92%] max-w-7xl border-t border-neutral-200 py-24">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Radar Técnico</p>
        <div>
          <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">Stack pragmático para plataformas robustas e escaláveis.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
          Unimos confiabilidade enterprise com velocidade de produto, escolhendo tecnologias que mantêm sistemas observáveis, extensíveis e prontos para integrações avançadas.
          </p>
        </div>
      </div>
      <div className="mt-14 grid border-l border-t border-neutral-200 sm:grid-cols-2 lg:grid-cols-5">
        {technologies.map((tech) => (
          <article key={tech.name} className="group border-b border-r border-neutral-200 bg-card p-6 transition hover:bg-neutral-100">
            <div className="mb-8 flex size-11 items-center justify-center text-neutral-700 transition group-hover:text-primary">
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
