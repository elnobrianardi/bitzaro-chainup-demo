import React from "react";
import spot1 from "../assets/GIF/6dd8b16727dce17a403312ece351459126ba8c1a.gif";

export const MainContentSection = () => {
  return (
    <section className="flex w-[574px] h-[600px] items-start gap-2.5 p-8 bg-[#a216ff0a] rounded-2xl overflow-hidden">
      <div className="justify-center flex-1 grow flex flex-col items-start gap-4 relative">
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#53199e] text-xl tracking-[0] leading-[25px] whitespace-nowrap">
          ❘ Advanced&nbsp;&nbsp;Trading
        </h3>

        <h2 className="relative w-fit mr-[-10.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#323232] text-[32px] tracking-[0] leading-10">
          Step up with advanced&nbsp;&nbsp;spot trading <br />
          and 25x leverage on Future
        </h2>
      </div>

      <button
        className="inline-flex items-center gap-2.5 p-2 bg-white rounded-[50px] overflow-hidden hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#53199e] focus:ring-opacity-50"
        aria-label="Learn more about advanced trading"
      >
        ⟶
      </button>

      <img
        className="w-[458px] h-[357px] aspect-[1.18] object-cover"
        alt="Advanced spot trading interface showing trading charts and leverage options"
        src={spot1}
      />
    </section>
  );
};
