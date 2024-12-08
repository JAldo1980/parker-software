import React from "react";

function Footer() {
  return (
    <footer className=" bg-[#3a3a3a] text-gray-300 py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-4">
          <img
            src="parkersoftware-white-logo.png"
            alt="Parker Software Logo"
            className="w-auto h-6 md:h-8 lg:h-10 object-contain"
          />
        </div>
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="" className="hover:text-white">
            About Us
          </a>
          <a href="#solutions" className="hover:text-white">
            Solutions
          </a>
          <a href="#resources" className="hover:text-white">
            Resources
          </a>
          <a href="" className="hover:text-white">
            Contact
          </a>
        </div>

        <hr className="border-gray-600 mb-4" />
        <div className="text-center text-sm">
          <p>
            © {new Date().getFullYear()} Parker Software. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
