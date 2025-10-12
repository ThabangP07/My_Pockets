import React from 'react'
import OverviewItem from './OverviewItem'

function Overview( prop ) {
  return (
    <section className="border-2 rounded-2xl p-2 space-y-3">
      <h2 className='font-bold text-2xl'>Overview</h2>
      <OverviewItem heading={prop.heading1} amount={prop.amount1} />
      <OverviewItem heading={prop.heading2} amount={prop.amount2} />
      <OverviewItem heading={prop.heading3} amount={prop.amount3} />
    </section>
  )
}

export default Overview