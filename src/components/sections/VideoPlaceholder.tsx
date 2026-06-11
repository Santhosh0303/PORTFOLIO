import React from 'react';
import { videos } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import HiddenThought from './HiddenThought';
import { Video, Lock } from 'lucide-react';

export default function VideoPlaceholder() {
  return (
    <section id="walkthroughs" className="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 bg-black">
      <SectionHeading 
        title="Project Walkthroughs" 
        subtitle="Walkthrough presentations detailing project code, data validation pipelines, and dashboard indexes."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 mb-12">
        {videos.map((vid) => (
          <div 
            key={vid.id}
            className="flex flex-col justify-between p-8 rounded-2xl border border-neutral-900 bg-neutral-950/40 backdrop-blur-sm hover:border-gold-muted/30 transition-all duration-300 shadow-lg relative overflow-hidden group gold-glow-hover"
          >
            {/* Visual Screen placeholder */}
            <div className="aspect-video w-full rounded-xl bg-black border border-neutral-900 flex flex-col justify-center items-center p-6 text-center relative overflow-hidden mb-6 select-none">
              <div className="absolute inset-0 bg-radial from-neutral-900/60 to-black pointer-events-none" />
              
              <div className="inline-flex p-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 mb-2 relative z-10">
                <Video className="w-6 h-6 text-gold" />
              </div>
              
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-widest relative z-10 flex items-center gap-1.5 justify-center font-mono">
                <Lock className="w-3.5 h-3.5" /> Video Planned
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-neutral-100 font-sans">
                {vid.title}
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed">
                {vid.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900/80 text-[10px] font-semibold text-neutral-500 uppercase tracking-wider font-mono">
              Status: {vid.plannedPlaceholder}
            </div>
          </div>
        ))}
      </div>

      {/* Honest Planned Notice */}
      <div className="max-w-2xl mx-auto text-center bg-neutral-950 border border-neutral-900 rounded-xl p-6 mb-12 font-mono text-xs text-neutral-400 leading-relaxed gold-glow">
        “Project walkthroughs and reproducibility notes will be added here after final review. Current evidence is available through the case-study sections and GitHub repository.”
      </div>

      {/* Hidden signature thought interaction */}
      <HiddenThought />
    </section>
  );
}
