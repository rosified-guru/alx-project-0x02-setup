import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
      <h1>My Awesome App</h1>
      <nav>
        <a href="/" style={{ marginRight: '1rem' }}>Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;