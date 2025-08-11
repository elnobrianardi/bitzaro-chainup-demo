import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.png";
import bitzaroLogoBlack from "../assets/Logo/BitzaroLogoBlack.png"; // Import black logo
import language from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/Language.png";

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
      className={`max-w-[1200px] justify-center px-0 py-4 fixed top-0 left-0 w-full backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)] flex items-center z-50 transition-colors duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-[#16121f]"
      }`}
    >
      <div className="w-[1180px] justify-between relative flex items-center">
        <div className="inline-flex items-end gap-9 relative flex-[0_0_auto]">
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
              className="relative w-[122px] h-6 aspect-[5.1] object-cover block"
              alt="Bitzaro logo"
              src={scrolled ? bitzaroLogoBlack : bitzaroLogoWhite}
            />
          </Link>

          <nav
            className="inline-flex items-center gap-6 relative flex-[0_0_auto]"
            role="navigation"
            aria-label="Main navigation"
          >
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className={`relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-sm tracking-[0] leading-[normal] hover:text-primitives-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 rounded px-1 py-1 ${
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

        <div className="inline-flex items-center gap-4 relative flex-[0_0_auto]">
          <button
            className={`all-[unset] box-border inline-flex px-4 py-2 relative flex-[0_0_auto] flex-col items-center justify-center rounded-md hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 ${
              scrolled
                ? "bg-gray-300 text-black focus:ring-offset-white"
                : "bg-[#f1eef71a] text-white hover:bg-[#f1eef72a] focus:ring-offset-[#16121f]"
            }`}
            type="button"
            aria-label="Login to your account"
          >
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-sm leading-[21px] relative w-fit text-center tracking-[0] whitespace-nowrap">
              Login
            </span>
          </button>

          <button
            className='all-[unset] box-border inline-flex flex-col items-center justify-center px-4 py-2 relative flex-[0_0_auto] rounded-md border border-solid hover:bg-opacity-90 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 bg-[#7815F9]'
            type="button"
            aria-label="Create new account"
          >
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-sm leading-[21px] relative w-fit text-center tracking-[0] whitespace-nowrap">
              Sign Up
            </span>
          </button>

          <button
            className={`inline-flex items-center gap-2.5 p-2 relative flex-[0_0_auto] rounded-[50px] overflow-hidden transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              scrolled
                ? "bg-gray-200 focus:ring-black focus:ring-offset-white"
                : "bg-[#f1eef71a] hover:bg-[#f1eef72a] focus:ring-white focus:ring-offset-[#16121f]"
            }`}
            type="button"
            aria-label="Change language"
          >
            <img
              className="relative w-6 h-6 aspect-[1]"
              alt="Language selector"
              src={language}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
