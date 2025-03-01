import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";


const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <p className="text-lg">This is the about page of the application.</p>
      </div>
    </div>
  );
};

export default About;
