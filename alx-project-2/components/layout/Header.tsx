import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <div className="text-lg font-bold">My App</div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/home">
              <a className="hover:underline">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:underline">About</a>
            </Link>
          </li>
          <li>
            <Link href="/posts">
              <a className="hover:underline">Posts</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
