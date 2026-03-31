import React from "react";
import { Facebook, Instagram, Music2, Youtube, Cloud } from "lucide-react";

const Socials = () => (
  <div className="flex items-center gap-4 mt-4">
    <Facebook size={18} className="text-[#E8E0D5] cursor-pointer hover:text-[#CC1E1E] transition-colors" />
    <Instagram size={18} className="text-[#E8E0D5] cursor-pointer hover:text-[#CC1E1E] transition-colors" />
    <Music2 size={18} className="text-[#E8E0D5] cursor-pointer hover:text-[#CC1E1E] transition-colors" />
    <Youtube size={18} className="text-[#E8E0D5] cursor-pointer hover:text-[#CC1E1E] transition-colors" />
    <Cloud size={18} className="text-[#E8E0D5] cursor-pointer hover:text-[#CC1E1E] transition-colors" />
  </div>
);

const DjCard = ({ name, country, image }) => {
  return (
    <div className="relative w-full max-w-175 mx-auto">

      {/* background card: Rust Dark (#1C1210) */}
      <div className="bg-[#1C1210] rounded-md mt-35 h-60 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row items-center gap-6">

        {/* image */}
        <div className="w-full -mt-55 sm:w-[55%] overflow-hidden rounded-md border border-[#A8A9AD]/10">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

        {/* content */}
        <div className="flex-1 text-center sm:text-left">

          {/* Heading: Worn White (#E8E0D5) */}
          <h3 className="text-[#E8E0D5] uppercase font-extrabold leading-none tracking-tight text-[28px] sm:text-[34px] lg:text-[40px]">
            {name}
          </h3>

          {/* Highlight: Studio Red (#CC1E1E) */}
          <p className="mt-3 text-[#CC1E1E] uppercase font-bold tracking-[3px] text-[13px] sm:text-[15px]">
            {country}
          </p>

          <Socials />
        </div>

      </div>

    </div>
  );
};

const DjSection = () => {
  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="bg-[#0D0B0B] text-white px-6 sm:px-10 lg:px-16 py-20 lg:py-28">

      <div className="max-w-350 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-16">

          <div>
            {/* Label: Ash Grey (#9A8F85) */}
            <p className="text-[#9A8F85] text-[12px] font-bold tracking-[6px] uppercase mb-6">
              OUR DJ’S
            </p>

            <h2 className="uppercase font-black leading-[0.9] tracking-tight text-[50px] sm:text-[70px] lg:text-[90px]">
              <span className="block text-[#E8E0D5]">MEET OUR</span>
              <span className="block text-[#E8E0D5]">AMAZING</span>
              <span className="block text-transparent [WebkitTextStroke:1.5px_#CC1E1E]">
                DJ’S
              </span>
            </h2>
          </div>

          <DjCard
            name="EMMA LEE"
            country="BELGIUM"
            image="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365482595990d4206d9ddfb_emma-lee-dj-image-club-x-webflow-template.jpg"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-16 lg:pt-24">

          <DjCard
            name="SCOTTS"
            country="SPAIN"
            image="https://cdn.prod.website-files.com/636278d56e610029b4539c93/63654825efb845288d8e0c26_scotts-dj-image-club-x-webflow-template.jpg"
          />

          <DjCard
            name="PIERRE CURIE"
            country="FRANCE"
            image="https://cdn.prod.website-files.com/636278d56e610029b4539c93/63654825a449ade033185a87_pierre-curie-dj-image-club-x-webflow-template.jpg"
          />

        </div>

      </div>

    </section>
  );
};

export default DjSection;