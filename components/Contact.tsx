
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 px-6 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <Reveal>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Pronto para o próximo <span className="text-cyan-400">nível</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-slate-400 text-lg font-light mb-12">
              Não deixe sua empresa presa no passado. Preencha o formulário e nossa equipe entrará em contato para um diagnóstico técnico de 30 minutos.
            </p>
          </Reveal>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                <Send className="w-4 h-4 text-cyan-400" />
              </div>
              <span>contato@nexusalpha.com.br</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="space-y-8 bg-slate-900/50 p-10 rounded-3xl border border-slate-800"
              >
                <div className="space-y-2 group">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Nome Completo</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Seu nome aqui"
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-lg focus:border-cyan-400 outline-none transition-colors placeholder:text-slate-700"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">E-mail Corporativo</label>
                  <input 
                    required
                    type="email" 
                    placeholder="nome@empresa.com.br"
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-lg focus:border-cyan-400 outline-none transition-colors placeholder:text-slate-700"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-slate-500 font-bold">Sua Mensagem</label>
                  <textarea 
                    rows={1}
                    placeholder="Conte-nos brevemente sobre seu desafio"
                    className="w-full bg-transparent border-b border-slate-800 py-3 text-lg focus:border-cyan-400 outline-none transition-colors placeholder:text-slate-700 resize-none"
                  ></textarea>
                </div>

                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-cyan-500/20 disabled:opacity-50 flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full"
                    />
                  ) : "Enviar Solicitação"}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-slate-900/50 p-16 rounded-3xl border border-slate-800 text-center flex flex-col items-center justify-center"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  className="w-24 h-24 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle2 className="w-12 h-12 text-cyan-400" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Mensagem Enviada!</h3>
                <p className="text-slate-400">Em menos de 24h, um de nossos especialistas entrará em contato com você.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
      
      <div className="mt-24 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">N</div>
          <span className="font-bold text-slate-400">Nexus Alpha</span>
        </div>
        <p>© 2024 Nexus Alpha Consulting. Todos os direitos reservados.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cyan-400">Privacidade</a>
          <a href="#" className="hover:text-cyan-400">Termos</a>
        </div>
      </div>
    </section>
  );
};
