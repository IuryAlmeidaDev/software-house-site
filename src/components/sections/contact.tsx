import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('Informe um e-mail corporativo válido.'),
  company: z.string().min(2, 'Informe o nome da empresa.'),
  message: z.string().min(10, 'Conte um pouco mais sobre a iniciativa.')
});

type ContactData = z.infer<typeof contactSchema>;

const CONTACT_ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT ?? '/api/contact';

export function ContactSection(): JSX.Element {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactData): Promise<void> => {
    setStatus('idle');

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) {
        throw new Error('Falha ao enviar contato');
      }

      setStatus('success');
      reset();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto w-[92%] max-w-7xl border-t border-neutral-200 py-24">
      <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Contato</p>
          <h2 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">Planeje seu próximo ecossistema digital escalável.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
            Compartilhe o objetivo de negócio, restrições e prazo esperado. Usaremos essas informações para orientar uma conversa técnica.
          </p>
          <div className="mt-10 border-l border-neutral-300 pl-5 text-sm leading-7 text-neutral-500">
            Ideal para software sob medida, produtos de dados, modernização cloud, adoção de Kubernetes e plataformas mobile em React Native.
          </div>
        </div>

        <form className="grid gap-5 border border-neutral-200 bg-card p-6 md:p-8" onSubmit={handleSubmit(onSubmit)}>
          <Input aria-label="Nome" placeholder="Nome" {...register('name')} />
          {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
          <Input aria-label="E-mail corporativo" placeholder="E-mail corporativo" {...register('email')} />
          {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
          <Input aria-label="Empresa" placeholder="Empresa" {...register('company')} />
          {errors.company && <p className="text-sm text-red-400">{errors.company.message}</p>}
          <textarea
            aria-label="Resumo do projeto"
            className="min-h-36 w-full rounded-md border border-neutral-200 bg-card px-3 py-2 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            placeholder="Qual ecossistema, produto ou fluxo digital você quer construir?"
            {...register('message')}
          />
          {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Solicitar diagnóstico técnico'}
          </Button>
          {status === 'success' && <p className="text-sm text-emerald-600">Sua solicitação foi enviada com sucesso.</p>}
          {status === 'error' && <p className="text-sm text-red-500">Não foi possível enviar sua solicitação. Tente novamente.</p>}
        </form>
      </div>
    </section>
  );
}
