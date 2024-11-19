import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userdata } from '../data/user'; 

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(''); // For handling error messages
  const navigate = useNavigate();

  const handleSearch = () => {
    const trimmedSearchTerm = searchTerm.trim(); // Remove extra spaces

    // Validate input
    if (!trimmedSearchTerm) {
      setError('Please enter a valid search term.');
      return;
    }

    // Filter results from userdata
    const results = userdata.filter((user) =>
      `${user.first_name} ${user.last_name}`
        .toLowerCase()
        .includes(trimmedSearchTerm.toLowerCase())
    );

    // Handle no results found
    if (results.length === 0) {
      setError('No results found. Please try again.');
      return;
    }

    // Clear errors and navigate to the search results page with results
    setError('');
    navigate('/search', { state: { results } });
  };

  // Handle "Enter" key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="border border-gray-300 rounded-l px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default SearchBar;
