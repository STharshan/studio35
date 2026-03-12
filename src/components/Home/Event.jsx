import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    date: "AUG 25, 2023",
    title: "DJ DOMINIQUE",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "ticket.png",
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
    <Link
      to="/single-event"
      className="group/link inline-flex items-center gap-1.5 mt-3.5 text-[13px] font-bold tracking-[0.12em] uppercase no-underline transition-colors duration-200 text-[#E8E0D5] hover:text-[#E8382A]"
    >
      VIEW EVENT
      <ChevronRight size={14} strokeWidth={3} />
    </Link>
  );
}

export default function UpcomingEvents() {
  return (
    <div className="w-full bg-[#0D0B0B] text-[#E8E0D5] selection:bg-[#E8382A]">
      <section className="flex flex-col items-center px-5 py-20">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-[#CC1E1E] text-xs font-bold tracking-[0.3em] uppercase mb-2.5">
            Our Events
          </p>
          <h2 className="text-[clamp(42px,7vw,80px)] leading-none tracking-[0.04em] font-bold uppercase m-0">
            UPCOMING{" "}
            <span 
              className="text-transparent" 
              style={{ WebkitTextStroke: "2px #E8E0D5" }}
            >
              EVENTS
            </span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="w-full max-w-275 grid grid-cols-1 md:grid-cols-2 gap-3">
          
          {/* Large Card (DJ Dominique) */}
          <div className="group relative overflow-hidden rounded-sm cursor-pointer min-h-120 md:row-span-2">
            <img 
              src={events[0].image} 
              alt={events[0].title} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0D0B0B]/90 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
              <p className="text-[#9A8F85] text-sm mb-1">{events[0].date}</p>
              <h3 className="text-2xl md:text-3xl font-bold mb-2 uppercase tracking-tight">
                {events[0].title}
              </h3>
              <p className="text-[#9A8F85] text-sm leading-relaxed max-w-md">
                {events[0].desc}
              </p>
              <TicketLink />
            </div>
          </div>

          {/* Small Card 1 (Neon Nights) */}
          <div className="group relative overflow-hidden rounded-sm cursor-pointer min-h-55">
            <img 
              src={events[1].image} 
              alt={events[1].title} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0D0B0B]/90 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
              <p className="text-[#9A8F85] text-sm mb-1">{events[1].date}</p>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                {events[1].title}
              </h3>
              <TicketLink />
            </div>
          </div>

          {/* Small Card 2 (Paul Freedman) */}
          <div className="group relative overflow-hidden rounded-sm cursor-pointer min-h-55">
            <img 
              src={events[2].image} 
              alt={events[2].title} 
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#0D0B0B]/90 via-transparent to-transparent z-10" />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-7">
              <p className="text-[#9A8F85] text-sm mb-1">{events[2].date}</p>
              <h3 className="text-xl font-bold uppercase tracking-tight">
                {events[2].title}
              </h3>
              <TicketLink />
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#"
            className="inline-flex items-center gap-2.5 bg-linear-to-r from-[#CC1E1E] to-[#E8382A] text-[#E8E0D5] px-7 py-3.5 rounded-full text-[15px] font-semibold no-underline transition-all duration-200 hover:scale-105 hover:shadow-[0_8px_32px_rgba(204,30,30,0.4)]"
          >
            Browse All Events
          </a>
        </div>
      </section>
    </div>
  );
}