import React, { useEffect, useRef, useState } from "react";
import { Music, Crown, Users, GlassWater, ArrowRight } from "lucide-react";

/* ─── Service Data ─────────────────────────────────────────── */
const services = [
  {
    id: 1,
    rotation: "rotate-0",
    title: "Live Music Experience",
    desc: "Get lost in the rhythm as our DJs and performers deliver high-energy sets that keep the crowd moving all night long. Each beat, light, and visual is crafted to create an electrifying and unforgettable atmosphere.",
    IconComponent: Music, // Passing the component itself
  },
  {
    id: 2,
    rotation: "rotate-[1.6deg]",
    title: "VIP Lounge Access",
    desc: "Relax in style with exclusive seating, personalized service, and premium amenities. Every detail is thoughtfully designed to make your night luxurious, comfortable, and absolutely unforgettable from start to finish.",
    IconComponent: Crown,
  },
  {
    id: 3,
    rotation: "rotate-[3deg]",
    title: "Private Event Hosting",
    desc: "Celebrate birthdays, corporate gatherings, or special occasions in spaces perfectly tailored just for you. Our expert team handles every single detail to ensure your private event is flawless and unforgettable.",
    IconComponent: Users,
  },
  {
    id: 4,
    rotation: "rotate-[5deg]",
    title: "Private DJ Hire",
    desc: "Want the night to be truly yours ? Book one of our professional DJs exclusively for your event or group.From the set list to the vibe, your DJ takes direction from you, making every moment feel personal, electric, and uniquely crafted for your crowd.",
    IconComponent: Users,
  },
  {
    id: 5,
    rotation: "rotate-[7deg]",
    title: "Signature Cocktails & Bar",
    desc: "Savor expertly crafted cocktails and enjoy some of the best drink prices in the city, because a great night shouldn't cost a fortune. Each drink is thoughtfully designed to complement the vibrant Studio 35 energy and keep the good times flowing all night long.",
    IconComponent: GlassWater,
  },
  {
    id: 6,
    rotation: "rotate-[9deg]",
    title: "Pool Tables",
    desc: "Take a break from the dancefloor and challenge your crew to a game. Our pool tables are available to book, giving you your own corner of the club to relax, compete, and make memories between rounds.",
    IconComponent: GlassWater,
  },
];

/* ─── Icon Wrapper ────────────────────────────────────────── */
function IconWrapper({ Icon }) {
  return (
    <div className="w-13 h-13 bg-[#0D0B0B] rounded-xl flex items-center justify-center">
      <Icon
        size={28}
        className="text-[#E8382A]"
        strokeWidth={2}
      />
    </div>
  );
}

/* ─── Service Card ────────────────────────────────────────── */
function ServiceCard({ service, translateY, zIndex, opacity, isMobile }) {
  return (
    <div
      className={`absolute w-full ${isMobile ? "max-w-full" : "max-w-105"} transition-all duration-75 ease-linear will-change-transform`}
      style={{
        zIndex: zIndex,
        opacity: opacity,
        transform: `translateY(${translateY}%)`,
      }}
    >
      <div className={`${service.rotation} bg-linear-to-r from-[#CC1E1E] to-[#E8382A] rounded-xl p-[1.5px] shadow-[0_4px_48px_rgba(204,30,30,0.15)]`}>
        <div className="bg-[#2A1E1A] rounded-[10.5px] flex flex-col gap-3.5 md:gap-4.5 p-[22px_20px_26px] md:p-[28px_28px_32px]">
          <IconWrapper Icon={service.IconComponent} />
          <div className="flex flex-col gap-2">
            <h3 className="text-[17px] md:text-[20px] font-bold text-[#E8E0D5] leading-[1.3] m-0">
              {service.title}
            </h3>
            <p className="text-[13px] md:text-[14px] text-[#9A8F85] leading-[1.75] m-0">
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Book Now Button ─────────────────────────────────────── */
function BookNowBtn() {
  return (
    <a
      href="#contact"
      className="inline-flex items-center gap-2.5 bg-linear-to-r from-[#CC1E1E] to-[#E8382A] text-[#E8E0D5] rounded-full px-7 py-3.5 text-[15px] font-semibold no-underline transition-all duration-200 hover:scale-[1.04] hover:shadow-[0_8px_32px_rgba(204,30,30,0.4)]"
    >
      Book Now
      <ArrowRight size={18} />
    </a>
  );
}

/* ─── Main Section ────────────────────────────────────────── */
export default function ServicesSection() {
  const outerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const scrollable = el.offsetHeight - window.innerHeight;
      const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const TOTAL_EXITS = services.length - 1;
  const phaseSize = 1 / TOTAL_EXITS;

  const getCardState = (i) => {
    if (i === services.length - 1) {
      return { translateY: 0, opacity: 1, zIndex: 1 };
    }
    const local = Math.min(Math.max((progress - i * phaseSize) / phaseSize, 0), 1);
    return {
      translateY: local * -200,
      opacity: local > 0.75 ? 1 - (local - 0.75) / 0.25 : 1,
      zIndex: services.length - i,
    };
  };

  return (
    <section
      ref={outerRef}
      className="bg-[#0D0B0B] relative h-[300vh]"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="w-full max-w-360 mx-auto px-5 md:px-[clamp(24px,5vw,80px)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 md:gap-[clamp(40px,6vw,120px)] items-center">

            {/* Left Content */}
            <div className="flex flex-col gap-4 md:gap-6">
              <h2 className="text-[1.6rem] md:text-[clamp(1.8rem,3.5vw,3rem)] font-bold text-[#E8E0D5] leading-[1.15] m-0">
                Our Exclusive Services
              </h2>
              <p className="text-[#9A8F85] text-[0.85rem] md:text-[clamp(0.875rem,1.3vw,1rem)] leading-[1.85] max-w-115 m-0">
                At Studio 35, we go beyond music and lights. We create
                experiences that bring people together, offering premium
                services to make every night unforgettable. From world-class DJs
                to private bookings, our services are designed to elevate your
                nightlife.
              </p>
              <div className="mt-1">
                <BookNowBtn />
              </div>
            </div>

            {/* Right Side (Card Stack) */}
            <div className="relative h-75 md:h-90 flex justify-center items-center overflow-visible">
              {services.map((service, i) => {
                const { translateY, opacity, zIndex } = getCardState(i);
                return (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    translateY={translateY}
                    zIndex={zIndex}
                    opacity={opacity}
                    isMobile={isMobile}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}