import React from 'react';
import { useParams } from 'react-router-dom';
import usersData from '../data/users.json';

function UserDetailsPage() {
  const { id } = useParams();
  const user = usersData.find((u) => u.id.toString() === id);

  if (!user) {
    return (
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-4">User Not Found</h2>
        <p>The user you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Details:</strong> {user.details}</p>
    </div>
  );
}

export default UserDetailsPage;
