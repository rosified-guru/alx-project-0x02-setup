import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

const Home = () => {
  const [cards, setCards] = useState([
    { title: 'Getting Started', content: 'Learn how to get started with our application step by step.' },
    { title: 'Features', content: 'Discover the key features that make our app powerful and easy to use.' },
    { title: 'Community', content: 'Join our growing community and connect with other users.' },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (data: { title: string; content: string }) => {
    setCards([...cards, data]);
  };

  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h2>Home Page</h2>
        <button onClick={() => setIsModalOpen(true)} style={{ marginBottom: '1rem' }}>
          Add New Card
        </button>

        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} />
        ))}

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </main>
    </>
  );
};

export default Home;