
import React, { useLayoutEffect, useRef, useState } from 'react';
import { CheckCircle2, Lock, Loader2, MessageSquareQuote, Target, Calendar } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

type ProjectStatus = 'completed' | 'current' | 'locked';

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  status: ProjectStatus;
  feedback?: string;
  deadline: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: "01",
    title: "Need\nFinding",
    subtitle: "Individuazione Bisogni",
    category: "C1",
    deadline: "13 Ottobre",
    status: 'completed',
    description: "Analisi esplorativa attraverso 109 questionari e interviste. Identificazione del 'Paradosso dell'Intenzione' e delle strategie di adattamento degli utenti urbani.",
    feedback: "Ricerca approfondita e initial mapping ben fatto. Identificazione chiara di utenti e bisogni. Migliorabile la presentazione delle domande."
  },
  {
    id: "02",
    title: "Focus &\nRefine",
    subtitle: "Raffinamento",
    category: "C2",
    deadline: "27 Ottobre",
    status: 'completed',
    description: "Focus group per validare i pattern. Definizione dei 4 Bisogni Finali (Sicurezza, Fiducia, Fluidità, Comunità) e naming 'SpinGO'.",
    feedback: "Ottimo lavoro per qualità e chiarezza. Nome e Value Proposition convincenti. Suggerito l'accorpamento delle Personas."
  },
  {
    id: "03",
    title: "Tasks &\nProto",
    subtitle: "Storyboard & Scelta",
    category: "C3",
    deadline: "17 Novembre",
    status: 'completed',
    description: "Definizione dei 3 Task (Navigazione, Personalizzazione, Community). Confronto tra Hardware Dedicato e App Mobile. Scelta finale: App Mobile + Smartwatch Companion."
  },
  {
    id: "04",
    title: "Mid-Fi\nWireframes",
    subtitle: "Prototipazione",
    category: "C4",
    deadline: "9 Dicembre",
    status: 'completed',
    description: "Sviluppo dei flussi completi su Figma (Mid-Fi). Implementazione della navigazione 'Ride Safe' su Watch e gestione della Community su Smartphone."
  },
  {
    id: "05",
    title: "Heuristic\nEval",
    subtitle: "Valutazione",
    category: "C5",
    deadline: "22 Dicembre",
    status: 'current',
    description: "Valutazione incrociata del prototipo basata sulle 10 Euristiche di Nielsen. Report delle violazioni e severity rating."
  },
  {
    id: "06",
    title: "Hi-Fi &\nTesting",
    subtitle: "Test Utente",
    category: "C6",
    deadline: "Gennaio '26",
    status: 'locked',
    description: "Test di usabilità con utenti reali sul prototipo High-Fidelity finale. Analisi dei risultati e rifinitura del visual design."
  }
];

const StatusBadge: React.FC<{ status: ProjectStatus }> = ({ status }) => {
  switch (status) {
    case 'completed':
      return (
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-950/30 border border-emerald-500/30 rounded-full text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
          <CheckCircle2 className="w-3 h-3" />
          <span>Completato</span>
        </div>
      );
    case 'current':
      return (
        <div className="flex items-center gap-2 px-3 py-1 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(255,255,255,0.3)] animate-pulse">
          <Loader2 className="w-3 h-3 animate-spin" />
          <span>In Corso</span>
        </div>
      );
    case 'locked':
      return (
        <div className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500 text-[10px] font-bold uppercase tracking-widest">
          <Lock className="w-3 h-3" />
          <span>Futuro</span>
        </div>
      );
  }
};

