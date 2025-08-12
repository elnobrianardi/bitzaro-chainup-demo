import React from "react";
import custodian from "../assets/Icon/Your Safety, Our Priority/Icon4.png";
import biometric from "../assets/Icon/Your Safety, Our Priority/Icon3.png";

export const SafetyPrioritySection = () => {
  const safetyFeatures = [
    {
      id: 1,
      icon: biometric,
      title: "Biometric Logins",
      description:
        "With fingerprint and face ID, only you have access to your Bitzaro account.",
    },
    {
      id: 2,
      icon: custodian,
      title: "Word Class Custodian",
      description:
        "Assets are securely stored in PT Kustodian Koin Indonesia (ICC) and Fireblocks, using world-class technology.",
    },
  ];

  return (
    <section
      className="flex w-[1179px] items-start gap-[62px] left-[131px]"
      aria-labelledby="safety-priority-heading"
    >
      {safetyFeatures.map((feature) => (
        <article
          key={feature.id}
          className="flex flex-col items-start gap-4 relative flex-1 grow"
        >
          <img
            className="relative flex-[0_0_auto] h-[58px] w-[58px]"
            alt={`${feature.title} icon`}
            src={feature.icon}
            role="img"
          />

          <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-SemiBold',Helvetica] font-semibold text-[#1b1b1b] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
              {feature.title}
            </h3>

            <p className="text-left relative self-stretch [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-xl tracking-[0] leading-[30px]">
              {feature.description}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};
