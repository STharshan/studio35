import React from "react";

export default function AboutHero() {
  return (
    <section className="bg-black text-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">

        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* TEXT */}
          <div className="max-w-xl">
            <p className="text-pink-500 font-semibold tracking-widest mb-4">
              ABOUT US
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              WELCOME TO
              <br />
              <span className="text-transparent stroke-text">CLUB X</span>
            </h1>

            <p className="mt-6 text-gray-300 text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat excepteur
              sint occaecat.
            </p>
          </div>

          {/* SMALL IMAGE RIGHT */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f561d065ab4dfe6c0_welcome-to-club-x-top-right-image-club-x-webflow-template.jpg"
              alt="club party"
              className="w-full max-w-md rounded-md object-cover"
            />
          </div>
        </div>

        {/* BIG IMAGE */}
        <div className="mt-14 lg:-mt-16 lg:w-[65%]">
          <img
            src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f7510628418b46c6b_welcome-to-club-x-bottom-left-image-club-x-webflow-template.jpg"
            alt="club dj"
            className="w-full rounded-md object-cover"
          />
        </div>

      </div>

      {/* Outline text */}
      <style>
        {`
        .stroke-text{
          -webkit-text-stroke:1px white;
        }
        `}
      </style>
    </section>
  );
}