import React from "react";

export const TradingExperienceSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-20 py-[72px] [background:radial-gradient(50%_50%_at_75%_50%,rgba(164,100,249,1)_0%,rgba(120,21,249,1)_50%,rgba(71,12,147,1)_100%)]">
      <div className="flex flex-col items-center text-center max-w-[565px]">
        <h2 className="[font-family:'Roboto-Bold',Helvetica] font-bold text-white text-5xl tracking-[0] leading-[57.6px] mb-4">
          Start Your Crypto Journey
        </h2>

        <p className="[font-family:'Roboto-Medium',Helvetica] font-medium text-[#f2f2f2] text-xl tracking-[0] leading-[25px]">
          Experience to trade 300+ cryptocurrencies
        </p>
      </div>

      <button
        className="flex w-[300px] px-5 py-3 bg-white border border-solid border-primitives-brand-primary flex-col items-center justify-center rounded-md hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        aria-label="Download Bitzaro Now"
      >
        <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#7815f9] text-xl leading-[30px] text-center tracking-[0] whitespace-nowrap">
          Download Bitzaro Now
        </span>
      </button>
    </section>
  );
};
