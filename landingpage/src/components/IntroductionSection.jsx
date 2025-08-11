import React from "react";
import heroSection from "../assets/Hero_Section/Hero_Section.png";
import phoneMockUp from "../assets/Phone_MockUp/PhoneMockUp.png";

export const IntroductionSection = () => {
  return (
    <section className="relative w-full h-[832px] bg-[#16121f]">
      {/* Background Image */}
      <img
        src={heroSection}
        alt="Background gradient overlay"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121126]" />

      {/* Text + Button Overlay */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-16 text-white">
        <h1 className="font-black text-[62px] leading-[68px]">
          Trade Crypto only <br /> on Bitzaro
        </h1>
        <p className="mt-4 text-xl text-[#e1e1e1] leading-[30px]">
          Industry-grade infrastructure empowers you to <br />
          trade with confidence
        </p>
        <button
          className="mt-6 px-5 py-3 bg-primitives-brand-primary rounded-md border border-primitives-brand-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 focus:ring-offset-[#16121f] transition-all duration-200"
          aria-label="Start trading crypto on Bitzaro"
        >
          <span className="font-semibold text-lg">Trade Crypto</span>
        </button>
      </div>

      {/* Phone Mockup */}
      <img
        src={phoneMockUp}
        alt="Mobile phones showing crypto trading interface"
        className="absolute right-16 bottom-0 w-[584px] h-[663px] object-contain z-10"
      />
    </section>
  );
};
