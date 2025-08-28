import React from "react";

export const TradingExperienceSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-8 px-6 sm:px-12 md:px-20 py-[72px] [background:radial-gradient(64.78%_100%_at_50%_100%,#A464F9_0%,#7815F9_50.49%,#470C93_100%)]">
      
      {/* Title + Subtitle */}
      <div className="flex flex-col items-center text-center w-full">
        <h2 className="font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 w-full">
          Start Your Crypto Journey
        </h2>

        <p className="font-medium text-[#f2f2f2] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
          Experience to trade 300+ cryptocurrencies
        </p>
      </div>

      {/* Button */}
      <button
        className="w-[250px] sm:w-[300px] px-5 py-3 bg-white flex items-center justify-center rounded-md font-poppins hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        aria-label="Download Bitzaro Now"
      >
        <span className="font-semibold text-[#7815f9] text-lg sm:text-xl leading-[30px] text-center">
          Download Bitzaro Now
        </span>
      </button>
    </section>
  );
};
