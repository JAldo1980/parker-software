import React from "react";

function GridCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="border-2 border-black rounded-md p-4 shadow-md">
        <h3 className="text-lg font-bold mb-2">Header goes here</h3>
        <img
          src=""
          alt="Placeholder"
          className="w-full h-40 object-cover mb-4"
        />
        <p>Sub-text can go here</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
      <div className="border-2 border-black rounded-md p-4 shadow-md">
        <h3 className="text-lg font-bold mb-2">Header goes here</h3>
        <img
          src=""
          alt="Placeholder"
          className="w-full h-40 object-cover mb-4"
        />
        <p>Sub-text can go here</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
      <div className="border-2 border-black rounded-md p-4 shadow-md">
        <h3 className="text-lg font-bold mb-2">Header goes here</h3>
        <img
          src=""
          alt="Placeholder"
          className="w-full h-40 object-cover mb-4"
        />
        <p>Sub-text can go here</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
      <div className="border-2 border-black rounded-md p-4 shadow-md">
        <h3 className="text-lg font-bold mb-2">Header goes here</h3>
        <img
          src=""
          alt="Placeholder"
          className="w-full h-40 object-cover mb-4"
        />
        <p>Sub-text can go here</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
    </div>
  );
}

export default GridCards;
