
import React from 'react';
import { ShieldCheck, UserCheck, HardHat } from 'lucide-react';
import { Reveal } from './Reveal';

export const Compliance: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
                Segurança Operacional que protege o seu <span className="text-cyan-400">CNPJ</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-slate-400 text-lg font-light mb-10 leading-relaxed">
                Além de organizar o financeiro, nosso método organiza a gestão de risco. Facilitamos o controle de EPIs e vencimentos de treinamentos (NR-20), protegendo sua empresa contra passivos trabalhistas.
              </p>
            </Reveal>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <h5 className="font-bold mb-1">Blindagem Jurídica</h5>
                  <p className="text-xs text-slate-500">Documentação digitalizada e pronta para fiscalizações.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <HardHat className="w-6 h-6 text-cyan-400 shrink-0" />
                <div>
                  <h5 className="font-bold mb-1">Gestão NR-20</h5>
                  <p className="text-xs text-slate-500">Controle automático de validez de certificados da equipe.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="aspect-video glass rounded-[2.5rem] overflow-hidden border border-white/10 flex items-center justify-center p-12 text-center">
                <div>
                   <UserCheck className="w-20 h-20 text-cyan-500/30 mx-auto mb-6" />
                   <h3 className="text-2xl font-black mb-4 tracking-tighter italic">"A organização que faltava para eu focar na expansão do meu negócio."</h3>
                   <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Depoimento de Cliente (Rede de Postos CE)</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
