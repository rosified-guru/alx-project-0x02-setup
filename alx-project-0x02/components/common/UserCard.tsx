import React from 'react';

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface UserCardProps {
  name: string;
  email: string;
  address: Address;
}

const UserCard: React.FC<UserCardProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border">
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-gray-700 mb-1">📧 {email}</p>
      <p className="text-gray-600 text-sm">
        🏠 {address.street},  {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;