import React from 'react'

function TransactionItems({store, price}) {
  return (
    <div>
      <p>{store}</p>
      <p>{price}</p>
    </div>
  );
}

export default TransactionItems
