
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../constants/images';

const News: React.FC = () => {
  // Data from Consegna 1 - Needfinding
  const patterns = [
    {
      id: 1,
      title: "Il Paradosso dell’Intenzione",
      subtitle: "Vorrei ma non posso",
      image: ASSETS.patterns.intention,
      desc: "Il 56,9% non usa mai la micromobilità e il 72% non la usa regolarmente, ma il 74,3% si dice interessato. Il gap del 31% è bloccato dalla mancanza di sicurezza.",
      page: 18
    },
    {
      id: 2,
      title: "Strategie di Adattamento",
      subtitle: "Ricerca di controllo",
      image: ASSETS.patterns.adaptation,
      desc: "Chi usa mezzi leggeri adotta tattiche difensive: sceglie percorsi 'sicuri' su marciapiedi o usa bici vecchie e 'brutte' per evitare furti, cercando prevedibilità.",
      page: 18
    },
    {
      id: 3,
      title: "Rinuncia Preventiva",
      subtitle: "La paura come filtro",
      image: ASSETS.patterns.renunciation,
      desc: "Il 42% conosce vittime di incidenti e il 15% ha rinunciato del tutto. La paura diventa un filtro anticipato: la decisione di non partire arriva prima dell'esperienza.",
      page: 18
    }
  ];

  const DELIVERABLE_URL = "assets/deliverables/C1-needfinding/consegna-1-needfinding.pdf";

  return (
    <section className="py-24 px-6 md:px-12 bg-[#FDFDF9]">
      <div className="flex justify-between items-end mb-16">
        <div>
            <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400 font-display">Needfinding (WORK IN PROGRESS)</p>
            <div className="flex items-center gap-4">
                <h2 className="font-display text-4xl md:text-6xl font-normal tracking-tighter">Pattern Comportamentali</h2>
                {/* Single Link Next to Title */}
                <a 
                    href={`${DELIVERABLE_URL}#page=18`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group p-2 rounded-full border border-gray-200 hover:border-emerald-600 hover:bg-emerald-600 transition-all duration-300"
                    title="Vedi Documentazione"
                >
                    <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                </a>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
        {patterns.map((pattern, index) => (
          <div 
            key={pattern.id} 
            className="flex flex-col h-full group"
          >
            {/* Image Wrapper */}
            <div className="overflow-hidden mb-6 aspect-[4/3] bg-gray-100 relative">
              <img 
                src={pattern.image} 
                alt={pattern.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-[10px] font-mono uppercase">
                  Pattern 0{index + 1}
              </div>
            </div>
            
            {/* Content */}
            <div className="flex flex-col flex-grow">
                <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-2">{pattern.subtitle}</p>
                <div className="mb-4">
                    <h3 className="font-display text-2xl font-medium leading-tight text-black">
                        {pattern.title}
                    </h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{pattern.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
