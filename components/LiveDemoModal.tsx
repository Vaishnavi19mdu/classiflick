
import React, { useState, useEffect } from 'react';

interface LiveDemoModalProps {
  onClose: () => void;
}

const DEMO_STEPS = [
  "Initializing Secure Channel...",
  "Capturing Spectral Density...",
  "Analyzing Harmonic Distortions...",
  "Comparing Neural Fingerprints...",
  "Scanning for Synthetic Artifacts...",
  "Calculating Confidence Vector..."
];

export const LiveDemoModal: React.FC<LiveDemoModalProps> = ({ onClose }) => {
  const [stepIndex, setStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (stepIndex < DEMO_STEPS.length) {
      const timer = setTimeout(() => {
        setStepIndex(prev => prev + 1);
      }, 800);
      return () => clearTimeout(timer);
    } else {
      setIsComplete(true);
    }
  }, [stepIndex]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 bg-[#0b0f14] shadow-2xl relative">
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-gray-500 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Visual Side */}
          <div className="relative bg-[#0d1218] p-12 flex flex-col justify-center items-center overflow-hidden border-r border-white/5">
             <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-indigo-500/20"></div>
             </div>
             
             {!isComplete ? (
               <div className="relative w-48 h-48 flex items-center justify-center">
                  <div className="absolute inset-0 border-4 border-indigo-500/10 rounded-full"></div>
                  <div className="absolute inset-0 border-4 border-t-indigo-500 rounded-full animate-spin"></div>
                  <div className="text-indigo-400 font-mono text-2xl animate-pulse">
                    {Math.floor((stepIndex / DEMO_STEPS.length) * 100)}%
                  </div>
               </div>
             ) : (
               <div className="text-center animate-fade-in">
                  <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                    <svg className="w-12 h-12 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Verified Human</h3>
                  <p className="text-emerald-400/80 font-medium">Identity Confirmed</p>
               </div>
             )}
          </div>

          {/* Console Side */}
          <div className="bg-black p-12 font-mono text-sm overflow-y-auto">
             <div className="flex items-center gap-2 mb-8 border-b border-white/10 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-500 ml-4">classification_engine_v4.2.0</span>
             </div>

             <div className="space-y-4">
                {DEMO_STEPS.slice(0, stepIndex).map((step, i) => (
                  <div key={i} className="flex gap-4 animate-fade-in">
                    <span className="text-indigo-500">[{new Date().toLocaleTimeString([], { hour12: false, second: '2-digit', minute: '2-digit' })}]</span>
                    <span className="text-emerald-500">READY</span>
                    <span className="text-gray-300">{step}</span>
                  </div>
                ))}
                
                {stepIndex < DEMO_STEPS.length && (
                  <div className="flex gap-4">
                    <span className="text-indigo-500">[{new Date().toLocaleTimeString([], { hour12: false, second: '2-digit', minute: '2-digit' })}]</span>
                    <span className="text-indigo-400 animate-pulse">RUNNING</span>
                    <span className="text-white">{DEMO_STEPS[stepIndex]}</span>
                  </div>
                )}

                {isComplete && (
                  <>
                    <div className="flex gap-4 animate-fade-in">
                      <span className="text-indigo-500">[{new Date().toLocaleTimeString([], { hour12: false, second: '2-digit', minute: '2-digit' })}]</span>
                      <span className="text-cyan-500">INFO</span>
                      <span className="text-white font-bold">Detected Language: Auto (Pending)</span>
                    </div>
                    
                    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 space-y-2 animate-fade-in">
                      <div className="text-emerald-400 font-bold">Analysis Complete:</div>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        <div className="text-gray-500">Score:</div><div className="text-white">0.9982</div>
                        <div className="text-gray-500">Type:</div><div className="text-white">NATURAL_HUMAN</div>
                        <div className="text-gray-500">Latency:</div><div className="text-white">184ms</div>
                        <div className="text-gray-500">Language:</div><div className="text-indigo-400 italic">Auto (Pending)</div>
                      </div>
                    </div>
                  </>
                )}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
