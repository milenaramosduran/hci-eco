import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ASSETS } from '../constants/images';

const GalleryGrid: React.FC = () => {
  const DELIVERABLE_URL = "assets/deliverables/C2-focus/consegna-2-focus.pdf";

  return (
    <section className="bg-black text-white min-h-screen relative flex flex-col border-t border-zinc-900">
       <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-4 h-[80vh]">
         {/* Column 1 */}
         <div className="border-r border-zinc-900 relative flex flex-col justify-end p-4 group overflow-hidden">
            <div className="absolute bottom-10 left-10 w-48 h-64 bg-emerald-900/20 group-hover:opacity-100 transition-opacity">
                <img src={ASSETS.gallery.wheel} alt="Bike Wheel" className="w-full h-full object-cover opacity-60 mix-blend-screen grayscale" />
            </div>
         </div>
         
         {/* Column 2 */}
         <div className="border-r border-zinc-900 relative flex flex-col justify-center items-center p-4">
             <div className="text-center z-10 px-4 flex flex-col items-center">
                 <div className="flex items-center gap-3 mb-6">
                    <p className="text-[10px] uppercase tracking-widest font-display font-bold text-emerald-500">Emotional Payoff (WORK IN PROGRESS)</p>
                    {/* Link to Consegna 2 - Value Prop (Check page number!) */}
                    <a 
                        href={`${DELIVERABLE_URL}#page=32`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group p-1.5 rounded-full border border-zinc-700 hover:border-emerald-500 hover:bg-emerald-500 transition-all duration-300"
                        title="Vedi Value Proposition in Consegna 2"
                    >
                        <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-black transition-colors" />
                    </a>
                 </div>
                 <h2 className="font-display text-5xl md:text-6xl font-normal leading-[1] tracking-tighter">
                    La libertà<br/>
                    di muoverti<br/>
                    <span className="text-zinc-600">leggero.</span>
                 </h2>
             </div>
         </div>

         {/* Column 3 */}
         <div className="border-r border-zinc-900 relative group overflow-hidden">
             <div className="absolute top-1/4 left-1/4 w-full aspect-square bg-zinc-900 overflow-hidden">
                 <img src={ASSETS.gallery.urban} alt="Urban Texture" className="w-full h-full object-cover grayscale hover:scale-110 transition-transform duration-1000" />
             </div>
         </div>

         {/* Column 4 */}
         <div className="relative group overflow-hidden">
              <div className="absolute bottom-0 right-0 w-3/4 aspect-video bg-zinc-900 overflow-hidden">
                  <img src={ASSETS.gallery.motion} alt="Cyclist Motion" className="w-full h-full object-cover opacity-80 grayscale hover:scale-110 transition-transform duration-1000" />
              </div>
         </div>
       </div>
    </section>
  );
};

export default GalleryGrid;