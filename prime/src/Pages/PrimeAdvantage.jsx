import React from "react";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import Footer from "../Components/Footer";
import { FaLightbulb, FaChartLine, FaHandsHelping, FaHandshake, FaGlobe, FaUsers } from "react-icons/fa";

const PrimeAdvantage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Reusable Header Section */}
      <PageHeader
        title="PRIME Advantage"
        description="Discover the unique advantages that PRIME Philippines offers to help you achieve your real estate goals."
      />

      {/* Features Section */}
      <div className="container mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
          Why Choose PRIME Philippines?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaLightbulb className="text-blue-600 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Expert Advisory
            </h2>
            <p className="text-gray-600 text-center">
              Our team of experts provides unparalleled insights and strategies
              to help you make informed decisions.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaChartLine className="text-blue-600 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Market Leadership
            </h2>
            <p className="text-gray-600 text-center">
              PRIME Philippines is a leader in the real estate market, offering
              innovative solutions tailored to your needs.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaHandsHelping className="text-blue-600 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Comprehensive Services
            </h2>
            <p className="text-gray-600 text-center">
              From property acquisition to management, we provide end-to-end
              services to ensure your success.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaHandshake className="text-blue-600 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Trusted Partnerships
            </h2>
            <p className="text-gray-600 text-center">
              We build long-term relationships with our clients, ensuring trust
              and mutual success.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaGlobe className="text-blue-600 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Global Reach
            </h2>
            <p className="text-gray-600 text-center">
              Our extensive network and global presence allow us to connect you
              with opportunities worldwide.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="flex justify-center mb-4">
              <FaUsers className="text-blue-600 text-5xl" />
            </div>
            <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
              Client-Centric Approach
            </h2>
            <p className="text-gray-600 text-center">
              We prioritize your needs and goals, delivering personalized
              solutions that exceed expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                "PRIME Philippines helped us secure the perfect property for
                our business. Their expertise and professionalism are
                unmatched."
              </p>
              <h3 className="text-blue-600 font-bold">- Client A</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                "The team at PRIME Philippines provided invaluable insights
                that helped us make informed investment decisions."
              </p>
              <h3 className="text-blue-600 font-bold">- Client B</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <p className="text-gray-700 italic mb-4">
                "Their commitment to excellence and client satisfaction is
                truly commendable. Highly recommended!"
              </p>
              <h3 className="text-blue-600 font-bold">- Client C</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-6">
            Contact us today to learn more about how we can help you achieve
            your real estate goals.
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

export default PrimeAdvantage;