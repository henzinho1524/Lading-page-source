
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section className="relative min-h-screen pt-32 pb-12 px-4 md:px-8 flex flex-col justify-between overflow-hidden border-b border-blue-900/20">
      
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f605_1px,transparent_1px),linear-gradient(to_bottom,#3b82f605_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 max-w-[1800px] mx-auto w-full h-full flex flex-col justify-center flex-1">
        
        {/* Top Tagline */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-source-blue"></div>
          <span className="font-mono text-source-blue uppercase tracking-[0.2em] text-sm">Arquitetura de Negócios V.2.0</span>
        </motion.div>

        {/* Massive Typography */}
        <div className="relative">
          <motion.h1 
            style={{ y: y2 }}
            className="text-[12vw] md:text-[11vw] leading-[0.85] font-black font-display text-white tracking-tighter uppercase mix-blend-overlay opacity-80"
          >
            Motor de
          </motion.h1>
          <motion.div 
            style={{ y: y1 }}
            className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-12"
          >
            <h1 className="text-[12vw] md:text-[11vw] leading-[0.85] font-black font-display text-transparent stroke-text tracking-tighter uppercase" style={{ WebkitTextStroke: '2px #fff' }}>
              Escala
            </h1>
            <div className="max-w-md mt-4 md:mt-0 p-6 glass-panel rounded-lg border-l-4 border-source-blue bg-blue-950/20">
              <p className="text-blue-100 font-mono text-sm leading-relaxed">
                Pare de tentar encaixar sua empresa em sistemas prontos. Nós construímos a arquitetura exata que sua operação precisa para escalar e maximizar o valuation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-20 flex flex-wrap items-end justify-between gap-8">
          <a 
            href="https://wa.me/5585991833264"
            className="group relative inline-flex items-center justify-center px-12 py-6 bg-source-blue text-white font-bold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-colors duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Iniciar Imersão <ArrowDownRight className="group-hover:rotate-[-45deg] transition-transform duration-300" />
            </span>
          </a>

          <div className="flex gap-12 font-mono text-xs text-slate-500 uppercase tracking-widest">
            <div className="flex flex-col">
              <span className="text-white mb-1">Escala</span>
              <span>Infinita</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white mb-1">Valuation</span>
              <span>Maximizado</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white mb-1">Erros</span>
              <span>Zero</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
