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
    <footer className="max-w-full mx-auto justify-evenly py-10 flex md:flex-row flex-col gap-10">
      {/* Logo + Address + Button */}
      <div className="flex flex-col gap-6 items-center md:items-start md:text-left self-center">
        <img
          className="w-[122px] h-auto"
          alt="Bitzaro logo"
          src={bitzaroLogoBlack}
        />

        <address className="font-medium text-[#5c5c5c] text-sm leading-[21px] not-italic">
          Room 1046, 14/F, Solo Building
          <br />
          41–43 Carnarvon Road, Tsim Sha Tsui
          <br />
          Kowloon, Hong Kong
        </address>

        <button className="w-fit md:self-start px-4 py-2 bg-[#7815F9] rounded-md text-white text-sm font-medium hover:bg-opacity-90 transition-colors">
          Download Bitzaro App
        </button>
      </div>

      {/* Footer Links in 2-column grid on small screens, 4 columns on larger screens */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left">
        {Object.entries(footerData).map(([section, links]) => (
          <nav
            key={section}
            className="flex flex-col gap-6"
            aria-label={`${section} navigation`}
          >
            <h3 className="text-[#5c5c5c] text-sm font-medium uppercase">
              {section}
            </h3>
            <ul className="flex flex-col gap-4">
              {links.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-black text-sm font-medium hover:text-[#7815f9] transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
    </footer>
  );
};
