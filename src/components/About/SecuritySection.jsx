import React from "react";

const securityItems = [
  {
    title: "Security Team",
    desc: "Ut enim ad minim veniam quis mitan nostrud exercitation ullamco",
    icon: "https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365425cad99267c3985c07e_security-team-icon-club-x-webflow-template.svg",
  },
  {
    title: "Surveillance",
    desc: "Ut enim ad minim veniam quis mitan nostrud exercitation ullamco",
    icon: "https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365425dbf35d064a47eaed4_surveillance-icon-club-x-webflow-template.svg",
  },
  {
    title: "First Aid",
    desc: "Enim eu turpis egestas pretium aenean pharetra magna fermentum",
    icon: "https://cdn.prod.website-files.com/636278d56e610029b4539c93/63654246deeced1e737f2360_first-aid-icon-club-x-webflow-template.svg",
  },
  {
    title: "Metal Detectors",
    desc: "Vitae suscipit tellus mauris a diam maecenas sed enim ut egestas",
    icon: "https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365425e99fdc5a449f2e542_metal-detectors-icon-club-x-webflow-template.svg",
  },
  {
    title: "Sanitizer Area",
    desc: "Sed augue lacus viverra vitae congue eu consequat ac felis ullamcorper",
    icon: "https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365425d9ba03e2ae8d2e5c9_sanitizer-area-icon-club-x-webflow-template.svg",
  },
  {
    title: "Smoke Detector",
    desc: "Vestibulum morbi blandit cursus risus at morbi tristique senectus",
    icon: "https://cdn.prod.website-files.com/636278d56e610029b4539c93/6365426a06208b8b82f65911_smoke-detector-icon-club-x-webflow-template.svg",
  },
];

export default function SecuritySection() {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-6">

          <div>
            <p className="text-pink-500 uppercase tracking-widest mb-4">
              We care about you
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Your security <br />
              <span className="text-transparent outline-text">
                comes first
              </span>
            </h2>
          </div>

          <button className="bg-pink-600 hover:bg-pink-500 transition px-8 py-4 font-semibold uppercase tracking-wide">
            Buy Tickets
          </button>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {securityItems.map((item, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-[#0f0f12] to-[#15151b] p-12 hover:scale-105 transition duration-300"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 mb-6"
              />

              <h3 className="text-xl font-bold mb-3 uppercase">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

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