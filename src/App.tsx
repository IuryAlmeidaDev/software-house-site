import { ContactSection } from './components/sections/contact';
import { HeroSection } from './components/sections/hero';
import { MethodologySection } from './components/sections/methodology';
import { Navigation } from './components/sections/navigation';
import { PortfolioSection } from './components/sections/portfolio';
import { ServicesSection } from './components/sections/services';
import { TechStackSection } from './components/sections/tech-stack';

export default function App(): JSX.Element {
  return (
    <div className="min-h-screen overflow-hidden pb-16 text-foreground">
      <Navigation />
      <HeroSection />
      <TechStackSection />
      <ServicesSection />
      <MethodologySection />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
