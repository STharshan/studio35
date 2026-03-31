import { useState } from "react";
import {
  Calendar, Clock, Ticket, Wine, Music, PartyPopper,
  Zap, Play, X, Search, Megaphone
} from "lucide-react";

const C = {
  bgPrimary: "#0D0B0B",  // Iron Black
  bgSecondary: "#1C1210",  // Rust Dark
  brandRed: "#CC1E1E",  // Studio Red
  accentRed: "#E8382A",  // Signal Red
  textPrimary: "#E8E0D5",  // Worn White
  textSecondary: "#9A8F85",  // Ash Grey
  metallic: "#A8A9AD",  // Steel Silver
  surface: "#2A1E1A",  // Dark Rust
};

const galleryImages = [
  "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657842a48c7edcefb026b5f7_pexels-alena-darmel-7715665.jpg",
  "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/65784326af1d447a19b1ae5f_pexels-alena-darmel-7715393.jpg",
  "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657841e0adf8bcc6d7ea1603_pexels-alena-darmel-7715615.jpg",
  "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/65784261eb77864be56333c6_pexels-alena-darmel-7715853.jpg",
];

const packages = [
  { id: "standard", label: "Standard", price: 30 },
  { id: "vip", label: "VIP", price: 60 },
];

const PlayIcon = () => <Play size={22} fill="currentColor" style={{ marginLeft: "0.15rem" }} />;
const CloseIcon = () => <X size={24} />;
const ZoomIcon = () => <Search size={18} />;

function VideoModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(13,11,11,0.95)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: "860px" }}>
        <button onClick={onClose}
          style={{ position: "absolute", top: "-2.5rem", right: 0, background: "none", border: "none", color: C.textSecondary, cursor: "pointer" }}
          onMouseEnter={e => e.currentTarget.style.color = C.textPrimary}
          onMouseLeave={e => e.currentTarget.style.color = C.textSecondary}
        ><CloseIcon /></button>
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe src="https://www.youtube.com/embed/ga15Oqkafag?autoplay=1" title="Jazz Thursday" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen frameBorder="0" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
        </div>
      </div>
    </div>
  );
}

function LightboxModal({ image, onClose }) {
  if (!image) return null;
  return (
    <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(13,11,11,0.98)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}>
      <button onClick={onClose}
        style={{ position: "absolute", top: "1rem", right: "1rem", background: "none", border: "none", color: C.textSecondary, cursor: "pointer" }}
        onMouseEnter={e => e.currentTarget.style.color = C.textPrimary}
        onMouseLeave={e => e.currentTarget.style.color = C.textSecondary}
      ><CloseIcon /></button>
      <img src={image} loading="lazy" alt="Gallery" onClick={e => e.stopPropagation()} style={{ maxWidth: "100%", maxHeight: "90vh", objectFit: "contain" }} />
    </div>
  );
}

function GalleryThumb({ src, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={() => onClick(src)} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ position: "relative", overflow: "hidden", cursor: "pointer", aspectRatio: "4/3", background: C.bgPrimary }}>
      <img src={src}  alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94)", transform: hov ? "scale(1.07)" : "scale(1)" }} />
      <div style={{ position: "absolute", inset: 0, background: `rgba(204, 30, 30, 0.45)`, opacity: hov ? 1 : 0, transition: "opacity 0.3s", display: "flex", alignItems: "center", justifyContent: "center", color: C.textPrimary }}>
        <ZoomIcon />
      </div>
    </div>
  );
}

