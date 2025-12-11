
import React from 'react';
import { useMenu } from './MenuContext';
import { ASSETS } from '../constants/images';

const TEAM_MEMBERS = [
    "Francesca 🎀Anna🎀 Capurso",
    "Nyjil John Arackal",
    "Milena Ramos Duran",
    "Samuele Segrini",
    "Luca Torriani"
];

const Footer: React.FC = () => {
    const { navigateTo } = useMenu();

    const handleNavClick = (id: string) => {
        navigateTo(id);
    };

    return (
        <footer className="bg-black text-white pt-24 overflow-hidden border-t border-zinc-900">
            <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left Info */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-4 mb-8">
                            <img
                                src={ASSETS.logo}
                                alt="SpinGO"
                                className="h-12 w-auto object-contain"
                            />
                            <div className="text-[10px] uppercase tracking-wider leading-tight text-gray-400">
                                Micromobilità Sostenibile<br />
                    // Gruppo 30%usability
                            </div>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed mb-8 max-w-xs font-light">
                            Un progetto accademico per il corso di <strong>Human-Computer Interaction</strong>. Il nostro obiettivo è rendere la micromobilità sicura, accessibile e integrata nella vita quotidiana.
                        </p>

                        <div className="text-xs text-gray-400 space-y-1 mb-6 font-mono">
                            <p>Politecnico di Milano</p>
                            <p>Anno Accademico 2025/2026</p>
                        </div>
                    </div>

                    {/* Middle Links */}
                    <div className="lg:col-span-4 flex flex-col justify-between">
                        <nav className="space-y-6">
                            <div className="border-b border-zinc-800 pb-2">
                                <button onClick={() => handleNavClick('top')} className="w-full flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors text-left">
                                    Home <span>↗</span>
                                </button>
                            </div>
                            <div className="border-b border-zinc-800 pb-2">
                                <button onClick={() => handleNavClick('intro')} className="w-full flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors text-left">
                                    Mission <span>↗</span>
                                </button>
                            </div>
                            <div className="border-b border-zinc-800 pb-2">
                                <button onClick={() => handleNavClick('projects')} className="w-full flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors text-left">
                                    Consegne <span>↗</span>
                                </button>
                            </div>
                            <div className="border-b border-zinc-800 pb-2">
                                <button onClick={() => handleNavClick('news')} className="w-full flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors text-left">
                                    Pattern <span>↗</span>
                                </button>
                            </div>
                            <div className="border-b border-zinc-800 pb-2">
                                <button onClick={() => handleNavClick('personas')} className="w-full flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors text-left">
                                    Personas <span>↗</span>
                                </button>
                            </div>
                            <div className="border-b border-zinc-800 pb-2">
                                <button onClick={() => handleNavClick('values')} className="w-full flex justify-between items-center text-xs uppercase hover:text-emerald-400 tracking-widest font-bold transition-colors text-left">
                                    Valori <span>↗</span>
                                </button>
                            </div>
                        </nav>
                    </div>

                    {/* Right Team List */}
                    <div className="lg:col-span-4">
                        <h4 className="font-display text-2xl font-light mb-6 text-white">Il Team</h4>
                        <ul className="space-y-3">
                            {TEAM_MEMBERS.map((member, i) => (
                                <li key={i} className="text-sm text-zinc-400 font-light border-b border-zinc-900 pb-2 flex justify-between">
                                    <span>{member}</span>
                                    <span className="text-zinc-700 text-[10px] uppercase tracking-widest">Membro 0{i + 1}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex justify-between items-end text-[10px] text-zinc-600 uppercase mt-12 font-mono">
                            <span>Gruppo 30%usability ©</span>
                            <span>HCI Project</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
