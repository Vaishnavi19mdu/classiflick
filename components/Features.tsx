
import React from 'react';

const FEATURE_DATA = [
  {
    title: "Deepfake Detection",
    description: "Our neural engine identifies synthetic artifacts and frequency inconsistencies invisible to the human ear.",
    icon: (
      <svg className="w-6 h-6 text-indigo-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
    )
  },
  {
    title: "Auto-Language Mode",
    description: "Automatic language-agnostic voice detection. Manual selection available for granular testing in Tamil, English, Hindi, Malayalam, and Telugu.",
    icon: (
      <svg className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
    )
  },
  {
    title: "Real-time Verification",
    description: "Get instant results in under 200ms, making it suitable for live customer support and high-frequency calls.",
    icon: (
      <svg className="w-6 h-6 text-violet-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    )
  },
  {
    title: "Explainable Scoring",
    description: "Every classification comes with a detailed report explaining the reasoning and confidence levels.",
    icon: (
      <svg className="w-6 h-6 text-pink-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    )
  }
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Advanced Intelligence for <br /> Voice Infrastructure.
          </h2>
          <p className="text-gray-400 text-lg">
            Built by security experts and AI researchers, Classiflick provides the most robust voice verification stack for modern enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURE_DATA.map((feature, idx) => (
            <div key={idx} className="glass glass-hover p-8 rounded-2xl group">
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
