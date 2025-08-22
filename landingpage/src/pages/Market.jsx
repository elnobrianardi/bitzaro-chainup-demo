import React from "react";
import { NavigationSection } from "../components/NavigationSection";
import MarketHeroSection from "../components/MarketHeroSection";
import LineChartCard from "../components/LineChartCard";
import { lineChartMockData } from "../data/lineChartData";
import TrendingTable from "../components/TrendingTable";
import { InsightsSectionDark } from "../components/InsightSectionDark";

const Market = () => {
  
  return (
    <div className="w-full bg-black  px-4">
      <NavigationSection />

      <section className="pt-[80px] max-w-[1200px] mx-auto">
        <MarketHeroSection />
      </section>

      <section className="grid gap-4 pt-4 pb-10 grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full max-w-[1200px] mx-auto">
      {lineChartMockData.map((item) => (
        <LineChartCard key={item.id} {...item} />
      ))}
      </section>

      <section className="max-w-[1200px] mx-auto">
        <TrendingTable/>
        <InsightsSectionDark/>
      </section>
    </div>
  );
};

export default Market;
