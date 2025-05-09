import React from "react";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import Footer from "../Components/Footer"; // Import Footer

const PressRoom = () => {
  const articles = [
    {
      title: "PRIME Philippines Expands to New Markets",
      description:
        "Read about our latest expansion and how we are redefining the real estate industry.",
      link: "/articles/expansion",
    },
    {
      title: "Sustainability Initiatives in Real Estate",
      description:
        "Learn how PRIME Philippines is leading the way in sustainable practices.",
      link: "/articles/sustainability",
    },
    {
      title: "Innovative Solutions for Modern Real Estate",
      description:
        "Discover how PRIME Philippines is introducing cutting-edge solutions to meet modern demands.",
      link: "/articles/innovation",
    },
    {
      title: "Empowering Communities Through Real Estate",
      description:
        "Explore how PRIME Philippines is making a positive impact on communities through real estate.",
      link: "/articles/communities",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Reusable Header Section */}
      <PageHeader
        title="Press Room"
        description="Stay updated with the latest news, press releases, and media coverage about PRIME Philippines."
      />

      {/* Press Articles Section */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2"
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-4">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <a
                href={article.link}
                className="text-blue-600 hover:underline mt-4 inline-block"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-lg mb-6">
            Stay connected with PRIME Philippines for the latest updates and
            insights in the real estate industry.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default PressRoom;