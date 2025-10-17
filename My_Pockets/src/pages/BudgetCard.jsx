import React from 'react'
import BudgetCardItem from './BudgetCardItem'

function BudgetCard(props) {
  return (
    <div className="border rounded-2xl p-2 m-4">
      <div className="bg-amber-100 p-2 rounded-2xl flex justify-between">
        <h4 className='font-bold'>{props.heading}</h4>
        <button className='border rounded-2xl p-2'>Add</button>
      </div>

      <BudgetCardItem item={props.item} amount={props.amount} />
      <p>Total: #######</p>
    </div>
  );
}

export default BudgetCard
