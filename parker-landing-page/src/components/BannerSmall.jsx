import React from "react";

function BannerSmall() {
  return (
    <div className="bg-green-100 p-4 rounded-md shadow-md  mx-auto text-center mt-6">
      <h3 className="text-xl font-bold text-green-800 mb-2">
        Banner Text Goes Here
      </h3>
      <p className="text-green-700 mb-4">
        Subscribe to our newsletter to stay updated!
      </p>
      <div className="flex justify-center items-center gap-2">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-2/3 p-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
          Sign up
        </button>
      </div>
    </div>
  );
}

export default BannerSmall;
