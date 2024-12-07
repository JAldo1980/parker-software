import React from "react";
import FlexImages from "./FlexImages";
import { SocialData } from "../data/socials";

function Footer() {
  return (
    <footer className=" bg-[#374248] text-gray-300 py-6 mt-6">
      <div className="container mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold text-white">Parker Software</h2>
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
        <FlexImages data={SocialData} />
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
