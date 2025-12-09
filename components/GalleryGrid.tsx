
import React from 'react';
import { ASSETS } from '../constants/images';

const GalleryGrid: React.FC = () => {
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
             <div className="text-center z-10 px-4">
                 <p className="text-[10px] uppercase tracking-widest mb-6 font-display font-bold text-emerald-500">Emotional Payoff</p>
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
