
import React from 'react';

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      margin: '1rem 0',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
      backgroundColor: '#fff',
      maxWidth: '400px'
    }}>
      <h3 style={{ marginBottom: '0.5rem' }}>{title}</h3>
      <p>{content}</p>
    </div>
  );
};

export default Card;