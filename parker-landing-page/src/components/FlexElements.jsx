import React from "react";

function FlexElements() {
  return (
    <div className="flex flex-col items-center justify-center pt-6">
      {/* Top Row */}
      <div className="flex gap-4 mb-10">
        <div className="flex justify-center w-96 h-20 bg-blue-400 p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
        <div className="flex flex-wrap justify-center w-120 h-20 bg-blue-400 p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
        <div className="flex justify-center w-56 h-20 bg-blue-400 p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-4 pt-2">
        <div className="w-36 h-10 bg-blue-400"></div>
        <div className="w-28 h-10 bg-blue-400"></div>
        <div className="w-40 h-10 bg-blue-400"></div>
      </div>
    </div>
  );
}

export default FlexElements;
