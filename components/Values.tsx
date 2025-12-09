
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, ShieldCheck, Leaf } from 'lucide-react';

const Values: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        const items = gsap.utils.toArray('.value-item');
        
        gsap.from(items, {
            y: 60,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
            }
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-zinc-950 text-white border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
            <h2 className="font-display text-4xl md:text-6xl italic font-light mb-4">
                "La libertà di muoverti leggero."
            </h2>
            <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">Emotional Payoff</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-800 pt-16">
            
            {/* Value 1 */}
            <div className="value-item flex flex-col gap-6 group">
                <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                    <Zap className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-3xl font-display font-bold mb-2">Ride SMART.</h3>
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold mb-4">Agency & Comprensione</p>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        L'utente non è un passeggero passivo, ma un decisore informato. Forniamo dati predittivi per restituire il controllo sul percorso.
                    </p>
                </div>
            </div>

            {/* Value 2 */}
            <div className="value-item flex flex-col gap-6 group">
                <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                    <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-3xl font-display font-bold mb-2">Ride SAFE.</h3>
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold mb-4">Sicurezza & Fiducia</p>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        La sicurezza non è solo assenza di pericolo, ma prevedibilità. Riduciamo l'ansia da sosta e da percorrenza con feedback affidabili.
                    </p>
                </div>
            </div>

            {/* Value 3 */}
            <div className="value-item flex flex-col gap-6 group">
                <div className="w-12 h-12 rounded-full bg-emerald-900/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform duration-500">
                    <Leaf className="w-6 h-6" />
                </div>
                <div>
                    <h3 className="text-3xl font-display font-bold mb-2">Ride GREEN.</h3>
                    <p className="text-zinc-500 text-sm uppercase tracking-wider font-bold mb-4">Sostenibilità Condivisa</p>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        Ogni pedalata è un contributo alla città. Trasformiamo la mobilità individuale in un valore collettivo attraverso la community.
                    </p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Values;
