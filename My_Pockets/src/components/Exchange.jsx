import React from 'react'

// i will pull the data from the forex exchange api/database in real time
function Exchange(rates) {
  return (
    <div>
      <h2>Forex Exchange</h2>
      <div>
        <div>
          <p>{rates.header}</p>
          <p>{rates.exchange}</p>
        </div>
      </div>
    </div>
  );
}

export default Exchange
