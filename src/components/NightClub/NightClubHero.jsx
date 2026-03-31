import React from 'react';

const Hero = () => {
  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <div className="relative min-h-screen w-full overflow-hidden text-center text-[#E8E0D5] flex flex-col items-center bg-[#0D0B0B]">
      
      {/* 1. Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline 
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover brightness-[0.4] contrast-[1.2]"
      >
        <source src="/ticket.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-12 md:py-16 flex flex-col items-center">
        
        {/* 2. Logo and Header */}
        <header className="flex flex-col items-center mb-16 md:mb-20 mt-25">
          <img 
            src="/logo.png"
            alt="Logo" 
            loading="lazy"
            /* Logo Glow using Signal Red (#E8382A) */
            className="w-35 h-20 mb-3 block drop-shadow-[0_0_15px_#E8382A]" 
          />
          {/* Heading: Worn White (#E8E0D5) */}
          <h1 className="text-[#E8E0D5] text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none mb-1">
            Acidum
          </h1>
          {/* Label: Ash Grey (#9A8F85) */}
          <p className="text-lg md:text-xl font-medium uppercase tracking-wider text-[#9A8F85]">
            Dance Night Club
          </p>
        </header>

        {/* 3. Main Title */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#E8E0D5] text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-tight mb-3">
            DJ & Night Club
          </h2>
          {/* Highlight: Studio Red (#CC1E1E) */}
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#CC1E1E] leading-tight">
            WordPress Theme
          </h3>
        </div>

        {/* 4. Description Paragraph: Ash Grey (#9A8F85) */}
        <p className="max-w-3xl text-lg md:text-xl font-light text-[#9A8F85] mb-16 md:mb-20 leading-relaxed px-4">
          ACIDUM &mdash; is a modern WordPress theme created specially for night clubs, disco, party, music online stores, DJ, MC, club dancers and other.
        </p>

        {/* 5. Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-24 md:mb-28">
          {/* Primary CTA: Studio Red (#CC1E1E) | Hover: Signal Red (#E8382A) */}
          <button className="px-10 py-4 bg-[#CC1E1E] text-[#E8E0D5] font-bold text-lg uppercase tracking-wider rounded-sm hover:bg-[#E8382A] hover:shadow-[0_0_20px_#CC1E1E] transition-all duration-300">
            View demos
          </button>
          
          {/* Secondary CTA: Rust Dark (#1C1210) | Border: Steel Silver (#A8A9AD) */}
          <button className="px-10 py-4 bg-[#1C1210] text-[#E8E0D5] border border-[#A8A9AD] font-bold text-lg uppercase tracking-wider rounded-sm hover:bg-[#2A1E1A] transition-all duration-300">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;