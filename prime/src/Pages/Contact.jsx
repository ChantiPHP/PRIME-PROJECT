import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Landingpage/Navbar";

const locations = [
  {
    city: "Manila",
    address: "3/F Main GreatWork Ben-Lor IT Center, Diliman, Quezon City, Metro Manila",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.3650576811556!2d121.02148317596924!3d14.63520718585524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b64fd908e0af%3A0xe04536d006e74a08!2sBen-Lor%20Building%2C%20Diliman%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1743565189902!5m2!1sen!2sph"
  },
  {
    city: "Davao",
    address: "Fourth Floor, Topaz Tower, Damosa I.T. Park, J.P. Laurel Avenue, Lanang, Davao City, Davao Del Sur, Philippines 8000",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.376741268165!2d125.6293221759735!3d7.119349294846972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96d7a368f1b6d%3A0x1e3a9c7f8e3b3b1a!2sTopaz%20Tower%2C%20Damosa%20I.T.%20Park%2C%20J.P.%20Laurel%20Avenue%2C%20Lanang%2C%20Davao%20City%2C%20Davao%20Del%20Sur!5e0!3m2!1sen!2sph!4v1743565278901!5m2!1sen!2sph"
  },
  {
    city: "Cebu",
    address: "Fifth Floor, Park Centrale, Cebu I.T. Park, Jose Maria del Mar Street, Cebu City 6000 Cebu",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.324604553012!2d123.9037327759669!3d10.327614592670042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a999323d5f3e1d%3A0x4e3b3b3b3b3b3b3b!2sPark%20Centrale%2C%20Cebu%20I.T.%20Park%2C%20Jose%20Maria%20del%20Mar%20Street%2C%20Cebu%20City!5e0!3m2!1sen!2sph!4v1743565334567!5m2!1sen!2sph"
  }
];

export default function Contact() {
  const [activeLocation, setActiveLocation] = useState("Manila");
  const [isHovered, setIsHovered] = useState({
    email: false,
    phone: false,
    address: false,
  });

  const current = locations.find((loc) => loc.city === activeLocation);

  return (
    <div className="bg-[#f5f5f5] min-h-screen font-sans text-[#003366]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Hero Image */}
        <section className="mb-10">
          <div className="w-full h-[300px] sm:h-[400px] bg-gray-200 rounded-lg shadow-md overflow-hidden">
            <img
              src="https://storage.googleapis.com/a1aa/image/d991782a-c33b-4637-d9bf-4f0fef335823.jpg"
              alt="People collaborating"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/1200x400?text=Prime+Philippines";
              }}
            />
          </div>
        </section>

        {/* Contact Cards */}
        <section className="mb-14 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Card */}
            <Card 
              className={`transition-all duration-300 ${isHovered.email ? "transform -translate-y-1 shadow-lg" : "shadow-md"}`}
              onMouseEnter={() => setIsHovered({...isHovered, email: true})}
              onMouseLeave={() => setIsHovered({...isHovered, email: false})}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-[#003366]/10 p-3 rounded-full inline-block mb-4">
                  <Mail className="text-[#003366] w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-3">Email Address</h3>
                <div className="space-y-2">
                  <a href="mailto:inquiry@primephilippines.com" className="block text-sm hover:text-[#003366] hover:underline transition-colors">
                    inquiry@primephilippines.com
                  </a>
                  <a href="mailto:careers@primephilippines.com" className="block text-sm hover:text-[#003366] hover:underline transition-colors">
                    careers@primephilippines.com
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card 
              className={`transition-all duration-300 ${isHovered.phone ? "transform -translate-y-1 shadow-lg" : "shadow-md"}`}
              onMouseEnter={() => setIsHovered({...isHovered, phone: true})}
              onMouseLeave={() => setIsHovered({...isHovered, phone: false})}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-[#003366]/10 p-3 rounded-full inline-block mb-4">
                  <Phone className="text-[#003366] w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-3">Phone Number</h3>
                <div className="space-y-2">
                  <a href="tel:+63284428888" className="block text-sm hover:text-[#003366] hover:underline transition-colors">
                    +632 8442 8888
                  </a>
                  <a href="tel:+63271008554" className="block text-sm hover:text-[#003366] hover:underline transition-colors">
                    +632 7100 8554
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Address Card */}
            <Card 
              className={`transition-all duration-300 ${isHovered.address ? "transform -translate-y-1 shadow-lg" : "shadow-md"}`}
              onMouseEnter={() => setIsHovered({...isHovered, address: true})}
              onMouseLeave={() => setIsHovered({...isHovered, address: false})}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-[#003366]/10 p-3 rounded-full inline-block mb-4">
                  <MapPin className="text-[#003366] w-5 h-5" />
                </div>
                <h3 className="font-semibold mb-3">Main Office</h3>
                <p className="text-sm">{current?.address}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Office Locations */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8 max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Location Selector */}
            <div className="lg:w-1/3">
              <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
              <ul className="space-y-4">
                {locations.map((location) => (
                  <li key={location.city}>
                    <button
                      onClick={() => setActiveLocation(location.city)}
                      className={`w-full text-left p-4 rounded-lg transition-all ${
                        activeLocation === location.city
                          ? "bg-[#003366] text-white shadow-md"
                          : "bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-medium">{location.city}</span>
                        </div>
                        <span className={`text-xs px-3 py-1 rounded-full ${
                          activeLocation === location.city
                            ? "bg-white text-[#003366]"
                            : "bg-[#003366] text-white"
                        }`}>
                          {activeLocation === location.city ? "Viewing" : "View"}
                        </span>
                      </div>
                      <p className="text-xs mt-2 text-left">{location.address}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Container */}
            <div className="lg:w-2/3">
              <div className="relative h-[350px] sm:h-[450px] w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={current?.map}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${current?.city} Office Location`}
                  className="absolute inset-0"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-md shadow-sm max-w-[80%]">
                  <p className="font-medium text-sm truncate">{current?.city} Office</p>
                  <p className="text-xs text-gray-600 truncate">{current?.address}</p>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <a
                  href={current?.map.replace('embed', 'search')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-[#003366] hover:underline"
                >
                  <MapPin className="w-4 h-4 mr-1" />
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}