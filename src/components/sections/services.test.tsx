import { render, screen } from '@testing-library/react';
import { ServicesSection } from './services';

describe('ServicesSection', () => {
  it('renders the three core services', () => {
    render(<ServicesSection />);

    expect(screen.getByText('Desenvolvimento Web')).toBeInTheDocument();
    expect(screen.getByText('App Mobile')).toBeInTheDocument();
    expect(screen.getByText('Cloud & DevOps')).toBeInTheDocument();
  });
});
