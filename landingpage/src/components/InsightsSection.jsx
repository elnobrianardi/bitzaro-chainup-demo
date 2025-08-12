import React from "react";
import bitzaroLogoBlack from "../assets/Logo/BitzaroLogoBlack.png";

export const InsightsSection = () => {
  const footerData = {
    product: [
      { name: "Bitzaro", href: "#" },
      { name: "Future", href: "#" },
      { name: "Web3", href: "#" },
      { name: "Earn", href: "#" },
      { name: "Bitzaro Token", href: "#" },
    ],
    info: [
      { name: "Market", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Bitzaro Limit & Fees", href: "#" },
    ],
    learn: [
      { name: "News", href: "#" },
      { name: "Academy", href: "#" },
      { name: "Glossary", href: "#" },
      { name: "Blog", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Contact Us", href: "#" },
      { name: "Career", href: "#" },
    ],
  };

  return (
    <footer className="flex max-w-[1200px] mx-auto items-start gap-8 px-[92px] py-[42px]">
      <div className="flex flex-col w-[336px] items-start gap-6 relative">
        <img
          className="relative w-[122px] h-6 aspect-[5.1] object-cover"
          alt="Bitzaro logo RGB CL"
          src={bitzaroLogoBlack}
        />

        <address className="relative w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-[#5c5c5c] text-sm tracking-[0] leading-[21px] not-italic">
          Room 1046, 14/F, Solo Building
          <br />
          41–43 Carnarvon Road, Tsim Sha Tsui
          <br />
          Kowloon, Hong Kong
        </address>

        <button className="inline-flex flex-col items-center justify-center px-4 py-2 relative flex-[0_0_auto] bg-[#7815F9] rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primitives-brand-primary focus:ring-offset-2 transition-colors">
          <span className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm leading-[21px] relative w-fit text-center tracking-[0] whitespace-nowrap">
            Download Bitzaro App
          </span>
        </button>
      </div>

      <nav
        className="flex flex-col items-start gap-6 relative flex-1 grow"
        aria-label="Product navigation"
      >
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#5c5c5c] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
          PRODUCT
        </h3>

        <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
          {footerData.product.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="w-fit mt-[-1.00px] text-sm leading-[21px] whitespace-nowrap relative [font-family:'Roboto-Medium',Helvetica] font-medium text-black tracking-[0] hover:text-primitives-brand-primary transition-colors focus:outline-none focus:underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="flex flex-col items-start gap-6 relative flex-1 grow"
        aria-label="Information navigation"
      >
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#5c5c5c] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
          INFO
        </h3>

        <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
          {footerData.info.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-primitives-brand-primary transition-colors focus:outline-none focus:underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="flex flex-col items-start gap-6 relative flex-1 grow"
        aria-label="Learning navigation"
      >
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#5c5c5c] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
          LEARN
        </h3>

        <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
          {footerData.learn.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-primitives-brand-primary transition-colors focus:outline-none focus:underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <nav
        className="flex flex-col items-start gap-6 relative flex-1 grow"
        aria-label="Company navigation"
      >
        <h3 className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-[#5c5c5c] text-sm tracking-[0] leading-[21px] whitespace-nowrap">
          COMPANY
        </h3>

        <ul className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
          {footerData.company.map((item, index) => (
            <li key={index}>
              <a
                href={item.href}
                className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-black text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-primitives-brand-primary transition-colors focus:outline-none focus:underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
