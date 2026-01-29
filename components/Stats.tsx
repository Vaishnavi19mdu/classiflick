
import React from 'react';

export const Stats: React.FC = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gradient">
              The Gold Standard in <br /> Vocal Security.
            </h2>
            <p className="text-gray-400 text-lg mb-12">
              Our platform powers security for some of the world's most demanding financial and communication infrastructures.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-white mb-2">99.9%</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Accuracy rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Languages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">&lt;200ms</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Latencies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">10B+</div>
                <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Verified calls</div>
              </div>
            </div>
          </div>

          <div className="glass p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-3xl rounded-full -z-10" />
            
            <div className="mb-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                ))}
              </div>
              <p className="text-xl italic text-gray-300 mb-8 leading-relaxed">
                "Classiflick has completely transformed our customer authentication workflow. Deepfake fraud attempts dropped to zero within 48 hours of deployment."
              </p>
              <div className="flex items-center gap-4">
                <img src="https://picsum.photos/seed/person/64/64" alt="CEO Avatar" className="w-12 h-12 rounded-full ring-2 ring-indigo-500/20" />
                <div>
                  <div className="font-bold text-white">Sarah Chen</div>
                  <div className="text-sm text-gray-500">CTO, SecureComm Global</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8 grayscale opacity-50">
               <span className="font-bold text-xl tracking-tighter">FINTECH+</span>
               <span className="font-bold text-xl tracking-tighter">VOICEGUARD</span>
               <span className="font-bold text-xl tracking-tighter">NEXUS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
