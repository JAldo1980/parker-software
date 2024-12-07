import React from "react";

function FlexImages({ data }) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      {data.map((item, index) => (
        <div
          key={item.id}
          className="flex flex-col items-center bg-white shadow-md rounded-md p-4 w-48"
        >
          <img
            src={item.image}
            alt={item.alt || "Image"}
            className="w-full h-32 object-cover rounded-md"
          />
          {item.headline && (
            <h3 className="mt-2 text-sm text-gray-700 font-bold text-center">
              {item.headline}
            </h3>
          )}
        </div>
      ))}
    </div>
  );
}

export default FlexImages;
