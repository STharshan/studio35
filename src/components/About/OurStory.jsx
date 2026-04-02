import React from "react";

export default function OurStory() {
  return (
    <section className="bg-[#0D0B0B] text-[#E8E0D5] w-full py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-100 md:h-125 lg:h-screen">
          <img
            src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f6e190e6fc0e9f937_the-story-behind-club-x-image-club-x-webflow-template.jpg"
            alt="Club DJ"
            loading="lazy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center">
          <div className="max-w-xl px-6 py-16 lg:px-16">

            <p className="text-[#9A8F85] uppercase tracking-widest mb-4">
              Our Story
            </p>

            <h2 className="text-[#E8E0D5] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              THE STORY
              <br />
              BEHIND
              <br />
              <span className="text-transparent [-webkit-text-stroke:1px_#E8E0D5]">
                STUDIO 35
              </span>
            </h2>

            <p className="mt-6 text-[#9A8F85] leading-relaxed text-lg">
              Studio 35 didn't happen overnight. It was built night by night, crowd by crowd, over years of dedication to creating a space where everyone belongs. What started as a vision for a venue that combined raw energy with real comfort has grown into the city's most loved nightlife destination. From the dancefloor to the pool tables, from the VIP lounges to the bar, every corner of Studio 35 was designed with one purpose — to give you a night worth remembering.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}