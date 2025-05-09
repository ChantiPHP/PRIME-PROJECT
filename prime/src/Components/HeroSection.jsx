import React from "react";

const HeroSection = ({ title, subtitle, backgroundImage }) => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-gotham mb-4">{title}</h1>
        <p className="text-lg md:text-xl font-gotham">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;