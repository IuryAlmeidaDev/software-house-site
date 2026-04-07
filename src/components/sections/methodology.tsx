import { GitBranch, LockKeyhole, Repeat2 } from 'lucide-react';
import { Card } from '../ui/card';

const methodology = [
  {
    title: 'Entrega ágil de produto',
    description: 'Ciclos curtos de descoberta, roadmap priorizado e rituais transparentes mantêm stakeholders alinhados do conceito ao lançamento.',
    icon: Repeat2
  },
  {
    title: 'Engenharia CI/CD',
    description: 'Validações automatizadas, deploys repetíveis e paridade entre ambientes reduzem risco de release e aceleram a evolução.',
    icon: GitBranch
  },
  {
    title: 'Security by Design',
    description: 'Arquitetura orientada a riscos, acesso com menor privilégio, fronteiras de validação e padrões seguros desde o primeiro dia.',
    icon: LockKeyhole
  }
];

export function MethodologySection(): JSX.Element {
  return (
    <section id="methodology" className="mx-auto w-[92%] max-w-7xl border-t border-neutral-200 py-24">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Método</p>
        <div className="mt-6 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">Construído para execução previsível e evolução de longo prazo.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Estruturamos a entrega em torno de resultados de negócio, governança técnica e prontidão operacional para cada release evoluir com segurança.
            </p>
          </div>
          <div className="grid border-t border-neutral-200">
            {methodology.map((item) => (
              <Card key={item.title} className="rounded-none border-x-0 border-b border-t-0 bg-transparent px-0 py-7 shadow-none">
                <div className="flex gap-4">
                  <item.icon className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-950">{item.title}</h3>
                    <p className="mt-2 leading-7 text-neutral-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
