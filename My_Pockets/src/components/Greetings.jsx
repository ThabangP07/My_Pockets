import React from 'react'

function Greetings() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 ml-2 mt-2 mr-2 mb-5 py-2 items-center">
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold col-span-1 sm:col-span-2">
        Good Day, Thabang
      </h1>
      <input
        className="border rounded-2xl p-2 w-full sm:w-auto"
        type="text"
        placeholder="Search"
      />
      <div className="hidden md:block lg:flex md:items-center justify-center md:justify-end space-x-2">
        <img
          src="/images/profile.jpeg"
          alt="Profile"
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
        <p className="font-bold">Thabang P.</p>
      </div>
    </div>
  );
}

export default Greetings
