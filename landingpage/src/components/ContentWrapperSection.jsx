import React from "react";
import arrowRightAlt3 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import successBuy1 from "../assets/GIF/5186020064e1c2d1d8a3432e146567abe8e7504a.gif";

export const ContentWrapperSection = () => {
  return (
    <section className="flex w-[574px] h-[600px] items-start gap-2.5 p-7 rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(94,255,255,0.08)_0%,rgba(94,255,255,0.08)_100%)]">
      <div className="w-[556px] mr-[-28.00px] flex flex-col items-start gap-4 relative">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#0b8c8c] text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          ❘ Beginner Friendly┃
        </div>

        <h2 className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-[#323232] text-[32px] tracking-[0] leading-10">
          The simplest way to trade, <br />
          perfect for beginner
        </h2>
      </div>

      <button
        className="inline-flex items-center gap-2.5 p-2 bg-white rounded-[50px] overflow-hidden hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#0b8c8c] focus:ring-opacity-50"
        aria-label="Navigate to next section"
      >
        ⟶
      </button>

      <img
        className="w-[336px] h-[373px] aspect-[0.78] object-cover"
        alt="Mobile app interface showing successful purchase completion"
        src={successBuy1}
      />
    </section>
  );
};
