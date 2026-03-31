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
    <section className="bg-[#0D0B0B] text-[#E8E0D5] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-16 gap-6">
          <div>
            <p className="text-[#9A8F85] uppercase tracking-widest mb-4">
              We care about you
            </p>
            <h2 className="text-[#E8E0D5] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight uppercase">
              Your security <br />
              <span className="text-transparent outline-text">
                comes first
              </span>
            </h2>
          </div>

          <button className="bg-[#CC1E1E] hover:bg-[#E8382A] text-[#E8E0D5] transition duration-300 px-8 py-4 font-semibold uppercase tracking-wide">
            Buy Tickets
          </button>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityItems.map((item, index) => (
            <div
              key={index}
              className="bg-[#1C1210] p-12 hover:scale-105 transition duration-300 border border-[#A8A9AD]/10 group"
            >
              {/* ICON COLOR CHANGE USING MASK */}
              <div 
                className="w-12 h-12 mb-6 bg-[#CC1E1E] group-hover:bg-[#E8382A] transition-colors duration-300"
                style={{
                  maskImage: `url(${item.icon})`,
                  WebkitMaskImage: `url(${item.icon})`,
                  maskRepeat: 'no-repeat',
                  WebkitMaskRepeat: 'no-repeat',
                  maskSize: 'contain',
                  WebkitMaskSize: 'contain'
                }}
              />

              <h3 className="text-xl font-bold mb-3 uppercase text-[#E8E0D5]">
                {item.title}
              </h3>

              <p className="text-[#9A8F85] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      <style>
        {`
        .outline-text{
          -webkit-text-stroke:1px #E8E0D5;
        }
        `}
      </style>
    </section>
  );
}