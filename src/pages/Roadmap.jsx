const Roadmap = () => {
  const roadmapSteps = [
    {
      title: "Character Sketch",
      description:
        "Design and sketch the appearance of characters, exploring different poses, expressions, and visual details.",
      videoUrl: "https://www.youtube.com/embed/erDaH-lgrUA",
    },
    {
      title: "Storyboards",
      description:
        "Create a sequence of illustrated panels to outline the key scenes and actions in the animation, establishing the flow and timing of the story.",
      videoUrl: "https://www.youtube.com/embed/XOzCjd1TmX8",
    },
    {
      title: "Modeling",
      description:
        "Build 3D digital models of characters, objects, and environments, including details such as textures and shapes.",
      videoUrl: "https://www.youtube.com/embed/i4lJGMKuuMc",
    },
    {
      title: "Animation",
      description:
        "Bring characters and objects to life by defining their movements, actions, and expressions, using keyframes and in-betweens.",
      videoUrl: "https://www.youtube.com/embed/nXzW8LcUL1U",
    },
    {
      title: "FX (Special Effects)",
      description:
        "Add visual effects like explosions, smoke, fire, weather, or magical elements that enhance the scene and support the narrative.",
      videoUrl: "https://www.youtube.com/embed/5d9N2eI4l4Y",
    },
    {
      title: "Rendering",
      description:
        "Generate the final high-quality images from the 3D scene, applying lighting, textures, and details to produce realistic visuals.",
      videoUrl: "https://www.youtube.com/embed/5d9N2eI4l4Y",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-purple-300 flex flex-col items-center py-24 px-6">
      {/* Header */}
      <h1 className="text-5xl font-extrabold text-white mb-12">
        Production Roadmap
      </h1>

      {/* Roadmap Steps */}
      <div className="relative flex flex-col items-center w-full max-w-7xl">
        {roadmapSteps.map((step, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center w-full"
          >
            {/* Step Icon and Line */}
            <div className="flex flex-col items-center">
              {/* Glowing Circle with Checkmark */}

              {/* Vertical Line */}
              {<div className="w-0.5 bg-purple-600 h-96  absolute"></div>}
            </div>

            {/* Step Content */}
            <div
              className={`relative flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="flex-1 bg-purple-600 p-8 rounded-xl shadow-lg border border-purple-600">
                <h2 className="text-3xl font-bold text-white mb-4">
                  STEP {index + 1}: {step.title}
                </h2>
                <p className="text-lg text-purple-200 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Video Section */}
              {step.videoUrl && (
                <div className="flex-1 relative group">
                  <iframe
                    className="w-full h-64 md:h-80 rounded-lg shadow-md group-hover:opacity-80"
                    src={`${
                      step.videoUrl
                    }?autoplay=1&mute=1&controls=0&loop=1&playlist=${step.videoUrl
                      .split("/")
                      .pop()}`}
                    title={step.title}
                    allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {/* Show Controls on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg"
                      onClick={() => window.open(step.videoUrl, "_blank")}
                    >
                      Open Fullscreen
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
