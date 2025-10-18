import React from 'react'

function BudgetCardItem({item, amount}) {
  return (
    <div className='flex justify-between px-2 space-y-2'>
      <p className='font-bold italic'>{item}</p>
      <p>R {amount}</p>
    </div>
  );
}

export default BudgetCardItem
