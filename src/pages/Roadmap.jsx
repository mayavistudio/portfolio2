import { Card, CardContent } from "@/components/ui/card";

const Roadmap = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-300">
          Animation Production Roadmap
        </h1>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Follow these steps to create stunning animations
        </p>

        <div className="grid gap-16">
          {roadmapSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connecting line */}
              {index !== roadmapSteps.length - 1 && (
                <div className="absolute left-8 top-20 w-1 bg-gradient-to-b from-purple-600 to-transparent h-40 -z-10"></div>
              )}

              <Card className="backdrop-blur-sm bg-gray-900/50 border-purple-600/30 hover:border-purple-600 transition-all duration-500 overflow-hidden group-hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Step number and icon */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center text-3xl relative overflow-hidden group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        <span className="font-bold">{step.icon}</span>
                      </div>
                    </div>

                    <div className="flex-grow space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                          {step.title}
                        </h3>
                        <div className="h-px flex-grow bg-gradient-to-r from-purple-600/50 to-transparent"></div>
                      </div>

                      <p className="text-gray-400 leading-relaxed text-lg">
                        {step.description}
                      </p>

                      {/* Video container */}
                      <div className="relative w-full h-96 rounded-xl overflow-hidden group-hover:shadow-lg transition-all duration-500">
                        <iframe
                          className="absolute inset-0 w-full h-full"
                          src={`${
                            step.videoUrl
                          }?autoplay=1&mute=1&controls=0&loop=1&playlist=${step.videoUrl
                            .split("/")
                            .pop()}`}
                          allow="autoplay; encrypted-media"
                          frameBorder="0"
                        />

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
