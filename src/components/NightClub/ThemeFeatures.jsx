import {
  Settings,
  RefreshCw,
  Calendar,
  FileText,
  Type,
  Folder,
  Target,
  Code
} from "lucide-react";

const features = [
  { icon: Settings, title: "Powerfull Admin Interface" },
  { icon: RefreshCw, title: "Automatic Updates" },
  { icon: Calendar, title: "3+ Homepage Layouts" },
  { icon: FileText, title: "Well Documented" },
  { icon: Type, title: "Google Fonts" },
  { icon: Folder, title: "Amazing Parallax Effects" },
  { icon: Target, title: "SEO Optimized" },
  { icon: Code, title: "No Coding Required" },
];

export default function ThemeFeatures() {
  return (
    <section
      className="py-20 px-6"
      style={{
        background:
          "radial-gradient(circle at center, #08122b 0%, #020617 70%)",
      }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2
          className="text-center text-3xl md:text-4xl font-bold mb-16"
          style={{ color: "#ff1979" }}
        >
          Theme Futures
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-5 group"
              >
                {/* Icon Box */}
                <div
                  className="w-14 h-14 flex items-center justify-center rounded-md transition-all duration-300"
                  style={{
                    backgroundColor: "#0f172a",
                  }}
                >
                  <Icon
                    size={28}
                    style={{ color: "#38e8ff" }}
                  />
                </div>

                {/* Text */}
                <p
                  className="font-semibold text-sm md:text-base transition-all duration-300 group-hover:translate-x-1"
                  style={{ color: "#38e8ff" }}
                >
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