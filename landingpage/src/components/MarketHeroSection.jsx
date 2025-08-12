import React from 'react'
import HeroImage from '../assets/Hero_Section/Image_Inside_Banner_(Hero_Section).png'
const MarketHeroSection = () => {
  return (
    <div className='flex py-16 items-center justify-center'>
          <div className='text-white py-16 gap-8'>
            <h2 className='text-[52px] font-bold'>Welcome to Bitzaro</h2>
            <p>Engineering the Digital Economy</p>
            <button className='rounded py-2 px-5 bg-[#7815F9] my-8'>
              Sign Up
            </button>
          </div>
          <div>
            <img src={HeroImage} alt="" />
          </div>
        </div>
  )
}

export default MarketHeroSection