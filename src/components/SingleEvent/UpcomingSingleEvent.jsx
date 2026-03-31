import { useState } from "react";

const C = {
  bgPrimary: "#0D0B0B",    // Iron Black
  bgSecondary: "#1C1210",  // Rust Dark
  brandRed: "#CC1E1E",     // Studio Red
  accentRed: "#E8382A",    // Signal Red
  textPrimary: "#E8E0D5",  // Worn White
  textSecondary: "#9A8F85",// Ash Grey
  metallic: "#A8A9AD",     // Steel Silver
  surface: "#2A1E1A", 
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
      className="relative overflow-hidden aspect-3/4 cursor-pointer bg-[#1C1210]"
    >
      {/* Background image */}
      <img
        src={event.image}
        alt={event.title}
        loading="lazy"
        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${
          hovered ? "scale-110" : "scale-100"
        }`}
      />

      {/* Persistent bottom gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${C.bgPrimary} 0%, rgba(13,11,11,0.35) 50%, transparent 100%)`,
        }}
      />

      {/* Hover darkening overlay */}
      <div 
        className={`absolute inset-0 bg-[#CC1E1E]/20 transition-opacity duration-400 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Date — top right */}
      <div className="absolute top-[clamp(0.75rem,2vw,1.1rem)] right-[clamp(0.75rem,2vw,1.1rem)] text-right leading-none tracking-wider">
        <div className="text-[clamp(0.6rem,1.1vw,0.75rem)] text-[#9A8F85] tracking-[0.16em] uppercase mb-1">
          {event.month}
        </div>
        <div className="text-[clamp(2rem,4vw,2.8rem)] text-[#E8E0D5] font-bold">
          {event.day}
        </div>
      </div>

      {/* Footer — slides up on hover */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-[clamp(0.8rem,2vw,1.25rem)] flex flex-col gap-[0.65rem] transition-transform duration-500 ease-out ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <h3 className="m-0 text-[clamp(1.1rem,2.2vw,1.55rem)] text-[#E8E0D5] tracking-wider uppercase font-black leading-none">
          {event.title}
        </h3>

        <TicketsButton href={event.href} />
      </div>
    </div>
  );
}

function TicketsButton({ href }) {
  return (
    <a
      href={href}
      className="inline-block w-fit px-[1.15rem] py-[0.4rem] border border-[#E8E0D5] text-[#E8E0D5] hover:bg-[#CC1E1E] hover:border-[#CC1E1E] text-[clamp(0.72rem,1.2vw,0.85rem)] tracking-[0.12em] uppercase no-underline transition-all duration-200 font-bold"
    >
      Tickets
    </a>
  );
}

function SeeAllButton({ href }) {
  return (
    <a
      href={href}
      className="inline-block px-7 py-3.5 bg-linear-to-r from-[#CC1E1E] to-[#E8382A] text-[#E8E0D5] rounded-full text-[15px] font-semibold tracking-[0.14em] uppercase no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_32px_rgba(204,30,30,0.4)] whitespace-nowrap self-end"
    >
      See All
    </a>
  );
}

export default function UpcomingEvents() {
  return (
    <section className="bg-[#0D0B0B] border-t border-[#2A1E1A] py-[clamp(2rem,5vw,4rem)] px-[clamp(1rem,4vw,3rem)]">
      <div className="max-w-285 mx-auto flex flex-col gap-[clamp(1rem,2.5vw,1.75rem)]">

        {/* Header row */}
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <h2 className="m-0 text-[clamp(0.75rem,1.4vw,1rem)] text-[#9A8F85] tracking-[0.2em] uppercase font-bold">
            More Upcoming Events
          </h2>

          <SeeAllButton href="/events" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 gap-[clamp(8px,1.2vw,16px)]">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

      </div>
    </section>
  );
}