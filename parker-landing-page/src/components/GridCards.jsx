import React from "react";

function GridCards() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <div className="border-2 border-black rounded-md">
        <h3>Header goes here</h3>
        <img src="" alt="" />
        <p>sub-text can go here</p>
      </div>
      <div className="border-2 border-black rounded-md">
        <h3>Header goes here</h3>
        <img src="" alt="" />
        <p>sub-text can go here</p>
      </div>
      <div className="border-2 border-black rounded-md">
        <h3>Header goes here</h3>
        <img src="" alt="" />
        <p>sub-text can go here</p>
      </div>
      <div className="border-2 border-black rounded-md">
        <h3>Header goes here</h3>
        <img src="" alt="" />
        <p>sub-text can go here</p>
      </div>
    </div>
  );
}

export default GridCards;
