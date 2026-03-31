import React from 'react';

const LayoutCard = ({ id, title, imageUrl }) => (
  <div className="flex flex-col items-center group cursor-pointer">
    {/* The Glow Container */}
    <div className="relative transition-transform duration-300">
      {/* Glow Effect: Signal Red (#E8382A) at low opacity */}
      <div className="absolute inset-0 bg-[#E8382A] blur-3xl opacity-10 group-hover:opacity-30 transition-opacity"></div>
      
      {/* Border: Steel Silver (#A8A9AD) */}
      <div className="relative border border-[#A8A9AD]/20 rounded-sm overflow-hidden group-hover:shadow-[0_0_50px_-12px_rgba(232,56,42,0.4)] transition-all">
        <img 
          src={imageUrl} 
          alt={title} 
          loading="lazy"
          className="w-200 h-250 object-cover"
        />
      </div>
    </div>

    {/* Text Label */}
    <div className="mt-6 flex items-baseline gap-2">
      {/* ID: Studio Red (#CC1E1E) */}
      <span className="text-[#CC1E1E] font-black text-2xl">{id}.</span>
      {/* Title: Worn White (#E8E0D5) */}
      <span className="text-[#E8E0D5] font-black text-2xl uppercase tracking-tighter">
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
    /* Primary Background: Iron Black (#0D0B0B) */
    <div className="min-h-screen bg-[#0D0B0B] py-20 px-4 md:px-10">
      {/* Header: Studio Red (#CC1E1E) */}
      <h1 className="text-[#E8E0D5]  text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-tight">
        Homepage layouts
      </h1>

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