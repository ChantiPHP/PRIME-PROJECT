import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyCard from "../Components/PropertyCard";
import { FaWhatsapp, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


const RealEstateLandingPage = () => {
  const title = "REAL ESTATE. WE ADVICE. YOU ADVANCE.";
  const subtitle = "Landlord Representation • Tenant Representation • Capital Markets & Investments • Research & Advisory • Design & Construction • Project Management";
  const featuredProperties = [
    {
      title: "Prime Tower",
      location: "Makati City",
      size: "500",
      price: "₱150,000/month",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Skyline Offices",
      location: "Bonifacio Global City",
      size: "300",
      price: "₱120,000/month",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "The Prime Plaza",
      location: "Ortigas Center",
      size: "750",
      price: "₱250,000/month",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  const [showContactModal, setShowContactModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log(contactForm);
  };

  const [stats, setStats] = useState({ deals: 0, clients: 0, projects: 0, research: 0 });

  useEffect(() => {
    const targetStats = { deals: 500, clients: 7000, projects: 300, research: 150 };
    const duration = 1000;
    const intervalTime = 50;
    const steps = duration / intervalTime;
    
    let counts = { ...stats };
    const interval = setInterval(() => {
      counts = {
        deals: Math.min(counts.deals + Math.ceil(targetStats.deals / steps), targetStats.deals),
        clients: Math.min(counts.clients + Math.ceil(targetStats.clients / steps), targetStats.clients),
        projects: Math.min(counts.projects + Math.ceil(targetStats.projects / steps), targetStats.projects),
        research: Math.min(counts.research + Math.ceil(targetStats.research / steps), targetStats.research),
      };
      setStats({ ...counts });
      if (counts.deals === targetStats.deals && counts.clients === targetStats.clients && counts.projects === targetStats.projects && counts.research === targetStats.research) {
        clearInterval(interval);
      }
    }, intervalTime);
    return () => clearInterval(interval);
  }, [stats]);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://wallpapercrafter.com/desktop/16800-building-prime-facade-inscription-minimalism-4k.jpg)` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div
          className="relative z-10 text-center text-white"
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold">{title}</h1>
          <p className="text-xl">{subtitle}</p>
        </motion.div>
      </motion.section>

      

      
      {/* Stats Section with Animation */}
      <motion.section 
        className="bg-white text-center py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div whileHover={{ scale: 1.1 }}>
  <h2 className="text-5xl font-bold text-blue-600">USD {stats.deals}M+</h2>
  <p className="text-lg text-gray-600">worth of deals transacted</p>
</motion.div>
<motion.div whileHover={{ scale: 1.1 }}>
  <h2 className="text-5xl font-bold text-blue-600">{stats.clients}+</h2>
  <p className="text-lg text-gray-600">clients served</p>
</motion.div>
<motion.div whileHover={{ scale: 1.1 }}>
  <h2 className="text-5xl font-bold text-blue-600">{stats.projects}+</h2>
  <p className="text-lg text-gray-600">real estate projects</p>
</motion.div>
<motion.div whileHover={{ scale: 1.1 }}>
  <h2 className="text-5xl font-bold text-blue-600">{stats.research}+</h2>
  <p className="text-lg text-gray-600">research studies done</p>
</motion.div>
          </div>
          <motion.p className="mt-8 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <span className="font-bold text-blue-600">An award-winning</span> & recognized leader in the Philippine 
            commercial and industrial real estate service industry.
          </motion.p>
          <motion.p className="mt-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <span className="font-semibold text-black">Entrust your real estate needs</span> to a company well-equipped to 
            deal with today’s modern real estate business, with offices in Manila, Davao, and Cebu.
          </motion.p>
          <motion.button 
            className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            whileHover={{ scale: 1.1 }}
          >
            Inquire Now
          </motion.button>
        </div>
      </motion.section>

      {/* Floating Contact Button */}
      <button 
        className="fixed bottom-6 right-6 bg-blue-900 text-white p-3 rounded-full shadow-xl hover:bg-blue-700 transition flex items-center z-40"
        onClick={() => setShowContactModal(true)}
      >
        <FaWhatsapp className="text-2xl" />
      </button>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowContactModal(false)}
            >
              <FaTimes />
            </button>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border rounded-lg"
                  value={contactForm.name}
                  onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 border rounded-lg"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Your Message" 
                  className="w-full p-3 border rounded-lg"
                  rows="4"
                  value={contactForm.message}
                  onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-blue-900 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Send Message
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">Or contact us directly:</p>
              <div className="flex justify-center space-x-4 mt-2">
                <a href="tel:+639123456789" className="text-blue-700 hover:text-blue-900">
                  <FaPhone />
                </a>
                <a href="https://wa.me/639123456789" className="text-green-500 hover:text-green-700">
                  <FaWhatsapp />
                </a>
                <a href="mailto:info@primephilippines.com" className="text-red-500 hover:text-red-700">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Featured Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="About Prime" 
                className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Prime Philippines</h2>
              <p className="text-gray-600 mb-4">
                Prime Philippines specializes in premium commercial spaces in prime locations across the country. 
                Our properties are designed to meet the needs of modern businesses with state-of-the-art facilities 
                and strategic locations.
              </p>
              <p className="text-gray-600 mb-6">
                With over 15 years of experience in commercial real estate, we provide expert guidance to help 
                you find the perfect workspace for your business.
              </p>
              <a 
                href="/about" 
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
<section className="py-16 bg-white">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Explore Our Featured Properties</h2>
    <Carousel 
      showArrows={true} 
      infiniteLoop={true} 
      autoPlay={true} 
      interval={3000} 
      showThumbs={false} 
      className="max-w-4xl mx-auto"
    >
      {featuredProperties.map((property, index) => (
        <div key={index} className="relative">
          <img src={property.image} alt={property.title} className="rounded-lg shadow-lg" />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
            <h3 className="text-xl font-bold">{property.title}</h3>
            <p className="text-sm">{property.location}</p>
            <p className="text-sm font-semibold">{property.price}</p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
</section>

      {/* Industry Insights Section */}
<section className="py-16 bg-gray-50">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Industry Insights</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold mb-3">Real Estate Market Trends 2025</h4>
        <p className="text-gray-600">Discover the latest trends shaping the commercial real estate market in the Philippines.</p>
        <a href="/insights" className="text-blue-600 font-medium mt-3 inline-block hover:text-blue-800">
          Read More →
        </a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold mb-3">Top Investment Locations</h4>
        <p className="text-gray-600">Find out which cities are the best for commercial real estate investments in 2025.</p>
        <a href="/investment" className="text-blue-600 font-medium mt-3 inline-block hover:text-blue-800">
          Learn More →
        </a>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
        <h4 className="text-xl font-semibold mb-3">How to Lease the Best Property</h4>
        <p className="text-gray-600">A step-by-step guide to securing the best property for your business.</p>
        <a href="/leasing-guide" className="text-blue-600 font-medium mt-3 inline-block hover:text-blue-800">
          Get Started →
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Customer Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 ">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 ">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <p className="text-gray-600 mb-4">"Prime Philippines provided us with the perfect office space. The service was impeccable!"</p>
              <h4 className="font-semibold text-gray-800">John Doe</h4>
              <p className="text-gray-500">CEO, Tech Corp</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <p className="text-gray-600 mb-4">"We were able to find an office that fits our needs, and the team made the process seamless."</p>
              <h4 className="font-semibold text-gray-800">Jane Smith</h4>
              <p className="text-gray-500">COO, Startup Co.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <p className="text-gray-600 mb-4">"Prime's expertise in real estate is unparalleled. Highly recommend!"</p>
              <h4 className="font-semibold text-gray-800">Mark Taylor</h4>
              <p className="text-gray-500">Founder, Innovative Designs</p>
            </div>
          </div>
        </div>
      </section>

            {/* Our Values Section */}
            <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center max-w-3xl mx-auto mb-12"
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Our Values
                  </h2>
                  <p className="text-gray-600">
                    Our leadership team embodies the core values that drive PRIME
                    Philippines forward.
                  </p>
                </motion.div>
      
                <div className="grid md:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                    <h3 className="text-xl font-semibold text-center mb-2">
                      Integrity
                    </h3>
                    <p className="text-gray-600 text-center">
                      We uphold the highest standards of integrity in all our actions
                      and decisions.
                    </p>
                  </motion.div>
      
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                    <h3 className="text-xl font-semibold text-center mb-2">
                      Innovation
                    </h3>
                    <p className="text-gray-600 text-center">
                      We constantly seek innovative solutions to drive the real estate
                      industry forward.
                    </p>
                  </motion.div>
      
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-lg shadow-md"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
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
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">
                      Excellence
                    </h3>
                    <p className="text-gray-600 text-center">
                      We strive for excellence in every project and relationship we
                      build.
                    </p>
                  </motion.div>
                </div>
              </div>
            </section>

       {/* Get Started Section */}
       <section className="py-16 bg-blue-500 text-white" id="get-started">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Ready to Find Your Perfect Property?</h2>
          <p className="text-lg mb-8">Our team is here to assist you in finding the ideal commercial space that fits your needs. Let’s get started today!</p>
          <a
            href="/contact"
            className="bg-yellow-400 text-gray-900 py-3 px-8 rounded-md text-xl transition-all duration-300 hover:bg-yellow-500"
          >
            Get Started
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default RealEstateLandingPage;
