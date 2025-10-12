import React from 'react'

function Greetings() {
  return (
    <div className="grid grid-cols-4 mt-2 mr-2 mb-5 py-2" >
      <h1 className="text-4xl  font-bold col-span-2">Good Day, Thabang</h1>
      <input className='border rounded-2xl p-2' type="text" placeholder="Search" />
      <p className='font-bold ml-20'>Thabang P.</p>
    </div>
  );
}

export default Greetings
