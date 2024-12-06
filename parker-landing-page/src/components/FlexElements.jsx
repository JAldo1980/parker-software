import React from "react";

function FlexElements() {
  return (
    <div className="flex flex-col items-center justify-center pt-6">
      {/* Top Row */}
      <div className="flex gap-4 mb-10">
        <div className="flex justify-center w-96 h-20 bg-[#9f61db] p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
        <div className="flex flex-wrap justify-center w-120 h-20 bg-[#9f61db] p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
        <div className="flex justify-center w-56 h-20 bg-[#9f61db] p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex gap-4 mb-10">
        <div className="flex justify-center w-96 h-20 bg-[#9f61db] p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
        <div className="flex flex-wrap justify-center w-120 h-20 bg-[#9f61db] p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
        <div className="flex justify-center w-56 h-20 bg-[#9f61db] p-2 align-center">
          <h3>Problem goes here</h3>
        </div>
      </div>
    </div>
  );
}

export default FlexElements;
