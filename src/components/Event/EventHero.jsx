const EventsHero = () => {
  return (
    <section className="relative w-full h-70 sm:h-80 md:h-95 lg:h-105 overflow-hidden bg-[#0D0B0B]">

      {/* Background Image */}
      <img
        src="event.png"
        alt="Events Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay - Using Iron Black with transparency */}
      <div className="absolute inset-0 bg-linear-to-r from-[#0D0B0B]/90 via-[#0D0B0B]/70 to-[#0D0B0B]/90"></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <h1 className="font-semibold tracking-widest text-xl sm:text-2xl md:text-3xl lg:text-4xl 
    bg-linear-to-r from-[#CC1E1E] to-[#E8382A] text-transparent bg-clip-text">
          EVENTS CALENDAR
        </h1>

        {/* Scroll Icon */}
        <div className="mt-6 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#E8E0D5] rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-[#E8E0D5] rounded-full"></div>
          </div>
        </div>

      </div>

      {/* Bottom Label */}
      <div className="absolute bottom-4 left-4 sm:left-6 md:left-10 z-10">
        <p className="text-[#E8E0D5] font-semibold tracking-widest text-xs sm:text-sm md:text-base">
          UPCOMING EVENTS
        </p>
      </div>

    </section>
  );
};

export default EventsHero;