import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: onComplete
      });

      // Initial state
      gsap.set(textRef.current, { y: 50, opacity: 0 });
      gsap.set(subRef.current, { y: 20, opacity: 0 });

      // Animate In
      tl.to(textRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      })
      .to(subRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8")
      // Hold briefly
      .to({}, { duration: 0.8 })
      // Animate Out
      .to([textRef.current, subRef.current], {
        y: -50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.in"
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: "power4.inOut"
      }, "-=0.4");

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center">
      <h1 ref={textRef} className="font-display text-7xl md:text-9xl font-bold tracking-tight italic">
        SpinGO
      </h1>
      <p ref={subRef} className="font-sans text-xs md:text-sm uppercase tracking-[0.3em] mt-6 text-emerald-500 font-bold">
        Micromobilità Sostenibile
      </p>
    </div>
  );
};

export default LoadingScreen;