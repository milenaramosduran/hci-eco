
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../constants/images';

const News: React.FC = () => {
  // Data from Consegna 1 - Needfinding (Page 18)
  const patterns = [
    {
      id: 1,
      title: "Il Paradosso dell’Intenzione",
      subtitle: "Vorrei ma non posso",
      image: ASSETS.patterns.intention,
      desc: "Il 56,9% non usa mai la micromobilità e il 72% non la usa regolarmente, ma il 74,3% si dice interessato. Il gap del 31% è bloccato dalla mancanza di sicurezza."
    },
    {
      id: 2,
      title: "Strategie di Adattamento",
      subtitle: "Ricerca di controllo",
      image: ASSETS.patterns.adaptation,
      desc: "Chi usa mezzi leggeri adotta tattiche difensive: sceglie percorsi 'sicuri' su marciapiedi o usa bici vecchie e 'brutte' per evitare furti, cercando prevedibilità."
    },
    {
      id: 3,
      title: "Rinuncia Preventiva",
      subtitle: "La paura come filtro",
      image: ASSETS.patterns.renunciation,
      desc: "Il 42% conosce vittime di incidenti e il 15% ha rinunciato del tutto. La paura diventa un filtro anticipato: la decisione di non partire arriva prima dell'esperienza."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFDF9]">
      <div className="flex justify-between items-end mb-16">
        <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400 font-display">Needfinding</p>
            <h2 className="font-display text-4xl md:text-6xl font-normal tracking-tighter">Pattern Comportamentali</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {patterns.map((pattern, index) => (
          <article key={pattern.id} className="group cursor-pointer flex flex-col h-full">
            <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100 relative">
              <img 
                src={pattern.image} 
                alt={pattern.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-[10px] font-mono uppercase">
                  Pattern 0{index + 1}
              </div>
            </div>
            <div className="flex flex-col flex-grow">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">{pattern.subtitle}</p>
                <h3 className="font-display text-2xl font-medium mb-4 leading-tight group-hover:text-emerald-700 transition-colors">{pattern.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-8">{pattern.desc}</p>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                Approfondisci <ArrowRight className="w-3 h-3" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
