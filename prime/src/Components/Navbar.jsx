import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false); // State for About Us dropdown
  const [expertiseDropdown, setExpertiseDropdown] = useState(false); // State for Our Expertise dropdown
  const [insightsDropdown, setInsightsDropdown] = useState(false); // State for Latest Insights dropdown

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 py-4 font-gotham">
      <div className="flex justify-between items-center">
        {/* Left Section: Logo */}
        <div className="flex items-center">
          <a href="/" className="block">
            <img
              src="/prime-logo-.png"
              alt="PRIME Philippines Logo"
              className="h-16"
              style={{ marginLeft: 0 }}
            />
          </a>
        </div>

        {/* Center Section: Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Our Expertise Dropdown */}
          <div className="relative">
            <button
              className="text-gray-800 font-semibold uppercase hover:text-blue-600 hover:underline transition flex items-center gap-2"
              onClick={() => setExpertiseDropdown(!expertiseDropdown)}
            >
              Our Expertise ▼
            </button>
            {expertiseDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                <a
                  href="/expertise/kickstart"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Kickstart
                </a>
                <a
                  href="/expertise/seasoned"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Seasoned
                </a>
                <a
                  href="/expertise/accelerate"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Accelerate
                </a>
              </div>
            )}
          </div>

          {/* Latest Insights Dropdown */}
          <div className="relative">
            <button
              className="text-gray-800 font-semibold uppercase hover:text-blue-600 hover:underline transition flex items-center gap-2"
              onClick={() => setInsightsDropdown(!insightsDropdown)}
            >
              Latest Insights ▼
            </button>
            {insightsDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                <a
                  href="/insights/industrial"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Industrial
                </a>
                <a
                  href="/insights/office"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Office
                </a>
                <a
                  href="/insights/retail"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Retail
                </a>
              </div>
            )}
          </div>

          <a
            href="/properties"
            className="text-gray-800 font-semibold uppercase hover:text-blue-600 hover:underline transition"
          >
            Find a Property
          </a>

          {/* About Us Dropdown */}
          <div className="relative">
            <button
              className="text-gray-800 font-semibold uppercase hover:text-blue-600 hover:underline transition flex items-center gap-2"
              onClick={() => setAboutDropdown(!aboutDropdown)}
            >
              About Us ▼
            </button>
            {aboutDropdown && (
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg py-2 z-50">
                <a
                  href="/about/prime-advantage"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  PRIME Advantage
                </a>
                <a
                  href="/about/prime-leadership"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  PRIME Leadership
                </a>
                <a
                  href="/about/sustainability"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Corporate Sustainability
                </a>
                <a
                  href="/about/awards"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Awards and Recognition
                </a>
                <a
                  href="/about/press-room"
                  className="block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:underline"
                >
                  Press Room
                </a>
              </div>
            )}
          </div>

          <a
            href="/careers"
            className="text-gray-800 font-semibold uppercase hover:text-blue-600 hover:underline transition"
          >
            Careers
          </a>
          <a
            href="/events"
            className="text-gray-800 font-semibold uppercase hover:text-blue-600 hover:underline transition"
          >
            Events
          </a>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-blue-700 transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right Section: Tagline */}
        <div className="hidden md:flex">
          <img
            src="/real-estate.we-advice.you-advance.PNG"
            alt="Real Estate We Advise You Advance"
            className="h-16"
            style={{ marginRight: 0 }}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;