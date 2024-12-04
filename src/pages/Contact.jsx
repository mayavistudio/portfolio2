import { Mail, MessageCircle, User } from "lucide-react";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-6">
      <div className="w-full max-w-lg bg-gray-800 p-8 rounded-xl shadow-xl border border-gray-700">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm text-gray-300 mb-2">
              Full Name
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg transition-all duration-300 hover:border-purple-500 focus-within:border-purple-500">
              <User className="text-gray-400 ml-4" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-gray-800 text-white py-2 px-4 w-full rounded-lg outline-none transition-all duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-600 rounded-lg transition-all duration-300 hover:border-purple-500 focus-within:border-purple-500">
              <Mail className="text-gray-400 ml-4" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-gray-800 text-white py-2 px-4 w-full rounded-lg outline-none transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm text-gray-300 mb-2"
            >
              Your Message
            </label>
            <div className="flex items-start border border-gray-600 rounded-lg transition-all duration-300 hover:border-purple-500 focus-within:border-purple-500">
              <MessageCircle className="text-gray-400 ml-4" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="bg-gray-800 text-white py-2 px-4 w-full h-32 rounded-lg outline-none resize-none transition-all duration-300"
                placeholder="Enter your message"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
