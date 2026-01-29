
import React from 'react';

interface HeroProps {
  onAnalyzeClick: () => void;
  onDemoClick: () => void;
}

const LANGUAGES = [
  { name: 'Auto Detect', flag: '✨' },
  { name: 'English', flag: '🇬🇧' },
  { name: 'Hindi', flag: '🇮🇳' },
  { name: 'Tamil', flag: '🇮🇳' },
  { name: 'Telugu', flag: '🇮🇳' },
  { name: 'Malayalam', flag: '🇮🇳' }
];

export const Hero: React.FC<HeroProps> = ({ onAnalyzeClick, onDemoClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Automatic Language-Agnostic Detection
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 max-w-5xl mx-auto leading-[1.1]">
          <span className="text-gradient">Secure Every Voice</span> <br />
          <span className="text-gray-500 text-3xl md:text-5xl lg:text-6xl">With Intelligent Auto-Detection.</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Classiflick provides automatic voice verification that works across any language without manual setup. Optimized for Tamil, English, Hindi, Malayalam, and Telugu.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {LANGUAGES.map((lang) => (
            <span key={lang.name} className={`px-4 py-1.5 glass rounded-full text-sm font-medium border border-white/5 transition-colors ${lang.name === 'Auto Detect' ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300' : 'text-gray-300 hover:border-indigo-500/30'}`}>
              <span className="mr-2">{lang.flag}</span>
              {lang.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={onAnalyzeClick}
            className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all text-lg shadow-xl shadow-white/5 active:scale-95"
          >
            Analyze Voice Now
          </button>
          <button 
            onClick={onDemoClick}
            className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all text-lg flex items-center justify-center gap-2 active:scale-95"
          >
            View Live Demo
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
          </button>
        </div>

        <div className="mt-24 max-w-4xl mx-auto glass p-2 rounded-2xl">
          <div className="relative rounded-xl overflow-hidden bg-[#0e1319]">
            <img 
              src="https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop" 
              alt="Voice Analysis Dashboard" 
              className="w-full h-auto opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e1319] via-transparent to-transparent"></div>
            
            <div className="absolute top-8 left-8 p-4 glass rounded-xl w-48 text-left">
              <div className="text-[10px] text-indigo-400 font-bold uppercase mb-1">Status</div>
              <div className="text-lg font-bold">Scanning...</div>
              <div className="w-full bg-white/10 h-1.5 rounded-full mt-2 overflow-hidden">
                <div className="w-2/3 h-full bg-indigo-500 animate-[loading_2s_infinite]"></div>
              </div>
            </div>

            <div className="absolute bottom-8 right-8 p-4 glass rounded-xl w-48 text-left">
              <div className="text-[10px] text-emerald-400 font-bold uppercase mb-1">Human Confidence</div>
              <div className="text-3xl font-bold">98.4%</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};
