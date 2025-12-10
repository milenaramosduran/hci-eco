
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import ProjectShowcase from './components/ProjectShowcase';
import GalleryGrid from './components/GalleryGrid';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Footer from './components/Footer';
import Menu from './components/Menu';
import TransitionCurtain from './components/TransitionCurtain';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import Personas from './components/Personas';
import Values from './components/Values';
import { MenuProvider } from './components/MenuContext';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const AppContent: React.FC = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FDFDF9]">
      <CustomCursor />
      {!loadingComplete && <LoadingScreen onComplete={() => setLoadingComplete(true)} />}
      
      <TransitionCurtain />
      <Menu />
      <Header />
      
      <main id="top">
        <Hero />
        
        {/* 
            Content Wrapper:
            This wrapper is crucial for the fixed hero image effect.
            It has a solid background and higher z-index (z-20) to slide OVER 
            the fixed image (z-0) from the Hero section as the user scrolls.
        */}
        <div className="relative z-20 bg-[#FDFDF9]">
            <div id="intro">
                <Introduction />
            </div>
            <div id="projects">
                <ProjectShowcase />
            </div>
            <div id="news">
                <News />
            </div>
            <div id="personas">
                <Personas />
            </div>
            <div id="values">
                <Values />
            </div>
            <GalleryGrid />
            <Testimonials />
            <Footer />
        </div>
      </main>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <MenuProvider>
        <AppContent />
    </MenuProvider>
  );
};

export default App;
