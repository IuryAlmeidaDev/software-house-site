const portfolioItems = [
  {
    title: 'Cockpit de operações',
    tag: 'Dados + automação',
    description: 'Área reservada para um case de dashboards operacionais, fluxos integrados e visibilidade executiva.'
  },
  {
    title: 'Hub de integração enterprise',
    tag: 'Java + Node.js APIs',
    description: 'Área reservada para um case de orquestração segura entre sistemas legados e produtos modernos em cloud.'
  },
  {
    title: 'Plataforma mobile de campo',
    tag: 'React Native',
    description: 'Área reservada para um case de times de campo que precisam de ferramentas operacionais confiáveis e multiplataforma.'
  }
];

export function PortfolioSection(): JSX.Element {
  return (
    <section id="portfolio" className="mx-auto w-[92%] max-w-7xl border-t border-neutral-200 py-24">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Portfólio</p>
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">Ecossistemas selecionados, prontos para seus cases reais.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-600">
            Substitua estas áreas reservadas por resultados mensuráveis, detalhes de stack e visuais aprovados por clientes.
          </p>
        </div>
      </div>

      <div className="mt-14 grid border-l border-t border-neutral-200 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <article key={item.title} className="min-h-72 border-b border-r border-neutral-200 bg-card p-7 transition hover:bg-neutral-100">
            <div className="flex h-full flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">{item.tag}</span>
                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">{item.title}</h3>
                <p className="mt-4 leading-7 text-neutral-600">{item.description}</p>
              </div>
              <div className="mt-10 h-px w-full bg-neutral-200" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
