import { useState } from "react";

const events = [
    { id: 1, title: "Comedy Club Night", startTime: "Dec 10, 2023 7:30 PM", endTime: "11:30 pm", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657bf7fdc257557413ece96c_pexels-monica-silvestre-713149.jpg", videoUrl: "https://www.youtube.com/embed/ga15Oqkafag" },
    { id: 2, title: "Retro Groove Night", startTime: "Nov 15, 2023 9:00 PM", endTime: "1:00 am", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657bf588858bb1df6c28292a_pexels-alena-darmel-7715770.jpg", videoUrl: "https://www.youtube.com/embed/ga15Oqkafag" },
    { id: 3, title: "Latin Fusion Fiesta", startTime: "Oct 5, 2023 8:00 PM", endTime: "12:00 am", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657bf697ab999a174db20fb4_pexels-alena-darmel-7715348.jpg", videoUrl: "https://www.youtube.com/embed/ga15Oqkafag" },
    { id: 4, title: "Neon Glow Party", startTime: "Sep 20, 2023 10:00 PM", endTime: "2:00 am", image: "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657841ea6039849fb4446962_pexels-alena-darmel-7715625.jpg", videoUrl: "https://www.youtube.com/embed/ga15Oqkafag" },
];

function PlayIcon() {
    return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.4rem", height: "1.4rem", marginLeft: "0.15rem" }}><path d="M8 5v14l11-7z" /></svg>;
}

function CloseIcon() {
    return <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1.5rem", height: "1.5rem" }}><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /></svg>;
}

function EventCard({ event, onPlay }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", minWidth: 0 }}>
            <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3", cursor: "pointer", background: "#0D0B0B" }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onClick={() => onPlay(event)}>
                <img  src={event.image} alt={event.title} loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)", transform: hovered ? "scale(1.07)" : "scale(1.0)" }} />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.35)", opacity: hovered ? 1 : 0, transition: "opacity 0.35s ease" }} />
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: "clamp(2.4rem, 5vw, 3rem)", height: "clamp(2.4rem, 5vw, 3rem)", borderRadius: "50%", background: hovered ? "#E8382A" : "rgba(232, 56, 42, 0.6)", color: "#E8E0D5", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.25s ease", transform: hovered ? "scale(1.12)" : "scale(1)", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>
                        <PlayIcon />
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem" }}>
                <h3 style={{ margin: 0, fontSize: "clamp(1rem, 2vw, 1.25rem)", color: "#E8E0D5", letterSpacing: "0.03em", textTransform: "uppercase", lineHeight: 1.2 }}>{event.title}</h3>
                <p style={{ margin: 0, fontSize: "clamp(0.7rem, 1.2vw, 0.8rem)", color: "#9A8F85", letterSpacing: "0.02em" }}>{event.startTime} – {event.endTime}</p>
            </div>
        </div>
    );
}

function VideoModal({ event, onClose }) {
    if (!event) return null;
    return (
        <div onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 1000, background: "rgba(13,11,11,0.92)", display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem", backdropFilter: "blur(6px)" }}>
            <div onClick={e => e.stopPropagation()} style={{ position: "relative", width: "100%", maxWidth: "900px", background: "#0D0B0B" }}>
                <button onClick={onClose} style={{ position: "absolute", top: "-2.5rem", right: 0, background: "none", border: "none", color: "#9A8F85", cursor: "pointer", padding: "0.25rem", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color = "#E8E0D5"} onMouseLeave={e => e.currentTarget.style.color = "#9A8F85"}>
                    <CloseIcon />
                </button>
                <div style={{ position: "relative", paddingTop: "56.25%" }}>
                    <iframe src={`${event.videoUrl}?autoplay=1`} title={event.title} allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowFullScreen frameBorder="0" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} />
                </div>
                <div style={{ padding: "0.75rem 1rem", borderTop: "1px solid #2A1E1A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h3 style={{ margin: 0, fontSize: "1.1rem", color: "#E8E0D5", letterSpacing: "0.05em", textTransform: "uppercase" }}>{event.title}</h3>
                    <span style={{ fontSize: "0.75rem", color: "#9A8F85" }}>{event.startTime} – {event.endTime}</span>
                </div>
            </div>
        </div>
    );
}

export default function PastEvents() {
    const [activeEvent, setActiveEvent] = useState(null);
    return (
        <>
            <section style={{ background: "#0D0B0B", padding: "clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 3rem)" }}>
                <h2 style={{ margin: "0 0 clamp(1rem, 2.5vw, 1.75rem) 0", fontSize: "clamp(0.75rem, 1.4vw, 1rem)", color: "#E8E0D5", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 400 }}>Past Events</h2>
                <div className="past-events-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
                    {events.map(event => <EventCard key={event.id} event={event} onPlay={setActiveEvent} />)}
                </div>
            </section>
            <VideoModal event={activeEvent} onClose={() => setActiveEvent(null)} />
            <style>{`@media (max-width: 900px) { .past-events-grid { grid-template-columns: repeat(2, 1fr) !important; } }`}</style>
        </>
    );
}