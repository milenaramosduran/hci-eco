
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    // Only run on non-touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice || !cursor || !follower) return;

    // Center the anchor point
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });
    gsap.set(follower, { xPercent: -50, yPercent: -50 });

    // Performance optimization using quickTo
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });
    const xToFollower = gsap.quickTo(follower, "x", { duration: 0.6, ease: "power3" });
    const yToFollower = gsap.quickTo(follower, "y", { duration: 0.6, ease: "power3" });

    const onMouseMove = (e: MouseEvent) => {
      // Show cursor on first move
      if (!isVisible) setIsVisible(true);

      xTo(e.clientX);
      yTo(e.clientY);
      xToFollower(e.clientX);
      yToFollower(e.clientY);

      // Check for hover targets
      const target = e.target as HTMLElement;
      const isLink = target.closest('a, button, .cursor-hover, [role="button"]');

      if (isLink && !isHovering) {
        setIsHovering(true);
      } else if (!isLink && isHovering) {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    const onCursorHide = () => setIsVisible(false);
    const onCursorShow = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    window.addEventListener('cursor:hide', onCursorHide);
    window.addEventListener('cursor:show', onCursorShow);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      window.removeEventListener('cursor:hide', onCursorHide);
      window.removeEventListener('cursor:show', onCursorShow);
    };
  }, [isHovering, isVisible]);

  useEffect(() => {
    const follower = followerRef.current;
    if (!follower) return;

    if (isHovering) {
      gsap.to(follower, {
        scale: 3.5,
        backgroundColor: "rgba(255, 255, 255, 1)", // Solid white in difference mode = black
        mixBlendMode: 'difference',
        duration: 0.3,
        ease: "power2.out"
      });
    } else {
      gsap.to(follower, {
        scale: 1,
        backgroundColor: "transparent",
        mixBlendMode: 'difference',
        duration: 0.3,
        ease: "power2.out"
      });
    }
  }, [isHovering]);

  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Primary Dot */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Follower Ring */}
      <div
        ref={followerRef}
        className={`fixed top-0 left-0 w-8 h-8 border border-white rounded-full pointer-events-none z-[9998] mix-blend-difference transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      />
    </>
  );
};

export default CustomCursor;
