import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

const contactSchema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('Digite um e-mail válido.'),
  message: z.string().min(10, 'A mensagem precisa ter no mínimo 10 caracteres.')
});

type ContactData = z.infer<typeof contactSchema>;

export function ContactSection(): JSX.Element {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactData>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactData): Promise<void> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.log(data);
    setSent(true);
    reset();
  };

  return (
    <section id="contact" className="mx-auto w-[95%] max-w-6xl py-16">
      <h2 className="text-3xl font-semibold">Contato</h2>
      <form className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-card/60 p-6" onSubmit={handleSubmit(onSubmit)}>
        <Input placeholder="Nome" {...register('name')} />
        {errors.name && <p className="text-sm text-red-400">{errors.name.message}</p>}
        <Input placeholder="E-mail" {...register('email')} />
        {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        <textarea
          className="min-h-28 w-full rounded-md border border-white/15 bg-slate-900/80 px-3 py-2 text-sm"
          placeholder="Conte sobre seu projeto"
          {...register('message')}
        />
        {errors.message && <p className="text-sm text-red-400">{errors.message.message}</p>}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar mensagem'}
        </Button>
        {sent && <p className="text-sm text-emerald-400">Mensagem enviada com sucesso!</p>}
      </form>
    </section>
  );
}
