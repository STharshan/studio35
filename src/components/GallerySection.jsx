import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "The Dancefloor",
    subtitle: "Lose yourself under neon lights and booming beats as the dancefloor comes alive with energy and excitement.",
    image: "/ticket.png", // Ensure the extension matches your file
  },
  {
    id: 2,
    title: "The VIP Experience",
    subtitle: "Exclusive lounges, personalized service, and premium vibes designed for those who want the night their way.",
    image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b880cdc2cfb3f353e24190_senior-person-dancing-having-fun-club.avif",
  },
  {
    id: 3,
    title: "The Performers",
    subtitle: "World-class DJs and live acts bring unmatched talent, creating nights that leave the crowd wanting more.",
    image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b882539d384e7562393736_2148325472.avif",
  },
  {
    id: 4,
    title: "The Drinks",
    subtitle: "Signature cocktails and handcrafted creations flow all night, adding flavor to the unforgettable Studio 35 vibe.",
    image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68c51493117bb751fdccc62e_18971.avif",
  },
  {
    id: 5,
    title: "The DJ Desk",
    subtitle: "Ever wanted to get behind the decks? Hire our professional DJ desk for your group is perfect for TikTok lives, content creation, and videos that'll have your followers wishing they were there. Book it for the night and make your moment the main event.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80"
  },
    {
    id: 6,
    title: "The Pool Tables",
    subtitle: "Book a pool table and own your corner of the club. Whether it's a friendly game or a serious tournament among friends, our tables are ready when you are the all night long.",
    image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b882539d384e7562393736_2148325472.avif",
  },
];

function ArrowBtn({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="w-11 h-11 rounded-full border border-[#A8A9AD] bg-transparent text-[#E8E0D5] flex items-center justify-center transition-all duration-300 cursor-pointer shrink-0 hover:bg-[#E8382A] hover:border-[#E8382A]"
    >
      {children}
    </button>
  );
}

export default function EventSlider() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const total = slides.length;

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handlePrev = () => setActive((a) => (a - 1 + total) % total);
  const handleNext = () => setActive((a) => (a + 1) % total);

  const getCardStyle = (index) => {
    const isPrev = index === (active - 1 + total) % total;
    const isNext = index === (active + 1) % total;
    const isActive = index === active;

    // Dynamic transforms are best kept in inline style for smooth React state updates
    if (isActive) {
      return {
        opacity: 1,
        zIndex: 10,
        transform: "translateX(0) scale(1)",
        boxShadow: "0 40px 90px rgba(232,56,42,0.35)",
      };
    }
    if (!isMobile && isPrev) {
      return {
        opacity: 0.4,
        zIndex: 5,
        transform: "translateX(-105%) scale(0.85)",
      };
    }
    if (!isMobile && isNext) {
      return {
        opacity: 0.4,
        zIndex: 5,
        transform: "translateX(105%) scale(0.85)",
      };
    }
    return {
      opacity: 0,
      zIndex: 0,
      transform: "translateX(0) scale(0.7)",
    };
  };

  return (
    <div className="bg-[#0D0B0B] text-[#E8E0D5] px-5 py-16 md:px-10 md:py-20 overflow-hidden">
      {/* Header */}
      <header className="max-w-350 mx-auto mb-16 flex flex-col md:flex-row justify-between gap-10">
        <h2 className="text-3xl md:text-[clamp(32px,4vw,56px)] font-semibold leading-[1.1] m-0 max-w-xl">
          Where the Magic Happens
        </h2>
        <p className="text-base text-[#9A8F85] max-w-120 leading-relaxed m-0">
          Step into the world of Studio 35 through our showcase. From electrifying nights to unforgettable moments, here's a glimpse of what makes the Studio 35 experience unique.
        </p>
      </header>

      {/* Stage */}
      <div className="relative w-full max-w-350 h-110 md:h-130 mx-auto flex items-center justify-center perspective-distant">
        {slides.map((slide, index) => {
          const isPrev = index === (active - 1 + total) % total;
          const isNext = index === (active + 1) % total;
          const isActive = index === active;

          const handleClick = !isActive
            ? isPrev
              ? handlePrev
              : isNext
                ? handleNext
                : undefined
            : undefined;

          return (
            <div
              key={slide.id}
              onClick={handleClick}
              style={getCardStyle(index)}
              className={`absolute w-[88%] md:w-105 h-full rounded-md overflow-hidden transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] 
                ${isActive ? "cursor-default pointer-events-auto" : "cursor-pointer pointer-events-auto"}`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-[#0D0B0B]/95 via-transparent to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-7 md:p-10 text-center">
                <p className="text-sm text-[#9A8F85] mb-3 leading-relaxed max-w-[320px] mx-auto transition-opacity duration-500">
                  {slide.subtitle}
                </p>
                <h3 className="text-2xl md:text-3xl font-semibold m-0 text-[#E8E0D5]">
                  {slide.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex justify-center items-center gap-3 mt-8">
        <ArrowBtn onClick={handlePrev} label="Previous">
          <ChevronLeft size={20} />
        </ArrowBtn>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 border-none cursor-pointer
                ${i === active ? "w-6 bg-[#E8382A]" : "w-2 bg-[#2A1E1A]"}`}
            />
          ))}
        </div>

        <ArrowBtn onClick={handleNext} label="Next">
          <ChevronRight size={20} />
        </ArrowBtn>
      </div>
    </div>
  );
}