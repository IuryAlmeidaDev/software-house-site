import { ContactSection } from './components/sections/contact';
import { HeroSection } from './components/sections/hero';
import { Navigation } from './components/sections/navigation';
import { ServicesSection } from './components/sections/services';
import { TechStackSection } from './components/sections/tech-stack';

export default function App(): JSX.Element {
  return (
    <div className="pb-16 text-foreground">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <TechStackSection />
      <ContactSection />
    </div>
  );
}
