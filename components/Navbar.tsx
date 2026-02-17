
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-blue-500/10' : 'bg-transparent'}`}
      >
        <div className="max-w-[1800px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 z-50">
            <Logo size={32} className="text-white" />
            <span className="text-white font-display font-bold text-xl tracking-tighter">SOURCE</span>
          </div>
          
          <div className="hidden md:flex items-center gap-12">
            {[
              { label: 'Visão', href: '#visao' },
              { label: 'Método', href: '#metodo' },
              { label: 'Impacto', href: '#impacto' },
              { label: 'Imersão', href: '#contato' }
            ].map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-sm font-mono uppercase tracking-widest text-white/60 hover:text-source-blue transition-colors relative group"
              >
                <span className="text-[10px] text-source-blue mr-1 opacity-0 group-hover:opacity-100 transition-opacity">0{Math.floor(Math.random() * 9) + 1} //</span>
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden md:block">
             <a href="#contato" className="px-6 py-2 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-source-blue hover:text-white hover:border-source-blue transition-all duration-300">
               Agendar Visita
             </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50 text-white">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {[
              { label: 'Visão', href: '#visao' },
              { label: 'Método', href: '#metodo' },
              { label: 'Impacto', href: '#impacto' },
              { label: 'Imersão', href: '#contato' }
            ].map((item, i) => (
              <motion.a
                key={item.label}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-4xl font-display font-black text-white hover:text-source-blue uppercase italic"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
