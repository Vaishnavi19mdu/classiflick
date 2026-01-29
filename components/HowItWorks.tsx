
import React from 'react';

const STEPS = [
  {
    number: "01",
    title: "Upload Sample",
    description: "Provide a 5-second audio clip in any standard format (WAV, MP3, FLAC)."
  },
  {
    number: "02",
    title: "AI Processing",
    description: "Our neural networks analyze 10,000+ vocal features and spectral patterns."
  },
  {
    number: "03",
    title: "Get Results",
    description: "Receive a detailed classification report and confidence score instantly."
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0d1218]/50 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">How it works</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Verifying voice integrity is as simple as three steps.
          </p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Connector line for desktop */}
          <div className="hidden lg:block absolute top-10 left-32 right-32 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
          
          {STEPS.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-600/20 border-2 border-indigo-600/30 flex items-center justify-center mb-8 relative">
                <span className="text-2xl font-bold text-indigo-400">{step.number}</span>
                {idx < STEPS.length - 1 && (
                  <div className="lg:hidden absolute bottom-[-48px] left-1/2 -translate-x-1/2 w-[1px] h-12 bg-white/10" />
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
              <p className="text-gray-400 max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
