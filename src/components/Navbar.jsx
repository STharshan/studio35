import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Helper to close the mobile menu when a link is clicked
  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Promo Bar */}
      <div className="text-center text-[#E8E0D5] text-sm py-2 bg-linear-to-r from-[#CC1E1E] to-[#E8382A]">
        GRAND OPENING SPECIAL Get 20% OFF your first booking!
      </div>

      {/* Navbar */}
      <div className="bg-[#0D0B0B] text-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" onClick={closeMenu}>
            <img src="/logo.png" alt="Logo" loading="lazy" className="h-10 md:h-12 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-[#9A8F85] transition-colors uppercase">Home</Link>
            <Link to="/what’s-on" className="hover:text-[#9A8F85] transition-colors uppercase">What’s On</Link>
            <Link to="/our-story" className="hover:text-[#9A8F85] transition-colors uppercase">Our Story</Link>
            <Link to="/night-club" className="hover:text-[#9A8F85] transition-colors uppercase">Club Night</Link>
            <Link to="/find-the-spot" className="hover:text-[#9A8F85] transition-colors uppercase">Find The Spot</Link>
            <Link to="/gallery" className="hover:text-[#9A8F85] transition-colors uppercase">Gallery</Link>
            <Link to="/tickets" className="hover:text-[#9A8F85] transition-colors uppercase">Ticket</Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-[#E8E0D5]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#0D0B0B] border-t border-[#2A1E1A] px-6 pb-8 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col gap-5 text-sm font-medium pt-6">
              <Link to="/" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">Home</Link>
              <Link to="/what’s-on" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">What’s On</Link>
              <Link to="/our-story" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">Our Story</Link>
              <Link to="/night-club" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">Club Night</Link>
              <Link to="/find-the-spot" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">Find The Spot</Link>
              <Link to="/gallery" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">Gallery</Link>
              <Link to="/ticket" onClick={closeMenu} className="hover:text-[#9A8F85] uppercase">Ticket</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}