import React from 'react';

const COLOR_WHEEL_IMAGE = '/multi-color.png';

const ColorPanel = ({ label, hex, boxBg, textColor }) => (
    <div className="flex flex-col items-start">
        {/* Label: Ash Grey (#9A8F85) */}
        <p className="text-[#9A8F85] text-xs md:text-sm font-bold uppercase mb-2 tracking-widest">
            {label}
        </p>
        
        {/* Box: Metallic UI Touches with Steel Silver (#A8A9AD) Border */}
        <div
            className="flex items-center px-3 py-2 rounded-sm w-44 justify-between shadow-2xl transition-all duration-300 hover:scale-105 border border-[#A8A9AD]/20 hover:border-[#E8382A]/50"
            style={{ backgroundColor: boxBg }}
        >
            <span
                className="font-black text-lg md:text-xl tracking-tighter"
                style={{ color: textColor }}
            >
                {hex}
            </span>
        </div>
    </div>
);

const ColorCustomizer = () => {
    const customColors = [
        {
            label: "Primary Accent:",
            hex: "#CC1E1E", // Studio Red
            boxBg: "#CC1E1E", 
            textColor: "#E8E0D5" // Worn White
        },
        {
            label: "Hover State:",
            hex: "#E8382A", // Signal Red
            boxBg: "#E8382A", 
            textColor: "#0D0B0B" // Iron Black
        },
        {
            label: "UI Finish:",
            hex: "#A8A9AD", // Steel Silver
            boxBg: "#A8A9AD", 
            textColor: "#0D0B0B"
        },
    ];

    const sliderValues = ["240", "106", "94"];

    return (
        /* Layered Depth: Iron Black (#0D0B0B) */
        <section className="relative w-full py-24 bg-[#0D0B0B] overflow-hidden flex flex-col items-center">

            {/* Heading: Worn White (#E8E0D5) */}
            <h2 className="text-[#E8E0D5] text-4xl md:text-6xl font-black uppercase tracking-tighter mb-20 text-center">
                Easy Color Customization
            </h2>

            <div className="max-w-7xl w-full px-6 grid grid-cols-1 md:grid-cols-3 items-center gap-10">

                {/* Left Side: Sound Wave Motif / Numbers in Signal Red (#E8382A) */}
                <div className="flex flex-col items-end gap-14 pr-4 md:pr-16 order-2 md:order-1">
                    {sliderValues.map((value, index) => (
                        <div key={index} className="flex items-center gap-6 group">
                            <span className="text-[#E8382A] text-5xl md:text-7xl font-black italic tracking-tighter drop-shadow-[0_0_15px_rgba(232,56,42,0.3)] group-hover:scale-110 transition-transform">
                                {value}
                            </span>
                            {/* Divider: Steel Silver (#A8A9AD) */}
                            <div className="w-16 h-0.5 bg-[#A8A9AD]/30 group-hover:bg-[#E8382A] transition-colors"></div>
                        </div>
                    ))}
                </div>

                {/* Center Side: Image with Rust Dark (#1C1210) shadow depth */}
                <div className="flex justify-center order-1 md:order-2">
                    <div className="relative w-72 h-72 md:w-113 md:h-113">
                        {/* Background glow using Studio Red */}
                        <div className="absolute inset-0 bg-[#CC1E1E] blur-[100px] opacity-10 rounded-full"></div>
                        <img
                            src={COLOR_WHEEL_IMAGE}
                            alt="Color Picker UI"
                            loading="lazy"
                            className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_40px_rgba(28,18,16,0.9)]"
                        />
                    </div>
                </div>

                {/* Right Side: Specific Colored Boxes */}
                <div className="flex flex-col items-start gap-10 pl-4 md:pl-16 order-3">
                    {customColors.map((color, index) => (
                        <ColorPanel
                            key={index}
                            label={color.label}
                            hex={color.hex}
                            boxBg={color.boxBg}
                            textColor={color.textColor}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ColorCustomizer;