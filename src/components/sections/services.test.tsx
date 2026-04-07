import { render, screen } from '@testing-library/react';
import { ServicesSection } from './services';

describe('ServicesSection', () => {
  it('renders the core services', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Software sob medida')).toBeInTheDocument();
    expect(screen.getByText('IA e Ciência de Dados')).toBeInTheDocument();
    expect(screen.getByText('Escalabilidade em Cloud')).toBeInTheDocument();
    expect(screen.getByText('Aplicativos Mobile')).toBeInTheDocument();
  });
});
