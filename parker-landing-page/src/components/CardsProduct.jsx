import React from "react";
import SolutionData, { solutions } from "../data/solutions";

function CardsProduct() {
  return (
    <>
      <div id="solutions" className="flex justify-center mt-6">
        <h className="sm:text-3xl md:text-3xl lg:text-4xl">Our Solutions</h>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {SolutionData.map((card) => (
          <div
            key={card.id}
            className="p-4 rounded-md shadow-md bg-gradient-to-r from-[#228658] to-[#1b6a47]"
          >
            <img
              src={card.image}
              alt={card.imageAltText}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-white">{card.header}</h3>
            <p className="mb-4 text-white">{card.subText}</p>
            <button className="bg-white text-[#228658] px-4 py-2 rounded hover:bg-gray-200">
              {card.cta}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsProduct;
