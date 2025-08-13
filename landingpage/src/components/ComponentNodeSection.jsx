import React from "react";
import arrow from '../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png';
import bitzaroCircle from '../assets/Add-On/Bitzaro_Circle.png';

export const ComponentNodeSection = () => {
  return (
    <section className="relative w-full max-w-[574px] h-auto sm:h-[352px] flex flex-col items-start rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(14,119,255,0.08)_0%,rgba(14,119,255,0.08)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
      
      {/* Button in top-right */}
      <button
        className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center justify-center gap-2.5 p-2 bg-white rounded-full hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1761f5] focus:ring-offset-2 transition-colors z-10"
        aria-label="Learn more about Bitzaro Earn"
      >
        <img className="w-5 sm:w-6 h-5 sm:h-6" alt="" src={arrow} />
      </button>

      {/* Text content */}
      <div className="flex items-start sm:items-center gap-2.5 p-6 sm:p-8 w-full z-10">
        <h2 className="text-[28px] sm:text-[32px] leading-8 sm:leading-10 font-medium text-[#323232] tracking-[0]">
          <span className="font-medium text-[#323232]">
            Get a bonus every hour with&nbsp;&nbsp;Bitzaro Earn{" "}
          </span>
          <span className="font-medium text-[#1761f5]">up to</span>
          <span className="font-bold text-[#1761f5] text-[42px] sm:text-[42px] leading-[35px] sm:leading-[52.5px]">&nbsp;25%</span>
          <span className="font-medium text-[#1761f5]"> APY</span>
        </h2>
      </div>

      {/* Background image */}
      <div className="w-full h-[200px] sm:h-[352px] overflow-hidden -mt-3">
        <img
          className="w-full h-full object-cover"
          alt="Bitzaro Earn promotional graphic"
          src={bitzaroCircle}
        />
      </div>
    </section>
  );
};
