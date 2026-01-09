import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            // Prevent body scroll
            document.body.style.overflow = 'hidden';

            const tl = gsap.timeline();

            tl.to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out",
                display: "flex"
            })
                .fromTo(contentRef.current,
                    { y: 50, opacity: 0, scale: 0.95 },
                    { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.2)" },
                    "-=0.2"
                );

        } else {
            document.body.style.overflow = '';

            const tl = gsap.timeline({
                onComplete: () => {
                    if (overlayRef.current) {
                        gsap.set(overlayRef.current, { display: "none" });
                    }
                }
            });

            tl.to(contentRef.current, {
                y: 20,
                opacity: 0,
                scale: 0.95,
                duration: 0.2,
                ease: "power2.in"
            })
                .to(overlayRef.current, {
                    opacity: 0,
                    duration: 0.2
                }, "-=0.1");
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    // Handle escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 z-[100] hidden items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={(e) => {
                if (e.target === overlayRef.current) onClose();
            }}
            style={{ opacity: 0 }}
        >
            <div
                ref={contentRef}
                className="w-full max-w-[90vw] h-[85vh] bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-2xl relative"
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/50">
                    <h3 className="font-display text-xl text-white tracking-wide">
                        {title || 'Prototype Preview'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div
                    className="flex-1 w-full bg-zinc-950 relative"
                    onMouseEnter={() => window.dispatchEvent(new Event('cursor:hide'))}
                    onMouseLeave={() => window.dispatchEvent(new Event('cursor:show'))}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
