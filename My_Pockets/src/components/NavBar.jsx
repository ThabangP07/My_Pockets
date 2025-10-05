import React from 'react'

function NavBar() {
  return (
    <nav>
      <h1>MyPockets</h1>
      <ul>
        <li>home</li>
        <li>Investments</li>
        <li>Analytics</li>
        <li>Budget</li>
        <li>History</li>
        <li>Tips</li>
      </ul>
      <button>Settings</button>
      <button>Log Out</button>
    </nav>
  )
}

export default NavBar
