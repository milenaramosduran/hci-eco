import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../constants/images';

const Personas: React.FC = () => {
  const personas = [
    {
      name: "David",
      role: "Il Connettore Sociale",
      age: "31 anni",
      desc: "Architetto e Attivista Urbano (Dergano). Bici tradizionale. Vuole trasformare l'osservazione individuale in azione collettiva.",
      needs: "Contribuire, segnalare pericoli.",
      image: ASSETS.personas.david
    },
    {
      name: "Olivia",
      role: "La Pendolare Dinamica",
      age: "27 anni",
      desc: "Graphic Designer (Città Studi). Bici personale. Pianifica i tragitti ma si scontra con la realtà di cantieri e continui 'ricalcoli'.",
      needs: "Fluidità, anticipare imprevisti.",
      image: ASSETS.personas.olivia
    },
    {
      name: "Marco",
      role: "Il Commuter Meticoloso",
      age: "29 anni",
      desc: "Sviluppatore (Isola). Bici elettrica. L'ansia del furto e la ricerca del parcheggio guidano le sue scelte quotidiane.",
      needs: "Dati affidabili, sicurezza sosta.",
      image: ASSETS.personas.marco
    }
  ];

  const DELIVERABLE_URL = "assets/deliverables/C3-prototipiLF/consegna-3-prototipiLF.pdf";

  return (
    <section className="py-24 px-6 md:px-12 bg-[#F5F5F0]">
      <div className="mb-16">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400 font-display">Target Users</p>
        <div className="flex items-center gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-normal tracking-tighter">Personas & Scenari</h2>
            {/* Link to Consegna 3 - Slide 6 */}
            <a 
                href={`${DELIVERABLE_URL}#page=6`}
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-2 rounded-full border border-gray-300 hover:border-emerald-600 hover:bg-emerald-600 transition-all duration-300"
                title="Vedi Scenari in Consegna 3"
            >
                <ArrowUpRight className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
            </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personas.map((p, i) => (
            <div key={i} className="group relative overflow-hidden bg-white h-[450px] md:h-[550px] border border-gray-200 hover:shadow-xl transition-all duration-500">
                <div className="h-2/3 overflow-hidden relative">
                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-display text-3xl font-medium">{p.name}</h3>
                        <p className="text-xs uppercase tracking-wider font-bold opacity-90">{p.role}</p>
                    </div>
                </div>
                <div className="p-6 h-1/3 flex flex-col justify-between">
                    <div>
                        <p className="text-sm text-gray-600 font-light leading-snug mb-2">{p.desc}</p>
                    </div>
                    <div className="border-t border-gray-100 pt-3">
                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">Key Need</span>
                        <p className="text-xs font-medium text-black">{p.needs}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Personas;