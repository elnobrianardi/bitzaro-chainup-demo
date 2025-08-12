import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.png";
import bitzaroLogoBlack from "../assets/Logo/BitzaroLogoBlack.png";
import languageBlack from "../assets/Icon/mynaui_globe.png";
import languageWhite from "../assets/Icon/mynaui_globe-1.png";

export const HeaderSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > window.innerHeight); // more than 100vh
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
      className={`fixed top-0 left-0 w-full backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] flex items-center z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#16121f]"
      } py-4`}
    >
      <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center px-4">
        {/* Left group */}
        <div className="inline-flex items-end gap-9">
          <Link
            to="/landing"
            className={`focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 rounded ${
              scrolled
                ? "focus:ring-offset-white"
                : "focus:ring-offset-[#16121f]"
            }`}
            aria-label="Bitzaro Home"
          >
            <img
              className="w-[122px] h-6 aspect-[5.1] object-cover"
              alt="Bitzaro logo"
              src={scrolled ? bitzaroLogoBlack : bitzaroLogoWhite}
            />
          </Link>

          <nav
            className="inline-flex items-center gap-6"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`relative w-fit mt-[-1px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-sm leading-normal hover:text-primitives-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 rounded px-1 py-1 ${
                  scrolled
                    ? "text-black focus:ring-offset-white"
                    : "text-white focus:ring-offset-[#16121f]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right group */}
        <div className="inline-flex items-center gap-4">
          <button
            className={`all-[unset] box-border inline-flex px-4 py-2 flex-col items-center justify-center rounded-md hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
              scrolled
                ? "bg-gray-300 text-black focus:ring-offset-white"
                : "bg-[#f1eef71a] text-white hover:bg-[#f1eef72a] focus:ring-offset-[#16121f]"
            }`}
            type="button"
            aria-label="Login to your account"
          >
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-sm leading-[21px] text-center whitespace-nowrap">
              Login
            </span>
          </button>

          <button
            className="all-[unset] box-border inline-flex flex-col items-center justify-center px-4 py-2 rounded-md bg-[#7815F9] hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 text-white"
            type="button"
            aria-label="Create new account"
          >
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-sm leading-[21px] text-center whitespace-nowrap">
              Sign Up
            </span>
          </button>

          <button
            className={`inline-flex items-center gap-2.5 p-2 rounded-full overflow-hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              scrolled
                ? "bg-gray-200 focus:ring-black focus:ring-offset-white"
                : "bg-[#f1eef71a] hover:bg-[#f1eef72a] focus:ring-white focus:ring-offset-[#16121f]"
            }`}
            type="button"
            aria-label="Change language"
          >
            <img
              className="w-6 h-6 aspect-square"
              alt="Language selector"
              src={scrolled ? languageBlack : languageWhite} 
            />
          </button>
        </div>
      </div>
    </header>
  );
};
