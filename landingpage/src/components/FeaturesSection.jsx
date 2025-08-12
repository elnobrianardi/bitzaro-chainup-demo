import React from "react";
import arrowRightAlt4 from "../assets/Icon/Navigation_Icon_(Profile, Language, Arrow)/arrow_right_alt.png";
import frame3 from "../assets/Add-On/List_Of_Currency.png";

export const FeaturesSection = () => {
  return (
    <section className="relative flex w-[574px] h-40 items-center gap-8 px-7 py-8 rounded-2xl overflow-hidden bg-[linear-gradient(0deg,rgba(246,247,248,1)_0%,rgba(246,247,248,1)_100%),linear-gradient(0deg,rgba(239,242,245,1)_0%,rgba(239,242,245,1)_100%)]">
      {/* Button on top right */}
      <button
        className="absolute top-4 right-4 inline-flex items-center gap-2.5 p-2 bg-white rounded-[50px] overflow-hidden hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        aria-label="Learn more about trading cryptocurrencies"
      >
        <img
          className="w-6 h-6"
          alt=""
          src={arrowRightAlt4}
        />
      </button>

      <img
        className="relative w-[198px] h-auto mt-[-32px] mb-[-32px]"
        alt="Cryptocurrency trading illustration"
        src={frame3}
      />

      <h2 className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-transparent text-[32px] tracking-[0] leading-10">
        <span className="text-[#323232]">Trade </span>
        <span className="text-black">300+ cryptos</span>
        <span className="text-[#323232]">
          {" "}
          <br />
          with Rupiah
        </span>
      </h2>
    </section>
  );
};
