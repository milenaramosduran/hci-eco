import React from 'react';
import { useMenu } from './MenuContext';
import { ASSETS } from '../constants/images';

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useMenu();

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-start mix-blend-difference text-white pointer-events-none">
      {/* Logo Area */}
      <div className="flex items-center gap-4 pointer-events-auto cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        {/* Logo Image Replaces the CSS Circle */}
        <img 
            src={ASSETS.logo} 
            alt="SpinGO" 
            className="h-12 w-auto object-contain"
        />
        
        <div className="hidden md:block text-xs uppercase tracking-wider leading-tight font-medium">
          <span className="font-display font-bold text-xl tracking-tight">SpinGO</span><br />
          // Gruppo 30%usability
        </div>
      </div>

      {/* Menu Trigger */}
      <button 
        onClick={toggleMenu}
        className="pointer-events-auto bg-white text-black px-6 py-3 rounded-full text-xs uppercase font-bold tracking-widest hover:bg-gray-200 transition-colors z-50 relative font-display"
      >
        {isMenuOpen ? 'Chiudi' : 'Menu'}
      </button>
    </header>
  );
};

export default Header;