import React from "react";
import { Search, Copy, MoreHorizontal } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3 bg-gray-800 text-white  shadow-sm">
      {/* Left: Logo and Title */}
      <div className="flex items-center space-x-2">
        <div className="h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-xl">F</span>
        </div>
        <h1 className="font-bold text-xl text-white">FoxRidge Payment API</h1>
      </div>
      
      {/* Middle: Search */}
      <div className="hidden md:flex relative flex-1 max-w-md mx-8">
        {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-white" />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="block w-full pl-10 pr-3 py-2 border border-white rounded-md text-sm placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        /> */}
      </div>
      
      {/* Right: Icons and Button */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-md">
          <Copy className="h-5 w-5 text-white" />
        </button>
        <button className="p-2 rounded-md">
          <MoreHorizontal className="h-5 w-5 text-white" />
        </button>
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors">
          V1.0
        </button>
      </div>
    </nav>
  );
}

export default Navbar;