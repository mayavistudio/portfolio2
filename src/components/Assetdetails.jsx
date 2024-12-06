import { useLocation } from "react-router-dom";

export default function AssetDetails() {
  const { state } = useLocation();
  const { asset } = state;

  return (
    <div className="min-h-screen text-gray-100 p-8">
      <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-12">
        {asset.name}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {asset.images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-xl"
          >
            <img
              src={image.src}
              alt={asset.name}
              className="w-full h-64 object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
