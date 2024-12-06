import React from "react";

function ImageAside() {
  return (
    <div className="grid grid-cols-2">
      <div className="self-center">
        <h2 className="text-5xl">Impactful headline goes here</h2>
        <p className="py-2">Sub-text to go here, below the impactful header</p>
        <button className="py-2">CTA here</button>
      </div>

      <div className="self-center border-2 border-black relative">
        {/* Video */}
        <video
          src="https://www.parkersoftware.com/img/vid.mp4"
          autoPlay
          loop
          muted
          className="fill"
        ></video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
    </div>
  );
}

export default ImageAside;
