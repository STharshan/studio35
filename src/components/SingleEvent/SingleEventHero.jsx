import { Link } from "react-router-dom";

export default function SingleEventHero({
  backgroundImage = "https://cdn.prod.website-files.com/65783e70779c933cb04336b5/657842a48c7edcefb026b5f7_pexels-alena-darmel-7715665.jpg",
  title = "Jazz Thursday",
  day = "Tuesday",
  date = "January 2, 2029",
  startTime = "10:00 pm",
  endTime = "2:00 am",
  backHref = "/event",
}) {
  return (
    <section
      className="relative flex w-full pt-80 items-center bg-cover bg-center bg-no-repeat bg-[#0D0B0B]"
      style={{ backgroundImage: `url("${backgroundImage}")` }}
    >
      {/* Dark overlay using Iron Black (#0D0B0B) */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0D0B0B]/25 via-[#0D0B0B]/55 to-[#0D0B0B]/90 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-300 flex-col gap-[clamp(0.5rem,1.5vw,0.9rem)] px-[clamp(1rem,4vw,3rem)] py-[clamp(1.5rem,4vw,3rem)]">
        
        {/* Back link - Ash Grey (#9A8F85) to Worn White (#E8E0D5) */}
        <Link
          to={backHref}
          className="group inline-flex w-fit items-center gap-[0.35rem] text-[clamp(0.7rem,1.2vw,0.82rem)] uppercase tracking-[0.15em] text-[#9A8F85] transition-colors hover:text-[#E8E0D5]"
        >
          <svg viewBox="0 0 16 16" fill="currentColor" className="h-3 w-3 shrink-0">
            <path d="M10.5 3L5.5 8l5 5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Events
        </Link>

        {/* Page title - Worn White (#E8E0D5) */}
        <h1 className="m-0 text-5xl uppercase leading-[0.95] tracking-[0.02em] text-[#E8E0D5]">
          {title}
        </h1>

        {/* Date & time row - Ash Grey (#9A8F85) */}
        <div className="flex flex-wrap items-center gap-[clamp(0.4rem,1vw,0.75rem)] text-[clamp(0.72rem,1.3vw,0.9rem)] uppercase tracking-[0.08em] text-[#9A8F85]">
          <span>{day}</span>
          <Dot />
          <span>{date}</span>
          <Dot />
          <span>{startTime}</span>
          <span className="text-[#9A8F85]/30">–</span>
          <span>{endTime}</span>
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span className="inline-block h-1 w-1 shrink-0 rounded-full bg-[#9A8F85]" />
  );
}