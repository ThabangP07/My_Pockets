// transactions will be pulled out of json file

import React from 'react'
import { useState } from 'react';
import userData from '../data/transaction.json'
import TransactionItems from './TransactionItems';


function Transactions() {

  const [showForm, setShowForm] = useState(false);

  return (
    <section className="border-2 rounded-2xl p-2 space-y-3">
      <h2 className="font-bold text-2xl">Transactions</h2>
      <div className="flex justify-between">
        <p>Today</p>
        <button className="border-1 rounded-2xl p-2">
          Add Transaction
        </button>
      </div>

      <div>
        {userData.map((data) => (
          <TransactionItems
            item={data.item}
            store={data.store}
            price={data.price}
          />
        ))}
      </div>
    </section>
  );
}

export default Transactions
