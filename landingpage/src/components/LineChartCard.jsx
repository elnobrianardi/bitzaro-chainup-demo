import React from "react";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const LineChartCard = ({ id, price, title, changes, data }) => {
  return (
    <div
      key={id}
      className="bg-[#161617] p-4 rounded-lg w-full shadow-md flex justify-between cursor-pointer text-white"
    >
      {/* Left Section */}
      <div className="flex-1">
        <p>{title}</p>
        <h2 className="text-white xl:text-xl text-lg font-bold mt-3">
          {price}
        </h2>
        <p
          className={`text-sm font-semibold ${
            changes.includes("-") ? "text-red-400" : "text-green-400"
          }`}
        >
          {changes}
        </p>
        <p className="mt-3 text-gray-500 text-sm">
          24H 2926.24694  
        </p>
      </div>

      {/* Right Section (Full height chart) */}
      <div className="w-[50%] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={changes.includes("-") ? "#FF4D4D" : "#00C851"}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LineChartCard;
