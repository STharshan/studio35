import React from 'react';

// --- Sub-component: Logo Card ---
const LogoCard = ({ logo, label, badgeText = "bg-[#CC1E1E]" }) => {
  return (
    /* Surface/Card: Dark Rust (#2A1E1A) */
    <div className="bg-[#2A1E1A] border border-[#A8A9AD]/10 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-2xl relative min-h-40 md:min-h-55 transition-all duration-300 hover:scale-105 hover:border-[#E8382A]/30 group">
      
      {/* Save Badge: Signal Red (#E8382A) */}
      {badgeText && (
        <div className={`absolute top-0 right-0 bg-[#E8382A] text-[#E8E0D5] font-bold text-xs px-3 py-1.5 rounded-bl-xl rounded-tr-xl flex flex-col items-center uppercase tracking-tighter`}>
          <span>save</span>
          <span className="text-sm">{badgeText}</span>
        </div>
      )}

      {/* Logo/Icon Container - Adding a slight glow on hover */}
      <div className="grow flex items-center justify-center mb-4 w-full h-20 md:h-28 transition-transform duration-300 group-hover:scale-110">
        {logo}
      </div>

      {/* Label Text: Worn White (#E8E0D5) */}
      <p className="text-[#E8E0D5] font-bold text-center text-sm leading-tight uppercase tracking-wide">
        {label}
      </p>
    </div>
  );
};


// 1. Visual Composer Logo
const VisualComposerLogo = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" fill="#CC1E1E" /> 
    <path d="M50 100L6.7 75L50 50L93.3 75L50 100Z" fill="#1C1210" /> 
    <path d="M50 50L93.3 75L93.3 25L50 0V50Z" fill="#E8382A" />
  </svg>
);

// 2. Woo COMMERCE Logo
const WooCommerceLogo = () => (
  <svg width="100" height="50" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <text x="50" y="65" fontWeight="900" fontSize="64" fill="#E8E0D5">W</text>
    <text x="120" y="65" fontWeight="900" fontSize="64" fill="#E8E0D5">oo</text>
    <text x="20" y="90" fontWeight="900" fontSize="16" fill="#CC1E1E" letterSpacing="2">COMMERCE</text>
  </svg>
);

// 3. Contact Form 7 Icon
const ContactForm7Logo = () => (
  /* Using Studio Red for the branding box */
  <div className="bg-[#CC1E1E] rounded-lg p-2 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 shadow-[0_0_15px_rgba(204,30,30,0.3)]">
    <span className="text-[#0D0B0B] font-black text-5xl md:text-6xl">7</span>
  </div>
);

// 4. MailChimp Freddie Logo
const MailChimpLogo = () => (
  <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="#E8E0D5" /> 
    <circle cx="50" cy="45" r="30" fill="#0D0B0B" /> 
    <circle cx="38" cy="42" r="6" fill="#CC1E1E" /> 
    <circle cx="62" cy="42" r="6" fill="#CC1E1E" /> 
    <path d="M20 20C20 20 35 10 50 10C65 10 80 20 80 20L50 40L20 20Z" fill="#CC1E1E" />
  </svg>
);

// 5. WPML Logo
const WpmlLogo = () => (
  <div className="flex items-center gap-2">
    <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="45" stroke="#E8382A" strokeWidth="6"/>
      <circle cx="50" cy="50" r="15" fill="#E8382A" />
    </svg>
    <span className="text-[#E8E0D5] font-bold text-2xl md:text-3xl">WPML</span>
  </div>
);

// 6. Font Awesome Flag
const FontAwesomeLogo = () => (
  <svg width="70" height="70" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 5V95" stroke="#A8A9AD" strokeWidth="10" strokeLinecap="round"/> 
    <path d="M10 15C10 15 40 0 50 15C60 30 90 15 90 15V60C90 60 60 75 50 60C40 45 10 60 10 60Z" fill="#CC1E1E" /> 
  </svg>
);

// --- Data Array ---
const plugins = [
  { logo: <VisualComposerLogo />, label: "Visual Composer", badgeText: "$45" },
  { logo: <WooCommerceLogo />, label: "Woo\nCOMMERCE", badgeText: null },
  { logo: <ContactForm7Logo />, label: "Contact Form 7", badgeText: null },
  { logo: <MailChimpLogo />, label: "MailChimp", badgeText: null },
  { logo: <WpmlLogo />, label: "WPML", badgeText: null },
  { logo: <FontAwesomeLogo />, label: "Font Awesome", badgeText: null },
];

// --- Main Component ---
const PluginGrid = () => {
  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <div className="bg-[#0D0B0B] p-6 md:p-12 lg:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Title for the section: Ash Grey label with Worn White Heading */}
        <div className="text-center mb-16">
           <p className="text-[#9A8F85] uppercase tracking-[0.3em] text-sm font-bold mb-4">Integrations</p>
           <h2 className="text-[#E8E0D5] text-4xl md:text-5xl font-black uppercase">Premium Plugins Included</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 lg:gap-10 items-stretch">
          {plugins.map((plugin, index) => (
            <div key={index} className="flex flex-col">
              <LogoCard 
                logo={plugin.logo} 
                label={plugin.label} 
                badgeText={plugin.badgeText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PluginGrid;