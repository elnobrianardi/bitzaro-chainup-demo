import React from "react";
import x337812 from "../assets/Latest_Insight/33782.png";
import x33781 from "../assets/Latest_Insight/33781.png";
import VrTrading212 from "../assets/Latest_Insight/26234205_vr_trading_21.png";
import VrTrading21 from "../assets/Latest_Insight/26234205_vr_trading_22.png";
import defi12 from "../assets/Latest_Insight/defi2.png";
import defi1 from "../assets/Latest_Insight/defi1.png";

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
    <section className="flex w-[1180px] items-start gap-[42px]">
      <article className="gap-5 pt-6 pb-0 px-0 relative flex-1 grow flex flex-col items-start rounded-2xl">
        <header className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] mr-[-44.00px]">
          <h2 className="w-[766px] mt-[-1.00px] text-2xl leading-[30px] relative [font-family:'Roboto-Medium',Helvetica] font-medium text-black tracking-[0]">
            ❘&nbsp;&nbsp;Bitzaro Academy
          </h2>

          <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#323232] text-xl leading-[30px] relative w-fit tracking-[0] whitespace-nowrap">
            Discover the easiest way to learn crypto.
          </p>
        </header>

        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {academyArticles.slice(0, 3).map((article) => (
              <article
                key={article.id}
                className="flex flex-col items-center justify-center relative flex-1 grow bg-[#f6f7f8] rounded-lg"
              >
                <img
                  className="relative self-stretch w-full aspect-[1.59]"
                  alt={article.alt}
                  src={article.image}
                />

                <div className="flex items-center justify-center gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex-1 mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#1b1b1b] text-lg tracking-[0] leading-[22.5px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
            {academyArticles.slice(3, 6).map((article) => (
              <article
                key={article.id}
                className="flex flex-col items-center justify-center relative flex-1 grow bg-[#f6f7f8] rounded-lg"
              >
                <img
                  className="relative self-stretch w-full aspect-[1.59]"
                  alt={article.alt}
                  src={article.image}
                />

                <div className="flex items-center justify-center gap-2.5 p-2 relative self-stretch w-full flex-[0_0_auto]">
                  <h3 className="relative flex-1 mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#1b1b1b] text-lg tracking-[0] leading-[22.5px] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                    {article.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </div>

        <footer className="items-center gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
          <a
            href="#"
            className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#7815f9] text-base text-right leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] relative w-fit tracking-[0] whitespace-nowrap"
          >
            Explore Bitzaro Academy
          </a>

          <div className="relative w-6 h-6 bg-[url(/chevron-forward.png)] bg-[100%_100%]" />
        </footer>
      </article>

      <aside className="flex-col w-[416px] items-start gap-7 p-6 rounded-2xl border border-solid border-[#dcdcdc] flex relative">
        <header className="inline-flex flex-col items-start gap-2 relative flex-[0_0_auto] mr-[-22.00px]">
          <h2 className="w-[390px] mt-[-1.00px] text-2xl leading-[30px] relative [font-family:'Roboto-Medium',Helvetica] font-medium text-black tracking-[0]">
            ❘&nbsp;&nbsp;Bitzaro News
          </h2>

          <p className="[font-family:'Roboto-Regular',Helvetica] font-normal text-[#323232] text-xl leading-[30px] relative w-fit tracking-[0] whitespace-nowrap">
            Get the latest crypto update.
          </p>
        </header>

        <nav className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          {newsItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <article className="flex items-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[26px] [font-family:'Inter-ExtraBold',Helvetica] font-extrabold text-[#dde1e7] text-[32px] text-center tracking-[0] leading-10">
                  {item.id}
                </div>

                <h3 className="relative flex-1 mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#1b1b1b] text-base tracking-[0] leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]">
                  {item.title}
                </h3>
              </article>

            </React.Fragment>
          ))}
        </nav>

        <footer className="items-center gap-1 self-stretch w-full flex-[0_0_auto] flex relative">
          <a
            href="#"
            className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#7815f9] text-base text-right leading-6 overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] relative w-fit tracking-[0] whitespace-nowrap"
          >
            Read More on Bitzaro News
          </a>

          <div className="relative w-6 h-6 bg-[url(/chevron-forward-2.png)] bg-[100%_100%]" />
        </footer>
      </aside>
    </section>
  );
};
