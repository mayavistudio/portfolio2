// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/Logo-01.png";
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent px-6 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-40 opacity-100" />
      </div>

      <nav className="hidden md:flex space-x-8">
        <Link
          to="/"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Home
        </Link>

        <Link
          to="/roadmap"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Roadmap
        </Link>

        <Link
          to="/portfolio"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Portfolio
        </Link>
        <Link
          to="/about"
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
