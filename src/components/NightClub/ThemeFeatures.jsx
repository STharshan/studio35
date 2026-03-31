import {
  Settings,
  RefreshCw,
  Layout,
  FileText,
  Type,
  Copy,
  Target,
  Code
} from "lucide-react";

const features = [
  { icon: Settings, title: "Powerful Admin Interface" },
  { icon: RefreshCw, title: "Automatic Updates" },
  { icon: Layout, title: "3+ Homepage Layouts" },
  { icon: FileText, title: "Well Documented" },
  { icon: Type, title: "Google Fonts" },
  { icon: Copy, title: "Amazing Parallax Effects" },
  { icon: Target, title: "SEO Optimized" },
  { icon: Code, title: "No Coding Required" },
];

export default function ThemeFeatures() {
  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="relative py-14 px-6 overflow-hidden bg-[#0D0B0B]">

      {/* 1. The Halftone Dot Pattern Overlay (Restored) */}
      <div
        className="absolute inset-0 z-0 opacity-500"
        style={{
          backgroundImage: `url("https://acidum.like-themes.com/wp-content/uploads/2017/09/about_animation.png")`,
        }}
      />

      {/* 2. Content Layer */}
      <div className="relative z-20 max-w-6xl mx-auto">

        {/* Title: Studio Red (#CC1E1E) */}
        <h2 className="text-center text-4xl md:text-5xl font-black mb-24 uppercase tracking-tight text-[#E8E0D5]">
          Theme Features
        </h2>

        {/* Features Grid: 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4 group transition-transform duration-300"
              >
                {/* Icon Box: Secondary Background: Rust Dark (#1C1210) */}
                <div className="w-16 h-16 shrink-0 flex items-center justify-center bg-[#1C1210] rounded-sm transition-all duration-300 group-hover:bg-[#2A1E1A] border border-[#A8A9AD]/10">
                  {/* Icon: Accent Red: Signal Red (#E8382A) */}
                  <Icon
                    size={28}
                    className="text-[#E8382A] drop-shadow-[0_0_8px_rgba(232,56,42,0.4)] transition-all group-hover:scale-110"
                  />
                </div>

                {/* Text: Text Primary: Worn White (#E8E0D5) */}
                <p className="font-bold text-sm leading-tight uppercase tracking-wide text-[#E8E0D5] group-hover:text-[#E8382A] transition-colors duration-300">
                  {feature.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}