
import React from 'react';
import Header from '../components/layout/Header';
import Button from '@/components/common/Button';
const About = () => {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>About Page</h2>
        <p>This page contains information about our project and team.</p>
         <div className="space-x-4">
          <Button size="small" shape="rounded-sm">Small Button</Button>
          <Button size="medium" shape="rounded-md">Medium Button</Button>
          <Button size="large" shape="rounded-full">Large Button</Button>
        </div>
      </main>
    </>
  );
};

export default About;