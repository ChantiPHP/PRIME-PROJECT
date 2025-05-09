import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const LatestInsights = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate(); // For navigation to detailed views

  const insights = [
    {
      id: 1,
      title: "Real Estate Trends in 2025",
      category: "Real Estate",
      description:
        "Discover the latest trends shaping the real estate market in the Philippines for 2025.",
      image: "https://ascendixtech.com/wp-content/uploads/2022/12/Real-Estate-Trends-2024.png", // Example image
      link: "/insights/real-estate-trends-2025",
      content:
        "The real estate market in 2025 is expected to be shaped by technological advancements, sustainable practices, and evolving consumer preferences. Learn more about these trends and how they will impact the industry.",
    },
    {
      id: 2,
      title: "Sustainable Development Insights",
      category: "Sustainability",
      description:
        "Learn how sustainable practices are transforming the real estate industry.",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0", // Example image
      link: "/insights/sustainable-development",
      content:
        "Sustainability is at the forefront of modern real estate development. Discover how green building practices and renewable energy are reshaping the industry.",
    },
    {
      id: 3,
      title: "Investment Opportunities in Metro Manila",
      category: "Investment",
      description:
        "Explore the top investment opportunities in Metro Manila's booming real estate market.",
      image: "https://images.unsplash.com/photo-1542223616-740d74a5f5c2", // Example image
      link: "/insights/investment-opportunities",
      content:
        "Metro Manila offers a wealth of investment opportunities in residential, commercial, and mixed-use developments. Learn about the most promising areas and projects.",
    },
    {
      id: 4,
      title: "The Future of Commercial Spaces",
      category: "Commercial",
      description:
        "Understand how commercial spaces are evolving to meet modern business needs.",
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36", // Example image
      link: "/insights/future-of-commercial-spaces",
      content:
        "Commercial spaces are adapting to the needs of modern businesses, with a focus on flexibility, technology integration, and sustainability.",
    },
    {
      id: 5,
      title: "Technology in Real Estate",
      category: "Technology",
      description:
        "Explore how technology is revolutionizing the real estate industry in the Philippines.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475", // Example image
      link: "/insights/technology-in-real-estate",
      content:
        "Technology is transforming the real estate industry, from smart homes to AI-driven property management. Discover the latest innovations.",
    },
  ];

  const categories = ["All", "Real Estate", "Sustainability", "Investment", "Commercial", "Technology"];

  const filteredInsights = insights.filter(
    (insight) =>
      (selectedCategory === "All" || insight.category === selectedCategory) &&
      insight.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleReadMore = (id) => {
    const selectedInsight = insights.find((insight) => insight.id === id);
    if (selectedInsight) {
      navigate(selectedInsight.link, { state: { insight: selectedInsight } });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 via-yellow-50 to-blue-500 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Insights
          </h1>
          <p className="text-lg text-yellow-100">
            Stay updated with the latest trends, news, and insights in the real
            estate industry.
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full md:w-1/2 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition"
            />

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full md:w-1/4 px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:shadow-md transition"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Insights Grid Section */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {insight.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{insight.description}</p>
                  <button
                    onClick={() => handleReadMore(insight.id)}
                    className="text-blue-600 hover:text-yellow-500 font-semibold"
                  >
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results Found */}
          {filteredInsights.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-blue-900">
                No insights found.
              </h3>
              <p className="text-gray-700">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LatestInsights;