const technologies = ['React', 'TypeScript', 'Tailwind', 'Node.js', 'AWS', 'PostgreSQL'];

export function TechStackSection(): JSX.Element {
  return (
    <section id="stack" className="mx-auto w-[95%] max-w-6xl py-16">
      <h2 className="text-3xl font-semibold">Stack</h2>
      <div className="mt-6 flex flex-wrap gap-3">
        {technologies.map((tech) => (
          <span key={tech} className="rounded-full border border-white/15 bg-slate-900/70 px-4 py-2 text-sm text-slate-200">
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
