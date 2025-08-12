import React from "react";
import arrow from '../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png';
import bitzaroCircle from '../assets/Add-On/Bitzaro_Circle.png';

export const ComponentNodeSection = () => {
  return (
    <section className="relative w-[574px] h-[352px] justify-between overflow-hidden bg-[linear-gradient(0deg,rgba(14,119,255,0.08)_0%,rgba(14,119,255,0.08)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)] flex flex-col items-start rounded-2xl">
      
      {/* Text content */}
      <div className="flex items-center gap-2.5 p-8 relative flex-1 self-stretch w-full grow">
        <h2 className="flex-1 [font-family:'Roboto-Medium',Helvetica] font-normal text-transparent text-[32px] tracking-[0] leading-10">
          <span className="font-medium text-[#323232]">
            Get a bonus every hour with&nbsp;&nbsp;Bitzaro Earn{" "}
          </span>
          <span className="font-medium text-[#1761f5]">up to</span>
          <span className="font-medium text-[#323232] text-[28px] leading-[35px]">
            &nbsp;
          </span>
          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-[#1761f5] text-[42px] leading-[52.5px]">
            25%
          </span>
          <span className="[font-family:'Roboto-ExtraBold',Helvetica] font-extrabold text-[#1761f5] text-[42px] leading-[52.5px]">
            &nbsp;
          </span>
          <span className="font-medium text-[#1761f5]">APY</span>
        </h2>
      </div>

      {/* Background image */}
      <img
        className="relative flex-1 self-stretch w-full grow -mt-3"
        alt="Bitzaro Earn promotional graphic"
        src={bitzaroCircle}
      />

      {/* Button in top-right */}
      <button
        className="absolute top-4 right-4 flex items-center justify-center gap-2.5 p-2 bg-white rounded-full overflow-hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#1761f5] focus:ring-offset-2 transition-colors"
        aria-label="Learn more about Bitzaro Earn"
      >
        <img className="w-6 h-6" alt="" src={arrow} />
      </button>
    </section>
  );
};
