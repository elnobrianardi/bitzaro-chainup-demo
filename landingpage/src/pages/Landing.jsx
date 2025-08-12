import React from "react";
import { AppOverviewSection } from "../components/AppOverviewSection";
import { BitcoinInvestmentSection } from "../components/BitcoinInvestmentSection";
import { CommunitySection } from "../components/CommunitySection";
import { ComponentNodeSection } from "../components/ComponentNodeSection";
import { ContentWrapperSection } from "../components/ContentWrapperSection";
import { CryptoInsightsSection } from "../components/CryptoInsightsSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { HeaderSection } from "../components/HeaderSection";
import { InsightsSection } from "../components/InsightsSection";
import { IntroductionSection } from "../components/IntroductionSection";
import { InvestmentInfoSection } from "../components/InvestmentInfoSection";
import { MainContentSection } from "../components/MainContentSection";
import { SafetyPrioritySection } from "../components/SafetyPrioritySection";
import { TradingExperienceSection } from "../components/TradingExperienceSection";
import Dashboard from "../assets/Dashboard_Screen_Capture/Dashboard.png";

export const Landing = () => {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      <HeaderSection />

      {/* Hero Section - full width */}
      <section className="w-full">
        <IntroductionSection />
      </section>

      {/* One App Heading */}
      <section className="max-w-[1200px] mx-auto text-center pt-16">
        <h2 className="text-5xl font-extrabold">
          One App, Endless Possibilities
        </h2>
      </section>

      {/* Trading Experience */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto w-full py-16 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <ContentWrapperSection />
          <MainContentSection />
          <div className="flex gap-8">
            <div className="flex flex-col gap-8">
              <FeaturesSection />
              <AppOverviewSection />
            </div>
            <div>
              <ComponentNodeSection />
            </div>
          </div>
        </div>
      </section>

      {/* Ultimate Web Trading Experience */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto text-center pb-16 px-4">
          <h2 className="text-5xl font-extrabold">
            The Ultimate Web <br /> Trading Experience
          </h2>
          <p className="text-2xl text-gray-800 mt-4">
            Enjoy Bitzaro right from your desktop
          </p>
          <button className="mt-6 px-8 py-4 bg-[#7815F9] text-white font-semibold rounded-md">
            Launch on Desktop
          </button>
          <img
            src={Dashboard}
            alt="Dashboard"
            className="max-w-5xl w-full mt-8 rounded-lg shadow-lg mx-auto"
          />
        </div>
      </section>

      {/* Community Section - background */}
      <section className="w-full bg-gray-150">
        <div className="mx-auto py-16 px-4">
          <CommunitySection />
        </div>
      </section>

      {/* Bitcoin Investment */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto text-center py-16 px-4">
          <h2 className="text-5xl font-extrabold pb-16 text-left">
            If you'd invested in <span className="underline">Bitcoin</span> <span className="text-light">v</span>
          </h2>
          <BitcoinInvestmentSection />
          <p className="text-sm text-gray-500 mt-4">
            Based on data from 1 March 2020 - 1 March 2024. Past performances do
            not guarantee the future.
          </p>
        </div>
      </section>

      {/* Safety & Investment */}
      <section className="w-full">
        <div className="max-w-[1200px] mx-auto text-center py-16 px-4">
          <h2 className="text-5xl font-extrabold mt-12">
            Your Safety, Our Priority
          </h2>
          <InvestmentInfoSection />
          <SafetyPrioritySection />
        </div>
      </section>

      {/* Crypto Insights - background */}
      <section className="w-full bg-gray-50">
        <div className="max-w-[1200px] mx-auto text-center py-16 px-4">
          <h2 className="text-5xl font-extrabold mb-16 text-left">Crypto Latest Insights</h2>
          <CryptoInsightsSection />
        </div>
        <div className="w-full max-auto text-center">
          <TradingExperienceSection />
          <InsightsSection />
        </div>
      </section>
    </div>
  );
};
