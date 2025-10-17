// transactions will be pulled out of json file

import React from 'react'
import { useState } from 'react';
import userData from '../data/transaction.json'
import TransactionItems from './TransactionItems';
import TransactionsInputForm from './TransactionsInputForm';


function Transactions() {

  const [showForm, setShowForm] = useState(false);

  const handleAddTransactionClick = () => {
    setShowForm(!showForm);
  }

  return (
    <section className="border-2 rounded-2xl p-2 space-y-3">
      <h2 className="font-bold text-2xl">Transactions</h2>
      <div className="flex justify-between">
        <p>Today</p>
        <button className="border-1 rounded-2xl p-2"
          onClick={handleAddTransactionClick}>
          {showForm ? 'Close' : 'Add Transaction'}
        </button>
      { showForm && <TransactionsInputForm /> }
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
