import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PropertyCard from "../Components/PropertyCard";

const Properties = () => {
  const allProperties = [
    {
      title: "Prime Tower",
      location: "Makati City",
      category: "Office Spaces",
      type: "For Lease",
      description: "A premium office space in the heart of Makati.",
      size: "500 sqm",
      price: "₱150,000/month",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Skyline Offices",
      location: "Bonifacio Global City",
      category: "Office Spaces",
      type: "For Rent",
      description: "Modern office spaces in BGC.",
      size: "300 sqm",
      price: "₱120,000/month",
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "The Prime Plaza",
      location: "Ortigas Center",
      category: "Retail Spaces",
      type: "For Lease",
      description: "Retail spaces in a prime location in Ortigas.",
      size: "750 sqm",
      price: "₱250,000/month",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Capital Suites",
      location: "Makati City",
      category: "Commercial Lots",
      type: "For Rent",
      description: "Commercial lots in Makati City.",
      size: "400 sqm",
      price: "₱180,000/month",
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Business Prime",
      location: "Alabang",
      category: "Industrial Lots",
      type: "For Lease",
      description: "Industrial lots in Alabang.",
      size: "600 sqm",
      price: "₱200,000/month",
      image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
    {
      title: "Executive Towers",
      location: "Quezon City",
      category: "Industrial Warehouses",
      type: "For Rent",
      description: "Warehouses in Quezon City.",
      size: "350 sqm",
      price: "₱130,000/month",
      image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    },
  ];

  const [filteredProperties, setFilteredProperties] = useState(allProperties);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [typeFilter, setTypeFilter] = useState("All Types");

  const handleSearch = (updatedCategory, updatedLocation, updatedType) => {
    let filtered = allProperties;

    if (searchQuery) {
      filtered = filtered.filter(
        (property) =>
          property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          property.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (updatedCategory && updatedCategory !== "All Categories") {
      filtered = filtered.filter((property) => property.category === updatedCategory);
    }

    if (updatedLocation && updatedLocation !== "All Locations") {
      filtered = filtered.filter((property) => property.location === updatedLocation);
    }

    if (updatedType && updatedType !== "All Types") {
      filtered = filtered.filter((property) => property.type === updatedType);
    }

    setFilteredProperties(filtered);
  };

  const handleCategoryChange = (e) => {
    const updatedCategory = e.target.value;
    setCategoryFilter(updatedCategory);
    handleSearch(updatedCategory, locationFilter, typeFilter);
  };

  const handleLocationChange = (e) => {
    const updatedLocation = e.target.value;
    setLocationFilter(updatedLocation);
    handleSearch(categoryFilter, updatedLocation, typeFilter);
  };

  const handleTypeChange = (e) => {
    const updatedType = e.target.value;
    setTypeFilter(updatedType);
    handleSearch(categoryFilter, locationFilter, updatedType);
  };

  const handleQueryChange = (e) => {
    const updatedQuery = e.target.value;
    setSearchQuery(updatedQuery);
    handleSearch(categoryFilter, locationFilter, typeFilter);
  };

  return (
    <>
      <Navbar />
{/* Search Section */}
<section>
  <div className="container mx-auto px-6">
    <div className="bg-blue-900 shadow-xl rounded-lg p-10">
      <h2 className="text-4xl font-bold text-white mb-6 text-center font-gotham">
        Explore the perfect listing and get ready to seal the deal!
      </h2>
      <a
        href="contact"
        className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full shadow-md hover:bg-gray-100 transition duration-300 text-center block mx-auto w-fit font-gotham"
      >
        Inquire Now
      </a>
      <div className="bg-white rounded-full p-6 mt-8 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <select
            value={categoryFilter}
            onChange={handleCategoryChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-gotham"
          >
            <option>All Categories</option>
            <option>Office Spaces</option>
            <option>Commercial Lots</option>
            <option>Retail Spaces</option>
            <option>Industrial Lots</option>
            <option>Industrial Warehouses</option>
          </select>
          <select
            value={locationFilter}
            onChange={handleLocationChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-gotham"
          >
            <option>All Locations</option>
            <option>Makati City</option>
            <option>Bonifacio Global City</option>
            <option>Ortigas Center</option>
            <option>Alabang</option>
            <option>Quezon City</option>
          </select>
          <select
            value={typeFilter}
            onChange={handleTypeChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-gotham"
          >
            <option>All Types</option>
            <option>For Lease</option>
            <option>For Rent</option>
          </select>
          <input
            type="text"
            placeholder="Search by location, description, name"
            value={searchQuery}
            onChange={handleQueryChange}
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 font-gotham"
          />
        </div>
      </div>
      <p className="text-sm text-white text-center font-gotham mt-6">
        Use the dropdowns and search bar to filter properties by category, location, or type.
      </p>
    </div>
  </div>
</section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-gotham text-center">
            {categoryFilter === "All Categories" ? "Featured Properties" : `Featured ${categoryFilter}`}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property, index) => (
              <div key={index} className="relative">
                <span
                  className={`absolute top-2 left-2 px-3 py-1 text-sm font-bold text-white rounded ${
                    property.type === "For Lease" ? "bg-green-500" : "bg-blue-500"
                  }`}
                >
                  {property.type}
                </span>
                <PropertyCard {...property} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partial List of Clients */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-gotham">Our Partial List of Clients</h2>
          <p className="text-gray-600 mb-8 font-gotham">
            Government and private companies, big or small, local or international, trust PRIME with their real estate needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <img src="/client-logo-1.png" alt="Client 1" className="h-16 mx-auto" />
            <img src="/client-logo-2.png" alt="Client 2" className="h-16 mx-auto" />
            <img src="/client-logo-3.png" alt="Client 3" className="h-16 mx-auto" />
            <img src="/client-logo-4.png" alt="Client 4" className="h-16 mx-auto" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Properties;