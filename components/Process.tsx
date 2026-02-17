
import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Database } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section id="metodo" className="py-24 px-4 md:px-8 border-t border-white/5 bg-black/20">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-sm font-mono text-source-blue uppercase tracking-widest border border-source-blue/30 px-4 py-1 rounded-full">
            O Método Source
          </h2>
          <div className="h-[1px] flex-1 bg-white/10 mx-8"></div>
          <span className="text-white font-display font-bold text-xl">ARQUITETURA 360º</span>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[600px]">
          
          {/* Main Feature - Immersion */}
          <div className="md:col-span-6 bg-[#0a0a0a] p-8 md:p-12 relative overflow-hidden group border border-white/5 hover:border-source-blue/50 transition-colors">
            <div className="absolute top-0 right-0 p-8 text-8xl font-black text-white/5 group-hover:text-source-blue/10 transition-colors">01</div>
            <div className="h-full flex flex-col justify-between relative z-10">
              <Search className="w-12 h-12 text-source-blue mb-6" />
              <div>
                <h3 className="text-4xl font-display font-bold text-white mb-4 uppercase">Imersão <br/> Diagnóstica</h3>
                <p className="text-slate-400 font-mono text-sm leading-relaxed max-w-md">
                  Nós não começamos com código. Começamos no chão de fábrica. Calçamos a botina e mapeamos onde o papel se perde e onde o dinheiro vaza.
                </p>
              </div>
            </div>
            {/* Grid decoration */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-source-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div className="md:col-span-6 grid grid-rows-2 gap-4">
            
            {/* Process Engineering */}
            <div className="bg-[#0a0a0a] p-8 flex flex-col justify-center border border-white/5 hover:border-source-blue/50 transition-colors group relative overflow-hidden">
               <div className="absolute top-4 right-4 text-4xl font-black text-white/5 group-hover:text-source-blue/10">02</div>
               <PenTool className="w-8 h-8 text-white mb-4 group-hover:text-source-blue transition-colors" />
               <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Engenharia de Processos</h3>
               <p className="text-slate-500 font-mono text-xs">
                 Desenho de POPs e eliminação de tarefas inúteis antes de escrever uma linha de código.
               </p>
            </div>

            {/* Bespoke Dev */}
            <div className="bg-source-blue p-8 flex flex-col justify-center relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
               <Database className="w-8 h-8 text-white mb-4" />
               <h3 className="text-2xl font-display font-bold text-white mb-2 uppercase">Automação Sob Medida</h3>
               <p className="text-blue-100 font-mono text-xs font-bold">
                 Apps simples para quem opera na ponta, Dashboards complexos para quem decide no escritório.
               </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
