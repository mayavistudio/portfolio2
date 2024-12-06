// Header.jsx
import { Link } from "react-router-dom";

import Logo from "../assets/Logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-gradient-to-r from-black via-purple-600 to-black px-6 py-2 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="w-40 opacity-100" />
        </Link>

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
    </header>
  );
};

export default Header;
