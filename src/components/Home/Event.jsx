import { useState } from "react";

const events = [
  {
    id: 1,
    date: "AUG 25, 2023",
    title: "DJ DOMINIQUE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://images.unsplash.com/photo-1571266028243-e4733b0f0bb0?w=900&q=80",
    size: "large",
  },
  {
    id: 2,
    date: "AUG 24, 2023",
    title: "NEON NIGHTS",
    desc: null,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    size: "small",
  },
  {
    id: 3,
    date: "JUL 22, 2023",
    title: "DJ PAUL FREEDMAN",
    desc: null,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80",
    size: "small",
  },
];

function TicketLink() {
  return (
    <a
      href="#"
      className="ue-ticket-link"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        color: "#fff",
        fontSize: "13px",
        fontWeight: "700",
        letterSpacing: "0.12em",
        textDecoration: "none",
        textTransform: "uppercase",
        marginTop: "14px",
        transition: "color 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "#e0392d")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "#fff")}
    >
      GET TICKETS
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6" />
      </svg>
    </a>
  );
}

export default function UpcomingEvents() {
  return (
    <div className="ue-scope-container">
      <style>{`
        /* All styles prefixed with .ue-scope-container to ensure scoping */
        
        .ue-scope-container {
          background: #0a0a0a;
          width: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .ue-scope-container * { 
          box-sizing: border-box; 
        }

        .ue-scope-container .ue-section {
          padding: 72px 20px 80px;
          font-family: 'Barlow', sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* HEADING */
        .ue-scope-container .ue-heading {
          text-align: center;
          margin-bottom: 48px;
        }

        .ue-scope-container .ue-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #e0392d;
          margin-bottom: 10px;
        }

        .ue-scope-container .ue-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(42px, 7vw, 80px);
          line-height: 1;
          color: #fff;
          letter-spacing: 0.04em;
          margin: 0;
        }

        .ue-scope-container .ue-title span {
          -webkit-text-stroke: 2px #fff;
          color: transparent;
        }

        /* GRID */
        .ue-scope-container .ue-grid {
          width: 100%;
          max-width: 1100px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          gap: 12px;
        }

        .ue-scope-container .ue-card-large {
          grid-column: 1;
          grid-row: 1 / 3;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
          min-height: 480px;
        }

        .ue-scope-container .ue-card-small {
          grid-column: 2;
          position: relative;
          overflow: hidden;
          border-radius: 4px;
          cursor: pointer;
          min-height: 220px;
        }

        .ue-scope-container .ue-card-small:first-of-type { grid-row: 1; }
        .ue-scope-container .ue-card-small:last-of-type  { grid-row: 2; }

        .ue-scope-container .ue-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s ease;
        }

        .ue-scope-container .ue-card:hover img {
          transform: scale(1.06);
        }

        .ue-scope-container .ue-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.88) 0%,
            rgba(0,0,0,0.25) 55%,
            transparent 100%
          );
          z-index: 1;
        }

        .ue-scope-container .ue-card-body {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          z-index: 2;
          padding: clamp(16px, 3vw, 28px);
        }

        .ue-scope-container .ue-card-date {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.65);
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .ue-scope-container .ue-card-title-large {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(28px, 4vw, 50px);
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1;
          margin-bottom: 10px;
        }

        .ue-scope-container .ue-card-title-small {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(20px, 2.5vw, 32px);
          color: #fff;
          letter-spacing: 0.04em;
          line-height: 1;
          margin-bottom: 4px;
        }

        .ue-scope-container .ue-card-desc {
          font-size: clamp(13px, 1.3vw, 15px);
          color: rgba(255,255,255,0.7);
          line-height: 1.65;
          max-width: 420px;
          margin-bottom: 2px;
        }

        .ue-scope-container .ue-browse-wrap {
          margin-top: 40px;
          display: flex;
          justify-content: center;
        }

        .ue-scope-container .ue-browse-btn {
          display: inline-block;
          padding: 14px 40px;
          border: 2px solid #fff;
          color: #fff;
          background: transparent;
          font-family: 'Barlow', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .ue-scope-container .ue-browse-btn:hover {
          background: #fff;
          color: #0a0a0a;
        }

        /* Tablet Responsive */
        @media (max-width: 768px) {
          .ue-scope-container .ue-grid {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }
          .ue-scope-container .ue-card-large {
            grid-column: 1; grid-row: 1; min-height: 360px;
          }
          .ue-scope-container .ue-card-small {
            grid-column: 1; min-height: 200px;
          }
          .ue-scope-container .ue-card-small:first-of-type { grid-row: 2; }
          .ue-scope-container .ue-card-small:last-of-type  { grid-row: 3; }
        }
      `}</style>

      <section className="ue-section">
        <div className="ue-heading">
          <p className="ue-label">Our Events</p>
          <h2 className="ue-title">
            <strong>UPCOMING </strong>
            <span>EVENTS</span>
          </h2>
        </div>

        <div className="ue-grid">
          <div className="ue-card ue-card-large">
            <img src={events[0].image} alt={events[0].title} />
            <div className="ue-overlay" />
            <div className="ue-card-body">
              <p className="ue-card-date">{events[0].date}</p>
              <h3 className="ue-card-title-large">{events[0].title}</h3>
              <p className="ue-card-desc">{events[0].desc}</p>
              <TicketLink />
            </div>
          </div>

          <div className="ue-card ue-card-small">
            <img src={events[1].image} alt={events[1].title} />
            <div className="ue-overlay" />
            <div className="ue-card-body">
              <p className="ue-card-date">{events[1].date}</p>
              <h3 className="ue-card-title-small">{events[1].title}</h3>
              <TicketLink />
            </div>
          </div>

          <div className="ue-card ue-card-small">
            <img src={events[2].image} alt={events[2].title} />
            <div className="ue-overlay" />
            <div className="ue-card-body">
              <p className="ue-card-date">{events[2].date}</p>
              <h3 className="ue-card-title-small">{events[2].title}</h3>
              <TicketLink />
            </div>
          </div>
        </div>

        <div className="ue-browse-wrap">
          <a href="#" className="ue-browse-btn">Browse All Events</a>
        </div>
      </section>
    </div>
  );
}