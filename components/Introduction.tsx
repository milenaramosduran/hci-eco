
import React, { useLayoutEffect, useRef } from 'react';
import { Globe, Users, Layers, Bike } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".intro-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".intro-title",
                start: "top 85%",
            }
        });

        gsap.from(".intro-desc", {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
            scrollTrigger: {
                trigger: ".intro-desc",
                start: "top 85%",
            }
        });

        gsap.from(".stat-item", {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
                trigger: ".stats-container",
                start: "top 85%",
            }
        });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[10vh] px-6 md:px-12 max-w-[1600px] mx-auto bg-[#FDFDF9]">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest mb-4 text-gray-400 font-display">La Nostra Missione</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div className="lg:col-span-7">
          <h2 className="intro-title text-3xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-12 font-display">
            Trasformare la micromobilità da opzione incerta a scelta quotidiana stabile e affidabile.
          </h2>
        </div>
        
        <div className="lg:col-span-5 lg:mt-4">
            <p className="intro-desc text-base md:text-lg text-gray-600 leading-relaxed mb-16 font-light">
              <span className="font-bold text-black">SpinGO</span> nasce per risolvere il paradosso della mobilità urbana: il desiderio di muoversi leggeri contro la paura del furto e del pericolo. 
              Non progettiamo solo un'app, ma un ecosistema di fiducia che integra <span className="italic">sicurezza</span>, <span className="italic">fluidità</span> e <span className="italic">appartenenza</span>.
            </p>

            <div className="stats-container grid grid-cols-3 gap-4 border-t border-gray-200 pt-8">
              <div className="stat-item flex flex-col gap-1">
                <div className="flex items-baseline gap-1 text-4xl md:text-5xl font-medium font-display text-emerald-600">
                  109
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 font-bold">Risposte Survey</p>
              </div>

              <div className="stat-item flex flex-col gap-1">
                <div className="flex items-baseline gap-1 text-4xl md:text-5xl font-medium font-display text-black">
                  4
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 font-bold">Personas</p>
              </div>

              <div className="stat-item flex flex-col gap-1">
                <div className="flex items-baseline gap-1 text-4xl md:text-5xl font-medium font-display text-black">
                  3
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-500 font-bold">Consegne</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
