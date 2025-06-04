import React from 'react';
import Header from '../components/layout/Header';
import Card from '@/components/common/Card';
const Home = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Home Page</h2>
        <p>Welcome to the home page of our awesome app.</p>
        
        <Card
          title="Getting Started"
          content="Learn how to get started with our application step by step."
        />

        <Card
          title="Features"
          content="Discover the key features that make our app powerful and easy to use."
        />

        <Card
          title="Community"
          content="Join our growing community and connect with other users."
        />
      </main>
    </>
  );
};

export default Home;