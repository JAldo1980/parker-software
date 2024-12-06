import React from "react";

function TopNav() {
  return (
    <div className="flex justify-between items-center cursor-pointer">
      <div>
        <div>
          <img
            src="parker-software.png"
            alt="Parker Software Logo"
            className="w-1/5"
          />
        </div>
      </div>
      <div className="flex gap-6 items-center  ">
        <div>Solutions</div>
        <div>Resources</div>
        <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Contact
        </button>
      </div>
    </div>
  );
}

export default TopNav;
