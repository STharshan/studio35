import { useState, useEffect, useRef } from "react";

const IMAGE_URL =
  "https://cdn.prod.website-files.com/61f8a14be63a0e6fc41b0c2a/626cb372fe4bd826ae0153ee_img1.jpg";

export default function CopelandPage() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgOffset, setImgOffset] = useState(0);
  const [vw, setVw] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );
  const [vh, setVh] = useState(
    typeof window !== "undefined" ? window.innerHeight : 800
  );

  const animRef = useRef(null);
  const startRef = useRef(null);

  /* ── load‑in ── */
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  /* ── resize ── */
  useEffect(() => {
    const onResize = () => {
      setVw(window.innerWidth);
      setVh(window.innerHeight);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── floating animation ── */
  useEffect(() => {
    const tick = (ts) => {
      if (!startRef.current) startRef.current = ts;
      const pct = ((ts - startRef.current) % 9000) / 9000;
      setImgOffset(Math.sin(pct * Math.PI * 2) * 5);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  /* ── mouse / touch parallax ── */
  useEffect(() => {
    const onMove = (e) => {
      const cx = e.touches ? e.touches[0].clientX : e.clientX;
      const cy = e.touches ? e.touches[0].clientY : e.clientY;
      setMouse({
        x: (cx / window.innerWidth - 0.5) * 2,
        y: (cy / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  /* ── responsive breakpoints ── */
  const isMobile = vw < 480;
  const isTablet = vw >= 480 && vw < 900;

  /* ── dynamic sizes ── */
  const fontSize = isMobile ? "16vw" : isTablet ? "13vw" : "10vw";
  const logoSize = isMobile ? "13px" : isTablet ? "14px" : "15px";
  const logoSpacing = isMobile ? "6px" : "10px";

  const cardW = isMobile ? "58vw" : isTablet ? "38vw" : "26vw";
  const cardH = isMobile ? "52vh" : isTablet ? "68vh" : "82vh";
  const cardMaxW = isMobile ? "220px" : isTablet ? "300px" : "380px";

  /* ── parallax strengths (reduced on mobile) ── */
  const strength = isMobile ? 4 : isTablet ? 12 : 20;
  const cardStrength = isMobile ? 3 : isTablet ? 5 : 8;

  const r1 = `translate3d(${mouse.x * -strength}px, 0, 0)`;
  const r3 = `translate3d(${mouse.x * strength}px, 0, 0)`;

  /* ── shared text row style ── */
  const rowBase = {
    position: "absolute",
    width: "200vw",
    left: "-50vw",
    textAlign: "center",
    fontSize,
    fontWeight: "800",
    whiteSpace: "nowrap",
    fontFamily: "'Georgia', 'Times New Roman', serif",
    letterSpacing: isMobile ? "-0.02em" : "-0.01em",
    lineHeight: 1,
    opacity: isLoaded ? 1 : 0,
    transition: "opacity 0.9s ease, transform 0.05s linear",
    willChange: "transform",
    userSelect: "none",
  };

  /* ── grain overlay via SVG data URI ── */
  const grainBg =
    "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E\")";

  return (
    <div
      style={{
        height: "100vh",
        background: "linear-gradient(160deg, #8fa89a 0%, #6e8a7e 50%, #587068 100%)",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* ── grain texture overlay ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: grainBg,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
          opacity: 0.55,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* ── ambient glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: isMobile ? "60vw" : "40vw",
          height: isMobile ? "60vw" : "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* ── header / logo ── */}
      <header
        style={{
          position: "absolute",
          top: isMobile ? "20px" : "30px",
          width: "100%",
          textAlign: "center",
          zIndex: 40,
        }}
      >
        <div
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: logoSize,
            letterSpacing: logoSpacing,
            textTransform: "uppercase",
            fontWeight: "400",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(0)" : "translateY(-12px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
            color: "rgba(255,255,255,0.92)",
          }}
        >
          Copeland
        </div>
      </header>

      {/* ── ROW 1 — behind card ── */}
      <div
      
        style={{
          ...rowBase,
          top: isMobile ? "28%" : isTablet ? "30%" : "28%",
          zIndex: 1,
          transform: r1,
          color: "rgba(255,255,255,0.9)",
          textShadow: "0 4px 40px rgba(0,0,0,0.18)",
        }}
      >
        COMING SOON
      </div>

      {/* ── ROW 3 — behind card ── */}
      <div
        style={{
          ...rowBase,
          top: isMobile ? "58%" : isTablet ? "60%" : "66%",
          zIndex: 1,
          transform: r3,
          color: "rgba(255,255,255,0.9)",
          textShadow: "0 4px 40px rgba(0,0,0,0.18)",
        }}
      >
        COMING SOON
      </div>

      {/* ── IMAGE CARD ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <div
          style={{
            width: cardW,
            height: cardH,
            maxWidth: cardMaxW,
            overflow: "hidden",
            borderRadius: isMobile ? "4px" : "6px",
            boxShadow: isMobile
              ? "0 16px 48px rgba(0,0,0,0.35)"
              : "0 30px 80px rgba(0,0,0,0.38), 0 8px 24px rgba(0,0,0,0.22)",
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded
              ? `translate3d(${-mouse.x * cardStrength}px, ${mouse.y * cardStrength + 0}px, 0)`
              : "translateY(28px)",
            transition: isLoaded
              ? "box-shadow 0.4s ease, opacity 0.9s ease"
              : "opacity 0.9s ease, transform 1s ease",
            willChange: "transform",
          }}
        >
          <img
            src={IMAGE_URL}
            alt="Copeland preview"
            style={{
              width: "120%",
              height: "120%",
              objectFit: "cover",
              display: "block",
              transform: `scale(1.08) translateY(${imgOffset}%)`,
              transition: "transform 1.6s ease",
              marginLeft: "-10%",
            }}
          />
        </div>
      </div>

      {/* ── ROW 2 — above card ── */}
      <div
        style={{
          ...rowBase,
          top: isMobile ? "43%" : isTablet ? "45%" : "47%",
          zIndex: 30,
          mixBlendMode: "overlay",
          color: "white",
          textShadow: "none",
        }}
      >
        COMING SOON
      </div>
    </div>
  );
}