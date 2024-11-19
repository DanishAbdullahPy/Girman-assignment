import React, { useState } from "react";
// State to manage dialog visibility
const UserCard = ({ user }) => {
  const [showDetails, setShowDetails] = useState(false); 

  // Function to toggle dialog
  const handleFetchDetails = () => {
    setShowDetails(true);
  };

  // Function to close dialog
  const handleCloseDetails = () => {
    setShowDetails(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
      <div className="flex items-center mb-4">
        <img
          src={
            user.profile_picture ||
            "https://img.freepik.com/free-photo/looking-camera-young-pretty-girl-isolated-yellow-background_141793-63332.jpg"
          } // Fallback profile picture
          alt={`${user.first_name} ${user.last_name}`}
          className="w-16 h-16 rounded-full object-cover border border-gray-300"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-900">{`${user.first_name} ${user.last_name}`}</h2>
          <p className="text-gray-500 flex items-center mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2C8.134 2 5 5.134 5 9c0 5.525 7 13 7 13s7-7.475 7-13c0-3.866-3.134-7-7-7zM12 11a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            {user.city}
          </p>
        </div>
      </div>

      <hr className="w-full border-gray-200 my-4" />

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          <div>
            <p className="text-sm font-medium text-gray-800">{user.contact_number}</p>
            <p className="text-xs text-gray-400 mt-1">Available on phone</p>
          </div>
        </div>
        <button
          onClick={handleFetchDetails} 
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Fetch Details
        </button>
      </div>

      {/* Dialog Box */}
      {showDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              onClick={handleCloseDetails}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold text-gray-900 mb-4">User Details</h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {user.first_name} {user.last_name}
              </p>
              <p>
                <strong>City:</strong> {user.city}
              </p>
              <p>
                <strong>Contact:</strong> {user.contact_number}
              </p>
              <img
                src={
                  user.profile_picture ||
                  "https://img.freepik.com/free-photo/looking-camera-young-pretty-girl-isolated-yellow-background_141793-63332.jpg"
                }
                alt={`${user.first_name} ${user.last_name}`}
                className="h-32 w-32 rounded-full object-cover mt-4"
              />
            </div>

            <button
              onClick={handleCloseDetails}
              className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
