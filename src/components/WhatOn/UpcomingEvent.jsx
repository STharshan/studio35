import { useState } from "react";

const events = [
  { id: 1, month: "Jan", day: "02", title: "Jazz Thursday", href: "#", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657842a48c7edcefb026b5f7_pexels-alena-darmel-7715665.jpg" },
  { id: 2, month: "Jan", day: "07", title: "Acoustic Tuesday", href: "#", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/65784326af1d447a19b1ae5f_pexels-alena-darmel-7715393.jpg" },
  { id: 3, month: "Dec", day: "29", title: "DJ Antony", href: "#", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657841e0adf8bcc6d7ea1603_pexels-alena-darmel-7715615.jpg" },
  { id: 4, month: "Dec", day: "30", title: "Tetra Drum Show", href: "#", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/65784261eb77864be56333c6_pexels-alena-darmel-7715853.jpg" },
];

function EventCard({ event }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden cursor-pointer flex-1 min-w-0"
      style={{ aspectRatio: "3/4", minWidth: 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={event.image}
        loading="lazy"
        alt={event.title}
        style={{
          position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover",
          transition: "transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          transform: hovered ? "scale(1.08)" : "scale(1.0)",
        }}
      />

      {/* Overlays */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,11,11,0.9) 0%, rgba(13,11,11,0.2) 50%, transparent 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #CC1E1E 0%, transparent 80%)", opacity: hovered ? 0.3 : 0, transition: "opacity 0.4s ease" }} />

      <div style={{ position: "absolute", top: "1rem", right: "1rem", textAlign: "right" }}>
        <div style={{ fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)", color: "#9A8F85", fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase" }}>
          {event.month}
        </div>
        <div style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#E8E0D5", fontWeight: 700 }}>
          {event.day}
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "clamp(0.75rem, 2vw, 1.25rem)", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        <h3 style={{ margin: 0, fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", color: "#E8E0D5", letterSpacing: "0.04em", lineHeight: 1.1, textTransform: "uppercase" }}>
          {event.title}
        </h3>

        <div style={{ overflow: "hidden", maxHeight: hovered ? "3rem" : "0", opacity: hovered ? 1 : 0, transition: "max-height 0.35s ease, opacity 0.35s ease" }}>
          <a
            href={event.href}
            style={{
              display: "inline-block", padding: "0.4rem 1.1rem", border: "1px solid #E8E0D5",
              color: "#E8E0D5", fontSize: "clamp(0.75rem, 1.3vw, 0.9rem)", letterSpacing: "0.12em",
              textTransform: "uppercase", textDecoration: "none", background: "transparent",
              transition: "background 0.2s, color 0.2s, border-color 0.2s"
            }}
            onMouseEnter={e => { e.currentTarget.style.background = "#E8382A"; e.currentTarget.style.borderColor = "#E8382A"; e.currentTarget.style.color = "#E8E0D5"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "#E8E0D5"; e.currentTarget.style.color = "#E8E0D5"; }}
          >
            Tickets
          </a>
        </div>
      </div>
    </div>
  );
}

export default function UpcomingEvents() {
  return (
    <section style={{ background: "#0D0B0B", padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem)" }}>
      <h2 style={{ margin: "0 0 clamp(1rem, 2.5vw, 1.75rem) 0", fontSize: "clamp(0.75rem, 1.4vw, 1rem)", color: "#E8E0D5", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 400 }}>
        Upcoming Events
      </h2>
      <div className="events-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px" }}>
        {events.map(event => <EventCard key={event.id} event={event} />)}
      </div>
      <style>{`
        @media (max-width: 900px) { .events-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}