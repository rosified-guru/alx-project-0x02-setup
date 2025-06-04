import React from 'react';
import Header from '../components/layout/Header';

const Home = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Home Page</h2>
        <p>Welcome to the home page of our awesome app.</p>
      </main>
    </>
  );
};

export default Home;