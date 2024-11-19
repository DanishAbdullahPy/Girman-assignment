import React from "react";

function UserDetailsDialog({ user, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        {/* Header */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Fetch Details</h2>

        {/* User Details */}
        <div className="space-y-2">
          <p>
            <strong>Name:</strong> {user.first_name} {user.last_name}
          </p>
          <p>
            <strong>Location:</strong> {user.location}
          </p>
          <p>
            <strong>Contact Number:</strong> {user.contact}
          </p>
          <img
            src={user.profileImage}
            alt={user.first_name}
            className="h-32 w-32 rounded-full object-cover mt-4"
          />
        </div>

        {/* Footer */}
        <div className="mt-4">
          <button
            onClick={onClose}
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDetailsDialog;
