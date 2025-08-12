import React, { useState } from "react";

export const BitcoinInvestmentSection = () => {
  const [selectedYear, setSelectedYear] = useState(1);
  const [amount, setAmount] = useState(11000);

  const minAmount = 11000;
  const maxAmount = 100000;
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
      <div className="flex flex-col items-start gap-[52px] flex-1 grow">
        {/* Amount text */}
        <div className="flex flex-col items-start gap-6 w-full">
          <p className="text-black text-2xl leading-9">
            With a principal of{" "}
            <span className="font-bold">Rp {amount.toLocaleString()}</span>
          </p>

          {/* Slider */}
          <input
            type="range"
            min={minAmount}
            max={maxAmount}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-[580px] appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #7815f9 ${(amount - minAmount) / (maxAmount - minAmount) * 100}%, #e2e5e7 ${(amount - minAmount) / (maxAmount - minAmount) * 100}%)`,
              borderRadius: "9999px",
              height: "16px",
              border: "1px solid #cdcdcd",
            }}
          />

          <style>
            {`
              /* WebKit browsers */
              input[type="range"]::-webkit-slider-thumb {
                appearance: none;
                height: 28px;
                width: 28px;
                border-radius: 50%;
                background: white;
                border: 2px solid #7815f9;
                cursor: pointer;
                margin-top: -6px; /* Half of (thumb - track)/2 */
              }
              input[type="range"]::-webkit-slider-runnable-track {
                height: 16px;
                border-radius: 9999px;
              }

              /* Firefox */
              input[type="range"]::-moz-range-thumb {
                height: 28px;
                width: 28px;
                border-radius: 50%;
                background: white;
                border: 2px solid #7815f9;
                cursor: pointer;
              }
              input[type="range"]::-moz-range-track {
                height: 16px;
                border-radius: 9999px;
              }
            `}
          </style>
        </div>

        {/* Year selector */}
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="text-black text-2xl">For</div>
          <div
            className="flex items-center gap-5 w-full"
            role="radiogroup"
            aria-label="Investment duration"
          >
            {yearOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => handleYearSelect(option.value)}
                className={`flex items-center justify-center px-7 py-3 flex-1 rounded-[50px] border transition-colors duration-200
                  ${
                    selectedYear === option.value
                      ? "bg-[#7815f90f] border-[#7815f9] text-[#7815f9]"
                      : "border-[#dcdcdc] hover:border-[#7815f9] hover:bg-[#7815f905] text-[#2c2c2c]"
                  }`}
                role="radio"
                aria-checked={selectedYear === option.value}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="flex flex-col items-center justify-center gap-5 flex-1 grow">
        <div className="text-black text-2xl">Your principal would've become</div>
        <div className="flex flex-col items-center">
          <div className="font-bold text-[#25ba7f] text-5xl">Rp 64.377</div>
          <div className="text-[#25ba7f] text-[32px] font-semibold">
            +100.32%
          </div>
        </div>
      </div>
    </section>
  );
};
