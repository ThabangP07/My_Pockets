import React from 'react'
import BudgetCard from './BudgetCard';

function Budget() {
  return (
    <div className='m-4'>
      <h1 className='font-bold text-4xl'>Budget</h1>
      <div className='grid grid-cols-2'>
        <BudgetCard
          heading={"Expected Income"}
          item={"Company A"}
          amount={"R 2000"}
        />
        <BudgetCard
          heading={"Monthly Subscriptions"}
          item={"Netflix"}
          amount={"R 200"}
        />
        <BudgetCard
          heading={"Family Expenses"}
          item={"Grocery"}
          amount={"R 1000"}
        />
        <BudgetCard
          heading={"Loans and Insurances"}
          item={"Personal Loan"}
          amount={"R 300"}
        />
      </div>

      <h5 className='font-bold text-2xl'>Summary:</h5>
      <p>Income: #####</p>
      <p>Expenses: #########</p>
      <p>Balance: #######</p>
    </div>
  );
}

export default Budget
