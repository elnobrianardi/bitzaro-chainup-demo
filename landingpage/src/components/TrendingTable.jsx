import React from 'react';
import { Link } from 'react-router-dom';
import btc from '../assets/Icon/Cryptocurrency_Icon/First_Page/BTC.png';
import eth from '../assets/Icon/Cryptocurrency_Icon/First_Page/ETH-bw.png';
import bnb from '../assets/Icon/Cryptocurrency_Icon/First_Page/bnb.png';
import doge from '../assets/Icon/Cryptocurrency_Icon/First_Page/DOGE_1.png';
import trx from '../assets/Icon/Cryptocurrency_Icon/First_Page/TRX_1.png';

const tableData = [
  { coin: 'BTC/USDT', src: btc, price: '$118,361.9789', change: '+18.37%', changeColor: 'text-green-500', turnover: '376,355,319.363' },
  { coin: 'ETH/USDT', src: eth, price: '$3,215.12', change: '-2.14%', changeColor: 'text-red-500', turnover: '89,142,553.88' },
  { coin: 'BNB/USDT', src: bnb, price: '$192.45', change: '+5.27%', changeColor: 'text-green-500', turnover: '42,518,002.15' },
  { coin: 'DOGE/USDT', src: doge, price: '$0.184', change: '-1.93%', changeColor: 'text-red-500', turnover: '12,004,512.33' },
  { coin: 'TRX/USDT', src: trx, price: '$192.45', change: '+5.27%', changeColor: 'text-green-500', turnover: '42,518,002.15' },
];

const TrendingTable = () => (
  <div className="py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-white text-2xl mb-6">Trending Coins</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full text-white border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left text-sm text-gray-500">Coins</th>
            <th className="px-4 py-2 text-left text-sm text-gray-500">Last Price</th>
            <th className="px-4 py-2 text-left text-sm text-gray-500">Change</th>
            <th className="px-4 py-2 text-left text-sm text-gray-500">24H Turnover</th>
            <th className="px-4 py-2 text-right text-sm text-gray-500">Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx} className="border-b border-gray-700 hover:bg-gray-800 transition-colors">
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <img src={row.src} className="w-7 h-7 flex-shrink-0" alt="" />
                  <span className="truncate">{row.coin}</span>
                </div>
              </td>
              <td className="px-4 py-3">{row.price}</td>
              <td className={`px-4 py-3 font-medium ${row.changeColor}`}>{row.change}</td>
              <td className="px-4 py-3 truncate">{row.turnover}</td>
              <td className="text-right px-4 py-3 text-[#913DFF] cursor-pointer hover:underline">Trade</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Link to="/spot">
      <p className="text-center underline text-gray-500 mt-4 cursor-pointer hover:text-gray-300">View All Coins</p>
    </Link>
  </div>
);

export default TrendingTable;
