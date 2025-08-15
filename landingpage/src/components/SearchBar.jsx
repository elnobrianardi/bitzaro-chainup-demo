import React, { useState, useEffect, useRef } from "react";
import search from "../assets/Icon/Arrow/search.png";
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { label: "Favourite", path: "/favourite" },
  { label: "Spot", path: "/spot" },
  { label: "Futures", path: null },
];

const SearchBar = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

  const tabsRef = useRef([]);

  const handleClick = (path) => {
    if (path) setActiveTab(path);
  };

  useEffect(() => {
    const activeIndex = tabs.findIndex(
      (tab) => tab.path === activeTab || tab.label === activeTab
    );

    if (tabsRef.current[activeIndex]) {
      const node = tabsRef.current[activeIndex];
      setUnderlineStyle({
        left: node.offsetLeft,
        width: node.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-500 relative w-full gap-4 sm:gap-0">
      {/* Tabs */}
      <div className="flex text-gray-200 gap-6 w-full sm:w-auto relative">
        {tabs.map(({ label, path }, index) =>
          path ? (
            <Link key={label} to={path} onClick={() => handleClick(path)}>
              <p
                ref={(el) => (tabsRef.current[index] = el)}
                className={`py-2 px-4 cursor-pointer ${
                  activeTab === path ? "text-[#913DFF]" : ""
                }`}
              >
                {label}
              </p>
            </Link>
          ) : (
            <p
              key={label}
              ref={(el) => (tabsRef.current[index] = el)}
              className={`py-2 px-4 cursor-default ${
                activeTab === label ? "text-[#913DFF]" : ""
              }`}
              onClick={() => setActiveTab(label)}
            >
              {label}
            </p>
          )
        )}

        {/* Purple underline */}
        <span
          className="absolute bg-[#913DFF] transition-all duration-300"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            height: "4px",
            bottom: "0px",
            zIndex: 10,
          }}
        />
      </div>

      {/* Search */}
      <div
        className="
          bg-[#F1EEF71A] 
          rounded-full 
          px-1 pt-1 
          flex-1 sm:flex-none 
          mb-2 sm:mb-0 
          sm:w-[280px] lg:w-[160px] 
        "
      >
        <div className="flex gap-2 items-center">
          <img src={search} className="w-[15px] h-[15px] ml-3 mb-1" alt="search" />
          <p className="text-gray-200 flex-1 sm:flex-none pr-8 lg:pr-8 mb-1">
            Search
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
