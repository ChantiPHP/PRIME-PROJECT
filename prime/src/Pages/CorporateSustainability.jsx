import React from "react";
import Navbar from "../Components/Navbar";
import PageHeader from "../Components/PageHeader";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const CorporateSustainability = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      {/* Uniform Page Header */}
      <PageHeader
        title="Corporate Sustainability"
        description="Learn how PRIME Philippines is committed to sustainable and responsible business practices."
      />

      {/* Sustainability Initiatives Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Our Sustainability Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Initiative 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <img
                src="/images/green-buildings.jpg"
                alt="Green Buildings"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Green Buildings
              </h3>
              <p className="text-gray-600">
                We promote eco-friendly construction and sustainable building
                practices to reduce environmental impact.
              </p>
            </motion.div>

            {/* Initiative 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <img
                src="/images/community-engagement.jpg"
                alt="Community Engagement"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Community Engagement
              </h3>
              <p className="text-gray-600">
                Our initiatives focus on empowering communities and creating
                positive social impact.
              </p>
            </motion.div>

            {/* Initiative 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <img
                src="/images/renewable-energy.jpg"
                alt="Renewable Energy"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Renewable Energy
              </h3>
              <p className="text-gray-600">
                We invest in renewable energy projects to support a cleaner and
                greener future.
              </p>
            </motion.div>

            {/* Initiative 4 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
            >
              <img
                src="/images/waste-management.jpg"
                alt="Waste Management"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Waste Management
              </h3>
              <p className="text-gray-600">
                We implement waste reduction strategies and recycling programs
                to minimize our environmental footprint.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            Our Sustainability Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">50+</h3>
              <p className="text-gray-600">Green Building Projects</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">10,000+</h3>
              <p className="text-gray-600">Community Members Empowered</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">100%</h3>
              <p className="text-gray-600">Renewable Energy Usage</p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-4xl font-bold text-blue-600 mb-2">80%</h3>
              <p className="text-gray-600">Waste Reduction Achieved</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Sustainability Efforts</h2>
          <p className="text-lg mb-6">
            Partner with us to create a sustainable future for the real estate
            industry and beyond.
          </p>
          <a
            href="/contact"
            className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-8">
            What Our Partners Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/images/partner-a.jpg"
                alt="Partner A"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "PRIME Philippines' commitment to sustainability is truly
                inspiring. Their green initiatives have made a significant
                impact on our projects."
              </p>
              <h3 className="text-blue-600 font-bold">- Partner A</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/images/partner-b.jpg"
                alt="Partner B"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "Their focus on renewable energy and waste management aligns
                perfectly with our values. Highly recommended!"
              </p>
              <h3 className="text-blue-600 font-bold">- Partner B</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/images/partner-c.jpg"
                alt="Partner C"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "Working with PRIME Philippines has been a game-changer for our
                sustainability goals."
              </p>
              <h3 className="text-blue-600 font-bold">- Partner C</h3>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="/images/partner-d.jpg"
                alt="Partner D"
                className="w-20 h-20 mx-auto rounded-full mb-4"
              />
              <p className="text-gray-700 italic mb-4">
                "Their dedication to corporate sustainability has set a
                benchmark in the industry. Truly exceptional!"
              </p>
              <h3 className="text-blue-600 font-bold">- Partner D</h3>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporateSustainability;