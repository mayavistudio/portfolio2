import { Box, Code, File, User } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 py-20">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-purple-500 mb-4">
          Welcome to Mayavi Studios
        </h1>
        <p className="text-lg text-gray-300">
          Pioneering the future of 3D modeling, animation, and creative digital
          design
        </p>
      </div>

      {/* About Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Our Work
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-8">
          At Mayavi Studios, we specialize in creating breathtaking 3D models,
          animations, and immersive virtual experiences. From conceptualization
          to final renders, our team brings your ideas to life with precision
          and creativity.
        </p>

        {/* Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <Code className="text-purple-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-white mb-2">
              3D Modeling
            </h3>
            <p className="text-center text-gray-300">
              We specialize in creating realistic and artistic 3D models that
              fit seamlessly into any virtual or physical environment.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <Box className="text-purple-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-white mb-2">
              Animation & Visual Effects
            </h3>
            <p className="text-center text-gray-300">
              Our team brings 3D models to life with cutting-edge animation and
              visual effects techniques, creating engaging and realistic motion.
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300">
            <File className="text-purple-500 text-3xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center text-white mb-2">
              Virtual Reality
            </h3>
            <p className="text-center text-gray-300">
              We create immersive VR experiences, allowing clients to step into
              their designs and explore them in a fully interactive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-semibold text-center text-white mb-8">
          Meet Our Team
        </h2>
        <div className="flex justify-center gap-12">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-4 border-purple-500 rounded-full flex justify-center items-center bg-gray-700">
              <User className="text-purple-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">John Doe</h3>
            <p className="text-gray-300">Lead 3D Artist</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-4 border-purple-500 rounded-full flex justify-center items-center bg-gray-700">
              <User className="text-purple-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Jane Smith
            </h3>
            <p className="text-gray-300">Animation Director</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 border-4 border-purple-500 rounded-full flex justify-center items-center bg-gray-700">
              <User className="text-purple-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Alex Johnson
            </h3>
            <p className="text-gray-300">VR Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
