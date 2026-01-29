
import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { Stats } from './components/Stats';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { VoiceAnalyzerModal } from './components/VoiceAnalyzerModal';
import { LiveDemoModal } from './components/LiveDemoModal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAnalyzerOpen, setIsAnalyzerOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f14] selection:bg-indigo-500/30 overflow-x-hidden">
      {/* Background ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[500px] bg-indigo-900/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-cyan-900/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

      <Navbar scrolled={scrolled} onGetStarted={() => setIsAnalyzerOpen(true)} />
      
      <main>
        <Hero 
          onAnalyzeClick={() => setIsAnalyzerOpen(true)} 
          onDemoClick={() => setIsDemoOpen(true)} 
        />
        <Features />
        <HowItWorks />
        <Stats />
        <CTA onStartTrial={() => setIsAnalyzerOpen(true)} />
      </main>

      <Footer />

      {isAnalyzerOpen && <VoiceAnalyzerModal onClose={() => setIsAnalyzerOpen(false)} />}
      {isDemoOpen && <LiveDemoModal onClose={() => setIsDemoOpen(false)} />}
    </div>
  );
};

export default App;
