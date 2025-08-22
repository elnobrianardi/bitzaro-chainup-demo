import React from "react";
import { Link } from "react-router-dom";
import tableData from '../data/trendingTable'

const TrendingTable = () => (
  <div className="pt-8 pb-40 px-4">
    <h2 className="text-white text-xl sm:text-2xl mb-4 sm:mb-6">Trending Coins</h2>

    {/* Scrollable wrapper */}
    <div className="overflow-x-auto">
      <div className="min-w-max">
        <table className="min-w-full text-white border-collapse">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Coins</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Last Price</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm text-gray-500">Change</th>
              <th className="px-4 py-2 text-left text-xs sm:text-sm text-gray-500 hidden md:table-cell">24H Turnover</th>
              <th className="px-4 py-2 text-right text-xs sm:text-sm text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, idx) => (
              <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <img src={row.src} className="w-6 h-6 sm:w-7 sm:h-7" alt={row.coin} />
                    <span className="truncate text-xs sm:text-sm">{row.coin}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-xs sm:text-sm">{row.price}</td>
                <td className={`px-4 py-3 text-xs sm:text-sm font-medium ${row.changeColor}`}>{row.change}</td>
                <td className="px-4 py-3 text-xs sm:text-sm truncate hidden md:table-cell">{row.turnover}</td>
                <td className="text-right px-4 py-3 text-xs sm:text-sm text-[#913DFF] cursor-pointer hover:underline">Trade</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <Link to="/spot">
      <p className="text-center underline text-gray-500 mt-4 cursor-pointer hover:text-gray-300 text-xs sm:text-sm">
        View All Coins
      </p>
    </Link>
  </div>
);

export default TrendingTable;
