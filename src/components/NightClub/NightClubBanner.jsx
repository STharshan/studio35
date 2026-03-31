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
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="bg-[#0D0B0B] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-default"
            >
              {/* Icon Container: Studio Red (#CC1E1E) with Signal Red (#E8382A) glow */}
              <div className="text-[#CC1E1E] mb-6 transition-all duration-300 group-hover:scale-110 group-hover:text-[#E8382A] drop-shadow-[0_0_10px_rgba(232,56,42,0.3)]">
                {item.icon}
              </div>

              {/* Text: Worn White (#E8E0D5) */}
              <div className="flex flex-col space-y-0">
                <span className="text-[#E8E0D5] text-lg md:text-xl font-bold uppercase tracking-tight leading-none">
                  {item.line1}
                </span>
                <span className="text-[#E8E0D5] text-lg mt-2 md:text-xl font-bold uppercase tracking-tight leading-none">
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