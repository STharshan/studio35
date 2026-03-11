const logos = [
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
  "https://cdn.prod.website-files.com/65782009fd8595214ed53f48/65783c4b69153b560d689392_logoholder-white.svg",
];

export default function Scroll() {
  return (
    <div className="w-full overflow-hidden bg-[#1C1210] border-y border-[#2A1E1A] py-6 select-none">
      <div className="flex w-max items-center gap-12 animate-marquee pause-on-hover">
        {[...logos, ...logos, ...logos].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="Partner Logo"
            loading="lazy"
            className="h-10 w-auto shrink-0 opacity-55 grayscale invert-[0.1] transition-all duration-300 hover:opacity-100 hover:grayscale-0"
          />
        ))}
      </div>

      {/* Tailwind CSS Keyframe Injection (Standard way if not editing tailwind.config.js) */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .pause-on-hover:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}