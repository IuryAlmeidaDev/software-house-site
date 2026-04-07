import { motion } from 'framer-motion';
import { BrainCircuit, Code2, Cloud, Smartphone } from 'lucide-react';
import { Card } from '../ui/card';

const services = [
  { title: 'Software sob medida', description: 'Plataformas críticas, portais e integrações desenhadas para gerar impacto operacional mensurável.', icon: Code2 },
  { title: 'IA e Ciência de Dados', description: 'Camadas inteligentes com Python, automações, modelos preditivos e integrações que apoiam decisões de negócio.', icon: BrainCircuit },
  { title: 'Escalabilidade em Cloud', description: 'Serviços containerizados, arquitetura pronta para Kubernetes, observabilidade e pipelines resilientes.', icon: Cloud },
  { title: 'Aplicativos Mobile', description: 'Apps em React Native para operações de campo, portais de clientes e equipes internas com foco em segurança.', icon: Smartphone }
];

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="mx-auto w-[92%] max-w-7xl border-t border-neutral-200 py-24">
      <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500">Serviços</p>
        <h2 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-5xl">Da estratégia ao ecossistema em produção.</h2>
      </div>
      <div className="mt-14 grid border-t border-neutral-200">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Card className="grid gap-6 rounded-none border-x-0 border-b border-t-0 px-0 py-8 shadow-none md:grid-cols-[0.2fr_0.45fr_1fr]">
              <service.icon className="size-6 text-primary" />
              <h3 className="text-xl font-semibold text-neutral-950">{service.title}</h3>
              <p className="max-w-2xl leading-7 text-neutral-600">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
