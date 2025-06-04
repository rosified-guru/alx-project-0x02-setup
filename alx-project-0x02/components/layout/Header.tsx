import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}>
      <h1>My Awesome App</h1>
      <nav style={{ marginTop: '0.5rem' }}>
        <Link href="/home" passHref>
          <a style={{ marginRight: '1rem' }}>Home</a>
        </Link>
        <Link href="/about" passHref>
          <a>About</a>
        </Link>
        <Link href="/posts" passHref>
           <a>Post</a>       
        </Link>
      </nav>
    </header>
  );
};

export default Header;