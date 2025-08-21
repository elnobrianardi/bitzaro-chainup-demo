import React, { useEffect, useRef, useState } from "react";
import spotTableData from "../data/spotTableData";

export const CommunitySection = () => {
  const [rowWidth, setRowWidth] = useState(0);
  const rowRef = useRef(null);

  useEffect(() => {
    if (rowRef.current) {
      // get width of ONE set (not the doubled one)
      setRowWidth(rowRef.current.scrollWidth);
    }
  }, []);

  const CryptoImage = ({ src, coin, price, change, changeColor }) => (
    <div className="min-w-max p-3 flex items-center gap-3 bg-white rounded-lg px-4">
      <img className="w-7 h-7 object-contain" src={src} alt={coin} />
      <div className="flex gap-5">
        <span className="text-[#323232] text-sm font-semibold">
          {coin.replace("/USDT", "")}
        </span>
        <span className="text-[#323232] font-semibold text-sm">{price}</span>
        <span className={`text-xs font-medium ${changeColor}`}>{change}</span>
      </div>
    </div>
  );

  // Slower speed: 40px per second
  const speed = 40;
  const duration = rowWidth / speed;

  const Row = ({ reverse, extraDelay = 0 }) => (
    <div
      className="flex whitespace-nowrap"
      style={{
        animation: rowWidth
          ? `${reverse ? "marquee-reverse" : "marquee"} ${
              duration + extraDelay
            }s linear infinite`
          : "none",
        "--rowWidth": `${rowWidth}px`, 
      }}
    >
      {/* First copy */}
      <div className="flex gap-6 pr-6" ref={!reverse ? rowRef : null}>
        {spotTableData.map((coin, i) => (
          <CryptoImage key={`row-${reverse ? "rev" : "fwd"}-${i}`} {...coin} />
        ))}
      </div>

      {/* Second copy */}
      <div className="flex gap-6 pr-6">
        {spotTableData.map((coin, i) => (
          <CryptoImage
            key={`row-dup-${reverse ? "rev" : "fwd"}-${i}`}
            {...coin}
          />
        ))}
      </div>
    </div>
  );

  return (
    <section className="overflow-hidden w-full py-6">
      <Row reverse={false} />
      <div className="mt-4 pl-10">
        <Row reverse={true} extraDelay={2} />
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--rowWidth))); }
        }
        @keyframes marquee-reverse {
          0%   { transform: translateX(calc(-1 * var(--rowWidth))); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};
