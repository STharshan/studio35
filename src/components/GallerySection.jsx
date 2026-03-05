import { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "The Dancefloor",
    subtitle: "Lose yourself under neon lights and booming beats as the dancefloor comes alive with energy and excitement.",
    image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b880de22509fc1fb4046bd_people-having-fun-night-club.avif",
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
   // image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b882539d384e7562393736_2148325472.avif",
  },
  {
    id: 4,
    title: "The Drinks",
    subtitle: "Signature cocktails and handcrafted creations flow all night, adding flavor to the unforgettable 99club vibe.",
    image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68c51493117bb751fdccc62e_18971.avif",
  },
    {
    id: 5,
    title: "The VIP Experience",
    subtitle: "Exclusive lounges, personalized service, and premium vibes designed for those who want the night their way.",
    //image: "https://cdn.prod.website-files.com/689c985fb38694a674ae4ede/68b880cdc2cfb3f353e24190_senior-person-dancing-having-fun-club.avif",
  },
];

/* ─── Arrow button ─────────────────────────────────────────── */
function ArrowBtn({ onClick, label, children }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={label}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: 44, height: 44,
        borderRadius: "50%",
        border: "1px solid rgba(255,255,255,0.5)",
        background: hov ? "#fff" : "transparent",
        color: hov ? "#000" : "#fff",
        cursor: "pointer",
        display: "flex", alignItems: "center", justifyContent: "center",
        transition: "background 0.3s, color 0.3s",
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

/* ─── Main component ───────────────────────────────────────── */
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

  /* per-card transform/opacity/zIndex */
  const getCardStyle = (index) => {
    const isPrev = index === (active - 1 + total) % total;
    const isNext = index === (active + 1) % total;
    const isActive = index === active;

    const base = {
      position: "absolute",
      width: isMobile ? "88%" : 420,
      height: isMobile ? 440 : 500,
      borderRadius: 4,
      overflow: "hidden",
      transition: "all 0.8s cubic-bezier(0.25, 1, 0.5, 1)",
    };

    if (isActive) return {
      ...base,
      opacity: 1,
      pointerEvents: "auto",
      zIndex: 10,
      transform: "translateX(0) scale(1) translateZ(100px)",
      boxShadow: "0 50px 100px rgba(0,0,0,0.9)",
      cursor: "default",
    };

    if (!isMobile && isPrev) return {
      ...base,
      opacity: 0.4,
      pointerEvents: "auto",
      zIndex: 5,
      transform: "translateX(-105%) scale(0.85)",
      cursor: "pointer",
    };

    if (!isMobile && isNext) return {
      ...base,
      opacity: 0.4,
      pointerEvents: "auto",
      zIndex: 5,
      transform: "translateX(105%) scale(0.85)",
      cursor: "pointer",
    };

    // hidden
    return { ...base, opacity: 0, pointerEvents: "none", zIndex: 0, transform: "translateX(0) scale(0.7)" };
  };

  return (
    <div
      style={{
        background: "#000",
        color: "#fff",
        fontFamily: "'Inter', sans-serif",
        padding: isMobile ? "60px 20px" : "80px 40px",
        overflow: "hidden",
      }}
    >
      {/* ── Header ── */}
      <header
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          marginBottom: 60,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: isMobile ? 20 : 40,
          padding: isMobile ? "0" : "0",
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: isMobile ? 32 : "clamp(32px, 4vw, 56px)",
            fontWeight: 500,
            margin: 0,
            flex: 1,
            lineHeight: 1.1,
          }}
        >
          Where the Magic Happens
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "rgba(255,255,255,0.8)",
            maxWidth: 480,
            lineHeight: 1.6,
            margin: 0,
            paddingTop: isMobile ? 0 : 10,
          }}
        >
          Step into the world of 99club through our showcase. From electrifying nights
          to unforgettable moments, here's a glimpse of what makes our club unlike any other.
        </p>
      </header>

      {/* ── Stage ── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 1400,
          height: isMobile ? 440 : 520,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: 1200,
        }}
      >
        {slides.map((slide, index) => {
          const isPrev = index === (active - 1 + total) % total;
          const isNext = index === (active + 1) % total;
          const isActive = index === active;

          const handleClick = !isActive
            ? (isPrev ? handlePrev : isNext ? handleNext : undefined)
            : undefined;

          return (
            <div
              key={slide.id}
              onClick={handleClick}
              style={getCardStyle(index)}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />

              {/* Gradient overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)",
                }}
              />

              {/* Text content */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0, left: 0, right: 0,
                  padding: isMobile ? "28px 18px" : "40px 20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: 12,
                    marginTop: 0,
                    lineHeight: 1.5,
                    maxWidth: 320,
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                >
                  {slide.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: isMobile ? 24 : 32,
                    fontWeight: 600,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  {slide.title}
                </h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Controls ── */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          marginTop: 30,
        }}
      >
        <ArrowBtn onClick={handlePrev} label="Previous">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </ArrowBtn>

        {/* Dot indicators */}
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: i === active ? 24 : 7,
                height: 7,
                borderRadius: 999,
                background: i === active ? "#fff" : "rgba(255,255,255,0.3)",
                border: "none",
                padding: 0,
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
              }}
            />
          ))}
        </div>

        <ArrowBtn onClick={handleNext} label="Next">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </ArrowBtn>
      </div>
    </div>
  );
}