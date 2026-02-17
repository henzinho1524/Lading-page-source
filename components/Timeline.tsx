
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';

const Step: React.FC<{ num: string; title: string; desc: string; index: number }> = ({ num, title, desc, index }) => (
  <div className="relative flex items-center gap-8 mb-20 last:mb-0">
    <div className="z-10 w-12 h-12 bg-white rounded-full border-4 border-blue-700 flex items-center justify-center shrink-0 shadow-lg">
      <span className="text-blue-700 font-black">{num}</span>
    </div>
    <div className="flex-1">
      <Reveal delay={0.2 * index}>
        <h4 className="text-2xl font-bold text-[#0F172A] mb-2">{title}</h4>
        <p className="text-slate-500 font-light">{desc}</p>
      </Reveal>
    </div>
  </div>
);

export const Timeline: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="como-funciona" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-20">
          <Reveal>
            <h2 className="text-4xl font-extrabold text-[#0F172A] mb-4">Sua Jornada de Transformação</h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-slate-500 font-light">Um método estruturado para garantir que cada etapa da sua automação gere valor real.</p>
          </Reveal>
        </div>

        <div ref={containerRef} className="relative max-w-2xl mx-auto">
          {/* Progress Line */}
          <div className="absolute left-[22px] top-0 bottom-0 w-[4px] bg-slate-100 rounded-full" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-[22px] top-0 bottom-0 w-[4px] bg-blue-700 rounded-full z-0"
          />

          <Step 
            num="1" 
            title="Imersão" 
            desc="Entendemos profundamente os seus gargalos e objetivos de negócio para mapear as maiores oportunidades de ganho."
            index={1}
          />
          <Step 
            num="2" 
            title="Diagnóstico" 
            desc="Desenvolvemos um plano de ação técnico e estratégico detalhado, focando em retorno sobre investimento rápido."
            index={2}
          />
          <Step 
            num="3" 
            title="Implementação" 
            desc="Executamos a tecnologia, integramos os sistemas e treinamos seu time para uma transição sem atritos."
            index={3}
          />
        </div>
      </div>
    </section>
  );
};
