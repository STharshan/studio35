import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0D0B0B] text-[#9A8F85] pt-16 pb-8 px-6">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <Link to="/">
            <img src="/logo.png" alt="NITELY Logo" className="h-10 md:h-12 mb-4 object-contain" />
          </Link>
          <p className="text-sm leading-relaxed mb-6">
            The best night club in the <br /> United Kingdom
          </p>

          <p className="text-sm font-semibold text-[#E8E0D5] mb-3">
            FOLLOW @studio35
          </p>

          <div className="flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, idx) => (
              <div
                key={idx}
                className="w-10 h-10 rounded-full bg-linear-to-r from-[#CC1E1E] to-[#E8382A] flex items-center justify-center text-[#E8E0D5] cursor-pointer hover:opacity-80 transition"
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* Night Club Links */}
        <div>
          <h3 className="text-[#E8E0D5] font-semibold mb-4">NIGHT CLUB</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-[#E8E0D5] transition-colors">HOME</Link>
            </li>
            <li>
              <Link to="/event" className="hover:text-[#E8E0D5] transition-colors">EVENTS</Link>
            </li>
            <li>
              <Link to="/tickets" className="hover:text-[#E8E0D5] transition-colors">TICKET</Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[#E8E0D5] font-semibold mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="https://www.google.com/maps/search/12+Cambridge+St,+London"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E8E0D5] transition-colors"
              >
                12 CAMBRIDGE ST, LONDON
              </a>
            </li>
            <li>
              <a href="tel:+442079460940" className="hover:text-[#E8E0D5] transition-colors">
                020 7946 0940
              </a>
            </li>
            <li>
              <a href="mailto:HI@studio35.COM" className="hover:text-[#E8E0D5] transition-colors">
                HI@studio35.COM
              </a>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-[#E8E0D5] font-semibold mb-4">WORKING HOURS</h3>
          <ul className="space-y-3 text-sm">
            <li>MON-FRI: 8PM-4AM</li>
            <li>SAT-SUN: 8PM-6AM</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Studio 35. All rights reserved.</p>
      </div>

      {/* Bottom Bar */}
      <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
        {/* Left: Terms & Privacy */}
        <div className="flex gap-4 text-sm">
          <Link
            to="/terms"
            className="text-gray-400 hover:text-[#cc1e1e] transition duration-300"
          >
            Terms & Conditions
          </Link>
          <span className="text-gray-500">|</span>
          <Link
            to="/privacy"
            className="text-gray-400 hover:text-[#cc1e1e] transition duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Center: Powered by Ansely (unchanged) */}
        <p className="text-center font-semibold text-gray-400">
          Powered by{" "}
          <a
            href="https://www.ansely.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cc1e1e] hover:underline"
          >
            Ansely
          </a>
        </p>
      </div>

    </footer>
  );
}