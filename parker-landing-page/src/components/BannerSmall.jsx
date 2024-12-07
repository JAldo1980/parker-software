import React from "react";

function BannerSmall() {
  return (
    <div className="bg-[#374248] p-4 rounded-md shadow-md  mx-auto text-center mt-6">
      <h3 className="text-xl font-bold text-white mb-2">
        Master the Future of Automation | Webinar January 19th 19:00 GMT
      </h3>
      <p className="text-white mb-4">Sign Up for Our Latest Webinar Today.</p>
      <div className="flex justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-1/2 p-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-[#e06a61]"
        />
        <button className="px-4 py-2 bg-[#e06a61] text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-[#e06a61]">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default BannerSmall;
