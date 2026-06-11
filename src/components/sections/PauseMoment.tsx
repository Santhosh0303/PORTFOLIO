import React from 'react';

export default function PauseMoment() {
  return (
    <section className="py-24 sm:py-32 bg-black border-y border-neutral-900/40 relative z-10 flex items-center justify-center">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-4">
        <div className="w-12 h-px bg-gold/40 mx-auto"></div>
        <p className="text-xl sm:text-2xl font-light text-neutral-400 italic tracking-wide">
          "Still figuring things out — but always building."
        </p>
        <p className="text-xs uppercase tracking-widest text-neutral-600 font-mono">
          Not everything worked. That's part of it.
        </p>
        <div className="w-12 h-px bg-gold/40 mx-auto"></div>
      </div>
    </section>
  );
}
