import React from "react";
import BudgetCard from "./BudgetCard";
import { useBudget } from "./BudgetContext";

function Budget() {
  const { income, expenses, balance } = useBudget();

  return (
    
    <div className="m-4">
      <h1 className="font-bold text-4xl text-center">Budget</h1>
      <div className="grid grid-cols-2">
        <BudgetCard heading="Expected Income" item="Company A" amount="2000" />
        <BudgetCard
          heading="Monthly Subscriptions"
          item="Netflix"
          amount="200"
        />
        <BudgetCard heading="Family Expenses" item="Grocery" amount="1000" />
        <BudgetCard
          heading="Loans and Insurances"
          item="Personal Loan"
          amount="300"
        />
      </div>

      <h5 className="font-bold text-2xl">Summary:</h5>
      <p>Income: R {income.toFixed(2)}</p>
      <p>Expenses: R {expenses.toFixed(2)}</p>
      <p>Balance: R {balance.toFixed(2)}</p>
    </div>
  );
}

export default Budget;
