import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const metrics = [
  { value: 'B2B', label: 'Produtos e plataformas para operação real' },
  { value: 'Cloud', label: 'Arquitetura preparada para escala' },
  { value: 'Dados', label: 'Automação e inteligência aplicada ao negócio' }
];

export function HeroSection(): JSX.Element {
  return (
    <section className="mx-auto grid min-h-[78vh] w-[92%] max-w-7xl content-center gap-14 py-24" id="hero">
      <div className="max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-sm font-semibold uppercase tracking-[0.28em] text-primary"
        >
          Software house para empresas que precisam de engenharia séria
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.65 }}
          className="mt-6 max-w-5xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-[#172554] md:text-7xl"
        >
          Plataformas digitais escaláveis, limpas e prontas para crescer.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.65 }}
          className="mt-8 max-w-3xl text-xl leading-9 text-neutral-600"
        >
          Projetamos e desenvolvemos sistemas web, mobile, cloud e dados para negócios B2B que precisam de estabilidade, clareza técnica e evolução contínua.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button>
            Solicitar diagnóstico <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button className="border border-blue-100 bg-blue-50 text-primary shadow-none hover:bg-blue-100 hover:shadow-none">
            Conhecer stack
          </Button>
        </motion.div>
      </div>

      <div className="grid border-y border-neutral-200 md:grid-cols-3">
        {metrics.map((metric) => (
          <div key={metric.value} className="border-b border-neutral-200 px-4 py-8 first:pl-0 md:border-b-0 md:border-r md:px-8 md:last:border-r-0 md:last:pr-0">
            <p className="text-2xl font-semibold tracking-tight text-primary">{metric.value}</p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-600">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
