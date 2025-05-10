import React, { useState } from 'react';

// Mock data for startups
const MOCK_STARTUPS = [
  {
    id: 1,
    name: 'Ayurveda Wellness Solutions Pvt Ltd',
    category: 'Ayurveda',
    location: 'New Delhi',
    industry: 'Healthcare',
    funding: 'Seed',
    description: 'Offering authentic Ayurvedic wellness products and services.',
    verified: true
  },
  {
    id: 2,
    name: 'Yogic Life Sciences',
    category: 'Yoga',
    location: 'Bangalore',
    industry: 'Fitness',
    funding: 'Series A',
    description: 'Innovative yoga-based fitness solutions for modern lifestyle.',
    verified: true
  },
  {
    id: 3,
    name: 'Unani Remedies',
    category: 'Unani',
    location: 'Hyderabad',
    industry: 'Pharmaceuticals',
    funding: 'Bootstrapped',
    description: 'Traditional Unani medicine for contemporary health challenges.',
    verified: false
  },
  {
    id: 4,
    name: 'Siddha Nutrition',
    category: 'Siddha',
    location: 'Chennai',
    industry: 'Nutrition',
    funding: 'Seed',
    description: 'Nutrition supplements based on Siddha principles.',
    verified: true
  },
  {
    id: 5,
    name: 'Homeo Health Tech',
    category: 'Homeopathy',
    location: 'Mumbai',
    industry: 'Technology',
    funding: 'Angel',
    description: 'Technology-driven homeopathic consultation platform.',
    verified: true
  }
];

// Location options
const LOCATIONS = ['All Locations', 'New Delhi', 'Mumbai', 'Bangalore', 'Hyderabad', 'Chennai'];

// Industry options
const INDUSTRIES = ['All Industries', 'Healthcare', 'Fitness', 'Pharmaceuticals', 'Nutrition', 'Technology'];

// Funding options
const FUNDING_STAGES = ['All Funding', 'Bootstrapped', 'Angel', 'Seed', 'Series A', 'Series B+'];

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedFunding, setSelectedFunding] = useState('All Funding');
  const [filteredStartups, setFilteredStartups] = useState(MOCK_STARTUPS);

  // Handle search and filter changes
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    applyFilters(term, selectedLocation, selectedIndustry, selectedFunding);
  };

  const handleLocationChange = (e) => {
    const location = e.target.value;
    setSelectedLocation(location);
    applyFilters(searchTerm, location, selectedIndustry, selectedFunding);
  };

  const handleIndustryChange = (e) => {
    const industry = e.target.value;
    setSelectedIndustry(industry);
    applyFilters(searchTerm, selectedLocation, industry, selectedFunding);
  };

  const handleFundingChange = (e) => {
    const funding = e.target.value;
    setSelectedFunding(funding);
    applyFilters(searchTerm, selectedLocation, selectedIndustry, funding);
  };

  // Apply all filters to the startup list
  const applyFilters = (term, location, industry, funding) => {
    let results = [...MOCK_STARTUPS];
    
    // Apply search term
    if (term) {
      results = results.filter(startup => 
        startup.name.toLowerCase().includes(term.toLowerCase()) ||
        startup.description.toLowerCase().includes(term.toLowerCase())
      );
    }
    
    // Apply location filter
    if (location !== 'All Locations') {
      results = results.filter(startup => startup.location === location);
    }
    
    // Apply industry filter
    if (industry !== 'All Industries') {
      results = results.filter(startup => startup.industry === industry);
    }
    
    // Apply funding filter
    if (funding !== 'All Funding') {
      results = results.filter(startup => startup.funding === funding);
    }
    
    setFilteredStartups(results);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6 text-ayush-purple">Discover AYUSH Startups</h1>
        
        {/* Search and Filters */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search startups..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                  onClick={() => {
                    setSearchTerm('');
                    applyFilters('', selectedLocation, selectedIndustry, selectedFunding);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
            
            {/* Location Filter */}
            <div>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedLocation}
                onChange={handleLocationChange}
              >
                {LOCATIONS.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            {/* Industry Filter */}
            <div>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedIndustry}
                onChange={handleIndustryChange}
              >
                {INDUSTRIES.map(industry => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>
            
            {/* Funding Filter */}
            <div>
              <select
                className="w-full p-2 border border-gray-300 rounded-lg appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={selectedFunding}
                onChange={handleFundingChange}
              >
                {FUNDING_STAGES.map(funding => (
                  <option key={funding} value={funding}>{funding}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Results */}
        <div className="space-y-4">
          {filteredStartups.length > 0 ? (
            filteredStartups.map(startup => (
              <div key={startup.id} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-ayush-dark flex items-center">
                        {startup.name}
                        {startup.verified && (
                          <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                        )}
                      </h2>
                      <p className="text-gray-600 mt-1">{startup.description}</p>
                    </div>
                    
                    <div className="mt-2 md:mt-0 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {startup.category}
                      </span>
                      <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                        {startup.location}
                      </span>
                      <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {startup.industry}
                      </span>
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                        {startup.funding}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-end">
                    <button className="text-purple-600 hover:text-purple-800 hover:underline font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-gray-500 text-lg">No startups found matching your criteria.</p>
              <button 
                className="mt-4 text-purple-600 hover:underline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedLocation('All Locations');
                  setSelectedIndustry('All Industries');
                  setSelectedFunding('All Funding');
                  setFilteredStartups(MOCK_STARTUPS);
                }}
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;