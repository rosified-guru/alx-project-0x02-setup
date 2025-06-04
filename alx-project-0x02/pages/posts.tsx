import Header from '@/components/layout/Header';
import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data.slice(0, 10)); // Fetch first 10 posts for simplicity
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>

        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  );
};

export default PostsPage;
