import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from './contact';

describe('ContactSection', () => {
  it('shows validation messages when form is submitted empty', async () => {
    const user = userEvent.setup();

    render(<ContactSection />);

    await user.click(screen.getByRole('button', { name: 'Solicitar diagnóstico técnico' }));

    expect(await screen.findByText('Informe seu nome.')).toBeInTheDocument();
    expect(await screen.findByText('Informe um e-mail corporativo válido.')).toBeInTheDocument();
    expect(await screen.findByText('Informe o nome da empresa.')).toBeInTheDocument();
    expect(await screen.findByText('Conte um pouco mais sobre a iniciativa.')).toBeInTheDocument();
  });

  it('shows success message when API request succeeds', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({ ok: true });
    vi.stubGlobal('fetch', fetchMock);

    render(<ContactSection />);

    await user.type(screen.getByLabelText('Nome'), 'Maria Silva');
    await user.type(screen.getByLabelText('E-mail corporativo'), 'maria@empresa.com');
    await user.type(screen.getByLabelText('Empresa'), 'Acme Enterprise');
    await user.type(screen.getByLabelText('Resumo do projeto'), 'Precisamos de uma plataforma digital para operação interna.');
    await user.click(screen.getByRole('button', { name: 'Solicitar diagnóstico técnico' }));

    expect(await screen.findByText('Sua solicitação foi enviada com sucesso.')).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledTimes(1);
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/contact',
        expect.objectContaining({ method: 'POST' })
      );
    });

    vi.unstubAllGlobals();
  });

  it('shows error message when API request fails', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.fn().mockResolvedValue({ ok: false });
    const consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => undefined);
    vi.stubGlobal('fetch', fetchMock);

    render(<ContactSection />);

    await user.type(screen.getByLabelText('Nome'), 'Maria Silva');
    await user.type(screen.getByLabelText('E-mail corporativo'), 'maria@empresa.com');
    await user.type(screen.getByLabelText('Empresa'), 'Acme Enterprise');
    await user.type(screen.getByLabelText('Resumo do projeto'), 'Precisamos de uma plataforma digital para operação interna.');
    await user.click(screen.getByRole('button', { name: 'Solicitar diagnóstico técnico' }));

    expect(await screen.findByText('Não foi possível enviar sua solicitação. Tente novamente.')).toBeInTheDocument();

    consoleErrorSpy.mockRestore();
    vi.unstubAllGlobals();
  });
});
