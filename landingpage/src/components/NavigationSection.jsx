import React from "react";
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.png";

export const NavigationSection = () => {
  const navigationItems = [
    { label: "Marketplace", href: "#marketplace" },
    { label: "Trade", href: "#trade" },
    { label: "Learn", href: "#learn" },
  ];

  return (
    <nav
      className="max-w-[1200px] justify-between px-[92px] py-4 fixed top-0 left-0 bg-[#ffffffb2] border-b [border-bottom-style:solid] border-[#eff4f9] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)] flex items-center z-50"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="inline-flex items-end gap-9 relative flex-[0_0_auto]">
        <a href="/" aria-label="Bitzaro home">
          <img
            className="relative w-[122px] h-6 aspect-[5.1] object-cover"
            alt="Bitzaro logo"
            src={bitzaroLogoWhite}
          />
        </a>

        <ul
          className="inline-flex items-center gap-6 relative flex-[0_0_auto] list-none m-0 p-0"
          role="menubar"
        >
          {navigationItems.map((item, index) => (
            <li key={index} role="none">
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-sm tracking-[0] leading-[normal] whitespace-nowrap hover:text-primitives-brand-primary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 rounded-sm"
                role="menuitem"
                tabIndex="0"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative w-[170px] h-[37px]">
        <button
          className="all-[unset] box-border inline-flex px-4 py-2 bg-primitives-brand-primary border border-solid flex-col items-center justify-center rounded-md border-primitives-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 transition-all duration-200 cursor-pointer"
          type="button"
          aria-label="Sign up for an account"
        >
          <span className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm leading-[21px] relative w-fit text-center tracking-[0] whitespace-nowrap">
            Sign Up
          </span>
        </button>

        <button
          className="all-[unset] box-border inline-flex px-4 py-2 bg-[#f0effa] flex-col items-center justify-center rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#2e065d] focus:ring-offset-2 transition-all duration-200 cursor-pointer"
          type="button"
          aria-label="Login to your account"
        >
          <span className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#2e065d] text-sm leading-[21px] relative w-fit text-center tracking-[0] whitespace-nowrap">
            Login
          </span>
        </button>
      </div>
    </nav>
  );
};
