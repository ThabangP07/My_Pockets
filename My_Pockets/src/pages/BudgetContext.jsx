import { createContext, useContext, useState } from "react";

// Create context
const BudgetContext = createContext();

export function useBudget() {
  return useContext(BudgetContext);
}

// Provider component
export function BudgetProvider({ children }) {
  const [totals, setTotals] = useState({});

  // Function to update a total for a specific card
  const updateTotal = (heading, total) => {
    setTotals((prev) => ({ ...prev, [heading]: total }));
  };

  // Compute overall summary (income, expenses, balance, etc.)
  const income = totals["Expected Income"] || 0;
  const expenses = Object.entries(totals)
    .filter(([key]) => key !== "Expected Income")
    .reduce((sum, [, val]) => sum + val, 0);

  const balance = income - expenses;

  return (
    <BudgetContext.Provider
      value={{ totals, updateTotal, income, expenses, balance }}
    >
      {children}
    </BudgetContext.Provider>
  );
}
