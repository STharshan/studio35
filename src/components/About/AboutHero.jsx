import React from "react";

export default function AboutHero() {
  return (
    /* Background: Iron Black (#0D0B0B) */
    <section className="bg-[#0D0B0B] text-[#E8E0D5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start pt-35">

          {/* TEXT */}
          <div className="max-w-7xl mx-auto">
            {/* Label: Ash Grey (#9A8F85) */}
            <p className="text-[#9A8F85] font-bold text-lg tracking-widest mb-4">
              ABOUT US
            </p>

            {/* Heading: Worn White (#E8E0D5) */}
            <h1 className="text-[#E8E0D5] text-4xl md:text-5xl lg:text-7xl font-extrabold">
              WELCOME TO
              <br />
              <span className="text-transparent stroke-text uppercase">Club X</span>
            </h1>

            {/* Body Copy: Ash Grey (#9A8F85) */}
            <p className="mt-6 text-[#9A8F85] text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat excepteur
              sint occaecat.
            </p>
          </div>

          {/* SMALL IMAGE RIGHT */}
          <div className="flex justify-center lg:justify-end">
            {/* Border: Steel Silver (#A8A9AD) */}
            <img
              src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f561d065ab4dfe6c0_welcome-to-club-x-top-right-image-club-x-webflow-template.jpg"
              alt="club party"
              loading="lazy"
              className="w-full max-w-md rounded-md object-cover border border-[#A8A9AD]/20"
            />
          </div>
        </div>

        {/* BIG IMAGE */}
        <div className="mt-14 lg:-mt-16 lg:w-[65%]">
          {/* Border: Steel Silver (#A8A9AD) */}
          <img
            src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f7510628418b46c6b_welcome-to-club-x-bottom-left-image-club-x-webflow-template.jpg"
            alt="club dj"
            loading="lazy"
            className="w-full rounded-md object-cover border border-[#A8A9AD]/20"
          />
        </div>

      </div>

      <style>
        {`
        .stroke-text{
          -webkit-text-stroke:1px #E8E0D5;
        }
        `}
      </style>
    </section>
  );
}