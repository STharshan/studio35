import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    /* Primary Background: Iron Black (#0D0B0B) */
    <section
      className="px-4 bg-[#0D0B0B] transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Layered Depth: Rust Dark (#1C1210) Background for the Map Container */}
        <div
          className="rounded-sm overflow-hidden bg-[#1C1210] p-1 shadow-2xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(232,56,42,0.2)]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          {/* Metallic UI Touch: Steel Silver (#A8A9AD) Border */}
          <div className="w-full h-100 rounded-sm overflow-hidden border border-[#A8A9AD]/20 relative">
            
            {/* The Sound Wave Motif: Signal Red (#E8382A) Glow Overlay */}
            <div className="absolute inset-0 pointer-events-none border-2 border-transparent group-hover:border-[#E8382A]/30 transition-colors duration-500 z-10"></div>

            <iframe
              title="Google Map - RS Mobile Services"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2424.364491795745!2d-1.1274151!3d52.6354145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM4JzA3LjUiTiAxwrAwNyczOC43Ilc!5e0!3m2!1sen!2suk!4v1647864000000!5m2!1sen!2suk"
              width="100%"
              height="100%"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              /* Apply grayscale to map to fit Iron Black theme, then color on hover */
              className="border-0 w-full h-full opacity-80 hover:opacity-100 transition-all duration-700"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}