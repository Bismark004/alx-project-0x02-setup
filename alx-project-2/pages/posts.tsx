import React, { useEffect, useState } from "react";
import axios from "axios";
import PostCard from "../components/common/PostCard";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Posts</h1>
      </header>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
