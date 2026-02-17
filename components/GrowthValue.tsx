
import React from 'react';
import { Award, TrendingUp, Gem, CheckCircle2 } from 'lucide-react';
import { Reveal } from './Reveal';

export const GrowthValue: React.FC = () => {
  return (
    <section id="resultados" className="py-32 px-6 bg-[#0F172A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <Reveal>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase">
                Aumente o <span className="text-green-400">Valuation</span> do seu negócio.
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-slate-400 text-lg font-light mb-12 leading-relaxed">
                Empresas que dependem de processos manuais ou da presença do dono valem menos no mercado. A <strong>Source</strong> constrói um ativo independente, pronto para expansão ou venda.
              </p>
            </Reveal>
            
            <div className="space-y-6">
              {[
                "Independência do Dono através de Automação.",
                "Processos Auditáveis e Lucro Previsível.",
                "Escalabilidade testada no chão de fábrica.",
                "Redução drástica de Custos Operacionais."
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <span className="text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
             <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-[4rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
             <div className="relative aspect-[4/5] glass rounded-[4rem] overflow-hidden border border-white/5 flex flex-col items-center justify-center p-12 text-center">
                <TrendingUp className="w-20 h-20 text-green-500 mb-8 animate-bounce" style={{ animationDuration: '3s' }} />
                <h3 className="text-4xl font-black mb-6 italic tracking-tighter text-white">"Transformamos o caos administrativo em uma máquina de lucro auditável."</h3>
                <div className="h-1.5 w-24 bg-green-500 rounded-full mb-8" />
                <div className="flex flex-col items-center">
                  <p className="text-white font-black uppercase text-sm tracking-[0.2em]">Impacto Direto</p>
                  <p className="text-green-500 text-xs font-bold mt-1 uppercase">Maximização de Valor de Mercado</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
