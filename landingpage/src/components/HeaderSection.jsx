import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.png";
import bitzaroLogoBlack from "../assets/Logo/BitzaroLogoBlack.png";
import languageBlack from "../assets/Icon/mynaui_globe.png";
import languageWhite from "../assets/Icon/mynaui_globe-1.png";
import { Menu, X } from "lucide-react"; 

export const HeaderSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerHeight = window.innerHeight * 0.7;
      setScrolled(scrollTop > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigationItems = [
    { label: "Market", href: "/market" },
    { label: "Trade", href: "/trade" },
    { label: "Learn", href: "/learn" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full backdrop-blur-[5px] transition-colors duration-300 z-50 ${
        scrolled ? "bg-white/70 shadow-md" : "bg-[#16121f]"
      } py-4`}
    >
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-4">
        {/* Left group */}
        <div className="flex items-center gap-6">
          <Link to="/">
            <img
              className="h-10 object-contain mb-2"
              alt="Bitzaro logo"
              src={scrolled ? bitzaroLogoBlack : bitzaroLogoWhite}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`font-semibold text-sm hover:text-primitives-brand-primary transition-colors ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right group */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className={`px-4 py-2 rounded-md transition-colors ${
              scrolled
                ? "bg-gray-300 text-black"
                : "bg-[#F1EEF71A] text-white hover:bg-[#f1eef72a]"
            }`}
          >
            Login
          </button>
          <button className="px-4 py-2 rounded-md bg-[#7815F9] text-white hover:bg-opacity-90 transition-all">
            Sign Up
          </button>
          <button
            className={`p-2 rounded-full ${
              scrolled ? "bg-gray-200" : "bg-[#f1eef71a] hover:bg-[#f1eef72a]"
            }`}
          >
            <img
              className="w-6 h-6"
              src={scrolled ? languageBlack : languageWhite}
              alt="Language selector"
            />
          </button>
        </div>

        {/* Mobile burger button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <X
              className={`${scrolled ? "text-black" : "text-white"}`}
              size={24}
            />
          ) : (
            <Menu
              className={`${scrolled ? "text-black" : "text-white"}`}
              size={24}
            />
          )}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <div
          className={`md:hidden flex flex-col items-center gap-4 py-4 transition-all ${
            scrolled ? "bg-white text-black" : "bg-[#16121f] text-white"
          }`}
        >
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
            <button
              className={`px-4 py-2 rounded-md ${
                scrolled
                  ? "bg-gray-300 text-black"
                  : "bg-[#f1eef71a] text-white hover:bg-[#f1eef72a]"
              }`}
            >
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
