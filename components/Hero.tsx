
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ASSETS } from '../constants/images';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sharpBgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Initial Load Animation (Staggered Text)
      const chars = titleRef.current?.querySelectorAll('.hero-char');
      const subtitle = document.querySelector('.hero-subtitle');
      
      const tl = gsap.timeline();

      tl.from(chars || [], {
        yPercent: 120,
        opacity: 0,
        duration: 1.2,
        stagger: 0.05,
        ease: "power4.out",
        delay: 0.2
      })
      .from(subtitle, {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      }, "-=0.8");

      // 2. Continuous Marquee Animation
      if (marqueeRef.current) {
        gsap.to(marqueeRef.current, {
            xPercent: -50,
            repeat: -1,
            duration: 20,
            ease: "none",
        });
      }

      // 3. Scroll Parallax & Scale
      if (containerRef.current && sharpBgRef.current) {
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true, 
            onUpdate: (self) => {
              // Move background vertically and scale slightly
              gsap.set(sharpBgRef.current, {
                y: self.progress * 150,
                scale: 1 + (self.progress * 0.1) // Subtle zoom
              });
              
              // Move text faster (foreground)
              gsap.set(titleRef.current, {
                y: self.progress * -100,
                opacity: 1 - self.progress * 1.5 // Fade out as we scroll away
              });
            }
          });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderTitle = (text: string) => {
    return text.split('').map((char, i) => (
        <span key={i} className="hero-char inline-block origin-bottom transform will-change-transform">
            {char}
        </span>
    ));
  };

  return (
    <section 
        ref={containerRef} 
        className="relative h-screen w-full flex flex-col justify-center overflow-hidden bg-zinc-950"
    >
      
      {/* LAYER 1: FIXED BACKGROUND IMAGE */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <div 
            ref={sharpBgRef}
            className="absolute inset-0 w-full h-[120vh]"
        >
            <img 
              src={ASSETS.hero.main} 
              alt="Urban Cycling" 
              className="w-full h-full object-cover opacity-70" 
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/40 via-transparent to-zinc-950/90"></div>
            
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.07] pointer-events-none mix-blend-overlay" 
                 style={{ 
                     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
                 }}>
            </div>
        </div>
      </div>

      {/* LAYER 2: CONTENT */}
      <div 
        className="relative z-10 w-full flex flex-col items-center justify-center h-full px-6"
      >
        <div className="flex flex-col items-center justify-center mix-blend-screen overflow-hidden">
            {/* Main Title with Split Text */}
            <h1 ref={titleRef} className="font-display text-[20vw] md:text-[22vw] leading-[0.75] font-black uppercase tracking-tighter text-center text-white select-none">
                {renderTitle("SpinGO")}
            </h1>
            
            {/* Subtitle */}
            <div className="hero-subtitle mt-8 md:mt-12 text-center">
                <p className="text-sm md:text-lg font-mono uppercase tracking-[0.4em] text-emerald-400 font-bold mb-2">
                    Gruppo 30%usability
                </p>
                <p className="text-xl md:text-3xl font-light italic font-display text-white/90">
                    Ride Smart. Ride Safe. Ride Green.
                </p>
            </div>
        </div>
      </div>

      {/* LAYER 3: INFINITE MARQUEE FOOTER */}
      <div className="absolute bottom-0 left-0 w-full z-20 py-4 border-t border-white/10 bg-black/20 backdrop-blur-sm overflow-hidden">
        <div className="whitespace-nowrap flex" ref={marqueeRef}>
             {/* Repeated content for seamless loop */}
             {[1, 2, 3, 4].map((i) => (
                 <div key={i} className="flex items-center gap-8 md:gap-16 px-4 md:px-8 opacity-60">
                     <span className="text-xs font-bold uppercase tracking-widest text-white">User Research</span>
                     <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                     <span className="text-xs font-bold uppercase tracking-widest text-white">Interaction Design</span>
                     <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                     <span className="text-xs font-bold uppercase tracking-widest text-white">Prototyping</span>
                     <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                     <span className="text-xs font-bold uppercase tracking-widest text-white">Usability Testing</span>
                     <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                 </div>
             ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
