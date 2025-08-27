import React from "react";
import arrowRightAlt4 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import coins from "../assets/Add-On/more-coins@2x.png";

export const FeaturesSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row w-full max-w-full items-center gap-4 sm:gap-8 px-4 sm:px-7 rounded-2xl bg-[linear-gradient(0deg,rgba(246,247,248,1)_0%,rgba(246,247,248,1)_100%),linear-gradient(0deg,rgba(239,242,245,1)_0%,rgba(239,242,245,1)_100%)]">
      
      {/* Button on top right */}
      <button
        className="absolute top-3 sm:top-4 right-3 sm:right-4 inline-flex items-center gap-2.5 p-1 bg-white rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        aria-label="Learn more about trading cryptocurrencies"
      >
        <img className="w-5 sm:w-6 h-5 sm:h-6" alt="" src={arrowRightAlt4} />
      </button>

      {/* Image container with responsive shrink */}
      <div className="flex justify-center sm:justify-start w-full sm:w-[198px] max-w-[200px] sm:max-w-none h-32 sm:h-40 overflow-hidden rounded-xl flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          alt="Cryptocurrency trading illustration"
          src={coins}
        />
      </div>

      {/* Text */}
      <h2 className="w-full sm:w-auto font-medium text-[24px] sm:text-[32px] leading-7 sm:leading-10 tracking-[0] text-left">
        <span className="text-[#323232]">Trade </span>
        <span className="text-black">300+ cryptos</span>
        <span className="text-[#323232]">
          <br />
          with Rupiah
        </span>
      </h2>
    </section>
  );
};
