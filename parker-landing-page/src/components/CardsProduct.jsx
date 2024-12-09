import React from "react";
import SolutionData from "../data/solutions";

function CardsProduct() {
  return (
    <>
      <div id="solutions" className="flex justify-center mt-16"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SolutionData.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col justify-between rounded-md shadow-md bg-[#e0e0e0] p-4 mt-16"
          >
            <div
              className="absolute top-[-4rem] left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full flex items-center justify-center p-2"
              style={{ backgroundColor: card.logoColour }}
            >
              <img
                src={card.thumbnail}
                alt={card.imageAltText}
                className="object-contain w-24 h-24"
              />
            </div>
            <div className="mt-16">
              <img
                src={card.image}
                alt={card.imageAltText}
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-2 text-[#3a3a3a]">
                {card.header}
              </h3>
              <p className="mb-4 text-[#3a3a3a]">{card.subText}</p>
            </div>
            <button className="mt-6 bg-[#e06a61] text-white px-4 py-2 rounded hover:bg-[#b5221a]">
              {card.cta}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CardsProduct;
