import React from "react";
import icon1 from "../assets/Icon/Your Safety, Our Priority/Icon1.png";
import icon2 from "../assets/Icon/Your Safety, Our Priority/Icon2.png";

export const InvestmentInfoSection = () => {
  const investmentFeatures = [
    {
      id: 1,
      icon: icon1,
      title: "Registered and Licensed",
      description:
        "Officially registered and supervised by OJK and/or BAPPEBTI, ISO 27001:2022 certified.",
    },
    {
      id: 2,
      icon: icon2,
      title: "2-Factor Authentication",
      description:
        "Google Authenticator ensures the security of your transactions on Bitzaro.",
    },
  ];

  return (
    <section
      className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto items-start md:items-start gap-10 md:gap-[62px] my-8 px-4"
      role="region"
      aria-labelledby="investment-info-heading"
    >
      <h2 id="investment-info-heading" className="sr-only">
        Investment Security Features
      </h2>

      {investmentFeatures.map((feature) => (
        <article
          key={feature.id}
          className="flex flex-col items-start gap-4 flex-1"
        >
          <div
            className="inline-flex items-center justify-center p-2 rounded-full overflow-hidden"
            role="img"
            aria-label={`${feature.title} icon`}
          >
            <img
              className="w-[58px] h-[58px]"
              src={feature.icon}
              alt={`${feature.title} icon`}
            />
          </div>

          <div className="flex flex-col items-start gap-2 w-full">
            <h3 className="font-semibold text-[#1b1b1b] text-xl sm:text-2xl leading-[30px]">
              {feature.title}
            </h3>
            <p className="text-left font-normal text-black text-base sm:text-xl leading-[30px]">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
