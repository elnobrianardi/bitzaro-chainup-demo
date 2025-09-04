import React, { useState } from "react";
import { Link } from "react-router-dom";
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.png";
import languageWhite from "../assets/Icon/mynaui_globe-1.png";
import { Menu, X } from "lucide-react";

export const NavigationSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigationItems = [
    { label: "Market", href: "/market" },
    { label: "Trade", href: "/trade" },
    { label: "Learn", href: "/learn" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#16121f] backdrop-blur-[5px] z-50 pt-6 pb-4 px-4">
      <div className="max-w-[1200px] w-full mx-auto flex justify-between">
        {/* Left group */}
        <div className="flex gap-6">
          <Link to="/">
            <img
              className="h-6 object-contain"
              src={bitzaroLogoWhite}
              alt="Bitzaro logo"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="font-semibold text-sm text-white hover:text-primitives-brand-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right group */}
        <div className="hidden md:flex items-center gap-4">
          <button className="px-4 py-2 rounded-md bg-[#f1eef71a] text-sm font-medium text-white hover:bg-[#f1eef72a] transition-colors">
            Login
          </button>
          <button className="px-4 py-2 rounded-md bg-[#7815F9] text-white text-sm font-medium hover:bg-opacity-90 transition-all">
            Sign Up
          </button>
          <button className="p-2 rounded-full bg-[#f1eef71a] hover:bg-[#f1eef72a] transition-colors">
            <img className="w-6 h-6" src={languageWhite} alt="Language selector" />
          </button>
        </div>

        {/* Mobile burger button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="text-white" size={24} /> : <Menu className="text-white" size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-[#16121f] text-white">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className="text-sm font-semibold hover:text-primitives-brand-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <button className="px-4 py-2 rounded-md bg-[#f1eef71a] hover:bg-[#f1eef72a] text-white">
              Login
            </button>
            <button className="px-4 py-2 rounded-md bg-[#7815F9] text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
