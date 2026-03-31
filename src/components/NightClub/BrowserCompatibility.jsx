import React from 'react';

const BrowserCompatibility = () => {
  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="relative w-full py-14 bg-[#0D0B0B] overflow-hidden">

      {/* 1. THE BACKGROUND IMAGE LAYER (Layered with Rust Dark depth #1C1210) */}
      <div
        className="absolute inset-0 z-0 opacity-80 rotate-180"
        style={{
          backgroundImage: "url('https://acidum.like-themes.com/wp-content/uploads/2017/09/about_animation.png')",
        }}
      />

      {/* 2. CONTENT LAYER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col items-center text-center">

        {/* Heading: Worn White (#E8E0D5) for key text hierarchy */}
        <h2 className="text-[#E8E0D5] text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4 drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Browsers Compatibility
        </h2>

        {/* Subheading/Body Copy: Ash Grey (#9A8F85) */}
        <p className="text-[#9A8F85] text-lg md:text-xl font-light mb-16 tracking-wide">
          The theme looks great on all modern <br className="hidden md:block" /> versions of browsers
        </p>

        {/* Image Container with Signal Red (#E8382A) hover state and highlight motif */}
        <div
          className="w-lg h-28 transition-all duration-500 hover:scale-105 group"
        >
          <img
            src="/1.png"
            alt="Browser Icons"
            loading="lazy"
            className="w-full h-full object-contain filter group-hover:brightness-125 transition-all"
            style={{ 
              filter: 'drop-shadow(0 12px 25px rgba(232, 56, 42, 0.25)) drop-shadow(0 4px 5px rgba(168, 169, 173, 0.15))' 
            }}
          />
        </div>
        
        {/* Divider: Steel Silver (#A8A9AD) metallic touch */}
        <div className="mt-20 w-32 h-px bg-[#A8A9AD]/20"></div>
      </div>
    </section>
  );
};

export default BrowserCompatibility;