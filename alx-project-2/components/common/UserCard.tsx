import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces/index";

const Users: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-3xl font-bold text-center">Users</h1>
      </header>
      <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard
            key={user.email}
            name={user.name}
            email={user.email}
            address={user.address}
          />
        ))}
      </div>
    </div>
  );
};

export default Users; 
