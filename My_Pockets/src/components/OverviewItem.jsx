import React from 'react'

function OverviewItem({heading, amount}) {
  return (
    <div className='border rounded-2xl p-4'>
      <h3>{heading}</h3>
      <p>{amount}</p>
    </div>
  );
}

export default OverviewItem
