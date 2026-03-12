import { X } from "lucide-react";
import { useState } from "react";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative py-24 px-6 overflow-hidden bg-[#0D0B0B]"
    >

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Small Label - Studio Red */}
        <p className="text-[#CC1E1E] mb-2">No.1 Night Club</p>

        {/* Title - Worn White */}
        <h2
          className="text-3xl text-[#E8E0D5] md:text-4xl font-bold tracking-wide mb-6"
        >
          ABOUT THE CLUB
        </h2>

        {/* Description - Ash Grey */}
        <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: '#9A8F85' }}>
          Studio 35, born of the namesake spirit of pure entertainment and electric energy, has endured continuous waves of competition and outlasted the rise and fall of countless nightlife trends.
        </p>

        {/* Contact Link - Studio Red Accent */}
        <a  
          href="/#contact"
          className="text-sm pb-1 transition border-b text-[#E8E0D5] border-[#CC1E1E]"
          onMouseOver={(e) => e.target.style.color = '#CC1E1E'}
          onMouseOut={(e) => e.target.style.color = '#E8E0D5'}
        >
          Contact Us
        </a>

        {/* Video Thumbnail */}
        <div className="mt-14 flex justify-center">
          <div
            className="relative w-full max-w-3xl cursor-pointer"
            onClick={() => setOpen(true)}
          >
            <img
              src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7"
              className="rounded-lg w-full object-cover"
            />

            {/* Play Button - Studio Red */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="w-16 h-16 border-2 rounded-full flex border-[#CC1E1E] items-center justify-center"
              >
                <div
                  className="w-0 h-0 border-l-14 border-y-10 border-y-transparent ml-1"
                  style={{ borderLeftColor: '#CC1E1E' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-[#0D0B0B]/90 flex items-center justify-center z-50">
          <div className="relative w-[90%] md:w-200">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 transition-opacity hover:opacity-70"
              aria-label="Close"
            >
              <X size={24} color="#E8E0D5" strokeWidth={1.5} />
            </button>

            <div className="aspect-video bg-[#2A1E1A] rounded-lg">
              <iframe
                className="w-full h-full rounded-lg"
                src="https://www.youtube.com/embed/ysz5S6PUM-U?autoplay=1"
                title="YouTube video"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}