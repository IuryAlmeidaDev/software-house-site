import { motion } from 'framer-motion';
import { Code2, Cloud, Smartphone } from 'lucide-react';
import { Card } from '../ui/card';

const services = [
  { title: 'Desenvolvimento Web', description: 'Aplicações performáticas com React e arquiteturas escaláveis.', icon: Code2 },
  { title: 'App Mobile', description: 'Experiências nativas e híbridas com foco em retenção.', icon: Smartphone },
  { title: 'Cloud & DevOps', description: 'Infraestrutura moderna, observabilidade e deploy contínuo.', icon: Cloud }
];

export function ServicesSection(): JSX.Element {
  return (
    <section id="services" className="mx-auto w-[95%] max-w-6xl py-16">
      <h2 className="text-3xl font-semibold">Serviços</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
          >
            <Card>
              <service.icon className="size-8 text-violet-400" />
              <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-slate-300">{service.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
