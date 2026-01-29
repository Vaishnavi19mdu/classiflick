
import React from 'react';

interface CTAProps {
  onStartTrial: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onStartTrial }) => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="relative glass p-12 md:p-24 rounded-[40px] text-center overflow-hidden">
          {/* Ambient light for CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 blur-[150px] rounded-full -z-10" />
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 max-w-3xl mx-auto tracking-tight">
            Ready to <span className="text-gradient">authenticate</span> the future?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Join 500+ enterprises protecting their users from voice-cloning attacks and identity fraud.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onStartTrial}
              className="w-full sm:w-auto px-10 py-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-xl shadow-2xl shadow-indigo-600/30 active:scale-95"
            >
              Start Your Free Trial
            </button>
            <button className="w-full sm:w-auto px-10 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all text-xl active:scale-95">
              Talk to Sales
            </button>
          </div>
          
          <div className="mt-12 text-gray-500 text-sm font-medium">
            No credit card required • Enterprise-grade security • ISO 27001 Certified
          </div>
        </div>
      </div>
    </section>
  );
};
