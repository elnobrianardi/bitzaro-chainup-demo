import React from "react";
import { NavigationSection } from "../components/NavigationSection";
import LineChartCard from "../components/LineChartCard";
import { lineChartMockData } from "../data/lineChartData";
import { InsightsSectionDark } from "../components/InsightSectionDark";
import SearchBar from "../components/SearchBar";
import FavouriteTable from "../components/FavouriteTable";

const Favourite = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-[#16121f] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]">
      <NavigationSection />

      <div className="flex-grow">
        {/* Chart grid */}
        <section className="grid gap-4 p-4 pt-[120px] grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-[1200px] mx-auto">
          {lineChartMockData.map((item) => (
            <LineChartCard key={item.id} {...item} />
          ))}
        </section>

        {/* Search + Filter + Table */}
        <section className="max-w-[1200px] mx-auto px-4">
          <div className="pt-4">
            <SearchBar />
          </div>

          <div className="flex flex-wrap gap-2 text-gray-300 pt-4 pb-8">
            <div className="bg-gray-700 rounded-md py-1 px-3">Spot</div>
            <div className="bg-gray-700 rounded-md py-1 px-3">Future</div>
          </div>

          <FavouriteTable />
          <InsightsSectionDark />
        </section>
      </div>
    </div>
  );
};

export default Favourite;
