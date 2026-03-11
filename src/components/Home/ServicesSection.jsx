import { useEffect, useRef, useState } from "react";

/* ─── Service Data ─────────────────────────────────────────── */
const services = [
  {
    id: 1,
    rotation: 0,
    title: "Live Music Experience",
    desc: "Get lost in the rhythm as our DJs and performers deliver high-energy sets that keep the crowd moving all night long. Each beat, light, and visual is crafted to create an electrifying and unforgettable atmosphere.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="12" fill="#0D0B0B" />
        <path d="M20 36V22l18 7-18 7z" fill="url(#i1s)" />
        <circle cx="38" cy="20" r="5" stroke="url(#i1s)" strokeWidth="1.8" />
        <path d="M33 20h-8" stroke="url(#i1s)" strokeWidth="1.8" strokeLinecap="round" />
        <defs>
          <linearGradient id="i1s" x1="14" y1="14" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CC1E1E" /><stop offset="1" stopColor="#E8382A" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 2,
    rotation: 1.6,
    title: "VIP Lounge Access",
    desc: "Relax in style with exclusive seating, personalized service, and premium amenities. Every detail is thoughtfully designed to make your night luxurious, comfortable, and absolutely unforgettable from start to finish.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="12" fill="#0D0B0B" />
        <rect x="12" y="16" width="32" height="22" rx="4" stroke="url(#i2s)" strokeWidth="1.8" />
        <path d="M18 26h6M18 30h10M34 26h4" stroke="url(#i2s)" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="36" cy="30" r="3" stroke="url(#i2s)" strokeWidth="1.8" />
        <defs>
          <linearGradient id="i2s" x1="12" y1="16" x2="44" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CC1E1E" /><stop offset="1" stopColor="#E8382A" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 3,
    rotation: 6,
    title: "Private Event Hosting",
    desc: "Celebrate birthdays, corporate gatherings, or special occasions in spaces perfectly tailored just for you. Our expert team handles every single detail to ensure your private event is flawless and unforgettable.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="12" fill="#0D0B0B" />
        <path d="M28 12l18 10v14l-18 8-18-8V22l18-10z" stroke="url(#i3s)" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M28 12v22M10 22l18 10 18-10" stroke="url(#i3s)" strokeWidth="1.6" />
        <defs>
          <linearGradient id="i3s" x1="10" y1="12" x2="46" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CC1E1E" /><stop offset="1" stopColor="#E8382A" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
  {
    id: 4,
    rotation: 9,
    title: "Signature Cocktails & Bar",
    desc: "Savor expertly crafted cocktails that excite your senses and perfectly complement the vibrant 99club energy. Each drink is thoughtfully designed to enhance your night and leave a lasting, unforgettable impression.",
    icon: (
      <svg viewBox="0 0 56 56" fill="none" width="52" height="52">
        <rect width="56" height="56" rx="12" fill="#0D0B0B" />
        <path d="M22 42c0-8 3-14 6-14s6 6 6 14" stroke="url(#i4s)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M28 28V18M24 22l4-4 4 4" stroke="url(#i4s)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 42h28" stroke="url(#i4s)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="i4s" x1="14" y1="14" x2="42" y2="42" gradientUnits="userSpaceOnUse">
            <stop stopColor="#CC1E1E" /><stop offset="1" stopColor="#E8382A" />
          </linearGradient>
        </defs>
      </svg>
    ),
  },
];

/* ─── Shared card renderer ─────────────────────────────────── */
function ServiceCard({ service, translateY, zIndex, opacity, isMobile }) {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        maxWidth: isMobile ? "100%" : 420,
        zIndex,
        transform: `translateY(${translateY}%) rotate(${service.rotation}deg)`,
        opacity,
        willChange: "transform, opacity",
      }}
    >
      <div
        style={{
          background: "linear-gradient(45deg, #CC1E1E, #E8382A)",
          borderRadius: 12,
          padding: "1.5px",
          boxShadow: "0 4px 48px rgba(204,30,30,0.15)",
        }}
      >
        <div
          style={{
            background: "#2A1E1A",
            borderRadius: "10.5px",
            padding: isMobile ? "22px 20px 26px" : "28px 28px 32px",
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 14 : 18,
          }}
        >
          <div>{service.icon}</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <h3
              style={{
                fontSize: isMobile ? 17 : 20,
                fontWeight: 700,
                color: "#E8E0D5",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: isMobile ? 13 : 14,
                lineHeight: 1.75,
                color: "#9A8F85",
                margin: 0,
              }}
            >
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Book Now button ──────────────────────────────────────── */
function BookNowBtn() {
  const [hov, setHov] = useState(false);
  return (
    <a
      href="#contact"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        background: "linear-gradient(70deg, #CC1E1E, #E8382A)",
        color: "#E8E0D5", borderRadius: 999, padding: "14px 28px",
        fontSize: 15, fontWeight: 600, textDecoration: "none",
        transform: hov ? "scale(1.04)" : "scale(1)",
        boxShadow: hov ? "0 8px 32px rgba(204,30,30,0.4)" : "none",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
    >
      Book Now
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h14M13 6l6 6-6 6" stroke="#E8E0D5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

/* ─── Main export ──────────────────────────────────────────── */
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
  }, [isMobile]);

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
      style={{ background: "#0D0B0B", position: "relative", height: "300vh" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 1440,
            margin: "0 auto",
            padding: isMobile ? "0 20px" : "0 clamp(24px, 5vw, 80px)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? 36 : "clamp(40px, 6vw, 120px)",
              alignItems: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 16 : 24 }}>
              <h2
                style={{
                  fontSize: isMobile ? "1.6rem" : "clamp(1.8rem, 3.5vw, 3rem)",
                  fontWeight: 700,
                  color: "#E8E0D5",
                  lineHeight: 1.15,
                  margin: 0,
                }}
              >
                Our Exclusive Services
              </h2>
              <p
                style={{
                  color: "#9A8F85",
                  fontSize: isMobile ? "0.85rem" : "clamp(0.875rem, 1.3vw, 1rem)",
                  lineHeight: 1.85,
                  maxWidth: 460,
                  margin: 0,
                }}
              >
                At 99club, we go beyond music and lights. We create experiences that
                bring people together, offering premium services to make every night
                unforgettable. From world-class DJs to private bookings, our services
                are designed to elevate your nightlife.
              </p>
              <div style={{ marginTop: 4 }}>
                <BookNowBtn />
              </div>
            </div>

            <div
              style={{
                position: "relative",
                height: isMobile ? 300 : 360,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
              }}
            >
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