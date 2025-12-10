import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFDF9]">
      <div className="flex justify-between items-center mb-16">
        <h3 className="text-xs font-bold uppercase tracking-widest font-display text-gray-400">La Voce degli Utenti</h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Card 1 - Robert */}
        <div className="bg-zinc-100 p-8 md:p-16 min-h-[400px] flex flex-col justify-between relative group hover:bg-emerald-50 transition-colors duration-500">
          <Quote className="w-8 h-8 text-emerald-600 mb-8 opacity-50" />
          <blockquote className="font-display text-2xl md:text-4xl font-normal leading-tight text-black tracking-tight">
            "Devo scegliere: veloce o sicuro, mai entrambi. Nobody would want this bike because it's very small."
          </blockquote>
          <div className="mt-12 border-t border-gray-300 pt-6 flex justify-between items-end">
            <div>
                <p className="text-sm font-bold text-black uppercase tracking-wide">Robert</p>
                <p className="text-xs text-gray-500 mt-1">Lead User - Rider Professionista</p>
            </div>
            <div className="text-xs font-mono text-gray-400">INT_01</div>
          </div>
        </div>

        {/* Card 2 - Giuseppe */}
        <div className="bg-black p-8 md:p-16 min-h-[400px] flex flex-col justify-between text-white relative group">
          <Quote className="w-8 h-8 text-gray-500 mb-8 opacity-50" />
          <blockquote className="font-display text-2xl md:text-4xl font-normal leading-tight text-white tracking-tight">
            "Ho pensato di portare la mia bici da casa, ma: 1. Paura di non trovare dove lasciarla, 2. I furti. La barriera psicologica precede quella pratica."
          </blockquote>
          <div className="mt-12 border-t border-gray-800 pt-6 flex justify-between items-end">
            <div>
                <p className="text-sm font-bold text-white uppercase tracking-wide">Giuseppe</p>
                <p className="text-xs text-gray-400 mt-1">Utente Medio Sharing</p>
            </div>
            <div className="text-xs font-mono text-gray-600">INT_04</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;