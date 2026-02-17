
import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle, Activity } from 'lucide-react';

const ProblemCard: React.FC<{ number: string; title: string; desc: string; icon: React.ReactNode }> = ({ number, title, desc, icon }) => (
  <div className="group relative p-8 border border-white/10 bg-white/5 hover:bg-source-blue/10 transition-colors duration-500 min-h-[300px] flex flex-col justify-between backdrop-blur-sm">
    <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 text-source-blue transition-opacity">
      {icon}
    </div>
    <div>
      <span className="font-mono text-xs text-slate-500 mb-2 block">CÓDIGO_ERRO_{number}</span>
      <h3 className="text-3xl font-display font-bold text-white mb-4 uppercase leading-none">{title}</h3>
    </div>
    <p className="text-slate-400 font-mono text-sm border-t border-white/10 pt-4 group-hover:border-source-blue/30 transition-colors">
      {desc}
    </p>
  </div>
);

export const PainSection: React.FC = () => {
  return (
    <section id="visao" className="py-24 relative overflow-hidden">
      
      {/* High Velocity Marquee */}
      <div className="absolute top-10 left-0 w-full opacity-5 pointer-events-none select-none">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-10"
        >
          {[...Array(4)].map((_, i) => (
             <span key={i} className="text-[150px] font-black uppercase stroke-text text-transparent" style={{ WebkitTextStroke: '2px #fff' }}>
               FALHA NO SISTEMA / LATÊNCIA OPERACIONAL / ERRO HUMANO /
             </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1800px] mx-auto px-6 relative z-10 pt-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white max-w-2xl uppercase leading-[0.9]">
            A Armadilha do <br/>
            <span className="text-source-blue">Software Genérico</span>
          </h2>
          <p className="text-slate-400 font-mono text-sm max-w-sm mt-8 md:mt-0 text-right">
            [ALERTA]: Sistemas de prateleira são desenhados para a média. Sua empresa não é a média.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProblemCard 
            number="404"
            title="Atrito Operacional"
            desc="Sua equipe operacional perde 40% do tempo preenchendo telas complexas que não geram valor."
            icon={<XCircle />}
          />
          <ProblemCard 
            number="500"
            title="Dados Incompatíveis"
            desc="O administrativo precisa 'limpar' dados em Excel. Retrabalho invisível que mata a margem de lucro."
            icon={<Activity />}
          />
          <ProblemCard 
            number="401"
            title="Pontos Cegos"
            desc="Gestão baseada em feeling. Sem dados em tempo real, você está pilotando no escuro."
            icon={<AlertTriangle />}
          />
        </div>
      </div>
    </section>
  );
};
