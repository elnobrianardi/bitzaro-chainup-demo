import React from "react";
import heroSection from "../assets/Hero_Section/Hero_Section.png";
import phoneMockUp from "../assets/Phone_MockUp/PhoneMockUp.png";

export const IntroductionSection = () => {
  return (
    <section className="relative w-full bg-[#16121f] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroSection}
        alt="Background gradient overlay"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121126]" />

      {/* Inner content wrapper */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[650px] gap-4 py-12">
          {/* Text */}
          <div className="text-white w-full md:max-w-lg text-center md:text-left">
            <h1 className="font-black text-[32px] sm:text-[38px] md:text-[52px] leading-tight">
              Trade Crypto only{" "}
              <br className="hidden sm:block" /> on Bitzaro
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#e1e1e1] leading-relaxed">
              Industry-grade infrastructure empowers you to{" "}
              <br className="hidden sm:block" />
              trade with confidence
            </p>
            <button
              className="mt-6 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#7815F9] rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 focus:ring-offset-[#16121f] transition-all duration-200 text-sm sm:text-base md:text-lg font-semibold"
              aria-label="Start trading crypto on Bitzaro"
            >
              Trade Crypto
            </button>
          </div>

          {/* Phone Mockup */}
          <div className="w-full flex justify-center md:justify-end">
            <img
              src={phoneMockUp}
              alt="Mobile phones showing crypto trading interface"
              className="w-[250px] sm:w-[300px] md:w-[450px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
