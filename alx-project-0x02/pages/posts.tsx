import Header from '@/components/layout/Header';
import React, { useEffect, useState } from 'react';
import PostCard from '@/components/common/PostCard';

interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
interface PostsPageProps {
  posts: Post[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Posts</h2>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10), // Limit to first 10 posts
    },
  };
};

export default PostsPage;