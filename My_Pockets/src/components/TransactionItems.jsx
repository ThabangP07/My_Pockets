import React from 'react'

function TransactionItems({store, price}) {
  return (
    <div className='flex justify-between space-y-2'>
      <p className='font-bold '>{store}</p>
      <p>{price}</p>
    </div>
  );
}

export default TransactionItems
