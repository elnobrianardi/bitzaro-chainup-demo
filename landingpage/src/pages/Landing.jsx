import React from "react";
import { AppOverviewSection } from "../components/AppOverviewSection";
import { BitcoinInvestmentSection } from "../components/BitcoinInvestmentSection";
import { CommunitySection } from "../components/CommunitySection";
import { ComponentNodeSection } from "../components/ComponentNodeSection";
import { ContentWrapperSection } from "../components/ContentWrapperSection";
import { CryptoInsightsSection } from "../components/CryptoInsightsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeaderSection } from "../components/HeaderSection";
import { InsightsSection } from "../components/InsightsSectionWhite";
import { IntroductionSection } from "../components/IntroductionSection";
import { InvestmentInfoSection } from "../components/InvestmentInfoSection";
import { MainContentSection } from "../components/MainContentSection";
import { SafetyPrioritySection } from "../components/SafetyPrioritySection";
import { TradingExperienceSection } from "../components/TradingExperienceSection";
import downArrow from "../assets/Icon/Arrow/Vector-1.png";
import Dashboard from "../assets/Dashboard_Screen_Capture/Dashboard.png";

export const Landing = () => {
  return (
    <div className="w-full bg-white text-black">
      <HeaderSection />

      {/* Hero Section - full width */}
      <section className="w-full flex items-center">
        <IntroductionSection />
      </section>

      {/* One App Heading */}
      <section className="relative w-full bg-white z-0 md:z-30">
        <div className="max-w-[1200px] mx-auto text-center items-center justify-center px-4">
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 pt-16 pb-12 rounded-t-4xl w-full bg-white">
            <h2 className="text-5xl font-extrabold">
              One App, Endless Possibilities
            </h2>
          </div>
        </div>
      </section>

      {/* Trading Experience */}
      <section className="w-full flex justify-center items-center">
        <div className="max-w-[1200px] w-full py-24 flex flex-col gap-8 px-4">
          {/* Top section: side by side on md+ */}
          <div className="flex flex-col lg:flex-row w-full gap-8">
            <div className="w-full lg:w-1/2">
              <ContentWrapperSection />
            </div>
            <div className="w-full lg:w-1/2">
              <MainContentSection />
            </div>
          </div>

          {/* Inner sections */}
          <div className="flex flex-col lg:flex-row w-full gap-8">
            {/* Left column: Features + AppOverview */}
            <div className="flex flex-col gap-8 w-full lg:w-1/2">
              <FeaturesSection />
              <AppOverviewSection />
            </div>

            {/* Right column: ComponentNode */}
            <div className="flex flex-col w-full lg:w-1/2">
              <ComponentNodeSection />
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Web Trading Experience */}
      <section className="w-full bg-gradient-to-t from-[#F6F5F7] to-white">
        <div className="max-w-[1200px] mx-auto text-center py-8 px-4">
          <h2 className="text-5xl font-extrabold leading-[110%]">
            The Ultimate <br />  Web Trading Experience
          </h2>
          <p className="text-2xl text-[#1C1C1C] mt-4 font-medium">
            Enjoy Bitzaro right from your desktop
          </p>
          <button className="mt-12 px-14 py-3 bg-[#7815F9] text-white font-semibold rounded-md">
            Launch on Desktop
          </button>
          <img
            src={Dashboard}
            alt="Dashboard"
            className="max-w-5xl w-full mt-10 rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Community Section - background */}
      <section className="w-full bg-[#F6F5F7]">
        <div className="mx-auto pt-8 pb-16">
          <CommunitySection />
        </div>
      </section>

      {/* Bitcoin Investment */}
      <section className="w-full px-4">
        <div className="max-w-[1200px] mx-auto py-16">
          <div className="flex gap-4 items-start">
            <h2 className="text-5xl font-extrabold pb-16 text-left">
              If you'd invested in <span className="underline">Bitcoin</span>
            </h2>
            <img src={downArrow} alt="" className="mt-8 w-6 h-4 my-4" />
          </div>

          <BitcoinInvestmentSection />
          <p className="text-sm text-gray-500 mt-4 text-center">
            Based on data from 1 March 2020 - 1 March 2024. Past performances do
            not guarantee the future.
          </p>
        </div>
      </section>

      {/* Safety & Investment */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto py-16 px-4">
          <h2 className="text-5xl font-extrabold mt-12 pb-14">
            Your Safety, Our Priority
          </h2>
          <InvestmentInfoSection />
          <SafetyPrioritySection />
        </div>
      </section>

      {/* Crypto Insights - background */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto text-center py-16 px-4">
          <h2 className="text-5xl font-extrabold text-left">
            Crypto Latest Insights
          </h2>
          <CryptoInsightsSection />
        </div>
        <div className="w-full">
          <TradingExperienceSection />
          <div className="max-w-[1200px] mx-auto text-center">
            <InsightsSection />
          </div>
        </div>
      </section>
    </div>
  );
};
