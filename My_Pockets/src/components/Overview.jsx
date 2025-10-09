import React from 'react'
import OverviewItem from './OverviewItem'

function Overview( prop ) {
  return (
    <section>
      <h2>Overview</h2>
      <OverviewItem heading={prop.heading1} amount={prop.amount1} />
      <OverviewItem heading={prop.heading2} amount={prop.amount2} />
      <OverviewItem heading={prop.heading3} amount={prop.amount3} />
    </section>
  )
}

export default Overview