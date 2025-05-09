import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PageHeader from "../Components/PageHeader";

const expertiseAreas = [
  {
    title: "Real Estate Development",
    description:
      "We specialize in creating sustainable and innovative real estate projects that meet the needs of modern living and business.",
    icon: "🏢",
  },
  {
    title: "Investment Advisory",
    description:
      "Our team provides expert advice on investment opportunities to help you maximize returns and minimize risks.",
    icon: "💼",
  },
  {
    title: "Sustainability Consulting",
    description:
      "We guide businesses in adopting sustainable practices to reduce environmental impact and enhance long-term value.",
    icon: "🌱",
  },
  {
    title: "Market Research",
    description:
      "Our in-depth market research helps clients make informed decisions by understanding trends and consumer behavior.",
    icon: "📊",
  },
  {
    title: "Property Management",
    description:
      "We offer end-to-end property management services to ensure your assets are well-maintained and profitable.",
    icon: "🏠",
  },
];

const OurExpertise = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Reusable Header Section */}
      <PageHeader
        title="Our Expertise"
        description="Discover the areas where we excel and how we can help you achieve your goals."
      />

      {/* Expertise Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 p-6 text-center"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-700">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-6">
            Let’s collaborate to turn your vision into reality. Contact us today
            to learn more about our services.
          </p>
          <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurExpertise;