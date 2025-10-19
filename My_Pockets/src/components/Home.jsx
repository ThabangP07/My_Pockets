import React from 'react'
import Analytics from "./Analytics";
import Exchange from "./Exchange";
import Overview from "./Overview";
import Transactions from "./Transactions";

function Home() {
  return (
      <section className="grid grid-cols-2 gap-2 mr-2">
        <Overview
          heading1="Balance"
          heading2="Income"
          heading3="Expenses"
          amount1="R 2 000.00"
          amount2="R 15 000.00"
          amount3="R 7 000.00"
        />
        <Analytics />
        <Transactions />
        <Exchange />
      </section>
  );
}

export default Home
