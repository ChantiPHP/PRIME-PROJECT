import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const AwardsAndRecognition = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const achievements = [
    {
      title: "The Prime Partner for Developers",
      description:
        "A proven partner for commercial real estate developers, PRIME works hand-in-hand with property owners and their development teams to ensure full occupancy for projects handled. PRIME’s approach to project marketing involves innovation and strong utilization of technology.",
      details: [
        {
          image: "/images/real-estate-handled.jpg",
          title: "Award",
          description: "Square meters of real estate handled",
        },
        {
          image: "/images/top-companies.jpg",
          title: "Award",
          description:
            "Have worked with top companies, including Ayala Corporation, SM Investments Corporation, Megaworld Corporation, Jollibee Foods Corporation, and GT Capital Holdings, among others.",
        },
      ],
    },
    {
      title: "The Expansion Companion",
      description:
        "Companies looking to aggressively grow their presence in the country look to PRIME Philippines for expedited results that cover the different major cities in Luzon, Visayas, and Mindanao. PRIME helps growing brands tap new, underserved markets nationwide.",
      details: [
        {
          image: "/images/expansion.jpg",
          title: "Award",
          description: "Expanded into underserved markets nationwide.",
        },
        {
          image: "/images/market-growth.jpg",
          title: "Award",
          description: "Helped brands achieve exponential market growth.",
        },
      ],
    },
    {
      title: "The Problem Solver",
      description:
        "Given the innovative and fast-paced nature of PRIME Philippines, the company looks to partner with developers to strengthen their underperforming projects. PRIME takes pride in its track record of reinvigorating slow-moving projects through creative marketing and innovative strategies.",
      details: [
        {
          image: "/images/problem-solving.jpg",
          title: "Award",
          description: "Reinvigorated slow-moving projects.",
        },
        {
          image: "/images/creative-marketing.jpg",
          title: "Award",
          description: "Implemented creative marketing strategies.",
        },
      ],
    },
  ];

  const partners = [
    {
      logo: "/images/pcci-logo.jpg",
      name: "PCCI",
      description:
        "The largest chamber in the Philippines that promotes businesses from various industries.",
    },
    {
      logo: "/images/dcccii-logo.jpg",
      name: "DCCCII",
      description:
        "Davao City’s leading organization that supports growth in the business community.",
    },
    {
      logo: "/images/corenet-logo.jpg",
      name: "CoreNet Global",
      description:
        "A global network of corporate real estate professionals.",
    },
    {
      logo: "/images/creba-logo.jpg",
      name: "CREBA",
      description:
        "The umbrella organization of the real estate and housing industry in the Philippines.",
    },
    {
      logo: "/images/rebap-logo.jpg",
      name: "REBAP",
      description:
        "An institution of licensed real estate professionals dedicated to professionalizing the real estate industry and setting its ethical standards.",
    },
    {
      logo: "/images/pareb-logo.jpg",
      name: "PAREB",
      description:
        "The Philippines’ first and largest non-profit organization of real estate specialists nationwide.",
    },
    {
      logo: "/images/uli-logo.jpg",
      name: "ULI",
      description:
        "The oldest and largest organization of real estate and land development experts globally.",
    },
    {
      logo: "/images/eccp-logo.jpg",
      name: "ECCP",
      description:
        "A bilateral foreign chamber promoting business opportunities between Europe and the Philippines.",
    },
    {
      logo: "/images/makati-tourism-logo.jpg",
      name: "Makati Tourism",
      description:
        "An organization promoting Makati City as a premier destination for business and tourism.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-gotham">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-16"
        style={{
          backgroundImage: "url('/awards.png')",
        }}
      >
        {/* Overlay Mask */}
        <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">YOUR SUCCESS IS OUR BUSINESS</h1>
          <div className="text-lg mb-6 mx-auto ">
            <p>
              In PRIME Philippines, we take pride in our commitment to helping our clients achieve success in their real estate businesses.
            </p>
            <p>
              Our company would not be where it is today without their trust and support.
            </p>
          </div>
        </div>
      </section>

     {/* Achievements Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6 max-w-screen-xl">
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
      What We Achieved So Far
    </h2>
    <div className="flex flex-col gap-8 items-center">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-lg p-6 transition flex flex-col items-center text-center w-full"
        >
          <h3
            className="text-xl font-semibold text-blue-600 mb-4 cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            {achievement.title}
          </h3>
          <p className="text-gray-600">{achievement.description}</p>
          {expanded === index && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievement.details.map((detail, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center text-center gap-4"
                >
                  <img
                    src={detail.image}
                    alt={detail.title}
                    className="w-48 h-48 object-cover rounded-lg"
                  />
                  <h4 className="text-lg font-semibold text-blue-600">
                    {detail.title}
                  </h4>
                  <p className="text-gray-600">{detail.description}</p>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* Partner Organizations Carousel */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
            Our Partner Organizations
          </h2>
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="partner-carousel"
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition text-center"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-20 h-20 mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-600">{partner.description}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AwardsAndRecognition;