const ProjectShowcase: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef(1); // Use Ref for logic to avoid stale closures in callbacks if needed
  const [activeSlide, setActiveSlide] = useState(1);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      const panels = gsap.utils.toArray<HTMLElement>(".project-panel");
      
      if (!track || panels.length === 0) return;
      
      const totalPanels = panels.length; 
      
      // Main Timeline for Scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1, // Smooth scrubbing
          snap: {
            snapTo: 1 / (totalPanels - 1),
            duration: { min: 0.2, max: 0.5 },
            delay: 0.1,
            ease: "power1.inOut"
          },
          end: () => "+=" + (containerRef.current!.offsetWidth * (totalPanels - 1)),
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Direct DOM update for performance
            if (progressBarRef.current) {
                progressBarRef.current.style.width = `${progress * 100}%`;
            }

            // Optimize State Update
            const index = Math.round(progress * (totalPanels - 1)) + 1;
            if (index !== activeSlideRef.current) {
                activeSlideRef.current = index;
                setActiveSlide(index);
            }
          }
        }
      });

      // 1. Move Panels Left
      tl.to(panels, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
      });

      // 2. Parallax Background Numbers (Move slightly Right to create depth)
      // The container moves left (-100%), so we move numbers positive x to make them appear 'slower'
      tl.to(".project-bg-number", {
        x: window.innerWidth * 0.5, 
        ease: "none"
      }, 0); // Start at same time as panel move

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-black text-white relative min-h-screen border-t border-gray-900">
      
      {/* HORIZONTAL TRACK CONTAINER */}
      <div 
        ref={trackRef} 
        className="flex w-fit h-screen"
        style={{ width: `${PROJECTS.length * 100}vw` }}
      >
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="project-panel w-screen h-screen flex-shrink-0 bg-black flex items-center justify-center relative border-r border-zinc-900 box-border overflow-hidden group"
          >
            {/* Background Number (Decorative with Parallax) */}
            <div className="project-bg-number absolute top-0 right-0 md:right-[5%] font-display text-[20rem] md:text-[30rem] leading-none text-zinc-900/30 select-none pointer-events-none opacity-20 md:opacity-30 mix-blend-screen z-0">
                {project.id}
            </div>

            <div className="w-full h-full max-w-[1800px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 md:gap-12 relative z-10 transition-all duration-700 ease-out group-hover:scale-[1.01] group-hover:shadow-[0_0_100px_rgba(16,185,129,0.1)]">
                
                {/* Main Content - Centered */}
                <div className="md:col-span-10 md:col-start-2 flex flex-col justify-center h-full pt-20 md:pt-0">
                     <div className="mb-6 md:mb-10 flex items-center gap-4 border-b border-zinc-900 pb-6 w-fit">
                         <span className="font-mono text-emerald-500 text-sm">CONSEGNA {project.id}</span>
                         <StatusBadge status={project.status} />
                     </div>

                     {/* Title - Bigger and bolder */}
                     <h2 className="font-display text-[14vw] md:text-[9vw] leading-[0.8] tracking-tighter text-white uppercase mb-12 whitespace-pre-line">
                        {project.title}
                     </h2>

                     {/* Info Grid */}
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-zinc-800 pt-8">
                         <div className="md:col-span-2 space-y-6">
                             <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-light max-w-2xl">
                                {project.description}
                             </p>
                             
                             {project.feedback && (
                                <div className="mt-8">
                                     <div className="flex items-start gap-4">
                                        <MessageSquareQuote className="w-5 h-5 text-emerald-600 shrink-0 mt-1 opacity-80" />
                                        <div>
                                            <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold mb-2 opacity-80">Feedback Docenti</p>
                                            <p className="text-zinc-500 text-sm italic leading-relaxed">"{project.feedback}"</p>
                                        </div>
                                     </div>
                                </div>
                             )}
                         </div>
                         
                         <div className="space-y-8">
                             <div className="flex flex-col">
                                <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-2">
                                    <Target className="w-4 h-4" /> Focus
                                </div>
                                <span className="text-white font-display text-2xl">{project.subtitle}</span>
                             </div>
                             
                             <div className="flex flex-col gap-6">
                                 <div className="flex flex-col">
                                    <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-1">Fase</span>
                                    <span className="text-zinc-400 font-mono text-base">{project.category}</span>
                                 </div>
                                 <div className="flex flex-col">
                                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-1">
                                        <Calendar className="w-4 h-4" /> Deadline
                                    </div>
                                    <span className="text-zinc-400 font-mono text-base">{project.deadline}</span>
                                 </div>
                             </div>
                         </div>
                     </div>
                </div>

            </div>
          </div>
        ))}

      </div>

      {/* FIXED FOOTER BAR */}
      <div className="absolute bottom-0 left-0 w-full z-50 bg-black border-t border-zinc-900">
        <div className="w-full h-[2px] bg-zinc-900 relative">
             <div 
                ref={progressBarRef} 
                className="absolute top-0 left-0 h-full bg-emerald-500 w-0" 
             />
        </div>

        <div className="px-6 md:px-12 py-6 flex justify-between items-center">
            <div className="font-mono text-xs tracking-widest text-zinc-500 flex gap-4">
               <span className="text-white">{activeSlide < 10 ? `0${activeSlide}` : activeSlide}</span>
               <span className="opacity-30">/</span> 
               <span>{PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}</span>
            </div>
            
            <span className="hidden md:inline font-display text-xs uppercase tracking-widest text-zinc-500">
               Roadmap di Progetto
            </span>
        </div>
      </div>

    </section>
  );
};

export default ProjectShowcase;
