import React from "react";

function BannerStretch() {
  return (
    <>
      <div className="flex flex-wrap justify-center bg-[#e06a61] p-2 gap-2">
        <h4 className="text-l text-white">
          Meet us at the Gartner Digital Workplace Summit | 19 - 20 May 2025
          London, U.K.
        </h4>
        <button className="text-white font-semibold rounded-full hover:underline ">
          Book Now
        </button>
      </div>
    </>
  );
}

export default BannerStretch;
