import React from 'react'
import Analytics from "./Analytics";
import Exchange from "./Exchange";
import Overview from "./Overview";
import Transactions from "./Transactions";
import { useBudget } from '../pages/BudgetContext';

function Home() {

  const { income, expenses, balance } = useBudget();
  return (
      <section className="grid grid-cols-2 gap-2 mr-2">
        <Overview
          heading1="Balance"
          heading2="Income"
          heading3="Expenses"
          amount1={`R ${balance.toFixed(2)}`}
          amount2={`R ${income.toFixed(2)}`}
          amount3={`R ${expenses.toFixed(2)}`}
        />
        <Analytics />
        <Transactions />
        <Exchange />
      </section>
  );
}

export default Home
