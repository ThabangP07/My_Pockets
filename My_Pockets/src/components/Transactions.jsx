// transactions will be pulled out of json file

import React from 'react'
import userData from '../data/transaction.json'
import TransactionItems from './TransactionItems';

function Transactions() {
  return (
    <div>
      <h2>Transactions</h2>
      <p>Today</p>
      <div>
        {userData.map((data) => (
          <TransactionItems store={data.store} price={data.price} />
        ))}
      </div>
    </div>
  );
}

export default Transactions
