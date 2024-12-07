import React from "react";
import { cardData } from "../data/resources";

function GridCards() {
  return (
    <>
      <div id="resources" className="flex justify-center mt-6">
        <h className="sm:text-3xl md:text-3xl lg:text-4xl">Our Resources</h>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="rounded-md p-4 shadow-md bg-gradient-to-r from-[#69acdf] to-[#005f99] text-white"
          >
            <h3 className="text-lg font-bold mb-2">{card.header}</h3>
            <img
              src={card.imgSrc}
              alt={card.imgAltText}
              className="w-full h-40 object-cover mb-4"
            />
            <p>{card.subText}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              {card.cta}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default GridCards;
