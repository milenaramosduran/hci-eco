
import React, { useLayoutEffect, useRef } from 'react';
import { useMenu } from './MenuContext';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';

const MENU_ITEMS = [
  { label: 'Home', id: 'top' },
  { label: 'Mission', id: 'intro' },
  { label: 'Consegne', id: 'projects' },
  { label: 'Pattern', id: 'news' },
  { label: 'Personas', id: 'personas' },
  { label: 'Valori', id: 'values' },
];

const TEAM_MEMBERS = [
  "Francesca Anna Capurso",
  "Nyjil John Arackal",
  "Milena Ramos Duran",
  "Samuele Segrini",
  "Luca Torriani"
];

const Menu: React.FC = () => {
  const { isMenuOpen, navigateTo } = useMenu();
  const menuRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Initial Setup
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(menuRef.current, { pointerEvents: 'none' });
      gsap.set(bgRef.current, { yPercent: -100 });
      gsap.set(contentRef.current, { opacity: 0 });
    }, menuRef);

    return () => ctx.revert();
  }, []);

  // Animation Logic
  useLayoutEffect(() => {
    const menu = menuRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;
    const items = gsap.utils.toArray(listRef.current?.children || []);
    const secondaryItems = gsap.utils.toArray(secondaryRef.current?.children || []);

    if (!menu || !bg || !content) return;

    if (isMenuOpen) {
      // OPEN SEQUENCE
      gsap.set(menu, { pointerEvents: 'auto' });

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      tl.to(bg, {
        yPercent: 0,
        duration: 1.0,
        ease: "power4.inOut"
      })
        .set(content, { opacity: 1, y: 0 }) // Reset wrapper
        .fromTo(items,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.05,
            duration: 0.8,
            ease: "power3.out"
          },
          "-=0.5"
        )
        .fromTo(secondaryItems,
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.08,
            duration: 0.8,
            ease: "power3.out"
          },
          "-=0.7"
        );

    } else {
      // CLOSE SEQUENCE
      gsap.set(menu, { pointerEvents: 'none' });

      if (timelineRef.current) timelineRef.current.kill();

      const tl = gsap.timeline();
      timelineRef.current = tl;

      // Animate wrapper out to ensure NO overlap
      tl.to(content, {
        opacity: 0,
        y: -30,
        duration: 0.4,
        ease: "power2.in"
      })
        .to(bg, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut"
        }, "-=0.2");
    }
  }, [isMenuOpen]);

  // Hover Interactions
  const handleMouseEnter = (e: React.MouseEvent) => {
    const target = e.currentTarget;
    const parentLi = target.parentElement;
    const siblings = Array.from(listRef.current?.children || []).filter(el => el !== parentLi);

    // Dim siblings
    gsap.to(siblings, { opacity: 0.3, scale: 0.98, x: -10, duration: 0.4, ease: "power2.out" });
    // Highlight target
    gsap.to(parentLi, { scale: 1.02, x: 20, duration: 0.4, ease: "power2.out", color: "#34d399" }); // emerald-400
  };

  const handleMouseLeave = () => {
    const allItems = listRef.current?.children || [];
    gsap.to(allItems, { opacity: 1, scale: 1, x: 0, duration: 0.4, ease: "power2.out", color: "#ffffff" });
  };

  // Atmospheric Mouse Parallax
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMenuOpen) return;

    const { clientX, clientY } = e;
    const xPos = (clientX / window.innerWidth - 0.5);
    const yPos = (clientY / window.innerHeight - 0.5);

    gsap.to(".menu-blob", {
      x: xPos * 50,
      y: yPos * 50,
      duration: 2,
      ease: "power2.out"
    });
  };

  return (
    <div
      ref={menuRef}
      className="fixed inset-0 z-40 pointer-events-none font-sans"
      onMouseMove={handleMouseMove}
    >
      {/* Background Layer - Solid Zinc-950 */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-zinc-950 overflow-hidden"
      >
        {/* Atmospheric Gradients with interactive class */}
        <div className="menu-blob absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60" />
        <div className="menu-blob absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-900/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen opacity-60" />
      </div>

      {/* Content Layer Wrapper */}
      <div
        ref={contentRef}
        className="relative w-full h-full max-w-[1920px] mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 text-white"
      >

        {/* LEFT COLUMN: Main Navigation */}
        <div className="lg:col-span-7 flex flex-col justify-center h-full pt-20 lg:pt-0">
          <ul ref={listRef} className="flex flex-col gap-0 md:gap-2">
            {MENU_ITEMS.map((item, idx) => (
              <li key={idx} className="group w-fit perspective-text origin-left block">
                <button
                  onClick={() => navigateTo(item.id)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="text-left flex items-baseline gap-4 md:gap-8"
                >
                  <span className="text-sm md:text-lg font-mono text-zinc-600 font-light group-hover:text-emerald-500 transition-colors">
                    0{idx + 1}
                  </span>
                  <span className="block font-display text-[11vw] lg:text-[7vw] leading-[0.85] font-black uppercase tracking-tighter transition-colors">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT COLUMN: Secondary Info */}
        <div ref={secondaryRef} className="lg:col-span-5 flex flex-col justify-end lg:justify-center pb-12 lg:pb-0 text-white/60 space-y-12 pl-2 lg:pl-12 lg:border-l lg:border-white/5 h-full relative">

          {/* Decorative Line (Mobile only) */}
          <div className="lg:hidden w-full h-[1px] bg-white/10 absolute top-0 left-0" />

          {/* Block 1: Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-display">Corso</h4>
            <p className="text-lg font-light leading-snug max-w-xs">
              Human-Computer Interaction<br />
              Politecnico di Milano
            </p>
          </div>

          {/* Block 2: Team */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-500 font-display">Team 30%usability</h4>
            <ul className="flex flex-col gap-2 text-lg font-light">
              {TEAM_MEMBERS.map((member, i) => (
                <li key={i} className="text-white/80 hover:text-white transition-colors">
                  {member}
                </li>
              ))}
            </ul>
          </div>

          {/* Block 3: Final Presentation */}
          <div className="space-y-4 pt-8 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500 font-display">
              Presentazione Finale
            </h4>
            <a
              href="assets/deliverables/C7-consegna_finale/consegna7-presentazione-finale.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full p-4 bg-zinc-900/50 hover:bg-amber-900/20 border border-zinc-800 hover:border-amber-500/50 rounded-lg transition-all duration-300"
            >
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">Visualizza Presentazione</span>
                <span className="text-xs text-zinc-500 font-mono">PDF</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-800 group-hover:bg-amber-500/20 flex items-center justify-center transition-colors">
                <ArrowUpRight className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-colors" />
              </div>
            </a>
          </div>

          {/* Block 4: Hi-Fi Prototype */}
          <div className="space-y-4 pt-8 border-t border-white/10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-emerald-500 font-display">
              Prototipo Finale
            </h4>
            <div className="flex flex-col lg:flex-row gap-3">
              <a
                href="https://www.figma.com/proto/3VekieTqPhSLlhxNFiwglQ/Prototipi-App?page-id=0%3A1&node-id=253-647&p=f&viewport=928%2C1726%2C0.09&t=wFjPNdwsVfFWW5lp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=253%3A644"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between flex-1 p-4 bg-zinc-900/50 hover:bg-emerald-900/20 border border-zinc-800 hover:border-emerald-500/50 rounded-lg transition-all duration-300"
              >
                <div className="flex flex-col">
                  <span className="text-sm lg:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">App Mobile</span>
                  <span className="text-xs text-zinc-500 font-mono">Hi-Fi</span>
                </div>
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-zinc-800 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                </div>
              </a>

              <a
                href="https://www.figma.com/proto/3VekieTqPhSLlhxNFiwglQ/Prototipi-App?page-id=586%3A1268&node-id=586-1640&p=f&viewport=353%2C305%2C0.15&t=TNIqnExWlRVjfggc-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=586%3A1917"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between flex-1 p-4 bg-zinc-900/50 hover:bg-emerald-900/20 border border-zinc-800 hover:border-emerald-500/50 rounded-lg transition-all duration-300"
              >
                <div className="flex flex-col">
                  <span className="text-sm lg:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">Smartwatch</span>
                  <span className="text-xs text-zinc-500 font-mono">Hi-Fi</span>
                </div>
                <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-zinc-800 group-hover:bg-emerald-500/20 flex items-center justify-center transition-colors">
                  <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Menu;
