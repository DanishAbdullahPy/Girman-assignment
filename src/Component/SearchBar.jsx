import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Navigate to the search route
  const handleSearch = () => {
    navigate('/search'); 
  };

  // Trigger search when pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(); // Call the same search logic
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <input
        type="text"
        className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress} // Add Enter key functionality
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
