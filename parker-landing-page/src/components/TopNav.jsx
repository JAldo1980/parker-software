import React, { useState } from "react";
import BannerStretch from "./BannerStretch";

function TopNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="sticky top-0 z-50 w-full bg-[#f2f2f2] shadow-lg">
      <div className=" w-full">
        <BannerStretch />
        <nav
          className="container mx-auto px-4 py-6 sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] 2xl:max-w-[1536px] flex justify-between items-center cursor-pointer p-4"
          role="navigation"
          aria-label="Main Navigation"
        >
          <div>
            <img
              src="/public/parker-software-logo.svg"
              alt="Parker Software Logo"
              className="w-auto h-12 md:h-14 lg:h-18 object-contain"
            />
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-xl"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </button>
          </div>
          <div className="hidden sm:flex gap-6 items-center">
            <a
              href="#solutions"
              className="text-[#3a3a3a] hover:underline"
              role="menuitem"
            >
              Solutions
            </a>
            <a
              href="#resources"
              className=" text-[#3a3a3a] hover:underline"
              role="menuitem"
            >
              Resources
            </a>
            <button
              className="px-4 py-2 bg-[#e06a61] text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500"
              aria-label="Contact us"
            >
              Contact
            </button>
          </div>
          {/* start of mobile menu */}
          <div
            className={`sm:hidden absolute top-0 right-0 w-3/4 bg-white p-6 mt-14 rounded-lg shadow-md ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <a
              href="#solutions"
              onClick={closeMenu}
              className="text-right block mb-4 hover:underline"
              role="menuitem"
            >
              Solutions
            </a>
            <a
              href="#resources"
              onClick={closeMenu}
              className=" text-right block mb-4 hover:underline"
              role="menuitem"
            >
              Resources
            </a>
            <div className="flex justify-end">
              <button
                onClick={closeMenu}
                className="text-right block px-4 py-2 bg-[#e06a61] text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                role="menuitem"
                aria-label="Contact us"
              >
                Contact
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default TopNav;
