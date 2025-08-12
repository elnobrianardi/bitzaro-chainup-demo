import React from "react";
import x337812 from "../assets/Latest_Insight/33782.png";
import x33781 from "../assets/Latest_Insight/33781.png";
import VrTrading212 from "../assets/Latest_Insight/26234205_vr_trading_21.png";
import VrTrading21 from "../assets/Latest_Insight/26234205_vr_trading_22.png";
import defi12 from "../assets/Latest_Insight/defi2.png";
import defi1 from "../assets/Latest_Insight/defi1.png";
import purpleArrow from '../assets/Icon/Arrow/Vector.png'

export const CryptoInsightsSection = () => {
  const academyArticles = [
    {
      id: 1,
      image: x33781,
      title: "Weekly Signal Bitzaro X Volubit – July 16, 2025",
      alt: "Element",
    },
    {
      id: 2,
      image: VrTrading21,
      title:
        "Market Analysis Jul 14th, 2025: Bitcoin Continues to Hit New All-Time Highs, Targeting $136k in July",
      alt: "Element vr trading",
    },
    {
      id: 3,
      image: defi1,
      title:
        "Top DeFi Lending Protocols in Web3: Strategies, Benefits & Crypto Loan Risks",
      alt: "Defi",
    },
    {
      id: 4,
      image: defi12,
      title:
        "Top DeFi Lending Protocols in Web3: Strategies, Benefits & Crypto Loan Risks",
      alt: "Defi",
    },
    {
      id: 5,
      image: x337812,
      title: "Weekly Signal Bitzaro X Volubit – July 16, 2025",
      alt: "Element",
    },
    {
      id: 6,
      image: VrTrading212,
      title:
        "Market Analysis Jul 14th, 2025: Bitcoin Continues to Hit New All-Time Highs, Targeting $136k in July",
      alt: "Element vr trading",
    },
  ];

  const newsItems = [
    {
      id: 1,
      title: "DOGE Rockets 5% Today — Will This Rally Turn Into a Wild Ride?",
    },
    {
      id: 2,
      title:
        "3 Crypto that Moves Up You Should Watch Tomorrow Friday July 18, 2025",
    },
    {
      id: 3,
      title:
        "Bitcoin Holds Strong at $118K — Is a Break Above $150K Coming If the GENIUS Act Passes?",
    },
    {
      id: 4,
      title:
        "Ethereum Skyrockets to $3.350 Today — Is This the Start of ETH's Next Massive Bull Run?",
    },
    {
      id: 5,
      title:
        "What are Commodity Futures: Examples of Usage, How They Work, and Futures in the Crypto World",
    },
  ];

  return (
    <section className="flex flex-col lg:flex-row items-stretch gap-8 text-left">
      {/* Academy */}
      <article className="flex flex-col gap-5 p-6 flex-[2.75] ">
        <header className="flex flex-col gap-2">
          <h2 className="text-left text-2xl font-medium text-black mb-2">
            ❘ Bitzaro Academy
          </h2>
          <p className="text-[#323232] text-xl text-left">
            Discover the easiest way to learn crypto.
          </p>
        </header>

        <div className="flex flex-col gap-6 w-full">
          {[0, 1].map((row) => (
            <div key={row} className="flex gap-6 w-full">
              {academyArticles.slice(row * 3, row * 3 + 3).map((article) => (
                <article
                  key={article.id}
                  className="flex flex-col flex-1 bg-[#f6f7f8] rounded-lg overflow-hidden"
                >
                  <img
                    className="w-full aspect-[1.59] object-cover"
                    alt={article.alt}
                    src={article.image}
                  />
                  <div className="p-2">
                    <h3 className="font-medium text-[#1b1b1b] text-lg leading-[22.5px] line-clamp-2">
                      {article.title}
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>

        <footer className="flex items-center gap-1">
          <a
            href="#"
            className="font-medium text-[#7815f9] text-base whitespace-nowrap"
          >
            Explore Bitzaro Academy
          </a>
          <div>
            <img src={purpleArrow} className="w-3 h-4 ml-2" alt="" />
          </div>
          <div className="w-6 h-6 bg-[url(/chevron-forward.png)] bg-contain bg-no-repeat" />
        </footer>
      </article>

      {/* News */}
      <aside className="flex flex-col gap-7 p-6 flex-[1.25] rounded-2xl border border-[#dcdcdc] bg-white">
        <header className="flex flex-col gap-2">
          <h2 className="text-2xl font-medium text-black">❘ Bitzaro News</h2>
          <p className="text-[#323232] text-xl">
            Get the latest crypto update.
          </p>
        </header>

        <nav className="flex flex-col">
          {newsItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <article className="flex items-center gap-4 py-4">
                <div className="w-[26px] font-extrabold text-[#dde1e7] text-[32px] text-center">
                  {item.id}
                </div>
                <h3 className="flex-1 font-semibold text-[#1b1b1b] text-base leading-6 line-clamp-2">
                  {item.title}
                </h3>
              </article>

              {/* Dotted underline except for last item */}
              {index < newsItems.length - 1 && (
                <div className="border-t-2 border-dotted border-[#dcdcdc] my-2"></div>
              )}
            </React.Fragment>
          ))}
        </nav>

        <footer className="flex items-center gap-1">
          <a
            href="#"
            className="font-medium text-[#7815f9] text-base whitespace-nowrap"
          >
            Read More on Bitzaro News
          </a>
          <div>
            <img src={purpleArrow} className="w-3 h-4 ml-2" alt="" />
          </div>
          <div className="w-6 h-6 bg-[url(/chevron-forward-2.png)] bg-contain bg-no-repeat" />
        </footer>
      </aside>
    </section>
  );
};
