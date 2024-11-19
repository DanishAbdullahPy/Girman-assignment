import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white shadow-md w-full fixed top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        
        <div className="flex items-center">
          <img
            src="/ok-removebg-preview.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <h1 className="text-lg font-semibold ml-2 text-gray-800">Girman</h1>
        </div>

        <div
          className="cursor-pointer md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </div>

        <div className={`flex-col md:flex md:flex-row md:items-center ${menuOpen ? 'block' : 'hidden'} absolute md:relative bg-white md:bg-transparent top-16 md:top-0 left-0 md:left-auto w-full md:w-auto`}>
  <a href="/search" className="px-4 py-2 block text-gray-800 hover:text-blue-500 md:py-0">Search</a>
  <a href="https://girmantech.com" className="px-4 py-2 block text-gray-800 hover:text-blue-500 md:py-0">Website</a>
  <a href="https://in.linkedin.com/company/girmantech?trk=public_post_feed-actor-name" className="px-4 py-2 block text-gray-800 hover:text-blue-500 md:py-0">LinkedIn</a>
  <a href="mailto:contact@girmantech.com" className="px-4 py-2 block text-gray-800 hover:text-blue-500 md:py-0">Contact</a>
</div>

      </div>
    </div>
  );
}

export default Navbar;
