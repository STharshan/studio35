import React from "react";

export default function OurStory() {
  return (
    <section className="bg-black text-white w-full py-20 overflow-hidden">
      <div className="grid lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-100 md:h-125 lg:h-screen">
          <img
            src="https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365281f6e190e6fc0e9f937_the-story-behind-club-x-image-club-x-webflow-template.jpg"
            alt="Club DJ"
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex items-center">
          <div className="max-w-xl px-6 py-16 lg:px-16">

            <p className="text-pink-500 uppercase tracking-widest mb-4">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              THE STORY
              <br />
              BEHIND
              <br />
              <span className="text-transparent outline-text">
                CLUB X
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-relaxed text-lg">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat excepteur sint
              occaecat cupidatat non lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor dolor si incididunt ut
              labore et dolore magna aliqua.
            </p>

          </div>
        </div>
      </div>

      {/* Outline text style */}
      <style>
        {`
        .outline-text{
          -webkit-text-stroke:1px white;
        }
        `}
      </style>
    </section>
  );
}