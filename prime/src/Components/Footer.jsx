import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#d9e5ff] text-[#1a2c79] pt-10 pb-5 text-sm font-gotham">
      <div className="container mx-auto px-6">
        {/* Top Row - Logo, Description, PRIME RADAR, Social Links */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-10">
          <div className="flex flex-col gap-4 w-full lg:max-w-[22%]">
            <a href="/" className="block">
              <img src="/prime-logo-.png" alt="PRIME Philippines" className="h-12 w-auto" />
            </a>
            <p className="text-gray-800 text-xs">
              The leading full-service real estate consultancy firm in the Philippines, providing innovative solutions and data-driven insights since 2009.
            </p>
          </div>
          <div className="flex-1 flex justify-center items-start">
            <h2 className="text-6xl lg:text-8xl font-bold text-center">
              <span className="text-[#1a2c79]">PRIME</span> <span className="text-[#f9b21d]">RADAR</span>
            </h2>
          </div>
          <div className="flex flex-col gap-2 w-full lg:max-w-[22%]">
            <h4 className="text-base font-bold mb-2">Social Links</h4>
            <div className="flex gap-4 text-[#1a2c79] text-lg">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
            </div>
          </div>
        </div>

        {/* Main Links and Newsletter Row */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-gray-300 pb-10">
          {/* Newsletter */}
          <div className="lg:w-[22%]">
            <div className="bg-white p-4 rounded-md shadow-sm">
              <h4 className="font-bold text-sm mb-2">Get the latest real estate insights</h4>
              <input type="email" placeholder="Enter your email" className="w-full border border-gray-300 px-3 py-2 rounded mb-3 text-sm" />
              <button className="w-full bg-[#002f6c] text-white py-2 rounded hover:bg-[#001d4a] transition">SUBSCRIBE</button>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:w-[75%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div>
              <h4 className="text-base font-bold mb-3">Our Expertise</h4>
              <ul className="space-y-2 text-gray-800">
                <li><a href="/expertise/kickstart" className="hover:underline">Kickstart</a></li>
                <li><a href="/expertise/seasoned" className="hover:underline">Seasoned</a></li>
                <li><a href="/expertise/accelerate" className="hover:underline">Accelerate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-3">Industry Insights</h4>
              <ul className="space-y-2 text-gray-800">
                <li><a href="/insights/industrial" className="hover:underline">Industrial</a></li>
                <li><a href="/insights/office" className="hover:underline">Office</a></li>
                <li><a href="/insights/retail" className="hover:underline">Retail</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-3">Our Services</h4>
              <ul className="space-y-2 text-gray-800">
                <li><a href="/services/office-spaces" className="hover:underline">Office Spaces</a></li>
                <li><a href="/services/commercial-spaces" className="hover:underline">Commercial Spaces and Lots</a></li>
                <li><a href="/services/industrial-spaces" className="hover:underline">Industrial Spaces and Lots</a></li>
                <li><a href="/services/davao-spaces" className="hover:underline">Spaces and Lots in Davao</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-3">About Us</h4>
              <ul className="space-y-2 text-gray-800">
                <li><a href="/about/prime-advantage" className="hover:underline">PRIME Advantage</a></li>
                <li><a href="/about/prime-leadership" className="hover:underline">PRIME Leadership</a></li>
                <li><a href="/about/sustainability" className="hover:underline">Corporate Sustainability</a></li>
                <li><a href="/about/awards" className="hover:underline">Awards and Recognition</a></li>
                <li><a href="/about/press-room" className="hover:underline">Press Room</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base font-bold mb-3">Book a Consultation</h4>
              <ul className="space-y-2 text-gray-800">
                <li>Unsure about what you need?</li>
                <li><a href="/consultation" className="text-blue-600 underline">Book a Consultation</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p className="mb-2 md:mb-0">© 2013 - 2023 PRIME Philippines. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}