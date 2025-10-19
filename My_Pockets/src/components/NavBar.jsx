import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // hamburger and close icons

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-600 border-2 rounded-2xl m-2 text-white md:flex md:flex-col md:justify-between">
      <div>
        {/* Header (Brand + Hamburger) */}
        <div className="flex justify-between items-center px-4 py-4 md:block">
          <h1 className="text-3xl text-orange-400">MyPockets</h1>

          {/* Hamburger only visible on small screens */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu links */}
        <ul
          className={`md:block ${
            isOpen ? "block" : "hidden"
          } px-4 pb-4 space-y-3 md:space-y-4`}
        >
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/investments" onClick={() => setIsOpen(false)}>
              Investments
            </Link>
          </li>
          <li>
            <Link to="/analytics" onClick={() => setIsOpen(false)}>
              Analytics
            </Link>
          </li>
          <li>
            <Link to="/budget" onClick={() => setIsOpen(false)}>
              Budget
            </Link>
          </li>
          <li>
            <Link to="/history" onClick={() => setIsOpen(false)}>
              History
            </Link>
          </li>
          <li>
            <Link to="/tips" onClick={() => setIsOpen(false)}>
              Tips
            </Link>
          </li>
        </ul>
      </div>

      {/* Footer button (Settings) */}
      <div className="hidden md:block text-center text-amber-100 px-2 pb-3">
        <button>Settings</button>
      </div>

      {/* Settings button for mobile (inside menu when open) */}
      {isOpen && (
        <div className="block md:hidden text-center text-amber-100 px-2 pb-3">
          <button onClick={() => setIsOpen(false)}>Settings</button>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
