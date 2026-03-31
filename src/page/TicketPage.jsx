import { useState, useEffect } from "react";

const slides = ["ticket.png"];
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
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#0D0B0B]">
      
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

      {/* ── Parallax Text Wrapper ── */}
      {/* This container covers the whole screen and centers the text lines */}
      <div className="absolute inset-0 mt-25 flex flex-col items-center justify-center pointer-events-none">
        {LINES.map((text, i) => (
          <div
            key={i}
            className="font-extralight  leading-[0.8] whitespace-nowrap transition-transform duration-100 ease-out select-none"
            style={{
              fontSize: "clamp(3rem, 15vw, 12rem)",
              color: "#E8E0D5",
              transform: `translateX(${mouseX * LINE_OFFSETS[i] * 35}px) translateY(${mouseY * LINE_OFFSETS[i] * 15}px)`,
              opacity: i === 1 ? 1 : 0.7,
              zIndex: i === 1 ? 30 : 10, 
              position: "relative",
            }}
          >
            {text}
          </div>
        ))}
      </div>

      {/* ── Central Image Card ── */}
      {/* z-20 places it above the first and last lines, but below the middle line */}
      <div className="relative z-20 flex items-center justify-center w-full px-6">
        <div className="relative w-full max-w-[320px] md:max-w-[22vw] aspect-2/3 md:aspect-2/3.5 overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] rounded-sm">
          <img
            src={slides[current]}
            alt="Coming soon"
            loading="lazy"
            className={`w-full h-full object-cover transition-opacity duration-400 ${fading ? 'opacity-0' : 'opacity-100'}`}
          />
          
          {/* Pagination dots inside the card */}
          {slides.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-[#E8382A] scale-125" : "bg-white/40"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Decorative gradient overlay for depth */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/40 via-transparent to-black/40 z-40" />
    </div>
  );
}