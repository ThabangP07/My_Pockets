// transactions will be pulled out of json file

import React from 'react'

function Transactions( transaction) {
  return (
    <div>
      <h2>Transactions</h2>
      <p>Today</p>
      <div>
        <div>
          <p>{transaction.store}</p>
          <p>{transaction.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Transactions
