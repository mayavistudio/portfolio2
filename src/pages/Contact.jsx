import Header from "@/components/Header";
import { motion } from "framer-motion"; // Framer Motion
import { Mail, MapPin, Phone } from "lucide-react"; // Lucide React Icons
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp Icon
import Footer from "../components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // State to track loading
  const [error, setError] = useState(null); // State to track errors (optional)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set loading to true to show the loader
    setLoading(true);

    // Prepare the email data
    const emailData = {
      to: "keshavgupta9812@gmail.com",
      subject: `Message from ${formData.email}`,
      text: "",
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Message from ${formData.name}</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #1a202c; /* Black background */
            color: #e2e8f0; /* Light text color */
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            background-color: #2d3748; /* Dark gray background */
            border-radius: 15px;
            padding: 30px;
            max-width: 700px;
            width: 100%;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            transition: transform 0.3s ease-in-out;
        }

        .container:hover {
            transform: translateY(-10px);
        }

        h1 {
            color: #9f7aea; /* Purple-600 */
            font-size: 2.5rem;
            text-align: center;
            margin-bottom: 20px;
        }

        h2 {
            color: #cbd5e0;
            font-size: 1.3rem;
            margin-bottom: 15px;
        }

        .message-content {
            background-color: #1a202c;
            border-radius: 10px;
            padding: 20px;
            border: 1px solid #4a5568;
            margin-bottom: 20px;
        }

        .message-content p {
            font-size: 1.1rem;
            color: #e2e8f0;
            line-height: 1.6;
            margin: 0;
        }

        .detail {
            margin-bottom: 15px;
            font-size: 1.1rem;
        }

        .detail span {
            font-weight: bold;
            color: #9f7aea; /* Purple-600 */
        }

        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 0.9rem;
            color: #cbd5e0;
        }

        @media (max-width: 600px) {
            .container {
                padding: 20px;
            }

            h1 {
                font-size: 2rem;
            }

            h2 {
                font-size: 1.1rem;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Message from ${formData.name}</h1>
        
        <div class="message-content">
            <div class="detail">
                <h2>Contact Details</h2>
                <p><span>Name:</span> ${formData.name}</p>
                <p><span>Email:</span> ${formData.email}</p>
            </div>
            
            <div class="detail">
                <h2>Message:</h2>
                <p>${formData.message}</p>
            </div>
        </div>

       
    </div>
</body>
</html>
`,
    };

    try {
      // Send a POST request to the API
      const response = await fetch(
        "https://maya-snowy-omega.vercel.app/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.ok) {
        // If the response is successful, clear the form and show success
        console.log("Form submitted successfully.");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setError("Failed to send the email. Please try again later.");
        console.error("Failed to send email.");
      }
    } catch (error) {
      setError("An error occurred while sending the email. Please try again.");
      console.error("Error sending email:", error);
    } finally {
      // Reset the loading state
      setLoading(false);
    }
  };

  return (
    <section className="text-white">
      <Header />
      <div className="h-full w-full bg-black py-32 bg-grid-white/[0.2] relative flex ">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(transparent_75%,#a257e6)]"></div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto px-4 min-h-screen relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side: Contact Information */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-purple-600 mb-6">
                Contact Info
              </h2>

              {[
                {
                  icon: <MapPin className="text-purple-600 mr-3" size={24} />,
                  title: "Location",
                  description:
                    "Shop No- 856, Above Of Varun Pet Shop, Main 100ft Road, Near Nalanda Public School, Sant Nagar, Burari, Delhi- 110089",
                },
                {
                  icon: <Mail className="text-purple-600 mr-3" size={24} />,
                  title: "Email",
                  description: (
                    <a
                      href="mailto:Contact@mayavistudio.in"
                      className="underline text-purple-600 hover:text-purple-400"
                    >
                      Contact@mayavistudio.in
                    </a>
                  ),
                },
                {
                  icon: <Phone className="text-purple-600 mr-3" size={24} />,
                  title: "Phone",
                  description: (
                    <a
                      href="tel:+911144715135"
                      className="underline text-purple-600 hover:text-purple-400"
                    >
                      +91 1144715135
                    </a>
                  ),
                },
                {
                  icon: (
                    <FaWhatsapp className="text-green-500 mr-3" size={24} />
                  ),
                  title: "WhatsApp",
                  description: (
                    <a
                      href="https://wa.me/911144715135"
                      className="underline text-green-500 hover:text-green-400"
                    >
                      Chat with us on WhatsApp
                    </a>
                  ),
                },
              ].map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center mb-6"
                >
                  {info.icon}
                  <div>
                    <p className="text-xl font-medium text-gray-200">
                      {info.title}
                    </p>
                    <p className="text-sm text-gray-400">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Right Side: Contact Form */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800 p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-purple-600 mb-6">
                Get In Touch
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-6"
                >
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
                </motion.div>

                {/* Email Input */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6"
                >
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
                </motion.div>

                {/* Message Textarea */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6"
                >
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
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-center"
                >
                  <button
                    type="submit"
                    className={`w-full py-3 px-4 bg-purple-600 text-white rounded-md shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all duration-300 ${
                      loading ? "cursor-not-allowed" : ""
                    }`}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex justify-center items-center">
                        <div className="w-5 h-5 border-4 border-t-4 border-white rounded-full animate-spin"></div>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </motion.div>
              </form>

              {/* Error Message (Optional) */}
              {error && (
                <p className="text-red-500 text-center mt-4">{error}</p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </section>
  );
};

export default ContactPage;
