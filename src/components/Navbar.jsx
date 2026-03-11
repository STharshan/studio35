import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // import Link

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Promo Bar */}
      <div className="text-center text-[#E8E0D5] text-sm py-2 bg-linear-to-r from-[#CC1E1E] to-[#E8382A]">
        GET 10% OFF: use the code <span className="font-semibold">NITELY</span> on checkout
      </div>

      {/* Navbar */}
      <div className="bg-[#0D0B0B] text-[#E8E0D5]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="NITELY Logo" className="h-10 md:h-12 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-[#9A8F85] transition-colors">HOME</Link>
            <Link to="/event" className="hover:text-[#9A8F85] transition-colors">EVENTS</Link>

            <Link to="/tickets" className="hover:text-[#9A8F85] transition-colors">TICKET</Link>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-[#0D0B0B] border-t border-[#2A1E1A] px-6 pb-6">
            <div className="flex flex-col gap-4 text-sm font-medium pt-4">
              <Link to="/event">EVENTS</Link>
              <Link to="/about">ABOUT</Link>
              {/* <Link to="/more">MORE</Link> */}
              <Link to="/cart">CART</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}