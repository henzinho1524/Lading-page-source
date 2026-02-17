
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const SpecRow: React.FC<{ label: string; value: string; detail: string }> = ({ label, value, detail }) => (
  <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 py-8 items-center hover:bg-white/5 transition-colors px-4 group">
    <div className="md:col-span-3 text-slate-500 font-mono text-xs uppercase tracking-widest group-hover:text-source-blue transition-colors">{label}</div>
    <div className="md:col-span-5 text-2xl md:text-4xl font-display font-bold text-white uppercase my-2 md:my-0">{value}</div>
    <div className="md:col-span-4 text-slate-400 text-sm font-mono flex items-center gap-2">
      <Check className="w-4 h-4 text-source-blue" /> {detail}
    </div>
  </div>
);

export const Services: React.FC = () => {
  return (
    <section id="impacto" className="py-24">
      <div className="max-w-[1800px] mx-auto px-4 md:px-8">
        <div className="mb-16">
           <h2 className="text-6xl md:text-8xl font-display font-black text-white uppercase leading-[0.8]">
             Especificações <br/>
             <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #666' }}>Do Sistema</span>
           </h2>
        </div>

        <div className="border-t border-white/10">
          <SpecRow 
            label="Eficiência de Input"
            value="Latência Zero"
            detail="Dados coletados na fonte, em tempo real, sem papel."
          />
          <SpecRow 
            label="Segurança Fiscal"
            value="Blindagem 100%"
            detail="Gestão de risco NR-20 e passivos trabalhistas."
          />
          <SpecRow 
            label="Núcleo Financeiro"
            value="Lucro Previsível"
            detail="Controle absoluto de fluxo de caixa e estoque."
          />
          <SpecRow 
            label="Escalabilidade"
            value="Ilimitada"
            detail="Arquitetura pronta para franquias e expansão nacional."
          />
        </div>
      </div>
    </section>
  );
};
