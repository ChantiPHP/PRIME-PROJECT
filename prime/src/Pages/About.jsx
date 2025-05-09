import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Button from "../ui/Button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const About = () => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const toggleCard = (card) => {
    setExpandedCard(expandedCard === card ? null : card);
  };

  const carouselImages = [
    "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800&q=80",
  ];

  const handleNext = () => {
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCarouselIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-500 via-yellow-50 to-blue-500 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                About PRIME Philippines
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Since 2009, PRIME Philippines has been at the forefront of the
                Philippine real estate industry, providing innovative solutions
                and data-driven insights to clients nationwide.
              </p>
              <div className="flex space-x-4">
                <Button
                  as="a"
                  href="/our-mission"
                  text="Our Mission"
                  variant="primary"
                  className="bg-blue-600 text-white hover:bg-yellow-500 hover:text-blue-900 transition-transform"
                />
                <Button
                  as="a"
                  href="/our-team"
                  variant="outline"
                  text="Our Team"
                  className="border-blue-600 text-blue-600 hover:bg-yellow-500 hover:text-blue-900 transition-transform"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 rounded-lg z-0"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-300 rounded-lg z-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                  alt="PRIME Philippines Team"
                  className="rounded-lg shadow-xl relative z-10 hover:scale-105 transition-transform"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Highlights Carousel Section */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Highlights
          </h2>
          <div className="relative">
            <div className="flex items-center justify-center">
              <img
                src={carouselImages[carouselIndex]}
                alt="Highlight"
                className="rounded-lg shadow-lg w-full max-w-4xl"
              />
            </div>
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-blue-900 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-yellow-500 hover:text-blue-900 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Story</h2>
            <p className="text-gray-700">
              The journey of PRIME Philippines from a small consultancy to the
              country's leading full-service real estate firm.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                year: "2009",
                title: "Foundation",
                description:
                  "PRIME Philippines was founded by Jet Yu with a vision to transform the local real estate industry.",
              },
              {
                year: "2012",
                title: "Expansion",
                description:
                  "Opened regional offices in Cebu and Davao, extending our services across the Philippines.",
              },
              {
                year: "2015",
                title: "Innovation",
                description:
                  "Launched PRIME Radar, our proprietary market intelligence platform for real-time analytics.",
              },
              {
                year: "2023",
                title: "Leadership",
                description:
                  "Recognized as the leading full-service real estate consultancy firm in the Philippines.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-yellow-100 p-6 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-blue-600 font-bold text-xl">
                    {item.year}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Our Mission",
                description:
                  "To transform the Philippine real estate landscape by providing innovative, data-driven solutions that create lasting value for our clients, stakeholders, and communities.",
                expandedInfo:
                  "We are committed to excellence, integrity, and professionalism in every aspect of our service, ensuring that we exceed expectations and set new standards in the industry.",
              },
              {
                title: "Our Vision",
                description:
                  "To be the most trusted and innovative real estate consultancy firm in Southeast Asia, recognized for our commitment to excellence, integrity, and sustainable development.",
                expandedInfo:
                  "We envision a future where PRIME Philippines is synonymous with real estate excellence, setting the benchmark for industry standards and practices across the region.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform cursor-pointer"
                onClick={() => toggleCard(item.title)}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mt-4 text-center">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-center">
                  {item.description}
                </p>
                {expandedCard === item.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-700 text-center"
                  >
                    {item.expandedInfo}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-700">
              These fundamental principles guide our actions and decisions at
              PRIME Philippines.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of integrity in all our actions and decisions, ensuring transparency, honesty, and ethical conduct in every interaction.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly seek innovative solutions to drive the real estate industry forward, embracing new technologies and methodologies to deliver exceptional results.",
              },
              {
                title: "Excellence",
                description:
                  "We strive for excellence in every project and relationship we build, setting high standards and consistently delivering quality results.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-yellow-100 p-8 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4 text-blue-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;