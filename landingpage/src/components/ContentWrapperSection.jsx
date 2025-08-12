import React from "react";
import arrowRightAlt3 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import successBuy1 from "../assets/GIF/5186020064e1c2d1d8a3432e146567abe8e7504a.gif";

export const ContentWrapperSection = () => {
  return (
    <section className="relative w-[574px] h-[600px] p-7 rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(94,255,255,0.08)_0%,rgba(94,255,255,0.08)_100%)]">
      {/* Button positioned top right */}
      <button
        className="absolute top-7 right-7 inline-flex items-center gap-2.5 p-2 bg-white rounded-[50px] overflow-hidden hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0b8c8c] focus:ring-opacity-50"
        aria-label="Navigate to next section"
      >
        <img src={arrowRightAlt3} className="w-6 h-6" alt="" />
      </button>

      <div className="flex flex-col items-start gap-4">
        <div className="w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0b8c8c] text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          ❘ Beginner Friendly
        </div>

        <h2 className="w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#323232] text-[32px] tracking-[0] leading-10">
          The simplest way to trade, <br />
          perfect for beginner
        </h2>

        {/* Centered image */}
        <div className="flex w-full justify-center mt-8">
          <img
            className="w-[336px] h-[373px] aspect-[0.78] object-cover"
            alt="Mobile app interface showing successful purchase completion"
            src={successBuy1}
          />
        </div>
      </div>
    </section>
  );
};
