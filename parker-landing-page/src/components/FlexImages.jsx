import React from "react";

function FlexImages({ data }) {
  return (
    <>
      <div id="solutions" className="flex justify-center mt-6">
        <h className="sm:text-3xl md:text-3xl lg:text-4xl">Happy Clients</h>
      </div>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {data.map((item, index) => (
          <div key={item.id} className="flex flex-col items-center   p-4 w-48">
            <img
              src={item.image}
              alt={item.alt || "Image"}
              className="w-24 h-24 object-contain"
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
