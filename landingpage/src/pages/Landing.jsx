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
    <div className="bg-white max-w-[1200px] flex flex-col items-center text-black">
      {/* Global paddings and spacing applied here */}

      {/* Header */}
      <HeaderSection />

      {/* Hero Section */}
      <section className="w-full text-center py-16 px-4">
        <IntroductionSection />
        <h2 className="text-5xl font-extrabold mt-8">
          One App, Endless Possibilities
        </h2>
      </section>

      {/* Trading Experience */}
      <section className="text-center py-16 px-4 grid grid-cols-2">
        <ContentWrapperSection />
        <MainContentSection />
        
        <FeaturesSection />
        <ComponentNodeSection />
        <AppOverviewSection />
        
      </section>

<section>
     <h2 className="text-5xl font-extrabold">
          The Ultimate Web Trading Experience
        </h2>
        <p className="text-2xl text-gray-800 mt-4">
          Enjoy Bitzaro right from your desktop
        </p>
        <button className="mt-6 px-8 py-4 bg-primitives-brand-primary text-white font-semibold rounded-md">
          Launch on Desktop
        </button>

        <img
          src={Dashboard}
          alt="Dashboard"
          className="max-w-5xl w-full mt-8 rounded-lg shadow-lg"
        />
</section>
      {/* Community */}
      <section className="w-full py-16 px-4 bg-gray-50">
        <CommunitySection />
      </section>

      {/* Bitcoin Investment */}
      <section className="w-full text-center py-16 px-4">
        <h2 className="text-5xl font-extrabold">
          If you'd invested in <span className="underline">Bitcoin</span>
        </h2>
        <BitcoinInvestmentSection />
      </section>

      {/* Safety & Investment */}
      <section className="w-full text-center py-16 px-4">
        <h2 className="text-5xl text-black font-extrabold mt-12">
          Your Safety, Our Priority
        </h2>
        <InvestmentInfoSection />
        <p className="text-sm text-gray-500 mt-4">
          Based on data from 1 March 2020 - 1 March 2024. Past performances do
          not guarantee the future.
        </p>
        <SafetyPrioritySection />
      </section>

      {/* Crypto Insights */}
      <section className="w-full text-center py-16 px-4 bg-gray-50">
        <h2 className="text-5xl font-extrabold">Crypto Latest Insights</h2>
        <CryptoInsightsSection />
        <TradingExperienceSection />
        <InsightsSection />
      </section>
    </div>
  );
};
