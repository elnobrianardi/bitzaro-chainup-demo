import React from "react";
import { LineChart, Line, ResponsiveContainer, YAxis } from "recharts";

const LineChartCard = ({ id, price, title, changes, data }) => {
  // Find min/max for better scaling
  const values = data.map(d => d.value);
  const min = Math.min(...values) * 0.95; // 5% lower
  const max = Math.max(...values) * 1.05; // 5% higher

  return (
    <div
      key={id}
      className="bg-[#161617] p-4 rounded-lg w-full shadow-md cursor-pointer text-white flex flex-col md:flex-row gap-4 md:gap-2"
    >
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-between">
        <p className="text-sm md:text-base">{title}</p>
        <h2 className="text-white text-lg md:text-xl font-bold mt-2 md:mt-3">
          {price}
        </h2>
        <p
          className={`text-sm md:text-base font-semibold ${
            changes.includes("-") ? "text-red-400" : "text-green-400"
          }`}
        >
          {changes}
        </p>
        <p className="mt-2 text-gray-500 text-xs md:text-sm">
          24H 2926.24694
        </p>
      </div>

      {/* Right Section (Chart) */}
      <div className="w-full md:w-[50%] h-32 md:h-24 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
          >
            <YAxis domain={[min, max]} hide />
            <Line
              type="smooth"
              dataKey="value"
              stroke={changes.includes("-") ? "#FF4D4D" : "#00C851"}
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartCard;
