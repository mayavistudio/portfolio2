import { Mail, MapPin, Phone } from "lucide-react"; // Lucide React Icons
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <section className="bg-gray-900 text-white p-10 py-36">
      <div className="max-w-7xl mx-auto px-4 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Information */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              Contact Info
            </h2>

            <div className="flex items-center mb-4">
              <MapPin className="text-purple-600 mr-3" size={24} />
              <div>
                <p className="text-xl font-medium text-gray-200">Location</p>
                <p className="text-sm text-gray-400">
                  Shop No- 856, Above Of Varun Pet Shop, Main 100ft Road, Near
                  Nalanda Public School, Sant Nagar, Burari, Delhi- 110089
                </p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <Mail className="text-purple-600 mr-3" size={24} />
              <div>
                <p className="text-xl font-medium text-gray-200">Email</p>
                <p className="text-sm text-gray-400">
                  <a
                    href="mailto:Contact@mayavistudio.in"
                    className="underline text-purple-600 hover:text-purple-400"
                  >
                    Contact@mayavistudio.in
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <Phone className="text-purple-600 mr-3" size={24} />
              <div>
                <p className="text-xl font-medium text-gray-200">Phone</p>
                <p className="text-sm text-gray-400">
                  <a
                    href="tel:+911144715135"
                    className="underline text-purple-600 hover:text-purple-400"
                  >
                    +91 1144715135
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <FaWhatsapp className="text-green-500 mr-3" size={24} />
              <div>
                <p className="text-xl font-medium text-gray-200">WhatsApp</p>
                <p className="text-sm text-gray-400">
                  <a
                    href="https://wa.me/911144715135"
                    className="underline text-green-500 hover:text-green-400"
                  >
                    Chat with us on WhatsApp
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-purple-600 mb-6">
              Get In Touch
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-700 text-white placeholder-gray-400"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="mt-2 w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 bg-gray-700 text-white placeholder-gray-400"
                  rows="5"
                  placeholder="Write your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
