import React from "react";
import { ProblemsData } from "../data/problems";

function FlexElements() {
  return (
    <>
      <div className="flex justify-center mt-6">
        <h className="sm:text-2xl md:text-3xl lg:text-4xl text-[#3a3a3a]">
          Problems
        </h>
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex flex-wrap gap-4 w-full">
          {ProblemsData.slice(0, 3).map((problem) => (
            <div
              key={problem.id}
              className="flex-grow sm:flex-grow-[1] md:flex-grow-[1.5] lg:flex-grow-[2] h-20 bg-[#3a3a3a] flex items-center justify-center rounded-md shadow-md p-2"
            >
              <h3 className="text-white font-semibold text-xl">{problem.h3}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          {ProblemsData.slice(3, 5).map((problem) => (
            <div
              key={problem.id}
              className="flex-grow sm:flex-grow-[1.5] md:flex-grow lg:flex-grow-[1] h-20 bg-[#3a3a3a] flex items-center justify-center rounded-md shadow-md p-2"
            >
              <h3 className="text-white font-semibold text-xl">{problem.h3}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlexElements;
