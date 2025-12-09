
import React, { createContext, useContext, useState } from 'react';

interface MenuContextType {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  closeMenu: () => void;
  navigateTo: (targetId: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navigateTo = (targetId: string) => {
    // 1. Close the menu immediately so the user can see the page scrolling
    setIsMenuOpen(false);

    // 2. Perform smooth scroll
    // A small delay ensures the menu exit animation has started rendering
    setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (targetId === 'top') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu, closeMenu, navigateTo }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
