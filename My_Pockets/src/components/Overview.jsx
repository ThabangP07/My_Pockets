import React from 'react'
import OverviewItem from './OverviewItem'

function Overview({ heading1, heading2, heading3, amount1, amount2, amount3 }) {
  return (
    <section className="border-2 rounded-2xl p-2 space-y-3">
      <h2 className="font-bold text-2xl">Overview</h2>
      <OverviewItem heading={heading1} amount={amount1} />
      <OverviewItem heading={heading2} amount={amount2} />
      <OverviewItem heading={heading3} amount={amount3} />
    </section>
  );
}

export default Overview