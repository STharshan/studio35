import React from 'react';

const GallerySection = () => {
    return (
        /* 1. Background: Iron Black (#0D0B0B) */
        <section className="relative w-full min-h-screen bg-[#0D0B0B] overflow-hidden flex flex-col items-center py-20 px-6">

            {/* 1. BACKGROUND IMAGE PATTERN - Depth with Rust Dark (#1C1210) */}
            <img
                src="/gallery.png"
                alt="Background pattern"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none grayscale"
            />

            {/* 2. ANIMATED NEON BALLS - Sound Wave Motif: Signal Red (#E8382A) & Studio Red (#CC1E1E) */}
            <div className="absolute top-[15%] left-[8%] w-2 h-2 rounded-full bg-[#E8382A] blur-[1px] z-10 animate-[float_4s_ease-in-out_infinite]" />
            <div className="absolute top-[25%] right-[12%] w-2 h-2 rounded-full bg-[#CC1E1E] blur-[1px] z-10 animate-[float_6s_ease-in-out_infinite_1s]" />
            <div className="absolute top-[40%] left-[18%] w-2 h-2 rounded-full bg-[#E8E0D5] blur-[1px] z-10 opacity-30 animate-[float_5s_ease-in-out_infinite_0.5s]" />
            <div className="absolute bottom-[45%] left-[6%] w-3 h-3 rounded-full bg-[#E8382A] blur-[1px] z-10 animate-[float_7s_ease-in-out_infinite_2s]" />
            <div className="absolute bottom-[20%] right-[30%] w-2 h-2 rounded-full bg-[#CC1E1E] blur-[1px] z-10 animate-[float_4.5s_ease-in-out_infinite_1.5s]" />
            <div className="absolute bottom-[15%] right-[10%] w-3 h-3 rounded-full bg-[#E8382A] blur-[1px] z-10 animate-[float_8s_ease-in-out_infinite]" />

            {/* 3. LARGE ANIMATED RINGS - Metallic Steel Silver (#A8A9AD) & Studio Red (#CC1E1E) */}
            <div className="absolute -bottom-16 -left-16 w-48 h-48 md:w-64 md:h-64 border-15 md:border-25 border-[#CC1E1E]/20 rounded-full z-10 animate-[pulse_10s_ease-in-out_infinite]" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 md:w-40 md:h-40 border-10 md:border-15 border-[#A8A9AD]/10 rounded-full z-10 animate-[pulse_12s_ease-in-out_infinite_1s]" />

            {/* 4. CONTENT LAYER */}
            <div className="relative z-20 max-w-5xl w-full flex flex-col">
                
                {/* Heading: Worn White (#E8E0D5) */}
                <h1 className="text-[#E8E0D5] mt-25 text-left text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase">
                    Our gallery
                </h1>

                {/* Body Copy: Ash Grey (#9A8F85) */}
                <p className="text-[#9A8F85] text-lg md:text-xl max-w-2xl text-left mb-16 leading-relaxed">
                    Step into a realm where the sound wave motif meets the night and energy fills the air with infectious intensity.
                </p>

                <div className="w-full max-w-4xl flex justify-between items-center mb-6 px-2">
                    <span className="text-[#9A8F85] text-sm md:text-base italic">
                        Where the night comes alive.
                    </span>
                    <a
                        href="#"
                        /* CTA: Worn White (#E8E0D5) + Studio Red (#CC1E1E) Hover */
                        className="text-[#E8E0D5] text-sm md:text-base font-bold border-b border-white/20 hover:border-[#CC1E1E] hover:text-[#CC1E1E] transition-all uppercase tracking-widest"
                    >
                        Discover more
                    </a>
                </div>

                {/* 5. CENTER VIDEO BOX - Border: Steel Silver (#A8A9AD) */}
                <div className="relative w-full aspect-video rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border border-[#A8A9AD]/20 group">
                    <div className="absolute inset-0 bg-[#0D0B0B]/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale-[0.4] group-hover:grayscale-0"
                    >
                        <source src="https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65ca29bdc1cfe27d0d5a197e_Video Millenium-transcode.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

            <style jsx global>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) translateX(0px); }
                    33% { transform: translateY(-15px) translateX(10px); }
                    66% { transform: translateY(10px) translateX(-10px); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.2; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.05); }
                }
            `}</style>
        </section>
    );
};

export default GallerySection;