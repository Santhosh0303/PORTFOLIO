import React, { useState } from 'react';

export default function HiddenThought() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="py-8 flex flex-col items-center justify-center border border-neutral-900 bg-neutral-950/40 rounded-xl p-6 relative group transition-all duration-300 hover:border-gold/20 max-w-md mx-auto gold-glow">
      <button
        type="button"
        className="text-[11px] font-mono uppercase tracking-widest text-neutral-600 hover:text-gold focus:text-gold focus:outline-none transition-colors duration-300 cursor-pointer"
        onMouseEnter={() => setIsRevealed(true)}
        onMouseLeave={() => setIsRevealed(false)}
        onFocus={() => setIsRevealed(true)}
        onBlur={() => setIsRevealed(false)}
        aria-label="Reveal signature dev note"
      >
        [ Signature Interaction: Inspect Codebase ]
      </button>

      <div 
        className={`mt-4 text-xs font-mono text-gold-dark transition-all duration-500 text-center
          ${isRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'}`}
        aria-live="polite"
      >
        "You found this. Most people won't. I care about validation, accessibility, and details."
      </div>
    </div>
  );
}
