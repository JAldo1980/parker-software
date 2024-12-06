import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto px-4">
        {/* Company Name */}
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-white">Parker Software</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-4">
          <a href="#" className="hover:text-white">
            Home
          </a>
          <a href="#" className="hover:text-white">
            About Us
          </a>
          <a href="#" className="hover:text-white">
            Solutions
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-600 mb-4" />

        {/* Copyright */}
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
