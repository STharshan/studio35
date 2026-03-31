import React from 'react';
import { Facebook, Instagram, Music, Youtube, Cloud } from 'lucide-react';

const DjSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-24 min-h-screen">
      <div className="max-auto max-w-7xl">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-24">
            {/* Header Text */}
            <div className="pt-12">
              <span className="text-[#E91E63] font-bold tracking-widest text-xs uppercase">
                OUR DJ'S
              </span>
              <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.9] mt-4">
                MEET OUR <br /> AMAZING <span className="inline-block" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>DJ'S</span>
              </h2>
            </div>

            {/* DJ 1: Emma Lee (Positioned lower on the left) */}
            <DjCard 
              name="EMMA LEE" 
              country="BELGIUM" 
              image="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365482595990d4206d9ddfb_emma-lee-dj-image-club-x-webflow-template.jpg"
              reverse={false}
            />
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col space-y-24 md:pt-24">
            {/* DJ 2: Scotts (Top Right) */}
            <DjCard 
              name="SCOTTS" 
              country="SPAIN" 
              image="https://cdn.prod.website-files.com/636278d56e610029b4539c93/63654825efb845288d8e0c26_scotts-dj-image-club-x-webflow-template.jpg"
              reverse={false}
            />

            {/* DJ 3: Pierre Curie (Bottom Right) */}
            <DjCard 
              name="PIERRE CURIE" 
              country="FRANCE" 
              image="https://cdn.prod.website-files.com/636278d56e610029b4539c93/63654825a449ade033185a87_pierre-curie-dj-image-club-x-webflow-template.jpg"
              reverse={false}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

const DjCard = ({ name, country, image }) => (
  <div className="relative group flex items-end">
    {/* Image wrapper with dark overlay */}
    <div className="relative w-[70%] aspect-3/4 overflow-hidden z-0">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover  transition-all duration-500"
      />
      <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply"></div>
    </div>

    {/* Info Box - Shifted left to overlap the image slightly */}
    <div className="bg-[#111111] p-6 md:p-8 ml-[-15%] mb-4 relative z-10 w-[60%] shadow-2xl">
      <h3 className="text-xl md:text-2xl font-bold mb-1 tracking-tight">{name}</h3>
      <p className="text-[#E91E63] text-xs font-bold tracking-widest mb-6">{country}</p>
      
      <div className="flex gap-3 md:gap-4 opacity-80">
        <Facebook size={16} className="cursor-pointer hover:text-[#E91E63]" />
        <Instagram size={16} className="cursor-pointer hover:text-[#E91E63]" />
        <Music size={16} className="cursor-pointer hover:text-[#E91E63]" />
        <Youtube size={16} className="cursor-pointer hover:text-[#E91E63]" />
        <Cloud size={16} className="cursor-pointer hover:text-[#E91E63]" />
      </div>
    </div>
  </div>
);

export default DjSection;