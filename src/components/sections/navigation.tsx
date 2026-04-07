import { Button } from '../ui/button';
import { useScrollSection } from '../../hooks/use-scroll-section';

const links = [
  { label: 'Serviços', id: 'services' },
  { label: 'Stack', id: 'stack' },
  { label: 'Contato', id: 'contact' }
];

export function Navigation(): JSX.Element {
  const scrollTo = useScrollSection();

  return (
    <header className="sticky top-4 z-50 mx-auto flex w-[95%] max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-900/50 px-4 py-3 backdrop-blur-xl">
      <span className="font-semibold">N&A Software House</span>
      <nav className="hidden gap-2 md:flex">
        {links.map((link) => (
          <Button key={link.id} className="bg-transparent px-3 py-2 text-slate-200 hover:bg-white/10" onClick={() => scrollTo(link.id)}>
            {link.label}
          </Button>
        ))}
      </nav>
    </header>
  );
}
