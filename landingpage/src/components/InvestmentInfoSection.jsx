import React from "react";
import icon1 from '../assets/Icon/Your Safety, Our Priority/Icon1.png'
import icon2 from '../assets/Icon/Your Safety, Our Priority/Icon2.png'

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
      className="flex w-[1178px] items-center gap-[62px]"
      role="region"
      aria-labelledby="investment-info-heading"
    >
      <h2 id="investment-info-heading" className="sr-only">
        Investment Security Features
      </h2>

      {investmentFeatures.map((feature) => (
        <article
          key={feature.id}
          className="flex flex-col items-start gap-4 relative flex-1 grow"
        >
          <div
            className="inline-flex items-center justify-center gap-2.5 p-2 relative flex-[0_0_auto] rounded-[50px] overflow-hidden"
            role="img"
            aria-label={`${feature.title} icon`}
          >
            <img
              className="w-[42px] h-[42px]"
              src={feature.icon}
              alt={`${feature.title} icon`}
            />
          </div>

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#1b1b1b] text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
              {feature.title}
            </h3>
            <p className="self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl leading-[30px] relative tracking-[0]">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
