import React from "react";
import arrowRightAlt4 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import firebtc from "../assets/Add-On/fire-btc.png";

export const AppOverviewSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row w-full sm:h-40 items-center gap-4 sm:gap-8 px-4 sm:px-7 py-6 sm:py-8 rounded-2xl overflow-visible bg-[linear-gradient(0deg,rgba(255,145,34,0.1),rgba(255,145,34,0.1)),linear-gradient(0deg,rgba(250,250,250,0.2),rgba(250,250,250,0.2))]">
      
      {/* Button on top right */}
      <button
        className="absolute top-3 sm:top-4 right-3 sm:right-4 inline-flex items-center gap-2.5 p-1 bg-white rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        aria-label="Learn more about trading cryptocurrencies"
      >
        <img className="w-5 sm:w-6 h-5 sm:h-6" alt="" src={arrowRightAlt4} />
      </button>

      <img
        className="w-[78px] h-auto object-contain"
        alt="Cryptocurrency trading illustration"
        src={firebtc}
      />

      <h2 className="w-full sm:w-fit font-medium text-[28px] sm:text-[32px] leading-8 sm:leading-10 tracking-[0] text-left">
        <span className="text-[#323232]">Swap and discover <br /></span>
        <p className="text-black"><span className="text-[#E37404]">the hottest tokens</span> in Web3</p>
      </h2>
    </section>
  );
};
