
import React, { useLayoutEffect, useRef, useState } from 'react';
import { CheckCircle2, Lock, Loader2, MessageSquareQuote, Target, Calendar, FileText, Download, Play, Maximize2, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from './Modal';

// Register plugin
gsap.registerPlugin(ScrollTrigger);

type ProjectStatus = 'completed' | 'current' | 'locked';

interface ProjectDocument {
  title: string;
  url: string;
}

interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  status: ProjectStatus;
  feedback?: string;
  deadline: string;
  documents?: ProjectDocument[];
  prototypes?: ProjectDocument[];
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
    feedback: "Ricerca approfondita e initial mapping ben fatto. Identificazione chiara di utenti e bisogni. Migliorabile la presentazione delle domande.",
    documents: [
      { title: "Consegna 1 - Needfinding", url: "assets/deliverables/C1-needfinding/consegna-1-needfinding.pdf" },
      { title: "Tema Definitivo", url: "assets/deliverables/C0-tema/tema-definitivo-30usability.pdf" }
    ]
  },
  {
    id: "02",
    title: "Focus &\nRefinement",
    subtitle: "Raffinamento",
    category: "C2",
    deadline: "27 Ottobre",
    status: 'completed',
    description: "Focus group per validare i pattern. Definizione dei 4 Bisogni Finali (Sicurezza, Fiducia, Fluidità, Comunità) e naming 'SpinGO'.",
    feedback: "Ottimo lavoro per qualità e chiarezza. Nome e Value Proposition convincenti. Suggerito l'accorpamento delle Personas.",
    documents: [
      { title: "Consegna 2 - Focus", url: "assets/deliverables/C2-focus/consegna-2-focus.pdf" },
      { title: "Brainstorming", url: "assets/deliverables/C2-focus/brainstorming-consegna-2.pdf" },
      { title: "Scaletta Focus Group", url: "assets/deliverables/C2-focus/scaletta-approssimativa-focus-group.pdf" }
    ]
  },
  {
    id: "03",
    title: "Tasks &\nWireframes",
    subtitle: "Storyboard & Scelta",
    category: "C3",
    deadline: "17 Novembre",
    status: 'completed',
    description: "Definizione dei 3 Task (Navigazione, Personalizzazione, Community). Confronto tra Hardware Dedicato e App Mobile. Scelta finale: App Mobile + Smartwatch Companion.",
    documents: [
      { title: "Consegna 3 - Prototipi LF", url: "assets/deliverables/C3-prototipiLF/consegna-3-prototipiLF.pdf" }
    ],
    prototypes: [
      { title: "Hardware Dedicato", url: "https://www.figma.com/proto/0T1yhZNZpGx9JBQMCnQD8A?page-id=265:3275&node-id=265-3275&p=f&t=2bgKK7O36hQg9tHH-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=268:4523" },
      { title: "App Mobile", url: "https://www.figma.com/proto/0T1yhZNZpGx9JBQMCnQD8A?page-id=265:3759&node-id=265-3759&p=f&t=3Vtd8J0VjYbCEJKO-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=265:3826" },
      { title: "Smartwatch Companion", url: "https://www.figma.com/proto/0T1yhZNZpGx9JBQMCnQD8A/Wireframes?page-id=301:3297&node-id=301-3307&p=f&t=2bgKK7O36hQg9tHH-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=301:3307" }
    ]
  },
  {
    id: "04",
    title: "Prototipi\nMid-Fi",
    subtitle: "Prototipazione",
    category: "C4",
    deadline: "9 Dicembre",
    status: 'completed',
    description: "Sviluppo dei flussi completi su Figma (Mid-Fi). Implementazione della navigazione 'Ride Safe' su Watch e gestione della Community su Smartphone. Il prototipo è stato evoluto nella versione High-Fidelity finale (Consegna 6).",
    documents: [
      { title: "Consegna 4 -Scelte Progettuali", url: "assets/deliverables/C4-prototipiMF/consegna-4-scelte.pdf" },
      { title: "Manuale Valutatori", url: "assets/deliverables/C4-prototipiMF/consegna-4-valutatori.pdf" }
    ]
  },
  {
    id: "05",
    title: "Valutazione\nEuristica",
    subtitle: "Valutazione",
    category: "C5",
    deadline: "22 Dicembre",
    status: 'completed',
    description: "Valutazione incrociata del prototipo basata sulle 10 Euristiche di Nielsen. Report delle violazioni e severity rating.",
    documents: [
      { title: "Consegna 5 - Valutazione Euristica", url: "assets/deliverables/C5-valutazioneEU/consegna-5-valutazione-euristica.pdf" }
    ]
  },
  {
    id: "06",
    title: "Hi-Fi &\nTesting",
    subtitle: "Test Utente",
    category: "C6",
    deadline: "9 Gennaio 2026 - Sera",
    status: 'current',
    description: "Test di usabilità con utenti reali sul prototipo High-Fidelity finale. Analisi dei risultati e rifinitura del visual design.",
    documents: [
      { title: "Consegna 6 - User Testing & Analisi", url: "" },
      { title: "Modifiche al Prototipo Post V.E.", url: "assets/deliverables/C6-user_testing/consegna-6-documento-modificheVE.pdf" },
      { title: "Protocollo per User Testing ", url: "assets/deliverables/C6-user_testing/consegna-6-protocollo-usability-testing.pdf" }
    ],
    prototypes: [
      { title: "Hi-Fi (Figma)", url: "https://www.figma.com/proto/3VekieTqPhSLlhxNFiwglQ/Prototipi-App?page-id=0%3A1&node-id=253-647&p=f&viewport=928%2C1726%2C0.09&t=wFjPNdwsVfFWW5lp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=253%3A644" }
    ]
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

const getFigmaEmbedUrl = (url: string) => {
  return `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(url)}`;
};

const ProjectShowcase: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const activeSlideRef = useRef(1); // Use Ref for logic to avoid stale closures in callbacks if needed
  const [activeSlide, setActiveSlide] = useState(1);
  const [activePrototype, setActivePrototype] = useState<{ url: string; title: string } | null>(null);

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

                    {/* FEEDBACK SECTION */}
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

                    <div className="flex flex-wrap gap-8">
                      {/* DOCUMENTS SECTION */}
                      {project.documents && project.documents.length > 0 && (
                        <div className="mt-8">
                          <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">Documentazione</p>
                          <div className="flex flex-wrap gap-3">
                            {project.documents.map((doc, i) => (
                              <a
                                key={i}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-emerald-900 rounded-lg transition-all duration-300 group/doc"
                              >
                                <FileText className="w-4 h-4 text-emerald-600" />
                                <span className="text-xs font-mono text-zinc-300 group-hover/doc:text-white">{doc.title}</span>
                                <Download className="w-3 h-3 text-zinc-600 group-hover/doc:text-emerald-500 ml-2" />
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* PROTOTYPES SECTION */}
                      {project.prototypes && project.prototypes.length > 0 && (
                        <div className="mt-8">
                          <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold mb-3 flex items-center gap-2">
                            <Play className="w-3 h-3 fill-current" /> Prototipi Interattivi
                          </p>
                          <div className="flex flex-col gap-4">
                            {project.prototypes.map((proto, i) => (
                              <div key={i} className="flex items-center gap-4">
                                <span className="text-sm font-mono text-emerald-100 min-w-[200px]">{proto.title}</span>

                                {/* Dual Action Buttons Control Group */}
                                <div className="flex items-center gap-3">
                                  {/* Action 1: Preview Modal */}
                                  <button
                                    onClick={() => setActivePrototype({ url: proto.url, title: proto.title })}
                                    className="group p-2 rounded-full border border-emerald-900 hover:border-emerald-500 hover:bg-emerald-500/20 transition-all duration-300"
                                    title="Anteprima Interattiva"
                                  >
                                    <Maximize2 className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
                                  </button>

                                  {/* Action 2: Open External */}
                                  <a
                                    href={proto.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 rounded-full border border-zinc-800 hover:border-emerald-900 hover:bg-zinc-800 transition-all duration-300"
                                    title="Apri su Figma"
                                  >
                                    <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                                  </a>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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

      {/* PROTOTYPE MODAL */}
      <Modal
        isOpen={!!activePrototype}
        onClose={() => setActivePrototype(null)}
        title={activePrototype?.title}
      >
        {activePrototype && (
          <iframe
            className="w-full h-full border-none"
            src={getFigmaEmbedUrl(activePrototype.url)}
            allowFullScreen
          />
        )}
      </Modal>

    </section>
  );
};

export default ProjectShowcase;
