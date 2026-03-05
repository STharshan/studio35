import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-8 px-6">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">NITELY</h2>
          <p className="text-sm leading-relaxed mb-6">
            The best night club in the <br /> United Kingdom
          </p>

          <p className="text-sm font-semibold text-white mb-3">
            FOLLOW @NITELY
          </p>

          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Instagram size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Twitter size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Facebook size={18} />
            </div>

            <div className="w-10 h-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <Youtube size={18} />
            </div>
          </div>
        </div>

        {/* Night Club Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">NIGHT CLUB</h3>
          <ul className="space-y-3 text-sm">
            <li>EVENTS CALENDAR</li>
            <li>TABLES RESERVATION</li>
            <li>ABOUT CLUB</li>
            <li>CLUB NEWS</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">CONTACT</h3>
          <ul className="space-y-3 text-sm">
            <li>12 CAMBRIDGE ST, LONDON</li>
            <li>020 7946 0940</li>
            <li>HI@NIGHTLY.COM</li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h3 className="text-white font-semibold mb-4">WORKING HOURS</h3>
          <ul className="space-y-3 text-sm">
            <li>MON-FRI: 8PM-4AM</li>
            <li>SAT-SUN: 8PM-6AM</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-sm gap-4">

          <p>STYLE GUIDE</p>
          <p>LICENCING</p>
          <p>CHANGELOG</p>
          <p>WEBFLOW | DESIGNER</p>

        </div>
      </div>

    </footer>
  );
}