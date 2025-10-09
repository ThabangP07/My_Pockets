import React from 'react'

function BudgetCardItem({item, amount}) {
  return (
    <div>
      <p>{item}</p>
      <p>{amount}</p>
    </div>
  );
}

export default BudgetCardItem
