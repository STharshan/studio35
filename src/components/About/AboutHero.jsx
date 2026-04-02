import React from "react";

export default function AboutHero() {
  return (
    <section className="bg-[#0D0B0B] text-[#E8E0D5] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start pt-32">

          {/* TEXT */}
          <div className="max-w-7xl mx-auto">
            <p className="text-[#9A8F85] font-bold text-lg tracking-widest mb-4">
              ABOUT US
            </p>

            <h1 className="text-[#E8E0D5] text-4xl md:text-5xl lg:text-7xl font-extrabold">
              WELCOME TO
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#E8E0D5] uppercase">
                 STUDIO 35
              </span>
            </h1>

            <p className="mt-6 text-[#9A8F85] text-lg">
              Born from a passion for unforgettable nights, Studio 35 has been the heartbeat of the city's nightlife scene — where great music, great drinks, and even greater people come together.
            </p>
          </div>

          {/* SMALL IMAGE RIGHT */}
          <div className="flex justify-center lg:justify-end">
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
          <img
            src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f7510628418b46c6b_welcome-to-club-x-bottom-left-image-club-x-webflow-template.jpg"
            alt="club dj"
            loading="lazy"
            className="w-full rounded-md object-cover border border-[#A8A9AD]/20"
          />
        </div>

      </div>
    </section>
  );
}