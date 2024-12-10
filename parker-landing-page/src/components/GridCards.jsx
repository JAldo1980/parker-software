import React from "react";
import { cardData } from "../data/resources";

function GridCards() {
  return (
    <>
      <div id="resources" className="flex justify-center mt-6">
        <h className="sm:text-3xl md:text-3xl lg:text-4xl text-[#3a3a3a]">
          Our Resources
        </h>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="flex flex-col rounded-md p-4 shadow-md bg-[#e0e0e0] text-white"
          >
            <img
              src={card.imgSrc}
              alt={card.imgAltText}
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-[#3a3a3a] text-lg font-bold mb-2">
              {card.header}
            </h3>
            <div className="bg-[#3a3a3a] p-1 rounded">
              <p>{card.category}</p>
            </div>
            <p className="text-[#e06a61] font-semibold mt-2">{card.date}</p>
            <p className="text-[#3a3a3a] mt-2 flex-grow">{card.subText}</p>{" "}
            <button
              className="mt-6 bg-[#e06a61] text-white px-4 py-2 rounded hover:bg-[#b5221a]"
              role="button"
              aria-label="button to resource"
            >
              {card.cta}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default GridCards;
