import React from 'react'

function BudgetCardItem({item, amount}) {
  return (
    <div className='flex justify-between p-2'>
      <p className='font-bold italic'>{item}</p>
      <p>{amount}</p>
    </div>
  );
}

export default BudgetCardItem
