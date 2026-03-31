import { Calendar, Navigation } from 'lucide-react';

const DesignCenter = () => {
  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section className="bg-[#0D0B0B] min-h-screen text-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 mt-25">

        <div className="flex flex-col lg:flex-row gap-10">

          {/* Left Side: Store Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-sm border border-[#A8A9AD]/10 group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src="/2.jpg"
                alt="Design Center"
                loading="lazy"
                className="w-full h-full object-cover aspect-4/3 lg:aspect-auto transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0D0B0B] via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-[#E8E0D5] text-3xl md:text-4xl font-black tracking-tight mb-2 uppercase">
              Torrance, CA
            </h2>

            <h3 className="text-lg font-bold border-b border-[#A8A9AD]/20 pb-2 mb-4 text-[#CC1E1E] uppercase tracking-wider">
              About Our Design Center
            </h3>

            <p className="text-[#9A8F85] leading-relaxed mb-8 text-sm md:text-base font-light">
              Shop Ethan Allen's furniture store today in Torrance, CA at 2700 West Sepulveda Blvd, Torrance, CA 90505.
              We offer a broad range of furniture and accessories, including quality living room furniture,
              dining room furniture, bedroom furniture and home décor. Create the look you'll love with free interior design help.
            </p>

            {/* Address & Info Grid: Rust Dark (#1C1210) Backgrounds */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm border-t border-[#A8A9AD]/20 pt-6">
              <div className="p-4 bg-[#1C1210] rounded-sm border border-[#A8A9AD]/5">
                <h4 className="font-bold mb-2 text-[#E8E0D5] uppercase tracking-tighter">Address and Info</h4>
                <address className="not-italic text-[#9A8F85]">
                  2700 West Sepulveda Blvd<br />
                  Torrance, CA 90505
                </address>
              </div>

              <div className="flex flex-col gap-2 p-4 bg-[#1C1210] rounded-sm border border-[#A8A9AD]/5">
                <p className="text-[#E8E0D5]"><span className="font-bold text-[#E8382A]">Phone:</span> <br /><span className="text-[#9A8F85]">310.534.0904</span></p>
                <p className="text-[#E8E0D5]"><span className="font-bold text-[#E8382A]">Delivery:</span> <br /><span className="text-[#9A8F85]">800.764.1277 x1</span></p>
              </div>

              <div className="text-[#9A8F85] p-4 bg-[#1C1210] rounded-sm border border-[#A8A9AD]/5">
                <h4 className="font-bold mb-2 text-[#E8E0D5] uppercase tracking-tighter">Hours</h4>
                <p>Mon - Sat: <span className="text-[#E8E0D5]">10am - 6pm</span></p>
                <p>Sun: <span className="text-[#E8E0D5]">12pm - 5pm</span></p>
              </div>
            </div>

            {/* --- INTEGRATED STORE BUTTONS --- */}
            <div className="flex flex-wrap gap-4 mt-15">

              {/* Make An Appointment: Studio Red (#CC1E1E) with Sound Wave Glow */}
              <div id="store-make-appt" className="relative group">
                <a
                  href="/en_US/make-appointment?StoreID=100"
                  className="flex items-center gap-3 bg-[#CC1E1E] text-[#E8E0D5] px-6 py-4 rounded-sm font-black uppercase text-sm tracking-widest transition-all duration-300 hover:bg-[#E8382A] hover:shadow-[0_0_20px_rgba(232,56,42,0.4)] active:scale-95"
                >
                  <Calendar size={18} className="text-[#E8E0D5]" />
                  Make An Appointment
                </a>
              </div>

              {/* Get Directions: Steel Silver (#A8A9AD) Metallic UI Touch */}
              <div
                id="store-details-directions"
                className="flex items-center gap-3 border border-[#A8A9AD]/40 bg-transparent text-[#A8A9AD] px-6 py-4 rounded-sm font-black uppercase text-sm tracking-widest cursor-pointer transition-all duration-300 hover:bg-[#A8A9AD] hover:text-[#0D0B0B] hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] active:scale-95"
              >
                <Navigation size={18} />
                Get Directions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignCenter;