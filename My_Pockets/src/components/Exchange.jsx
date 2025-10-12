import React from 'react'
import ExchangeHeadings from './ExchangeHeadings';
import userData from '../data/exchange.json';

// i will pull the data from the forex exchange api/database in real time
function Exchange() {
  
  return (
    <section className="border-2 rounded-2xl p-2 space-y-3">
      <h2 className="font-bold text-2xl">Forex Exchange</h2>
      <div>
        {userData.map((data) => (
          <ExchangeHeadings header={data.header} exchange={data.exchange} />
        ))}
      </div>
    </section>
  );
}

export default Exchange
