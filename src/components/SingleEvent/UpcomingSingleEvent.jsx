import { useState } from "react";

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

const events = [
  {
    id: 1,
    month: "Jan",
    day: "07",
    title: "Acoustic Tuesday",
    href: "/product/acoustic-tuesday",
    image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/65784326af1d447a19b1ae5f_pexels-alena-darmel-7715393.jpg",
  },
  {
    id: 2,
    month: "Dec",
    day: "29",
    title: "DJ Antony",
    href: "/product/dj-antony",
    image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657841e0adf8bcc6d7ea1603_pexels-alena-darmel-7715615.jpg",
  },
  {
    id: 3,
    month: "Dec",
    day: "30",
    title: "Tetra Drum Show",
    href: "/product/tetra-drum-show",
    image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/65784261eb77864be56333c6_pexels-alena-darmel-7715853.jpg",
  },
];

function EventCard({ event }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "3/4",
        cursor: "pointer",
        background: C.bgSecondary,
      }}
    >
      {/* Background image */}
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: hovered ? "scale(1.08)" : "scale(1.0)",
        }}
      />

      {/* Persistent bottom gradient — uses bgPrimary for deeper fade */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(to top, ${C.bgPrimary} 0%, rgba(13,11,11,0.35) 50%, transparent 100%)`,
      }} />

      {/* Hover darkening overlay — uses brandRed tint instead of plain black */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `rgba(204, 30, 30, 0.18)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      {/* Date — top right */}
      <div style={{
        position: "absolute",
        top: "clamp(0.75rem, 2vw, 1.1rem)",
        right: "clamp(0.75rem, 2vw, 1.1rem)",
        textAlign: "right",
        lineHeight: 1,
        letterSpacing: "0.04em",
      }}>
        <div style={{
          fontSize: "clamp(0.6rem, 1.1vw, 0.75rem)",
          color: C.textSecondary,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          marginBottom: "0.1rem",
        }}>
          {event.month}
        </div>
        <div style={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          color: C.textPrimary,
          fontWeight: 700,
        }}>
          {event.day}
        </div>
      </div>

      {/* Footer — slides up on hover */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "clamp(0.8rem, 2vw, 1.25rem)",
        display: "flex",
        flexDirection: "column",
        gap: "0.65rem",
        transform: hovered ? "translateY(0)" : "translateY(100%)",
        transition: "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      }}>
        <h3 style={{
          margin: 0,
          fontSize: "clamp(1.1rem, 2.2vw, 1.55rem)",
          color: C.textPrimary,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          lineHeight: 1.1,
        }}>
          {event.title}
        </h3>

        <TicketsButton href={event.href} />
      </div>
    </div>
  );
}

function TicketsButton({ href }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        width: "fit-content",
        padding: "0.4rem 1.15rem",
        border: `1px solid ${hov ? C.brandRed : C.textPrimary}`,
        color: hov ? C.textPrimary : C.textPrimary,
        background: hov ? C.brandRed : "transparent",
        fontSize: "clamp(0.72rem, 1.2vw, 0.85rem)",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "background 0.2s, border-color 0.2s",
      }}
    >
      Tickets
    </a>
  );
}

function SeeAllButton({ href }) {
  const [hov, setHov] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "inline-block",
        padding: "0.45rem 1.2rem",
        border: "1px solid rgba(255,255,255,0.35)",
        transform: hov ? "scale(1.04)" : "scale(1)",
        boxShadow: hov ? "0 8px 32px rgba(204,30,30,0.4)" : "none",
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        textDecoration: "none",
        transition: "background 0.2s, color 0.2s, border-color 0.2s",
        whiteSpace: "nowrap",
        alignSelf: "flex-end",
        background: "linear-gradient(70deg, #CC1E1E, #E8382A)",
        color: "#E8E0D5", borderRadius: 999, padding: "14px 28px",
        fontSize: 15, fontWeight: 600, textDecoration: "none",
      }}
    >
      See All
    </a>
  );
}

export default function UpcomingSingleEvent() {
  return (
    <>
      <style>{`
        .mue-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(8px, 1.2vw, 16px);
        }
        @media (max-width: 768px) {
          .mue-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 420px) {
          .mue-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section style={{
        background: C.bgPrimary,
        borderTop: `1px solid ${C.surface}`,
        padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem)",
      }}>
        <div style={{
          maxWidth: "1140px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(1rem, 2.5vw, 1.75rem)",
        }}>

          {/* Header row */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}>
            <h2 style={{
              margin: 0,
              fontSize: "clamp(0.75rem, 1.4vw, 1rem)",
              color: C.textSecondary,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 400,
            }}>
              More Upcoming Events
            </h2>

            <SeeAllButton href="/events" />
          </div>

          {/* Cards */}
          <div className="mue-grid">
            {events.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}