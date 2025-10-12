import React from 'react'
import AnalyticsChart from './AnalyticsChart'

function Analytics() {
  return (
    <section className="border-2 rounded-2xl p-2">
      <h2 className="font-bold text-2xl">Analytics</h2>
      <div className="absolute right-0">
        <button className="border rounded-2xl p-2 ">6 Months</button>
        <button className="border rounded-2xl p-2">Year</button>
      </div>

      <div className="flex space-x-2 mt-40">
        <AnalyticsChart month="Jan" />
        <AnalyticsChart month="Feb" />
        <AnalyticsChart month="Mar" />
        <AnalyticsChart month="Apr" />
      </div>
    </section>
  );
}

export default Analytics
