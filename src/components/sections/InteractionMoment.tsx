import React, { useState } from 'react';

export default function InteractionMoment() {
  const [activeCell, setActiveCell] = useState<number | null>(null);

  // Generate a grid of cells for responsive hover glow
  const gridCells = Array.from({ length: 48 }, (_, i) => i);

  return (
    <section className="py-20 sm:py-28 bg-black grid-bg relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-8">
        <div className="space-y-2 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-gold font-semibold">Touch the Interface</p>
          <h3 className="text-2xl sm:text-3xl font-light text-neutral-100">Subtle Experimental Interface</h3>
          <p className="text-sm text-neutral-500 max-w-md mx-auto">
            Hover over the grid cells below to interact with the responsive gold light field. Clean layout, zero weight, pure interaction.
          </p>
        </div>

        {/* Interactive light grid */}
        <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 p-4 bg-neutral-950/80 border border-neutral-900 rounded-2xl gold-glow select-none">
          {gridCells.map((index) => (
            <div
              key={index}
              className={`w-10 h-10 rounded border transition-all duration-300 cursor-pointer flex items-center justify-center text-[9px] font-mono select-none
                ${activeCell === index 
                  ? 'bg-gold/15 border-gold text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] scale-105' 
                  : 'bg-neutral-900/40 border-neutral-900/80 text-neutral-700 hover:border-gold/30 hover:bg-gold/5'
                }`}
              onMouseEnter={() => setActiveCell(index)}
              onMouseLeave={() => setActiveCell(null)}
              onClick={() => setActiveCell(activeCell === index ? null : index)}
            >
              {index.toString().padStart(2, '0')}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
