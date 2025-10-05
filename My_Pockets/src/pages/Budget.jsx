import React from 'react'

function Budget() {
  return (
    <div>
      <h1>Budget</h1>
      <div>
        <div>
          <h4>Expected Income</h4>
          <div>
            <p>Company Inc</p>
            <p>amount</p>
          </div>
          <p>Total: #######</p>
        </div>
        <div>
          <h4>Monthly Subscriptions</h4>
          <div>
            <p>Company Inc</p>
            <p>amount</p>
          </div>
          <p>Total: #######</p>
        </div>
        <div>
          <h4>Family Expenses</h4>
          <div>
            <p>Grocery</p>
            <p>amount</p>
          </div>
          <p>Total: #######</p>
        </div>
        <div>
          <h4>Loans and Insurances</h4>
          <div>
            <p>Loans</p>
            <p>amount</p>
          </div>
          <p>Total: #######</p>
        </div>
      </div>

      <h5>Summary:</h5>
      <p>Income: #####</p>
      <p>Expenses: #########</p>
      <p>Balance: #######</p>
    </div>
  );
}

export default Budget
