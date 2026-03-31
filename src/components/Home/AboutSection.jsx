import { X } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="relative py-14 px-6 overflow-hidden bg-[#0D0B0B]">

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Small Label - Studio Red (#CC1E1E) */}
        <p className="text-[#CC1E1E] mb-2 uppercase tracking-[0.2em] font-bold text-xs">No.1 Night Club</p>

        {/* Title - Worn White (#E8E0D5) */}
        <h2 className="text-3xl text-[#E8E0D5] md:text-5xl font-black tracking-tighter mb-6 uppercase">
          ABOUT THE CLUB
        </h2>

        {/* Description - Ash Grey (#9A8F85) */}
        <p className="text-sm md:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-light" style={{ color: '#9A8F85' }}>
          Studio 35, born of the namesake spirit of pure entertainment and electric energy, has endured continuous waves of competition and outlasted the rise and fall of countless nightlife trends. Whether you're here to dance, unwind over a game of pool, or simply enjoy a great night out without breaking the bank, Studio 35 is where the good times never stop.
        </p>

        {/* Contact Link - Studio Red Accent (#CC1E1E) */}
        <a  
          href="/#contact"
          className="text-sm pb-1 transition border-b text-[#E8E0D5] border-[#CC1E1E] uppercase tracking-widest font-bold"
          onMouseOver={(e) => e.target.style.color = '#CC1E1E'}
          onMouseOut={(e) => e.target.style.color = '#E8E0D5'}
        >
          Contact Us
        </a>

        {/* Video Container - Auto Playing Background Video */}
        <div className="mt-14 flex justify-center">
          <div
            className="relative w-full max-w-3xl cursor-pointer rounded-sm overflow-hidden border border-[#A8A9AD]/10 group"
            onClick={() => setOpen(true)}
          >
            {/* Auto-playing Preview Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover transition-transform duration-1000 group-hover:scale-105 grayscale-[0.4] group-hover:grayscale-0"
            >
              <source src="/about.mp4" type="video/mp4" />
            </video>

            {/* Subtle Sound Wave Motif Overlay (Signal Red #E8382A) */}
            <div className="absolute inset-0 bg-linear-to-t from-[#0D0B0B] via-transparent to-transparent opacity-60" />
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#E8382A]/20 transition-colors duration-500" />
            
          </div>
        </div>
      </div>

      {/* Popup Modal - Background: Rust Dark (#1C1210) layered depth */}
      {open && (
        <div className="fixed inset-0 bg-[#0D0B0B]/95 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-5xl">
            {/* Close Button: Worn White (#E8E0D5) */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-12 right-0 transition-all hover:rotate-90 hover:text-[#CC1E1E]"
              aria-label="Close"
            >
              <X size={32} color="#E8E0D5" strokeWidth={1.5} />
            </button>

            {/* Modal Video: Layered Depth Rust Dark (#1C1210) */}
            <div className="aspect-video bg-[#1C1210] rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] border border-[#A8A9AD]/20">
              <iframe
                className="w-full h-full rounded-sm"
                src="/about.mp4?autoplay=1"
                title="About Studio 35"
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}