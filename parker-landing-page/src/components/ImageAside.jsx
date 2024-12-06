import React from "react";

function ImageAside() {
  return (
    <div className="grid gap-6 mt-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      {/* Left Section (Headline) */}
      <div className="self-center md:w-3/4 lg:w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Enterprise Communication & Automation Solutions
        </h2>
        <p className="py-2 text-lg sm:text-base md:text-lg">
          Sub-text to go here, below the impactful header
        </p>
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Explore
        </button>
      </div>

      {/* Right Section (Video) */}
      <div className="self-center relative ">
        {/* Video */}
        <video
          src="https://www.parkersoftware.com/img/vid.mp4"
          autoPlay
          loop
          muted
          className="object-cover clip-hexagon"
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 clip-hexagon"></div>
      </div>
    </div>
  );
}

export default ImageAside;
