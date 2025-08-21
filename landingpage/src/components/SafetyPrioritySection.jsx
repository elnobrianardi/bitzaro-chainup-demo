import React from "react";
import custodian from "../assets/Icon/Your Safety, Our Priority/fingerprint 1.png";
import biometric from "../assets/Icon/Your Safety, Our Priority/Savings 1.png";

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
      title: "World Class Custodian",
      description:
        "Assets are securely stored in PT Kustodian Koin Indonesia (ICC) and Fireblocks, using world-class technology.",
    },
  ];

  return (
    <section
      className="flex flex-col md:flex-row w-full max-w-[1200px] mx-auto items-start gap-10 md:gap-[62px]"
      aria-labelledby="safety-priority-heading"
    >
      <h2 id="safety-priority-heading" className="sr-only">
        Safety Priority Features
      </h2>

      {safetyFeatures.map((feature) => (
        <article
          key={feature.id}
          className="flex flex-col items-start gap-4 flex-1"
        >
          <img
            className="h-10 w-10"
            alt={`${feature.title} icon`}
            src={feature.icon}
            role="img"
          />
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
