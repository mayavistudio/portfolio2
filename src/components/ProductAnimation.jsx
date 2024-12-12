const ProductAnimation = () => {
  return (
    <div className="min-h-screen text-gray-100 p-8">
      <h2 className="text-4xl font-extrabold text-purple-400 text-center mb-12">
        PRODUCT ANIMATION
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        <iframe
          src="https://www.youtube.com/embed/1UM1O223O0g?autoplay=1&loop=1&mute=1&controls=0&playlist=1UM1O223O0g"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/xjUtrMZ-xqs?autoplay=1&loop=1&mute=1&controls=0&playlist=xjUtrMZ-xqs"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/ac_LHUXp3P0?autoplay=1&loop=1&mute=1&controls=0&playlist=ac_LHUXp3P0"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
        {/* Shorts */}
        <iframe
          src="https://www.youtube.com/embed/IL5OxHBSVWw?autoplay=1&loop=1&mute=1&controls=0&playlist=IL5OxHBSVWw"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/AL3G4kK1GG0?autoplay=1&loop=1&mute=1&controls=0&playlist=AL3G4kK1GG0"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>

        <iframe
          src="https://www.youtube.com/embed/MZjPp8gm5VE?autoplay=1&loop=1&mute=1&controls=0&playlist=MZjPp8gm5VE"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>
        <iframe
          src="https://www.youtube.com/embed/OBCwyL2YcmY?autoplay=1&loop=1&mute=1&controls=0&playlist=OBCwyL2YcmY"
          className="w-full aspect-square"
          allow="autoplay"
          frameBorder="0"
        ></iframe>

        {/* Videos */}
      </div>
    </div>
  );
};

export default ProductAnimation;
