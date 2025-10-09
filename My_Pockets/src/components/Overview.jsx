import React from 'react'

function Overview( prop) {
  return (
    <section>
      <h2>Overview</h2>
      <div>
        <h3>{prop.heading}</h3>
        <p>{prop.amount}</p>
      </div>
    </section>
  )
}

export default Overview