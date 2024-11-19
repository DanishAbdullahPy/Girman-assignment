import React from 'react';
import Navbar from '../Component/Navbar';
import SearchBar from '../Component/SearchBar';

function HomePage() {
  return (
    <div className="bg-white-to-blue min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-20 md:mt-40 px-6">
        <div className="flex flex-col md:flex-row items-center gap-4 md:-ml-20">
          <img
            src="/ok-removebg-preview.png"
            alt="Logo"
            className="h-16 w-22 md:h-20 md:w-22 object-contain"
          />
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900">
            Girman
          </h1>
        </div>

        <div className="w-full max-w-sm md:w-1/3 md:max-w-xl mt-4 md:mt-6">
          <SearchBar />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
