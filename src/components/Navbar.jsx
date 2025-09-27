import { useState, useEffect, useRef } from "react"; // 1. Import useRef and useEffect
import { Menu, X, Moon, Sun } from "lucide-react";
import logo from "../assets/nav.png";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();

  // 2. Create a ref for the navbar element
  const navRef = useRef(null); 

  // 3. Effect to handle clicks outside the mobile menu
  useEffect(() => {
    function handleClickOutside(event) {
      // If the click is outside the navbar and the menu is open, close the menu
      if (navRef.current && !navRef.current.contains(event.target) && isOpen) {
        setIsOpen(false);
      }
    }
    // Attach the event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); // Only re-run if isOpen changes

  return (
    <nav
      // 4. Attach the ref to the nav element
      ref={navRef} 
      className={`w-full shadow-md top-0 left-0 z-50 transition-colors bg-gradient-to-r from-blue-50 to-indigo-50 text-gray-900 dark:from-gray-900 dark:to-gray-800 dark:text-white sticky`}
    >
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* ... (Logo and Title section remains the same) ... */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-8 h-8" />
          <h1 className="text-xl font-bold text-blue-600">
            Student
            <span className="text-gray-800 dark:text-white ml-1">Senior</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700 dark:text-gray-300">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Home
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Collection
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Add Your College
          </li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">
            Leaderboard
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Login Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-yellow-400 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="text-gray-700 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Animation */}
      <div 
        className={`md:hidden shadow-lg px-6 py-4 space-y-4 transition-all duration-300 ease-in-out overflow-hidden
          ${isOpen 
            ? 'max-h-96 opacity-100 bg-white dark:bg-gray-800' 
            : 'max-h-0 opacity-0'}` // 5. Use max-height and opacity for smooth animation
        }
      >
          <a className="block hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a className="block hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(false)}>
            Collection
          </a>
          <a className="block hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(false)}>
            Add Your College
          </a>
          <a className="block hover:text-blue-600 transition-colors text-gray-700 dark:text-gray-300" onClick={() => setIsOpen(false)}>
            Leaderboard
          </a>
          <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Login
          </button>
      </div>
    </nav>
  );
}