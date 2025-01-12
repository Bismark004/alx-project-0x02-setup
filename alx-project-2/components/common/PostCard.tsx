import React from "react";
import { PostProps } from "@/interfaces/index";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 mb-2">By User{userId}</p>
      <p className="text-sm text-gray-500">{body}</p>
    </div>
  );
};

export default PostCard;
