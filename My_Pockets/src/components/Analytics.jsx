import React, { useState } from "react";
import AnalyticsChart from "./AnalyticsChart";
import expenseData from "../data/expenses.json";

function Analytics() {
  const [range, setRange] = useState("year");

  // show last 6 months or the whole year
  const filteredData =
    range === "6months" ? expenseData.slice(-6) : expenseData;

  return (
    <section className="border-2 rounded-2xl p-4 relative">
      <h2 className="font-bold text-2xl mb-2">Analytics</h2>

      <div className="absolute right-3 top-3">
        <button
          onClick={() => setRange("6months")}
          className={`border rounded-2xl p-2 mr-2 ${
            range === "6months" ? "bg-amber-200" : ""
          }`}
        >
          6 Months
        </button>
        <button
          onClick={() => setRange("year")}
          className={`border rounded-2xl p-2 ${
            range === "year" ? "bg-amber-200" : ""
          }`}
        >
          Year
        </button>
      </div>
      {/*The Bar display the amount spent for each month is not working as expected*/}
      {/* chart area */}
      <div className="flex items-end justify-around h-64 mt-10 bg-white rounded-xl p-4 shadow-inner">
        {filteredData.map((item) => (
            <AnalyticsChart
              key={item.month}
              month={item.month}
              amount={item.amount}
            />
        ))}
      </div>
    </section>
  );
}

export default Analytics;
