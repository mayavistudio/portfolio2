"use client";

import Footer from "@/components/Footer";
import { RoadmapStep } from "@/components/RoadmapStep";
import { motion } from "framer-motion";

const roadmapSteps = [
  {
    title: "Character Sketch",
    description:
      "Design and sketch the appearance of characters, exploring different poses, expressions, and visual details.",
    videoUrl: "https://www.youtube.com/embed/erDaH-lgrUA",
    icon: "✏️",
  },
  {
    title: "Storyboards",
    description:
      "Create a sequence of illustrated panels to outline the key scenes and actions in the animation, establishing the flow and timing of the story.",
    videoUrl: "https://www.youtube.com/embed/XOzCjd1TmX8",
    icon: "🎬",
  },
  {
    title: "Modeling",
    description:
      "Build 3D digital models of characters, objects, and environments, including details such as textures and shapes.",
    videoUrl: "https://www.youtube.com/embed/i4lJGMKuuMc",
    icon: "🎨",
  },
  {
    title: "Animation",
    description:
      "Bring characters and objects to life by defining their movements, actions, and expressions, using keyframes and in-betweens.",
    videoUrl: "https://www.youtube.com/embed/nXzW8LcUL1U",
    icon: "🎭",
  },
  {
    title: "FX (Special Effects)",
    description:
      "Add visual effects like explosions, smoke, fire, weather, or magical elements that enhance the scene and support the narrative.",
    videoUrl: "https://www.youtube.com/embed/5d9N2eI4l4Y",
    icon: "✨",
  },
  {
    title: "Rendering",
    description:
      "Generate the final high-quality images from the 3D scene, applying lighting, textures, and details to produce realistic visuals.",
    videoUrl: "https://www.youtube.com/embed/5d9N2eI4l4Y",
    icon: "🎥",
  },
];

export const Roadmap = () => (
  <>
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center text-purple-400 mb-12"
        >
          Animation Roadmap
        </motion.h1>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-purple-600"></div>
          {roadmapSteps.map((step, index) => (
            <RoadmapStep
              key={index}
              title={step.title}
              description={step.description}
              videoUrl={step.videoUrl}
              icon={step.icon}
              isLeft={index % 2 === 0}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
);

export default Roadmap;
