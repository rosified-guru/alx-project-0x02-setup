import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';

interface Address {
  street: string;
  city: string;
  zipcode: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
}

interface UsersPageProps {
  users: User[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Users</h2>
        {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data: User[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
};

export default UsersPage;