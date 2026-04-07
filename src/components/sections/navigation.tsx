import { useScrollSection } from '../../hooks/use-scroll-section';
import { Button } from '../ui/button';

const links = [
  { label: 'Radar Técnico', id: 'stack' },
  { label: 'Serviços', id: 'services' },
  { label: 'Método', id: 'methodology' },
  { label: 'Portfólio', id: 'portfolio' },
  { label: 'Contato', id: 'contact' }
];

export function Navigation(): JSX.Element {
  const scrollTo = useScrollSection();

  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-blue-50/90 backdrop-blur">
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-5">
        <button className="text-left text-sm font-semibold uppercase tracking-[0.22em] text-neutral-950" onClick={() => scrollTo('hero')}>
          <span className="text-primary">N&A</span> Software House
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Button
              key={link.id}
              className="rounded-full bg-transparent px-4 py-2 text-neutral-600 shadow-none hover:bg-white hover:text-primary hover:shadow-none"
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}
