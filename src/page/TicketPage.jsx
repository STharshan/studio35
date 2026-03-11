import { useState, useEffect } from "react";

const slides = ["ticket.jpg"];
const LINES = ["COMING SOON", "COMING SOON", "COMING SOON"];
const LINE_OFFSETS = [-1, 0, 1]; 

export default function ComingSoon() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMove = (e) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setMouseX((e.clientX / w - 0.5) * 2);
      setMouseY((e.clientY / h - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const goTo = (i) => {
    if (i === current) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 400);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden p-6 md:p-8 box-border bg-[#0D0B0B]">
      
      {/* ── Background Video Layer ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/ticket.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* ── Big text lines (Parallax) ── */}
      {/* We removed the container z-index so individual lines can use their own z-index relative to the card */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-0">
        {LINES.map((text, i) => (
          <div
            key={i}
            className="font-extralight tracking-tighter leading-[1.05] whitespace-nowrap transition-transform duration-75 ease-linear select-none"
            style={{
              fontSize: "clamp(3.5rem, 12vw, 10rem)",
              color: "#E8E0D5",
              transform: `translateX(${mouseX * LINE_OFFSETS[i] * 28}px) translateY(${mouseY * LINE_OFFSETS[i] * 10}px)`,
              opacity: i === 1 ? 1 : 0.85,
              zIndex: i === 1 ? 30 : 10, 
              position: "relative",
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* ── Top Bar (Logo) ── */}
      <div className="relative z-40 w-full flex justify-center">
        <a href="/">
          <img 
            src="/logo.png" 
            alt="Studio 35" 
            className="h-8 md:h-12 w-auto object-contain"
          />
        </a>
      </div>

      {/* ── Center image card ── */}
      {/* Set to z-20 so it is between Line 0/2 and Line 1 */}
      <div className="relative z-20">
        <div className="relative w-45 md:w-[28vw] max-w-85 aspect-3/4 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
          <img
            src={slides[current]}
            alt="Coming soon"
            className={`w-full h-full object-cover transition-opacity duration-400 ${fading ? 'opacity-0' : 'opacity-100'}`}
          />
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-50">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-250 ${
                  i === current ? "bg-[#E8382A] scale-125" : "bg-[#E8382A]/45"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-8 md:h-12 w-full relative z-40" />
    </div>
  );
}