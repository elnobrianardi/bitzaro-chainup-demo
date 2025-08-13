import React from "react";
import { NavigationSection } from "../components/NavigationSection";
import LineChartCard from "../components/LineChartCard";
import { lineChartMockData } from "../data/lineChartData";
import TrendingTable from "../components/TrendingTable";
import { InsightsSectionDark } from "../components/InsightSectionDark";
import SearchBar from "../components/SearchBar";
import SpotTable from "../components/SpotTable";

const Spot = () => {
  return (
    <div
      className="min-h-screen flex flex-col w-full bg-[#16121f] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
    >
      <NavigationSection />

      <div className="flex-grow">
        <section className="grid gap-4 py-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-[1200px] mx-auto pt-[120px]">
          {lineChartMockData.map((item) => (
            <LineChartCard key={item.id} {...item} />
          ))}
        </section>

        <section className="max-w-[1200px] mx-auto">
          <SearchBar/>
          <div className="flex gap-4 text-gray-300 py-4">
            <div className="bg-gray-700 rounded-md py-1 px-2">All Market</div>
            <div className="bg-gray-700 rounded-md py-1 px-2">USDT</div>
            <div className="bg-gray-700 rounded-md py-1 px-2">BTC</div>
          </div>
          <SpotTable/>
          <InsightsSectionDark />
        </section>
      </div>
    </div>
  );
};



export default Spot;
