import React from 'react'
import AnalyticsChart from './AnalyticsChart'

function Analytics() {
  return (
    <div>
      <h2>Analytics</h2>
      <button>6 Months</button>
      <button>Year</button>
      <div>
        <AnalyticsChart month="Jan" />
        <AnalyticsChart month="Feb" />
        <AnalyticsChart month="Mar" />
        <AnalyticsChart month="Apr" />
      </div>
    </div>
  );
}

export default Analytics
