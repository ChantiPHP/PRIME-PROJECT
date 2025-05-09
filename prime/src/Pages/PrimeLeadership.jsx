import React from "react";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import Footer from "../Components/Footer";

const PrimeLeadership = () => {
  const leaders = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "/path-to-leader1.jpg",
      description:
        "John has over 20 years of experience in the real estate industry and is the visionary behind PRIME Philippines.",
    },
    {
      name: "Jane Smith",
      position: "Chief Operating Officer",
      image: "/path-to-leader2.jpg",
      description:
        "Jane oversees operations and ensures the company delivers exceptional service to its clients.",
    },
    {
      name: "Michael Brown",
      position: "Head of Strategy",
      image: "/path-to-leader3.jpg",
      description:
        "Michael leads the strategic planning team, helping clients achieve their long-term goals.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Reusable Header Section */}
      <PageHeader
        title="PRIME Leadership"
        description="Meet the visionary leaders driving PRIME Philippines to success."
      />

      {/* Leadership Section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Meet Our Leaders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {leader.name}
              </h3>
              <p className="text-gray-600 font-medium mb-2">
                {leader.position}
              </p>
              <p className="text-gray-700">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Vision Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Our Vision and Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            At PRIME Philippines, we aim to revolutionize the real estate
            industry by providing innovative solutions and empowering
            communities.
          </p>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-lg mb-6">
            Are you ready to work with the best in the industry? Explore career
            opportunities at PRIME Philippines and become part of our success
            story.
          </p>
          <a
            href="/careers"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            Explore Careers
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PrimeLeadership;