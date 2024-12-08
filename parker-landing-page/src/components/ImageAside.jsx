import React from "react";

function ImageAside() {
  return (
    <div className="grid gap-6 mt-6 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
      {/* Left Section (Headline) */}
      <div className="self-center md:w-3/4 lg:w-full">
        <h2 className="text-[#3a3a3a] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Enterprise Communication & Automation Solutions
        </h2>
        <p className="text-[#3a3a3a] py-2 text-lg sm:text-base md:text-lg">
          Where innovation meets efficiency. Empowering seamless communication &
          automation for over 22 years.
        </p>
        <button className="px-4 py-2 bg-[#e06a61] text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Explore
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center items-center relative w-full h-full">
        <img
          src="/hero-img.png"
          alt=""
          className="w-2/3 md:w-1/2 lg:w-3/4" // Adjust size here
        />
      </div>
    </div>
  );
}

export default ImageAside;
