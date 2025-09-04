import React from "react";
import spot1 from "../assets/GIF/6dd8b16727dce17a403312ece351459126ba8c1a.gif";
import arrow from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";

export const MainContentSection = () => {
  return (
    <section className="relative w-full h-full px-4 sm:px-6 md:px-8 pt-6 sm:pt-8 bg-[#a216ff0a] rounded-2xl overflow-visible flex flex-col items-start gap-4 sm:gap-6 justify-between">
      {/* Arrow button at top right */}
      <button
        className="absolute top-4 sm:top-8 right-4 sm:right-8 inline-flex items-center gap-2.5 p-2 bg-white rounded-full hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#53199e] focus:ring-opacity-50"
        aria-label="Learn more about advanced trading"
      >
        <img src={arrow} className="w-5 sm:w-6 h-5 sm:h-6" alt="" />
      </button>

      {/* Text content */}
      <div className="flex flex-col items-start gap-2 sm:gap-4 w-full sm:mb-8">
        <h3 className="font-medium text-[#53199e] text-lg sm:text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          ❘ Advanced Trading
        </h3>

        <h2 className="w-full sm:w-fit font-medium text-[#323232] text-xl xs:text-2xl sm:text-3xl leading-8 sm:leading-10 tracking-[0]">
          Step up with advanced{" "}
          <span className="whitespace-nowrap">spot trading </span>
          <br/>
          and 25x leverage on Future
        </h2>
      </div>

      {/* Image below the h2 */}
      <div className="flex w-full justify-center">
        <img
          className="w-full max-w-[458px] h-auto object-contain"
          alt="Advanced spot trading interface showing trading charts and leverage options"
          src={spot1}
        />
      </div>
    </section>
  );
};
