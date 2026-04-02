import { useState } from "react";
import { Eye } from "lucide-react";

const images = [
  "https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65d85314c67ea7d78b51641c_pexels-anna-shvets-6664128%20(2).jpg",
  "https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dd9b6a7a09833d10aba614_pexels-prime-cinematics-2057274%20(1).jpg",
  "https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65dd9bd42e09bb336d5473bf_yukiko-kanada-Ou4CQo6jzvU-unsplash%20(1).jpg",
  "https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65cf49b9542b154edc861ec8_anthony-persegol-rDQLQg1L99A-unsplash%202%20(1)%201%20(1).jpg",
  "https://cdn.prod.website-files.com/65cb44037ed99c2322491d24_Karaoke.jpg",
  "https://cdn.prod.website-files.com/65cb4552cb08542024d65219_Themed%20party.jpg",
  "https://cdn.prod.website-files.com/65c621de5491bc6185eb9524/65d85314c67ea7d78b51641c_pexels-anna-shvets-6664128%20(2).jpg",
];

export default function GallerySection() {
  const [selected, setSelected] = useState(null);

  const gridClasses = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
  ];

  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="py-24 bg-[#0D0B0B] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* TOP SECTION: Matches provided image layout exactly */}
        <div className="text-center mb-20 flex flex-col items-center">
          {/* Tagline: Ash Grey (#9A8F85) */}
          <span 
            className="uppercase tracking-[0.4em] mt-20  font-bold mb-6"
            style={{ color: "#9A8F85" }}
          >
            GALLERY
          </span>
          
          {/* Main Title: Worn White (#E8E0D5) */}
          <h2 
            className="text-4xl md:text-6xl font-bold leading-[1.1] mb-4 tracking-tight"
            style={{ color: "#E8E0D5" }}
          >
             Welcome to the Studio 35 gallery!
          </h2>

          {/* Description/Subheading: Worn White (#E8E0D5) with slight opacity */}
          <p 
            className="text-2xl md:text-5xl font-bold max-w-5xl leading-tight tracking-tight opacity-90"
            style={{ color: "#E8E0D5" }}
          >
            Relive the best nights, biggest events, and <br className="hidden md:block" />
            unforgettable moments, all captured from the heart of the dancefloor.
          </p>

        </div>

        {/* GRID SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {images.map((img, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-sm cursor-pointer border border-[#A8A9AD]/5 ${gridClasses[index] || ""}`}
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`event-${index}`}
                loading="lazy"
                className="w-full h-full object-cover transition duration-1000 group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0 brightness-50 group-hover:brightness-100"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#CC1E1E]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-[#E8382A] p-4 rounded-full shadow-[0_0_30px_rgba(232,56,42,0.4)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <Eye className="text-[#E8E0D5] w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {selected && (
        <div
          className="fixed inset-0 bg-[#0D0B0B]/98 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <button 
            className="absolute top-8 right-8 text-[#E8E0D5]/50 hover:text-[#E8382A] transition-colors"
            style={{ fontSize: '2rem' }}
          >
            &times;
          </button>
          
          <div className="relative p-1 bg-[#1C1210] border border-[#A8A9AD]/20">
             <img
               src={selected}
               alt="preview"
               className="max-h-[85vh] max-w-[90vw] object-contain"
             />
          </div>
        </div>
      )}
    </section>
  );
}