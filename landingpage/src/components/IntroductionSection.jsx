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

      {/* Content Container */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between min-h-[700px]">
        
        {/* Text */}
        <div className="text-white max-w-lg text-center md:text-left">
          <h1 className="font-black text-[42px] md:text-[52px] leading-tight">
            Trade Crypto only <br /> on Bitzaro
          </h1>
          <p className="mt-4 text-xl text-[#e1e1e1] leading-relaxed">
            Industry-grade infrastructure empowers you to <br />
            trade with confidence
          </p>
          <button
            className="mt-6 px-6 py-3 bg-[#7815F9] rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 focus:ring-offset-[#16121f] transition-all duration-200"
            aria-label="Start trading crypto on Bitzaro"
          >
            <span className="font-semibold text-lg">Trade Crypto</span>
          </button>
        </div>

        {/* Phone Mockup */}
        <div className="hidden md:block">
          <img
            src={phoneMockUp}
            alt="Mobile phones showing crypto trading interface"
            className="w-[450px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
