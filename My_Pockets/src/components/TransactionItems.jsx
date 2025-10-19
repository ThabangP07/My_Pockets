import React from 'react'

function TransactionItems({item, store, price}) {
  return (
    <div className='grid grid-cols-3 space-y-2'>
      <p className='font-bold'>{item}</p>
      <p className='font-bold '>{store}</p>
      <p>R{price}</p>
    </div>
  );
}

export default TransactionItems
