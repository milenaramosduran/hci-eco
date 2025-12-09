import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 overflow-hidden border-t border-zinc-900">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Info */}
            <div className="lg:col-span-4">
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-lg font-display">
                    S
                    </div>
                    <div className="text-[10px] uppercase tracking-wider leading-tight text-gray-400">
                    Micromobilità Sostenibile<br />
                    // Gruppo 30%usability
                    </div>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed mb-12 max-w-xs font-light">
                    Un progetto accademico del corso di Interaction Design. Il nostro obiettivo è rendere la micromobilità sicura, accessibile e integrata nella vita quotidiana.
                </p>

                <div className="text-xs text-gray-400 space-y-1 mb-6 font-mono">
                    <p>Politecnico di Milano</p>
                    <p>Milano, Italia</p>
                    <p>hello@spingo-project.com</p>
                </div>

                <div className="flex gap-4 text-white">
                    <Instagram className="w-5 h-5 hover:text-emerald-400 transition-colors cursor-pointer" />
                    <Linkedin className="w-5 h-5 hover:text-emerald-400 transition-colors cursor-pointer" />
                </div>
            </div>

            {/* Middle Links */}
            <div className="lg:col-span-4 flex flex-col justify-between">
                <nav className="space-y-6">
                    <div className="border-b border-zinc-800 pb-2">
                        <a href="#top" className="flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors">
                            Home <span>↗</span>
                        </a>
                    </div>
                    <div className="border-b border-zinc-800 pb-2">
                        <a href="#intro" className="flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors">
                            Mission <span>↗</span>
                        </a>
                    </div>
                    <div className="border-b border-zinc-800 pb-2">
                        <a href="#news" className="flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors">
                            Insights <span>↗</span>
                        </a>
                    </div>
                    <div className="border-b border-zinc-800 pb-2">
                        <a href="#projects" className="flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors">
                            Consegne <span>↗</span>
                        </a>
                    </div>
                    <div className="border-b border-zinc-800 pb-2">
                        <a href="#personas" className="flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors">
                            Target <span>↗</span>
                        </a>
                    </div>
                    <div className="border-b border-zinc-800 pb-2">
                        <a href="#values" className="flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors">
                            Valori <span>↗</span>
                        </a>
                    </div>
                </nav>
            </div>

            {/* Right Promo */}
            <div className="lg:col-span-4">
                 <h4 className="font-display text-2xl font-light mb-4 text-white">Vuoi saperne di più sul processo?</h4>
                 <p className="text-sm text-gray-500 mb-8 font-light">Scarica la documentazione completa delle consegne o contattaci per una presentazione.</p>
                 <div className="flex justify-between items-end text-[10px] text-zinc-600 uppercase mt-auto font-mono">
                    <span>Gruppo 30%usability 2025 ©</span>
                    <span>Progetto Interaction Design</span>
                 </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;