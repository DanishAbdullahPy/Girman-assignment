import React, { useState } from "react";
import { userdata } from "../data/user"; 
import UserCard from "../Component/UserCard";

// State to manage the search term
const SearchResultsPage = () => {
  const [searchTerm, setSearchTerm] = useState(""); 
  const [filteredUsers, setFilteredUsers] = useState(userdata); 

  // Handle search input change
  const handleSearchChange = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    // Handle empty search term edge case
    if (value.trim() === "") {
      setFilteredUsers(userdata); // Show all users if no search term
      return;
    }

    // Filter users based on search term
    const filtered = userdata.filter((user) =>
      `${user.first_name} ${user.last_name}`.toLowerCase().includes(value)
    );

    // Handle edge case for invalid input (e.g., empty array)
    if (filtered.length === 0) {
      setFilteredUsers([]); 
    } else {
      setFilteredUsers(filtered); 
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md fixed w-full top-0 z-10">
        <div className="flex items-center space-x-3">
          <img
            src="/extractimages_11192024_22701.svg"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-black">Girman</h1>
            <span className="text-sm text-gray-500 tracking-wide">
              Technologies
            </span>
          </div>
        </div>

        <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-1/3">
          <input
            type="text"
            placeholder="🔍 Search"
            className="ml-2 w-full focus:outline-none text-gray-600"
            value={searchTerm}
            onChange={handleSearchChange} // Handle input changes
          />
        </div>
      </nav>

      <div className="pt-24 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
              <UserCard key={index} user={user} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <img
                src="https://img.freepik.com/free-photo/looking-camera-young-pretty-girl-isolated-yellow-background_141793-63332.jpg" // Placeholder image URL
                alt="No results"
                className="mx-auto mb-4 h-32 w-32 object-cover"
              />
              <p className="text-xl font-medium text-gray-600">No results found.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
