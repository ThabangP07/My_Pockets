import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="bg-gray-600 border-2 rounded-2xl m-2">
      <h1 className="text-4xl m-2 py-7 text-orange-400">MyPockets</h1>
      <ul className="m-1 p-2 space-y-3 text-white">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/investments">Investments</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/budget">Budget</Link>
        </li>
        <li>
          <Link to="/history">History</Link>
        </li>
        <li>
          <Link to="/tips">Tips</Link>
        </li>
      </ul>
      <button className="text-amber-100 mt-100 px-2">Settings</button>
    </nav>
  );
}

export default NavBar
