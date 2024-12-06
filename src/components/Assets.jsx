import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Assets({ d2assets, name }) {
  const [hoveredAsset, setHoveredAsset] = useState(null);
  const [d3assets, setd3assets] = useState(d2assets);
  const navigate = useNavigate();

  const handleAssetClick = (asset) => {
    navigate(`/asset/${asset.id}`, { state: { asset } });
  };

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-12">
        {name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {d3assets.map((asset) => (
          <motion.div
            key={asset.id}
            className="group relative overflow-hidden rounded-lg shadow-xl hover:bg-purple-900 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setHoveredAsset(asset.id)}
            onHoverEnd={() => setHoveredAsset(null)}
            onClick={() => handleAssetClick(asset)}
          >
            <img
              src={asset.mainImage.src}
              alt={asset.name}
              className="w-full h-64 object-cover transition-transform duration-300 rounded-t-lg"
            />
            <motion.div
              className="absolute inset-0 to-transparent flex items-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredAsset === asset.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-white text-xl font-semibold"
                initial={{ y: 20, opacity: 0 }}
                animate={{
                  y: hoveredAsset === asset.id ? 0 : 20,
                  opacity: hoveredAsset === asset.id ? 1 : 0,
                }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {asset.name}
              </motion.p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
