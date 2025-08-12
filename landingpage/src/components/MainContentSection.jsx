import React from "react";
import spot1 from "../assets/GIF/6dd8b16727dce17a403312ece351459126ba8c1a.gif";
import arrow from '../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png'

export const MainContentSection = () => {
  return (
    <section className="relative w-[574px] h-[600px] p-8 bg-[#a216ff0a] rounded-2xl overflow-hidden flex flex-col items-start gap-6">
      {/* Arrow button at top right */}
      <button
        className="absolute top-8 right-8 inline-flex items-center gap-2.5 p-2 bg-white rounded-[50px] overflow-hidden hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#53199e] focus:ring-opacity-50"
        aria-label="Learn more about advanced trading"
      >
        <img src={arrow} className='w-6 h-6' alt="" />
      </button>

      {/* Text content */}
      <div className="flex flex-col items-start gap-4 w-full mb-8">
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#53199e] text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          ❘ Advanced Trading
        </h3>

        <h2 className="relative w-full [font-family:'Roboto-Medium',Helvetica] font-medium text-[#323232] text-[32px] tracking-[0] leading-10">
          Step up with advanced&nbsp;&nbsp;spot trading <br />
          and 25x leverage on Future
        </h2>
      </div>

      {/* Image below the h2 */}
      <img
        className="w-full max-w-[458px] h-[357px] aspect-[1.18] object-cover"
        alt="Advanced spot trading interface showing trading charts and leverage options"
        src={spot1}
      />
    </section>
  );
};
