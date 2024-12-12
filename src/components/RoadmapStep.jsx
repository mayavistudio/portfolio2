"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export const RoadmapStep = ({
  title,
  description,
  videoUrl,
  icon,
  isLeft,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`flex flex-col md:flex-row items-center ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      } w-full mb-16 px-4`}
    >
      <div
        className={`w-full md:w-5/12 ${
          isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
        }`}
      >
        <Card className="bg-gray-900 border-purple-600">
          <CardContent className="p-6">
            <Badge variant="outline" className="mb-2 bg-purple-600 text-white">
              <span className="mr-2 text-xl">{icon}</span>
              Step {index + 1}
            </Badge>
            <h3 className="text-2xl font-bold text-purple-400 mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </CardContent>
        </Card>
      </div>
      <div className="hidden md:flex md:w-2/12 md:justify-center">
        <div className="relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-black z-10"></div>
          <div className="h-full w-1 bg-purple-600"></div>
        </div>
      </div>
      <div className="w-full md:w-5/12 mt-4 md:mt-0 mx-auto ">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative aspect-video rounded-lg overflow-hidden shadow-lg"
        >
          <iframe
            src={`${videoUrl}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoUrl
              .split("/")
              .pop()}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RoadmapStep;
