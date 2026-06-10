import React, { useState } from 'react';
import { videos } from '../../data';
import SectionHeading from '../ui/SectionHeading';
import { Video, Play, Lock } from 'lucide-react';

export default function VideoPlaceholder() {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <SectionHeading 
        title="Walkthrough Presentations" 
        subtitle="Planned video walkthroughs detailing project code, data validation pipelines, and dashboard indexes."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((vid) => (
          <div 
            key={vid.id}
            className="flex flex-col justify-between p-6 rounded-xl border border-slate-900 bg-slate-950/40 backdrop-blur-sm hover:border-slate-800 transition-all shadow-lg relative overflow-hidden group"
            onMouseEnter={() => setHoveredVideo(vid.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            {/* Visual Screen placeholder */}
            <div className="aspect-video w-full rounded-lg bg-slate-950 border border-slate-900 flex flex-col justify-center items-center p-4 text-center relative overflow-hidden mb-6 select-none">
              <div className="absolute inset-0 bg-radial from-slate-900/80 to-slate-950 pointer-events-none" />
              
              <div className="inline-flex p-3 rounded-full bg-slate-900 border border-slate-800 text-slate-500 mb-2 relative z-10">
                <Video className="w-6 h-6" />
              </div>
              
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest relative z-10 flex items-center gap-1.5 justify-center">
                <Lock className="w-3.5 h-3.5" /> Video Planned
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-base font-bold text-slate-100">
                {vid.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {vid.description}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-900/60 text-[10px] font-semibold text-slate-500 uppercase tracking-wider font-mono">
              Status: {vid.plannedPlaceholder}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
