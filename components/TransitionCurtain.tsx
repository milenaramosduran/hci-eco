import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const TransitionCurtain: React.FC = () => {
  const curtainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const curtain = curtainRef.current;
    const text = textRef.current;

    const onStart = () => {
      // WIPE UP (Cover Screen)
      const tl = gsap.timeline();
      
      tl.set(curtain, { yPercent: 100, display: 'flex' })
        .to(curtain, {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
        })
        .fromTo(text, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.4 },
            "-=0.3"
        );
    };

    const onEnd = () => {
      // WIPE UP AWAY (Reveal Content)
      const tl = gsap.timeline();

      tl.to(text, { opacity: 0, y: -20, duration: 0.3 })
        .to(curtain, {
          yPercent: -100,
          duration: 0.8,
          ease: "power4.inOut",
          onComplete: () => {
            gsap.set(curtain, { display: 'none', yPercent: 100 });
          }
        }, "-=0.1");
    };

    window.addEventListener('transition-start', onStart);
    window.addEventListener('transition-end', onEnd);

    return () => {
      window.removeEventListener('transition-start', onStart);
      window.removeEventListener('transition-end', onEnd);
    };
  }, []);

  return (
    <div 
      ref={curtainRef}
      className="fixed inset-0 z-[100] bg-black hidden items-center justify-center text-white pointer-events-none"
    >
      <div ref={textRef} className="text-xl font-light tracking-widest uppercase">
        Loading
      </div>
    </div>
  );
};

export default TransitionCurtain;
