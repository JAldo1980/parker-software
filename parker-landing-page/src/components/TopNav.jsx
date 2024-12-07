import React, { useState } from "react";

function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg p-4">
      <div className="flex justify-between items-center cursor-pointer p-4">
        <div>
          <img
            src="parker-software.png"
            alt="Parker Software Logo"
            className="w-1/5"
          />
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-xl">
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black mb-1"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
        <div className="hidden sm:flex gap-6 items-center">
          <a href="#solutions" className="hover:underline">
            Solutions
          </a>
          <a href="#resources" className="hover:underline">
            Resources
          </a>
          <button className="px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500">
            Contact
          </button>
        </div>
        <div
          className={`sm:hidden absolute top-0 right-0 w-3/4 bg-white p-6 mt-14 rounded-lg shadow-md ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a
            href="#solutions"
            onClick={closeMenu}
            className="text-right block mb-4 hover:underline"
          >
            Solutions
          </a>
          <a
            href="#resources"
            onClick={closeMenu}
            className=" text-right block mb-4 hover:underline"
          >
            Resources
          </a>
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="text-right block px-4 py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;
