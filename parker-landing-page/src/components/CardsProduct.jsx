import React from "react";

function CardsProduct() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      <div className="border-2 border-black p-4 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Header here</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          assumenda officiis eum deserunt provident error ipsa ratione mollitia
          velit non.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
      <div className="border-2 border-black p-4 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Header here</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          assumenda officiis eum deserunt provident error ipsa ratione mollitia
          velit non.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
      <div className="border-2 border-black p-4 rounded-md shadow-md">
        <h3 className="text-xl font-bold mb-2">Header here</h3>
        <p className="mb-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
          assumenda officiis eum deserunt provident error ipsa ratione mollitia
          velit non.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          CTA here
        </button>
      </div>
    </div>
  );
}

export default CardsProduct;
