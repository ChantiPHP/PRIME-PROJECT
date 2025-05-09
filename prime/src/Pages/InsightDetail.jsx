import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const InsightDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const insight = location.state?.insight;

  const [isImageModalOpen, setImageModalOpen] = useState(false);

  // Example tags and perspectives for each insight
  const tagsAndPerspectives = {
    "Real Estate Trends in 2025": {
      tags: ["Real Estate", "Trends", "2025"],
      perspectives: [
        "The real estate market is shifting toward sustainable practices.",
        "Urbanization is driving demand for mixed-use developments.",
        "Technology is reshaping how properties are marketed and sold.",
      ],
    },
    "Sustainable Development Insights": {
      tags: ["Sustainability", "Green Building", "Renewable Energy"],
      perspectives: [
        "Green building practices are becoming the norm in real estate.",
        "Renewable energy adoption is reducing carbon footprints.",
        "Sustainability is now a key factor in property valuation.",
      ],
    },
    "Investment Opportunities in Metro Manila": {
      tags: ["Investment", "Metro Manila", "Opportunities"],
      perspectives: [
        "Metro Manila offers high ROI in residential properties.",
        "Commercial spaces in prime locations are in demand.",
        "Infrastructure projects are boosting property values.",
      ],
    },
    "The Future of Commercial Spaces": {
      tags: ["Commercial", "Future", "Business"],
      perspectives: [
        "Flexible workspaces are redefining commercial real estate.",
        "E-commerce growth is increasing demand for warehouses.",
        "Smart buildings are enhancing tenant experiences.",
      ],
    },
  };

  const currentTags = tagsAndPerspectives[insight?.title]?.tags || [];
  const currentPerspectives =
    tagsAndPerspectives[insight?.title]?.perspectives || [];

  if (!insight) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-blue-900">Insight Not Found</h1>
          <p className="text-gray-700 mt-4">
            The insight you are looking for does not exist or was not provided.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-sm text-gray-600">
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/")}
            >
              Home
            </span>{" "}
            /{" "}
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/latest-insights")}
            >
              Latest Insights
            </span>{" "}
            / <span className="text-blue-900">{insight.title}</span>
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Image Section */}
            <div className="relative">
              <img
                src={insight.image}
                alt={insight.title}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
                onClick={() => setImageModalOpen(true)}
              />
              <p className="text-sm text-gray-500 mt-2 text-center">
                Click the image to view in full-screen
              </p>
            </div>

            {/* Content Section */}
            <div>
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                {insight.content}
              </p>
              <div className="mb-8">
                <p className="text-gray-600 text-sm">
                  <strong>Published on:</strong> {new Date().toLocaleDateString()}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Author:</strong> PRIME Editorial Team
                </p>
              </div>
              <button
                onClick={() => navigate(-1)}
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={insight.image}
              alt={insight.title}
              className="rounded-lg max-w-full max-h-screen"
            />
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-gray-200 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Tags Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {currentTags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Perspectives Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-blue-900 mb-4">Perspectives</h2>
          <ul className="list-disc list-inside text-gray-700">
            {currentPerspectives.map((perspective, index) => (
              <li key={index}>{perspective}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Leave a Comment</h2>
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="Write your comment here..."
          ></textarea>
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
            Submit Comment
          </button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default InsightDetail;