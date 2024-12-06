import React from "react";

function CardsProduct() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div className="p-4 rounded-md shadow-md bg-gradient-to-r from-[#228658] to-[#1b6a47]">
        <h3 className="text-xl font-bold mb-2 text-white">Header here</h3>
        <p className="mb-4 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          assumenda officiis eum deserunt provident error ipsa ratione mollitia
          velit non.
        </p>
        <button className="bg-white text-[#228658] px-4 py-2 rounded hover:bg-gray-200">
          CTA here
        </button>
      </div>
      <div className="p-4 rounded-md shadow-md bg-gradient-to-r from-[#228658] to-[#1b6a47]">
        <h3 className="text-xl font-bold mb-2 text-white">Header here</h3>
        <p className="mb-4 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          assumenda officiis eum deserunt provident error ipsa ratione mollitia
          velit non.
        </p>
        <button className="bg-white text-[#228658] px-4 py-2 rounded hover:bg-gray-200">
          CTA here
        </button>
      </div>
      <div className="p-4 rounded-md shadow-md bg-gradient-to-r from-[#228658] to-[#1b6a47]">
        <h3 className="text-xl font-bold mb-2 text-white">Header here</h3>
        <p className="mb-4 text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          assumenda officiis eum deserunt provident error ipsa ratione mollitia
          velit non.
        </p>
        <button className="bg-white text-[#228658] px-4 py-2 rounded hover:bg-gray-200">
          CTA here
        </button>
      </div>
    </div>
  );
}

export default CardsProduct;
