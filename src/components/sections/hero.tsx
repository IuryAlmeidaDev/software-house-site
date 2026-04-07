import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export function HeroSection(): JSX.Element {
  return (
    <section className="mx-auto flex min-h-[70vh] w-[95%] max-w-6xl flex-col justify-center py-16" id="hero">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl bg-gradient-to-r from-violet-400 via-cyan-300 to-indigo-500 bg-clip-text text-4xl font-bold leading-tight text-transparent md:text-6xl"
      >
        Engenharia de software global, com execução precisa e design premium.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mt-6 max-w-2xl text-lg text-slate-300"
      >
        A N&A Software House entrega soluções Web, Mobile e Cloud para empresas que precisam escalar com velocidade e confiabilidade.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-8">
        <Button>
          Falar com especialista <ArrowRight className="ml-2 size-4" />
        </Button>
      </motion.div>
    </section>
  );
}
