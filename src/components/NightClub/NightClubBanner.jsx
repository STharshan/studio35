import React from 'react';
import { Star, Layers, Settings, MonitorSmartphone, ShoppingBag, MessageSquareMore } from 'lucide-react';

const FeatureSection = () => {
  const features = [
    { 
      icon: <Star size={65} strokeWidth={1.5} />, 
      line1: "Amazing", 
      line2: "design" 
    },
    { 
      icon: <Layers size={65} strokeWidth={1.5} />, 
      line1: "3+ homepage", 
      line2: "layouts" 
    },
    { 
      icon: <Settings size={65} strokeWidth={1.5} />, 
      line1: "Easy", 
      line2: "customizable" 
    },
    { 
      icon: <MonitorSmartphone size={65} strokeWidth={1.5} />, 
      line1: "Mobile", 
      line2: "friendly" 
    },
    { 
      icon: <ShoppingBag size={65} strokeWidth={1.5} />, 
      line1: "Commerce", 
      line2: "ready" 
    },
    { 
      icon: <MessageSquareMore size={65} strokeWidth={1.5} />, 
      line1: "Great", 
      line2: "support" 
    },
  ];

  return (
    <section className="bg-[#02020a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Grid: 1 col on mobile, 3 on tablet, 6 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Container with Cyan Neon Color */}
              <div className="text-[#00f2ff] mb-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(0,242,265,0.4)]">
                {item.icon}
              </div>

              {/* Stacked Pink Text */}
              <div className="flex flex-col space-y-0">
                <span className="text-[#e91e63] text-lg md:text-xl font-bold uppercase tracking-tight leading-none">
                  {item.line1}
                </span>
                <span className="text-[#e91e63] text-lg mt-2 md:text-xl font-bold uppercase tracking-tight leading-none">
                  {item.line2}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;