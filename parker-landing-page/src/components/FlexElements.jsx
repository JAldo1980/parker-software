import React from "react";

function FlexElements() {
  return (
    <>
      <div className="flex justify-center mt-6">
        <h className="sm:text-3xl md:text-3xl lg:text-4xl">Your Problems</h>
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-grow sm:flex-grow-[1] md:flex-grow-[1.5] lg:flex-grow-[2] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md">
            <h3>Problem goes here</h3>
          </div>
          <div className="flex-grow sm:flex-grow-[1.5] md:flex-grow lg:flex-grow-[1] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md">
            <h3>Problem goes here</h3>
          </div>
          <div className="flex-grow sm:flex-grow lg:flex-grow-[1.5] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md">
            <h3>Problem goes here</h3>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          <div className="flex-grow sm:flex-grow-[2] md:flex-grow lg:flex-grow-[1] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md">
            <h3>Problem goes here</h3>
          </div>
          <div className="flex-grow-[2] sm:flex-grow-[1.5] md:flex-grow-[1] lg:flex-grow-[2] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md">
            <h3>Problem goes here</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlexElements;
