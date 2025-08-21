import React from "react";
import starYellow from "../assets/Icon/Arrow/kid_star.png";
import tableData from "../data/favouriteTableData";


const FavouriteTable = () => {
  return (
    <div className="py-8">
      <h2 className="text-white text-xl sm:text-2xl mb-4 sm:mb-6">Trending Coins</h2>

      {/* Scrollable wrapper */}
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <table className="min-w-full text-white border-collapse">
            <thead>
              <tr>
                <th className="py-2 text-left text-xs sm:text-sm text-gray-500">Coins</th>
                <th className="py-2 text-left text-xs sm:text-sm text-gray-500">Last Price</th>
                <th className="py-2 text-left text-xs sm:text-sm text-gray-500 hidden sm:table-cell">High</th>
                <th className="py-2 text-left text-xs sm:text-sm text-gray-500 hidden sm:table-cell">Low</th>
                <th className="py-2 text-left text-xs sm:text-sm text-gray-500">Change</th>
                <th className="py-2 text-left text-xs sm:text-sm text-gray-500 hidden md:table-cell">24H Turnover</th>
                <th className="py-2 text-right text-xs sm:text-sm text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-700">
                  <td className="py-2">
                    <div className="flex gap-2 sm:gap-3 items-center">
                      <img src={starYellow} alt="star" className="w-4 h-4 sm:w-4 sm:h-4" />
                      <img src={row.src} className="w-6 h-6 sm:w-7 sm:h-7" alt={row.coin} />
                      <span className="text-xs sm:text-sm">{row.coin}</span>
                    </div>
                  </td>
                  <td className="py-2 text-xs sm:text-sm">{row.price}</td>
                  <td className="py-2 text-xs sm:text-sm hidden sm:table-cell">{row.high}</td>
                  <td className="py-2 text-xs sm:text-sm hidden sm:table-cell">{row.low}</td>
                  <td className={`py-2 text-xs sm:text-sm font-medium ${row.changeColor}`}>{row.change}</td>
                  <td className="py-2 text-xs sm:text-sm hidden md:table-cell">{row.turnover}</td>
                  <td className="py-2 text-right text-xs sm:text-sm text-[#913DFF] cursor-pointer hover:underline">Trade</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Matching "Load More" button */}
      <div className="flex justify-center">
        <button className="my-6 sm:my-8 px-4 sm:px-5 py-2 rounded-xl bg-gray-700 cursor-pointer hover:bg-gray-500">
          <p className="text-center text-white text-xs sm:text-sm">
            Load More Coins
          </p>
        </button>
      </div>
    </div>
  );
};

export default FavouriteTable;
