import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Promo Bar */}
      <div className="text-center text-white text-sm py-2 bg-linear-to-r from-purple-500 via-blue-500 to-cyan-400">
        GET 10% OFF: use the code <span className="font-semibold">NITELY</span> on checkout
      </div>

      {/* Navbar */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py- flex items-center justify-between">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold tracking-wider">NITELY</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="hover:text-gray-300">EVENTS</a>
            <a href="#" className="hover:text-gray-300">ABOUT</a>

            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-300">
              MORE
              <ChevronDown size={16} />
            </div>

            <a href="#" className="hover:text-gray-300">CART</a>
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
          <div className="md:hidden bg-black border-t border-gray-800 px-6 pb-6">
            <div className="flex flex-col gap-4 text-sm font-medium pt-4">
              <a href="#">EVENTS</a>
              <a href="#">ABOUT</a>
              <a href="#">MORE</a>
              <a href="#">CART</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}