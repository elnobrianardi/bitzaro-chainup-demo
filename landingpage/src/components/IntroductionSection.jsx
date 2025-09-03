import React from "react";
import heroSection from "../assets/Hero_Section/Hero_Section.png";
import phoneMockUp from "../assets/Phone_MockUp/PhoneMockUp.png";

export const IntroductionSection = () => {
  return (
    <section className="relative w-full min-h-[110vh] pt-30 bg-[#16121f] overflow-hidden">
      {/* Background Image */}
      <img
        src={heroSection}
        alt="Background gradient overlay"
        className="absolute inset-0 mx-auto my-auto w-full h-full max-w-[1920px] max-h-[900px] object-contain"
      />

      {/* Main Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,17,38,0)_34.38%,#121126_85.78%)]" />

      {/* Inner content wrapper */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row justify-between min-h-[650px] py-8 gap-10">
          {/* Text */}
          <div className="flex-1 text-white text-center md:text-left mt-20 gap-5">
            <h1 className="font-black text-[32px] sm:text-[38px] md:text-[52px] lg:text-[62px] leading-tight">
              Trade Crypto only <br className="hidden sm:block" /> on Bitzaro
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-[#e1e1e1] leading-relaxed">
              Industry-grade infrastructure empowers you to{" "}
              <br className="hidden sm:block" />
              trade with confidence
            </p>
            <button
              className="mt-11 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#7815F9] rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 font-poppins focus:ring-primitives-brand-primary focus:ring-offset-2 focus:ring-offset-[#16121f] transition-all duration-200 text-sm sm:text-base md:text-lg font-semibold"
              aria-label="Start trading crypto on Bitzaro"
            >
              Trade Crypto
            </button>
          </div>

          {/* Phone Mockup with its own gradient */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            {/* Phone Image */}
            <img
              src={phoneMockUp}
              alt="Mobile phones showing crypto trading interface"
              className="relative z-10 w-[200px] sm:w-[280px] md:w-[400px] lg:w-[583px] h-auto object-contain"
            />
            {/* Bottom Gradient Overlay (Desktop) */}
            <div
              className="absolute hidden md:block bottom-0 w-full h-2/3 
             bg-gradient-to-t from-[#121126] to-transparent 
             z-20 pointer-events-none"
            />
            <div
              className="absolute hidden md:block bottom-0 w-full h-1/8
             bg-gradient-to-t from-[#121126] to-[#121126]/5
             z-30 pointer-events-none"
            />

            {/* Bottom Gradient Overlay (in front of phone bottom for small screen)
            <div className="absolute md:hidden block bottom-5 w-full h-1/5 bg-gradient-to-t from-[#161220] via-[#161220]/95 to-transparent z-20 pointer-events-none" /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
