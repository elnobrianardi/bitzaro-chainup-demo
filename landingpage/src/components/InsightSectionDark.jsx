import React from "react";
import bitzaroLogoWhite from "../assets/Logo/BitzaroLogoWhite.png";

export const InsightsSectionDark = () => {
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
    <footer className="max-w-[1200px] mx-auto px-6 sm:px-12 py-10 flex xl:flex-row flex-col gap-10 text-white">
      
      {/* Logo + Address + Button centered */}
      <div className="flex flex-col items-center gap-6 text-center">
        <img
          className="w-[122px] h-6 object-contain"
          alt="Bitzaro logo"
          src={bitzaroLogoWhite}
        />

        <address className="font-medium text-gray-400 text-sm leading-[21px] not-italic">
          Room 1046, 14/F, Solo Building
          <br />
          41–43 Carnarvon Road, Tsim Sha Tsui
          <br />
          Kowloon, Hong Kong
        </address>

        <button className="px-4 py-2 bg-[#7815F9] rounded-md text-white text-sm font-medium hover:bg-opacity-90 transition-colors">
          Download Bitzaro App
        </button>
      </div>

      {/* Footer Links in 2-column grid on small screens, 4 columns on larger screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full text-center">
        {Object.entries(footerData).map(([section, links]) => (
          <nav
            key={section}
            className="flex flex-col gap-6"
            aria-label={`${section} navigation`}
          >
            <h3 className="text-gray-500 text-sm font-medium uppercase">
              {section}
            </h3>
            <ul className="flex flex-col gap-4">
              {links.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="text-white text-sm font-medium hover:text-[#913DFF] transition-colors"
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
