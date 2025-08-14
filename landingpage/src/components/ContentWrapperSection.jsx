import React from "react";
import arrowRightAlt3 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import successBuy1 from "../assets/GIF/5186020064e1c2d1d8a3432e146567abe8e7504a.gif";

export const ContentWrapperSection = () => {
  return (
    <section className="relative w-full h-auto sm:h-full px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 rounded-2xl overflow-visible bg-[linear-gradient(0deg,rgba(94,255,255,0.08)_0%,rgba(94,255,255,0.08)_100%)]">
      
      {/* Button positioned top right */}
      <button
        className="absolute top-3 sm:top-7 right-3 sm:right-7 inline-flex items-center gap-2.5 p-2 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0b8c8c] focus:ring-opacity-50"
        aria-label="Navigate to next section"
      >
        <img src={arrowRightAlt3} className="w-5 sm:w-6 h-5 sm:h-6" alt="" />
      </button>

      <div className="flex flex-col items-start gap-3 sm:gap-4">
        <div className="w-fit font-medium text-[#0b8c8c] text-lg sm:text-xl leading-[25px] tracking-[0] whitespace-nowrap">
          ❘ Beginner Friendly
        </div>

        <h2 className="w-full sm:w-fit font-medium text-[#323232] text-2xl sm:text-[32px] leading-8 sm:leading-10 tracking-[0]">
          The simplest way to trade, <br />
          perfect for beginner
        </h2>

        {/* Centered image */}
        <div className="flex w-full justify-center mt-4 sm:mt-8">
          <img
            className="w-full max-w-[336px] h-auto object-contain"
            alt="Mobile app interface showing successful purchase completion"
            src={successBuy1}
          />
        </div>
      </div>
    </section>
  );
};
