import React from "react";
import { ProblemsData } from "../data/problems"; // Adjust the path based on your folder structure

function FlexElements() {
  return (
    <>
      <div className="flex justify-center mt-6">
        <h className="sm:text-3xl md:text-3xl lg:text-4xl">Your Problems</h>
      </div>
      <div className="flex flex-col gap-6 pt-6">
        <div className="flex flex-wrap gap-4 w-full">
          {ProblemsData.slice(0, 3).map((problem, index) => (
            <div
              key={problem.id}
              className={`flex-grow sm:flex-grow-[1] md:flex-grow-[1.5] lg:flex-grow-[2] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md ${
                index === 0
                  ? "bg-[#9f61db]"
                  : index === 1
                  ? "bg-[#5c4aa0]"
                  : "bg-[#8c60d7]"
              }`}
            >
              <h3>{problem.h3}</h3>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 w-full">
          {ProblemsData.slice(3, 5).map((problem, index) => (
            <div
              key={problem.id}
              className={`flex-grow sm:flex-grow-[1.5] md:flex-grow lg:flex-grow-[1] h-20 bg-[#9f61db] flex items-center justify-center rounded-md shadow-md ${
                index === 0 ? "bg-[#5c4aa0]" : "bg-[#8c60d7]"
              }`}
            >
              <h3>{problem.h3}</h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlexElements;
