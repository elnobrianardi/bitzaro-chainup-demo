import React from "react";
import heroSection from "../assets/Hero_Section/Hero_Section.png";
import phoneMockUp from "../assets/Phone_MockUp/PhoneMockUp.png";
import { Link } from "react-router-dom";

export const IntroductionSection = () => {
  return (
    <section className="relative w-full min-h-[110vh] pt-15 md:pt-30 bg-[#16121f] overflow-hidden">
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
          <div className="flex-1 text-white text-center md:text-left mt-0 md:mt-20 gap-5">
            <h1 className="font-black text-[32px] sm:text-[38px] lg:text-[52px] xl:text-[62px] leading-tight">
              Trade Crypto only <br className="block" /> on Bitzaro
            </h1>
            <p className="mt-4 text-base md:text-lg lg:text-xl text-[#e1e1e1] leading-relaxed">
              Industry-grade infrastructure empowers you to{" "}
              <br className="hidden sm:block" />
              trade with confidence
            </p>
            <Link to="/market">
              <button
                className="mt-11 px-5 sm:px-6 py-2.5 sm:py-3 bg-[#7815F9] rounded-md hover:bg-opacity-90 focus:outline-none cursor-pointer focus:ring-2 font-poppins focus:ring-primitives-brand-primary focus:ring-offset-2 focus:ring-offset-[#16121f] transition-all duration-200 text-sm sm:text-base md:text-lg font-semibold"
                aria-label="Start trading crypto on Bitzaro"
              >
                Trade Crypto
              </button>
            </Link>
          </div>

          {/* Phone Mockup with Perfectly Aligned Gradient */}
          <div className="flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-[280px] md:w-[400px] lg:w-[583px]">
              {/* Phone Image */}
              <img
                src={phoneMockUp}
                alt="Mobile phones showing crypto trading interface"
                className="relative z-10 w-full h-auto object-contain block"
              />

              {/* Gradient following the phone shape */}
              <div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{
                  WebkitMaskImage: `url(${phoneMockUp})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  WebkitMaskPosition: "center bottom",
                  maskImage: `url(${phoneMockUp})`,
                  maskRepeat: "no-repeat",
                  maskSize: "contain",
                  maskPosition: "center bottom",
                  background: "linear-gradient(to top, #121126 15%, transparent 85%)",
                  opacity: 0.90,
                  transform: "translateY(1px) scale(1.01)", 
                  filter: "blur(2px)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
