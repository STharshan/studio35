import React from 'react';

// --- Sub-component: Logo Card ---
const LogoCard = ({ logo, label, badgeText, badgeColor = "bg-studio-red" }) => {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-lg relative min-h-[160px] md:min-h-[220px] transition-transform duration-300 hover:scale-105">
      {/* Save Badge */}
      {badgeText && (
        <div className={`absolute top-0 right-0 ${badgeColor} text-worn-white font-sans font-bold text-xs px-3 py-1.5 rounded-bl-xl rounded-tr-xl flex flex-col items-center`}>
          <span>save</span>
          <span className="text-sm">{badgeText}</span>
        </div>
      )}

      {/* Logo/Icon Container */}
      <div className="flex-grow flex items-center justify-center mb-4 w-full h-20 md:h-28">
        {logo}
      </div>

      {/* Label Text */}
      <p className="text-iron-black font-sans font-semibold text-center text-sm md:text-base leading-tight">
        {label}
      </p>
    </div>
  );
};

// --- Logos and Icons (Recreated from image_0.png) ---

// 1. Visual Composer Logo (3D cubes)
const VisualComposerLogo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="#A4C639" /> {/* Top yellow cube */}
    <path d="M50 100L6.7 75L50 50L93.3 75L50 100Z" fill="#007F96" /> {/* Bottom blue cube */}
    <path d="M50 50L93.3 75L93.3 25L50 0V50Z" fill="#8AC926" />    {/* Right green cube */}
  </svg>
);

// 2. Woo COMMERCE Logo
const WooCommerceLogo = () => (
  <svg width="100" height="50" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="65" font-family="Arial, sans-serif" font-weight="900" font-size="64" fill="#96588A">W</text>
    <text x="120" y="65" font-family="Arial, sans-serif" font-weight="900" font-size="64" fill="#96588A">oo</text>
    <text x="20" y="90" font-family="Arial, sans-serif" font-weight="900" font-size="16" fill="#000000" letter-spacing="2">COMMERCE</text>
  </svg>
);

// 3. Contact Form 7 Icon (The green box '7')
const ContactForm7Logo = () => (
  <div className="bg-[#A4C639] rounded-lg p-2 flex items-center justify-center w-16 h-16 md:w-20 md:h-20">
    <span className="text-black font-sans font-black text-5xl md:text-6xl">7</span>
  </div>
);

// 4. MailChimp Freddie Logo
const MailChimpLogo = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#FFE01B" /> {/* Body */}
    <circle cx="50" cy="45" r="30" fill="#2C2E2F" stroke="#1D1D1D" stroke-width="2"/> {/* Eyes area */}
    <circle cx="38" cy="42" r="6" fill="#FFFFFF" /> {/* Left Eye */}
    <circle cx="62" cy="42" r="6" fill="#FFFFFF" /> {/* Right Eye */}
    <circle cx="50" cy="65" r="12" fill="#2C2E2F" /> {/* Mouth */}
    <path d="M20 20C20 20 35 10 50 10C65 10 80 20 80 20L50 40L20 20Z" fill="#1B1B1B" stroke="#1D1D1D" stroke-width="3"/> {/* Hat */}
  </svg>
);

// 5. WPML Logo
const WpmlLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#2C2E2F" stroke-width="6"/>
      <circle cx="50" cy="50" r="15" fill="#2C2E2F" />
    </svg>
    <span className="text-[#333333] font-sans font-bold text-2xl md:text-3xl">WPML</span>
  </div>
);

// 6. Font Awesome Flag
const FontAwesomeLogo = () => (
  <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5V95" stroke="#1FA67A" stroke-width="10" stroke-linecap="round"/> {/* Pole */}
    <path d="M10 15C10 15 40 0 50 15C60 30 90 15 90 15V60C90 60 60 75 50 60C40 45 10 60 10 60Z" fill="#1FA67A" /> {/* Flag */}
  </svg>
);

// --- Data Array ---
const plugins = [
  { logo: <VisualComposerLogo />, label: "Visual Composer", badgeText: "$45", badgeColor: "bg-signal-red" }, // Primary save badge
  { logo: <WooCommerceLogo />, label: "Woo\nCOMMERCE", badgeText: null },
  { logo: <ContactForm7Logo />, label: "Contact Form 7", badgeText: null },
  { logo: <MailChimpLogo />, label: "MailChimp", badgeText: null },
  { logo: <WpmlLogo />, label: "WPML", badgeText: null },
  { logo: <FontAwesomeLogo />, label: "Font Awesome", badgeText: null },
];

// --- Main Responsive Component ---
const PluginGrid = () => {
  return (
    <div className="bg-iron-black min-h-screen font-sans p-6 md:p-12 lg:p-16">
      {/* Centered container with max width */}
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 items-stretch">
          
          {plugins.map((plugin, index) => (
            <div key={index} className="flex flex-col">
              <LogoCard 
                logo={plugin.logo} 
                label={plugin.label} 
                badgeText={plugin.badgeText}
                badgeColor={plugin.badgeColor}
              />
            </div>
          ))}
          
        </div>

      </div>
    </div>
  );
};

export default PluginGrid;