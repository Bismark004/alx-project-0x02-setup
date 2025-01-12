import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">{content}</p>
      <p className="text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
