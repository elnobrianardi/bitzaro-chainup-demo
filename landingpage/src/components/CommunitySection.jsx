import React from "react";
import ADA from "../assets/Currency_Container/Frame_15.png";
import BTC from "../assets/Currency_Container/Frame_2.png";
import COMP from "../assets/Currency_Container/Frame_18.png";
import ENJ from "../assets/Currency_Container/Frame_20.png";
import ETHBw from "../assets/Currency_Container/Frame_13.png";
import LTC from "../assets/Currency_Container/Frame_11.png";
import SOL from "../assets/Currency_Container/Frame_19.png";
import UNI from "../assets/Currency_Container/Frame_14.png";
import avax from "../assets/Currency_Container/Frame_12.png";
import bnb from "../assets/Currency_Container/Frame_8.png";
import dodge from "../assets/Currency_Container/Frame_15.png";
import xrp from "../assets/Currency_Container/Frame_10.png";

export const CommunitySection = () => {
  const cryptoIcons = [
    COMP, bnb, BTC, dodge, xrp, LTC,
    ETHBw, UNI, ADA, ENJ, SOL, avax
  ];

  const CryptoImage = ({ src }) => (
    <div className="min-w-max p-3">
      <img
        className="w-[224px] h-[52px] object-contain"
        src={src}
        alt="crypto icon"
      />
    </div>
  );

  return (
    <section className="overflow-hidden w-full py-6">
      {/* First row */}
      <div className="flex animate-marquee gap-6">
        {[...cryptoIcons, ...cryptoIcons].map((icon, index) => (
          <CryptoImage key={`row1-${index}`} src={icon} />
        ))}
      </div>

      {/* Second row with offset */}
      <div className="flex animate-marquee-reverse gap-6 mt-4 pl-10">
        {[...cryptoIcons, ...cryptoIcons].map((icon, index) => (
          <CryptoImage key={`row2-${index}`} src={icon} />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 22s linear infinite;
        }
      `}</style>
    </section>
  );
};
