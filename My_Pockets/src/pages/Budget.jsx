import React from 'react'
import BudgetCard from './BudgetCard';

function Budget() {
  return (
    <div>
      <h1>Budget</h1>
      <div>
        <BudgetCard heading={"Expected Income"} item={"Company A"} amount={"R 2000"} />
      </div>

      <h5>Summary:</h5>
      <p>Income: #####</p>
      <p>Expenses: #########</p>
      <p>Balance: #######</p>
    </div>
  );
}

export default Budget
