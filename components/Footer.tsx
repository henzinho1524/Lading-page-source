
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-black pt-32 pb-8 px-4 md:px-8 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase leading-[0.9] mb-8">
              Pronto para <br/> <span className="text-source-blue">Escalar?</span>
            </h2>
            <p className="text-slate-400 font-mono text-lg max-w-md mb-12">
              Agende uma visita de imersão. Sem compromisso, apenas engenharia de negócios pura.
            </p>
            <a 
              href="https://wa.me/5585991833264"
              className="inline-block bg-white text-black px-12 py-4 font-bold uppercase tracking-widest hover:bg-source-blue hover:text-white transition-colors"
            >
              Iniciar Conversa
            </a>
          </div>

          <div className="flex flex-col justify-end items-start lg:items-end">
             <div className="text-right">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Linha Direta</p>
                <p className="text-3xl text-white font-display font-bold">(85) 99183-3264</p>
             </div>
             <div className="text-right mt-12">
                <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Base Operacional</p>
                <p className="text-3xl text-white font-display font-bold">Fortaleza, CE</p>
             </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="w-full md:w-auto">
             <Logo size={120} className="text-white opacity-10" />
          </div>
          <div className="flex gap-8 text-xs font-mono text-slate-600 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="text-slate-700">© 2024 Source Consultoria</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
