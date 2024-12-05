import { Facebook, Instagram } from "lucide-react";
import React from "react";
import {
  FaArtstation,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa"; // Import YouTube icon from react-icons

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-5">
          <h3 className="text-4xl font-extrabold text-purple-600 mb-4">
            Reach Us
          </h3>
        </div>

        <div className="flex justify-center gap-12 mb-5">
          <a
            href="https://www.facebook.com/profile.php?id=61568488016502&mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-blue-600 hover:text-white p-5 rounded-full transition-all duration-300"
          >
            <Facebook size={32} />
          </a>
          <a
            href="https://www.artstation.com/mayavi_studio?fbclid=PAZXh0bgNhZW0CMTEAAaYdW_wtipIUojzMIsFPWUUx0UOlWtvG7jElf6yGuoFUWP_LGgLCsqWz4_I_aem_RcvnSsU-Hk0X_Ar-gU9GMg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-gray-700 hover:text-white p-5 rounded-full transition-all duration-300"
          >
            <FaArtstation size={32} /> {/* ArtStation icon */}
          </a>
          <a
            href="https://www.youtube.com/@MayaviStudio"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-red-600 hover:text-white p-5 rounded-full transition-all duration-300"
          >
            <FaYoutube size={32} /> {/* YouTube icon */}
          </a>
          <a
            href="https://www.instagram.com/mayavi_studio_/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-pink-500 hover:text-white p-5 rounded-full transition-all duration-300"
          >
            <Instagram size={32} />
          </a>
          <a
            href="https://www.linkedin.com/company/105010826/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-blue-800 hover:text-white p-5 rounded-full transition-all duration-300"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://wa.me/911144715135"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:bg-green-600 hover:text-white p-5 rounded-full transition-all duration-300"
          >
            <FaWhatsapp size={32} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-sm md:text-base text-white opacity-80">
            &copy; 2024 Mayavi Studios. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
