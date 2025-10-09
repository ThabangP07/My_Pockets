import React from 'react'
import ExchangeHeadings from './ExchangeHeadings';
import userData from '../data/exchange.json';

// i will pull the data from the forex exchange api/database in real time
function Exchange() {
  
  return (
    <div>
      <h2>Forex Exchange</h2>
      <div>
        {userData.map((data) => (
          <ExchangeHeadings header={data.header} exchange={data.exchange} />
        ))}
      </div>
    </div>
  );
}

export default Exchange
