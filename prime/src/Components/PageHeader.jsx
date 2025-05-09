import React from "react";

const PageHeader = ({ title, description }) => {
  return (
    <header className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </header>
  );
};

export default PageHeader;