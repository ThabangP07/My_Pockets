import React from 'react'

function ExchangeHeadings({header, exchange}) {
  return (
    <div className="flex justify-between space-y-2">
      <p className='font-bold'>{header}</p>
      <p>{exchange}</p>
    </div>
  );
}

export default ExchangeHeadings
