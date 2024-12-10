import React from "react";

function FlexImages({ data }) {
  return (
    <>
      <div className="flex justify-center mt-6">
        <h className="sm:text-2xl md:text-3xl lg:text-4xl text-[#3a3a3a]">
          Trusted By Our Happy Clients
        </h>
      </div>
      <div id="solutions" className="flex justify-center mt-6"></div>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center p-4 w-48 rounded-3xl"
          >
            <img
              src={item.image}
              alt={item.alt || "Image"}
              className="w-18 h-18 object-contain"
            />
            {item.headline && (
              <h3 className="mt-2 text-sm text-gray-700 font-bold text-center">
                {item.headline}
              </h3>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default FlexImages;