export default function EventDetail() {
  const [selectedPkg, setSelectedPkg] = useState("standard");
  const [videoOpen, setVideoOpen] = useState(false);
  const [lightboxImg, setLightboxImg] = useState(null);
  const [videoHov, setVideoHov] = useState(false);

  const F = { fontFamily: "'Bebas Neue', Impact, sans-serif" };
  const B = { fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif" };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        input[type=number]::-webkit-inner-spin-button { opacity:1; }
        .ed-detail-grid { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(1.5rem,4vw,3.5rem); align-items: start; }
        .ed-gallery-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: clamp(6px,1vw,12px); }
        @media(max-width:768px){ .ed-detail-grid { grid-template-columns:1fr; } .ed-gallery-grid { grid-template-columns: repeat(2,1fr); } }
      `}</style>

      <section style={{ background: C.bgPrimary, padding: "0 clamp(1rem,4vw,3rem) clamp(2.5rem,5vw,4rem)" }}>
        <div style={{ maxWidth: "1140px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(2rem,4vw,3.5rem)" }}>

          {/* Tickets Bar */}
          <div style={{ borderTop: `1px solid ${C.surface}`, paddingTop: "clamp(1.2rem,3vw,2rem)" }}>
            <p style={{ ...B, fontSize: "0.65rem", color: C.textSecondary, letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Tickets</p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", gap: "clamp(0.8rem,2vw,1.75rem)" }}>

              {/* Package selector */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span style={{ ...B, fontSize: "0.65rem", color: C.textSecondary, letterSpacing: "0.18em", textTransform: "uppercase" }}>Package</span>
                <div style={{ display: "flex", gap: "0.45rem" }}>
                  {packages.map(p => (
                    <button key={p.id} onClick={() => setSelectedPkg(p.id)} style={{
                      ...F,
                      padding: "0.38rem 1rem",
                      fontSize: "0.78rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      border: "1px solid",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      background: selectedPkg === p.id ? C.textPrimary : "transparent",
                      color: selectedPkg === p.id ? C.bgPrimary : C.textPrimary,
                      borderColor: selectedPkg === p.id ? C.textPrimary : C.surface,
                    }}>{p.label}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detail Grid */}
          <div className="ed-detail-grid">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>

              <p style={{ ...B, fontSize: "0.9rem", color: C.textSecondary, lineHeight: 1.8 }}>
                <Zap size={16} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px", color: C.accentRed }} />
                Experience the sophisticated elegance of Jazz Thursday on January 2, 2025.
              </p>

              <div style={{ height: "1px", background: C.surface }} />

              <h3 style={{ ...F, fontSize: "1.9rem", color: C.textPrimary, textTransform: "uppercase", margin: 0 }}>
                Jazz Thursday: Rhythmic Harmony
              </h3>

              {/* Date & Time */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: C.metallic }}>
                  <Calendar size={18} />
                  <span style={{ ...B, fontSize: "0.85rem" }}>January 2, 2025</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", color: C.metallic }}>
                  <Clock size={18} />
                  <span style={{ ...B, fontSize: "0.85rem" }}>10:00 PM – 2:00 AM</span>
                </div>
              </div>

              {/* Tickets */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <p style={{ ...B, fontSize: "0.82rem", color: C.textPrimary, display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                  <Ticket size={16} color={C.accentRed} /> Tickets
                </p>
                {packages.map(p => (
                  <div key={p.id} style={{ paddingLeft: "1.5rem", color: C.textSecondary, ...B, fontSize: "0.82rem" }}>
                    · {p.label}: <strong style={{ color: C.textPrimary }}>${p.price}</strong>
                  </div>
                ))}
              </div>

              {/* Facilities */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                <p style={{ ...B, fontSize: "0.82rem", color: C.textPrimary, display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                  <Wine size={16} color={C.accentRed} /> Facilities
                </p>
                <div style={{ paddingLeft: "1.5rem", color: C.textSecondary, display: "flex", alignItems: "center", gap: "8px", ...B, fontSize: "0.82rem" }}>
                  <Music size={14} color={C.metallic} /> Live Jazz Performance
                </div>
                <div style={{ paddingLeft: "1.5rem", color: C.textSecondary, display: "flex", alignItems: "center", gap: "8px", ...B, fontSize: "0.82rem" }}>
                  <Wine size={14} color={C.metallic} /> Wine Bar
                </div>
                <div style={{ paddingLeft: "1.5rem", color: C.textSecondary, display: "flex", alignItems: "center", gap: "8px", ...B, fontSize: "0.82rem" }}>
                  <PartyPopper size={14} color={C.metallic} /> Stylish Dancefloor
                </div>
              </div>

              {/* CTA text */}
              <p style={{ ...B, fontSize: "0.82rem", color: C.brandRed, display: "flex", alignItems: "center", gap: "8px", margin: 0 }}>
                <Megaphone size={16} /> Don't miss out — reserve your tickets now!
              </p>
            </div>

            {/* Video thumbnail */}
            <div style={{ alignSelf: "start", position: "sticky", top: "2rem" }}>
              <div
                onClick={() => setVideoOpen(true)}
                onMouseEnter={() => setVideoHov(true)}
                onMouseLeave={() => setVideoHov(false)}
                style={{ position: "relative", cursor: "pointer", aspectRatio: "3/2", overflow: "hidden", border: `1px solid ${C.surface}` }}
              >
                <img src={galleryImages[0]} loading="lazy" alt="Jazz" style={{ width: "100%", height: "100%", objectFit: "cover", transform: videoHov ? "scale(1.05)" : "scale(1)", transition: "0.5s" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <div style={{
                    width: "3.5rem", height: "3.5rem", borderRadius: "50%",
                    background: videoHov ? C.brandRed : `rgba(204, 30, 30, 0.8)`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: C.textPrimary,
                    transition: "background 0.3s",
                  }}><PlayIcon /></div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <h3 style={{ ...F, fontSize: "1.35rem", color: C.textPrimary, letterSpacing: "0.12em", textTransform: "uppercase" }}>Gallery</h3>
            <div className="ed-gallery-grid">
              {galleryImages.map((img, i) => <GalleryThumb key={i} src={img} onClick={setLightboxImg} />)}
            </div>
          </div>

        </div>
      </section>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
      <LightboxModal image={lightboxImg} onClose={() => setLightboxImg(null)} />
    </>
  );
}