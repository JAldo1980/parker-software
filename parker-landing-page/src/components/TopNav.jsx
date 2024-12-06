import React from "react";

function TopNav() {
  return (
    <div>
      <div>
        <div>
          <img
            src="public/parker-software-logo.psd"
            alt="Parker Software Logo"
            className="w-16"
          />
        </div>
      </div>
      <div className="flex">
        <div>Solutions</div>
        <div>Resources</div>
        <div>Contact Us</div>
      </div>
    </div>
  );
}

export default TopNav;
