import React, { useState } from "react";

export const BitcoinInvestmentSection = () => {
  const [selectedYear, setSelectedYear] = useState(1);

  const yearOptions = [
    { value: 1, label: "1 year" },
    { value: 2, label: "2 years" },
    { value: 3, label: "3 years" },
    { value: 4, label: "4 years" },
  ];

  const handleYearSelect = (year) => {
    setSelectedYear(year);
  };

  return (
    <section className="flex w-[1180px] items-center gap-8 p-[42px] rounded-[20px] overflow-hidden border border-solid border-[#dcdcdc]">
      <div className="flex flex-col items-start gap-[52px] relative flex-1 grow">
        <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
            <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
              With a principal of{" "}
            </span>
            <span className="[font-family:'Roboto-Bold',Helvetica] font-bold">
              Rp 11.000
            </span>
          </p>

          <div
            className="relative self-stretch w-full h-[31px]"
            role="slider"
            aria-label="Investment amount slider"
          >
            <div className="relative w-[580px] h-[31px]">
              <div className="w-[580px] h-3 top-2.5 left-0 bg-[#e2e5e7] rounded-[50px]" />
              <div className="w-[103px] h-3 top-2.5 left-0 bg-[#7815f9] rounded-[50px]" />
              <button
                className="w-[31px] h-[31px] top-0 left-[88px] bg-white rounded-[15.5px] border border-solid border-[#cdcdcd] cursor-pointer hover:border-[#7815f9] focus:outline-none focus:ring-2 focus:ring-[#7815f9] focus:ring-opacity-50"
                aria-label="Adjust investment amount"
                tabIndex="0"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9">
            For
          </div>

          <div
            className="items-center gap-5 self-stretch w-full flex-[0_0_auto] flex relative"
            role="radiogroup"
            aria-label="Investment duration"
          >
            {yearOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleYearSelect(option.value)}
                className={`flex items-center justify-center gap-2.5 px-7 py-3 relative flex-1 grow rounded-[50px] border border-solid transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7815f9] focus:ring-opacity-50 ${
                  selectedYear === option.value
                    ? "bg-[#7815f90f] border-[#7815f9]"
                    : "border-[#dcdcdc] hover:border-[#7815f9] hover:bg-[#7815f905]"
                }`}
                role="radio"
                aria-checked={selectedYear === option.value}
                tabIndex="0"
              >
                <div
                  className={`w-fit mt-[-1.00px] [font-family:'Roboto-Medium',Helvetica] font-medium text-xl leading-[30px] whitespace-nowrap relative tracking-[0] ${
                    selectedYear === option.value
                      ? "text-[#7815f9]"
                      : "text-[#2c2c2c] ml-[-1.50px] mr-[-1.50px]"
                  }`}
                >
                  {option.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-5 relative flex-1 grow">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-9 whitespace-nowrap">
          Your principal would&apos;ve become
        </div>

        <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
          <div className="mt-[-1.00px] [font-family:'Roboto-Bold',Helvetica] font-bold text-[#25ba7f] text-5xl leading-[72px] relative w-fit tracking-[0] whitespace-nowrap">
            Rp 64.377
          </div>

          <div className="text-[#25ba7f] text-[32px] leading-[48px] relative w-fit [font-family:'Roboto-SemiBold',Helvetica] font-semibold tracking-[0] whitespace-nowrap">
            +100.32%
          </div>
        </div>
      </div>
    </section>
  );
};
