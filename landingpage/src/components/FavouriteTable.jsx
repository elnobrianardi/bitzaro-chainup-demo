import React from "react";
import btc from "../assets/Icon/Cryptocurrency_Icon/Third_Page/BTC.png";
import eth from "../assets/Icon/Cryptocurrency_Icon/Third_Page/ETH-bw.png";
import bnb from "../assets/Icon/Cryptocurrency_Icon/Third_Page/bnb.png";
import xrp from "../assets/Icon/Cryptocurrency_Icon/Third_Page/xrp.png"; 
import sol from "../assets/Icon/Cryptocurrency_Icon/Third_Page/SOL.png"; 
import starYellow from "../assets/Icon/Arrow/kid_star.png";

const tableData = [
  { coin: "BTC/USDT", src: btc, price: "$118,361.9789", high: "$120,500", low: "$115,800", change: "+18.37%", changeColor: "text-green-500", turnover: "376,355,319.363" },
  { coin: "ETH/USDT", src: eth, price: "$3,215.12", high: "$3,400", low: "$3,100", change: "-2.14%", changeColor: "text-red-500", turnover: "89,142,553.88" },
  { coin: "BNB/USDT", src: bnb, price: "$192.45", high: "$200.00", low: "$185.30", change: "+5.27%", changeColor: "text-green-500", turnover: "42,518,002.15" },
  { coin: "XRP/USDT", src: xrp, price: "$0.654", high: "$0.680", low: "$0.640", change: "-1.20%", changeColor: "text-red-500", turnover: "15,234,512.33" },
  { coin: "SOL/USDT", src: sol, price: "$32.45", high: "$33.80", low: "$31.70", change: "+3.12%", changeColor: "text-green-500", turnover: "25,518,002.15" },
];

const FavouriteTable = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6">
      <h2 className="text-white text-xl sm:text-2xl mb-4 sm:mb-6">Trending Coins</h2>
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <table className="min-w-full text-white border-collapse">
            <thead>
              <tr>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Coins</th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Last Price</th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500 hidden sm:table-cell">High</th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500 hidden sm:table-cell">Low</th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Change</th>
                <th className="px-2 sm:px-4 py-2 text-left text-xs sm:text-sm text-gray-500 hidden md:table-cell">24H Turnover</th>
                <th className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="px-2 sm:px-4 py-2">
                    <div className="flex gap-2 sm:gap-3 items-center">
                      <img src={starYellow} alt="" className="w-4 h-4 sm:w-4 sm:h-4" />
                      <img src={row.src} className="w-6 h-6 sm:w-7 sm:h-7" alt="" />
                      <span className="text-xs sm:text-sm">{row.coin}</span>
                    </div>
                  </td>
                  <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm">{row.price}</td>
                  <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:table-cell">{row.high}</td>
                  <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm hidden sm:table-cell">{row.low}</td>
                  <td className={`px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium ${row.changeColor}`}>{row.change}</td>
                  <td className="px-2 sm:px-4 py-2 text-xs sm:text-sm hidden md:table-cell">{row.turnover}</td>
                  <td className="px-2 sm:px-4 py-2 text-right text-xs sm:text-sm text-[#913DFF] cursor-pointer hover:underline">Trade</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FavouriteTable;
