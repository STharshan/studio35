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
    <section className="py-20 bg-[#0D0B0B] text-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          {/* Label: Ash Grey (#9A8F85) - Keeping layout, changing color */}
          <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#9A8F85] mb-4">
            GALLERY
          </p>
          {/* Headings: Worn White (#E8E0D5) */}
          <h2 className="text-[#E8E0D5] text-3xl md:text-5xl font-black max-w-2xl mx-auto leading-tight uppercase tracking-tighter">
            Welcome to our best gallery! <br />
            {/* Body Copy: Ash Grey (#9A8F85) */}
            <span className="font-light opacity-90 text-[#9A8F85] normal-case tracking-normal text-lg md:text-xl">
              Here we have collected the best photo reports from the events
            </span>
          </h2>
          {/* Divider: Steel Silver (#A8A9AD) */}
          <div className="w-24 h-1 bg-[#A8A9AD]/20 mx-auto mt-6"></div>
        </div>

        {/* Custom Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, index) => (
            <div
              key={index}
              /* Border: Steel Silver (#A8A9AD) subtle touch */
              className={`relative group overflow-hidden rounded-sm cursor-pointer border border-[#A8A9AD]/10 ${gridClasses[index] || ""}`}
              onClick={() => setSelected(img)}
            >
              <img
                src={img}
                alt={`event-${index}`}
                loading="lazy"
                /* Transitions and grayscale mix-blend for a premium feel */
                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0 brightness-75 group-hover:brightness-100"
              />
              
              {/* Hover Overlay: Sound Wave Motif / Signal Red (#E8382A) highlight */}
              <div className="absolute inset-0 bg-[#CC1E1E]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-[#E8382A] p-4 rounded-full shadow-[0_0_20px_rgba(232,56,42,0.6)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="text-[#E8E0D5] w-6 h-6" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox - Background: Rust Dark (#1C1210) layered depth */}
      {selected && (
        <div
          className="fixed inset-0 bg-[#1C1210]/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={() => setSelected(null)}
        >
          {/* Close Button: Signal Red (#E8382A) */}
          <button className="absolute top-10 right-10 text-[#E8382A] text-4xl font-light hover:scale-110 transition-transform">&times;</button>
          
          <div className="relative p-1 bg-[#A8A9AD]/20 rounded-sm">
             <img
               src={selected}
               alt="preview"
               loading="lazy"
               className="max-h-[85vh] max-w-[90vw] object-contain shadow-[0_0_50px_rgba(0,0,0,0.8)]"
             />
             {/* Subtle metallic frame effect */}
             <div className="absolute inset-0 border border-[#A8A9AD]/30 pointer-events-none"></div>
          </div>
        </div>
      )}
    </section>
  );
}