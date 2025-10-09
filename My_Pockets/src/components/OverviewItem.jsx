import React from 'react'

function OverviewItem({heading, amount}) {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{amount}</p>
    </div>
  );
}

export default OverviewItem
