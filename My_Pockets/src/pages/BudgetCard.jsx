import React from 'react'
import BudgetCardItem from './BudgetCardItem'

function BudgetCard(props) {
  return (
    <div>
      <h4>{props.heading}</h4>
      <BudgetCardItem item={props.item} amount={props.amount} />
      <p>Total: #######</p>
    </div>
  );
}

export default BudgetCard
