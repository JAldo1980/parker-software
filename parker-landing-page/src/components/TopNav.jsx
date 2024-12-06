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
      <div className="flex gap-6 ">
        <div>Solutions</div>
        <div>Resources</div>
        <div>Contact</div>
      </div>
    </div>
  );
}

export default TopNav;
