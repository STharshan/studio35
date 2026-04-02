import React from "react";
import { motion } from "framer-motion";
import galleryBg from "/event.png";

const NightclubHero = () => {
  // Color Palette Constants
  const colors = {
    ironBlack: "#0D0B0B",    // Primary Background
    rustDark: "#1C1210",     // Secondary Background
    studioRed: "#CC1E1E",    // Brand Red
    signalRed: "#E8382A",    // Accent Red
    wornWhite: "#E8E0D5",    // Text Primary
    ashGrey: "#9A8F85",      // Text Secondary
    steelSilver: "#A8A9AD",  // Metallic Detail
    darkRust: "#2A1E1A",     // Surface/Card
  };

  return (
    <header
      id="page-header"
      style={{ backgroundColor: colors.ironBlack }}
      className="relative w-full overflow-hidden h-[80vh] min-h-150 flex items-center justify-center py-24"
    >
      {/* Background Image */}
      <img
        src={galleryBg} 
        alt="Background"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center opacity-60"
      />

      {/* Dark Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ backgroundColor: `${colors.ironBlack}99` }} // ~60% opacity for better text contrast
      />

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ color: colors.wornWhite }}
            className="mb-6 text-5xl md:text-7xl mt-24 font-black tracking-tighter uppercase leading-[0.9]"
          >
           WHAT'S ON The Lineup <br /> Never Stops
          </motion.h1>

          {/* Subheading / Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="max-w-2xl"
          >
            <p 
              style={{ color: colors.ashGrey }}
              className="text-base md:text-lg lg:text-xl font-medium leading-relaxed"
            >
              Studio 35 brings you a packed schedule of club nights, special events, and headline acts all year round. Find your night, grab your tickets, and get ready.
            </p>
          </motion.div>

        </div>
      </div>
    </header>
  );
};

export default NightclubHero;