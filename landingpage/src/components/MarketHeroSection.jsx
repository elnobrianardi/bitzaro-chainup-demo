import React from 'react';
import HeroImage from '../assets/Hero_Section/Image_Inside_Banner_(Hero_Section).png';

const MarketHeroSection = () => {
  return (
    <section className="w-full flex flex-col md:flex-row items-center justify-center py-20 gap-8 ">
      {/* Text content */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left text-white gap-7 md:gap-6 md:w-1/2">
        <h2 className="text-4xl md:text-[52px] font-bold">Welcome to Bitzaro</h2>
        <p className="text-lg md:text-xl">Engineering the Digital Economy</p>
        <button className="rounded py-2 px-5 bg-[#7815F9] mt-4 md:mt-3.5">
          Sign Up
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <img
          src={HeroImage}
          alt="Bitzaro Hero"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default MarketHeroSection;
