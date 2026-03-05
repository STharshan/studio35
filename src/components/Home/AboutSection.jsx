import { useState } from "react";

export default function AboutSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-black text-white py-24 px-6 overflow-hidden">
      
      {/* Background Script Text */}
      <h1 className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-serif text-white/10 whitespace-nowrap pointer-events-none">
        Club Passion
      </h1>

      <div className="max-w-4xl mx-auto text-center relative z-10">

        {/* Small Label */}
        <p className="text-red-400 italic mb-2">No.1 Night Club</p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6">
          ABOUT THE CLUB
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8">
          Night Club 128, born of the namesake catch phrase, “1 of a kind,” has endured
          continuous waves of competition and outlasted the rise and fall of countless
          nightlife trends.
        </p>

        {/* Contact Link */}
        <button className="text-white text-sm border-b border-red-500 pb-1 hover:text-red-400 transition">
          Contact Us
        </button>

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

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-red-400 rounded-full flex items-center justify-center">
                <div className="w-0 h-0 border-l-14 border-l-red-400 border-y-10 border-y-transparent ml-1"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          
          <div className="relative w-[90%] md:w-200">

            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <div className="aspect-video">
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