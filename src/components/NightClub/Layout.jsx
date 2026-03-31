import React from 'react';

const LayoutCard = ({ id, title, imageUrl }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    {/* The Glow Container */}
    <div className="relative transition-transform duration-300">
      {/* This div creates the cyan neon glow effect seen in your screenshot */}
      <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
      
      <div className="relative border border-white/10 rounded-sm overflow-hidden hover:shadow-[0_0_50px_-12px_rgba(6,182,212,0.5)]">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-200 h-250 object-cover"
        />
      </div>
    </div>

    {/* Text Label */}
    <div className="mt-6 flex items-baseline gap-2">
      <span className="text-cyan-400 font-black text-2xl">{id}.</span>
      <span className="text-[#ff006e] font-black text-2xl uppercase tracking-tighter">
        {title}
      </span>
    </div>
  </div>
);

const HomepageLayouts = () => {
  const layouts = [
    { id: '01', title: 'Disco Night Club', img: '/prev1-2.jpg' },
    { id: '02', title: 'Night Club Video Background', img: '/prev2-2.jpg' },
    { id: '03', title: 'DJ Personal Website', img: '/prev3-2.jpg' },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a1a] py-20 px-4 md:px-10">
      {/* Header */}
      <h1 className="text-[#ff006e] text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-tight">
        Homepage layouts
      </h1>

      {/* Grid: 2 columns on top, centered 1 column on bottom */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <LayoutCard id={layouts[0].id} title={layouts[0].title} imageUrl={layouts[0].img} />
          <LayoutCard id={layouts[1].id} title={layouts[1].title} imageUrl={layouts[1].img} />
        </div>

        {/* Center the third card */}
        <div className="flex justify-center">
          <div className="w-full md:w-2/3 lg:w-1/2">
            <LayoutCard id={layouts[2].id} title={layouts[2].title} imageUrl={layouts[2].img} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomepageLayouts;