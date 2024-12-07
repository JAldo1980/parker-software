import React from "react";
import SolutionData from "../data/solutions";

function CardsProduct() {
  return (
    <>
      <div id="solutions" className="flex justify-center mt-12"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {SolutionData.map((card) => (
          <div
            key={card.id}
            className="mt-12 relative p-4 rounded-md shadow-md bg-gradient-to-r from-[#e06a61] to-[#e06a61]"
          >
            <div
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full flex items-center justify-center mb-4 p-2"
              style={{ backgroundColor: card.logoColour }}
            >
              <img
                src={card.thumbnail}
                alt={card.imageAltText}
                className="object-fit"
              />
            </div>

            <img
              src={card.image}
              alt={card.imageAltText}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-bold mb-2 text-white">{card.header}</h3>
            <p className="mb-4 text-white">{card.subText}</p>
            <button className="bg-white text-[#e06a61] px-4 py-2 rounded hover:bg-gray-200">
              {card.cta}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsProduct;
