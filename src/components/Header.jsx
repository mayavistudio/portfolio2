import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-gradient-to-r from-black via-purple-600 to-black px-6 py-2 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 md:w-40 opacity-100 transition-all duration-300"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          className="text-white md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white font-medium hover:text-purple-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/roadmap"
            className="text-white font-medium hover:text-purple-600 transition-colors"
          >
            Roadmap
          </Link>
          <Link
            to="/portfolio"
            className="text-white font-medium hover:text-purple-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className="text-white font-medium hover:text-purple-600 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-2 bg-black bg-opacity-90 rounded-lg shadow-md">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <Link
              to="/"
              className="text-white font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/roadmap"
              className="text-white font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Roadmap
            </Link>
            <Link
              to="/portfolio"
              className="text-white font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium hover:text-purple-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
