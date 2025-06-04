import React from 'react';
import { type PostCardProps } from '@/interfaces';


const PostCard: React.FC<PostCardProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border">
      <h3 className="text-xl font-semibold mb-1">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard