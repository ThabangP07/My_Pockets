import React from "react";

function AnalyticsChart({ month, amount, maxAmount }) {
  // calculate proportional height
  const heightPercent = maxAmount > 0 ? (amount / maxAmount) * 100 : 0;
  console.log({ month, amount, maxAmount, heightPercent });
  return (
    <div className="flex flex-col items-center justify-end w-10">
      <div
        className="bg-amber-500 border rounded-t-lg transition-all duration-500"
        style={{
          height: `${heightPercent}%`,
          width: "25px",
          minHeight: "50px",
        }}
      ></div>
      <p className="text-sm mt-1 font-medium">{month}</p>
    </div>
  );
}

export default AnalyticsChart;
