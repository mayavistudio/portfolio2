import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";

export default function AssetDetails() {
  const { state } = useLocation();
  const { asset } = state;
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="h-full w-full bg-black py-24 bg-grid-white/[0.2] relative flex">
      <Header />
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(transparent_50%,#d157e6)]" />
      <div className="min-h-screen text-gray-100 p-8">
        <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-12"></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {asset.images.map((image) => (
            <Dialog key={image.id}>
              <DialogTrigger asChild>
                <div className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer transition-transform hover:scale-105">
                  <img
                    src={image.src}
                    alt={asset.name}
                    width={300}
                    height={256}
                    className="w-full h-64 object-contain rounded-lg"
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] bg-black border-purple-400">
                <div className="relative w-full h-[80vh]">
                  <img
                    src={image.src}
                    alt={asset.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
