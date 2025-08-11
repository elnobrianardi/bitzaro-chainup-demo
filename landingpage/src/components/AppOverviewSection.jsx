import React from "react";
import arrowRightAlt from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import fireBtc1 from "../assets/Add-On/fire-btc 1.png";

export const AppOverviewSection = () => {
  return (
    <section
      className="flex w-[574px] h-40 items-center gap-[42px] p-7 rounded-2xl bg-[linear-gradient(0deg,rgba(250,250,250,0.2)_0%,rgba(250,250,250,0.2)_100%),linear-gradient(0deg,rgba(255,145,34,0.1)_0%,rgba(255,145,34,0.1)_100%)]"
      role="banner"
      aria-label="App overview section"
    >
      <img
        className="relative w-[78px] h-[110px] mt-[-3.00px] mb-[-3.00px] aspect-[0.71] object-cover"
        alt="Fire bitcoin token illustration"
        src={fireBtc1}
      />

      <h2 className="relative w-[461px] mr-[-63.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-transparent text-[32px] tracking-[0] leading-10">
        <span className="text-[#323232]">Swap and discover</span>

        <span className="text-[#e37403]">
          {" "}
          <br />
          the hottest tokens{" "}
        </span>

        <span className="text-[#323232]">in Web3</span>
      </h2>

      <button
        className="inline-flex items-center gap-2.5 p-2 bg-white rounded-[50px] overflow-hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-colors duration-200"
        aria-label="Navigate to token discovery"
        type="button"
      >
        <img
          className="relative w-6 h-6 aspect-[1]"
          alt=""
          src={arrowRightAlt}
          role="presentation"
        />
      </button>
    </section>
  );
};
