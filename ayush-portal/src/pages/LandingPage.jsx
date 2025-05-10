import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-ayush-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ayush-purple to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Empowering AYUSH Startups Across India
              </h1>
              <p className="text-xl mb-8">
                Connect, grow, and succeed with India's premier AYUSH business ecosystem
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/consumer/search" className="btn-primary bg-white text-ayush-purple font-medium text-center">
                  Browse as Consumer
                </Link>
                <Link to="/startup/register" className="btn-primary bg-transparent border border-white font-medium text-center">
                  Register Your Startup
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
                <div className="flex justify-between mb-6">
                  <div>
                    <h3 className="text-ayush-purple font-bold text-xl">AYUSH Ecosystem</h3>
                    <p className="text-gray-500">Stats at a glance</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Registered Startups</p>
                    <p className="text-3xl font-bold text-ayush-dark">850+</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">AYUSH Categories</p>
                    <p className="text-3xl font-bold text-ayush-dark">5</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Mentors</p>
                    <p className="text-3xl font-bold text-ayush-dark">120+</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-gray-500 text-sm">Success Rate</p>
                    <p className="text-3xl font-bold text-ayush-dark">67%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* For Startups */}
            <div className="card">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">For Startups</h3>
              <p className="text-gray-600 mb-4">Register your AYUSH startup, get certified, track progress, and connect with mentors and investors.</p>
              <Link to="/startup/register" className="text-ayush-purple font-medium hover:underline">Get Started →</Link>
            </div>
            
            {/* For Consumers */}
            <div className="card">
              <div className="h-12 w-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">For Consumers</h3>
              <p className="text-gray-600 mb-4">Discover verified AYUSH startups, filter by location and industry, and connect with authentic businesses.</p>
              <Link to="/consumer/search" className="text-ayush-purple font-medium hover:underline">Explore Now →</Link>
            </div>
            
            {/* Government Initiatives */}
            <div className="card">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Government Initiatives</h3>
              <p className="text-gray-600 mb-4">Access grants, certification programs, and government support for AYUSH-based businesses.</p>
              <Link to="/initiatives" className="text-ayush-purple font-medium hover:underline">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* AYUSH Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AYUSH Categories</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { name: 'Ayurveda', color: 'bg-green-100', text: 'text-green-800' },
              { name: 'Yoga', color: 'bg-blue-100', text: 'text-blue-800' },
              { name: 'Unani', color: 'bg-yellow-100', text: 'text-yellow-800' },
              { name: 'Siddha', color: 'bg-red-100', text: 'text-red-800' },
              { name: 'Homeopathy', color: 'bg-purple-100', text: 'text-purple-800' }
            ].map((category, index) => (
              <div key={index} className={`${category.color} ${category.text} p-6 rounded-lg text-center`}>
                <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                <p>Explore {category.name} startups and businesses</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ayush-purple text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join the AYUSH Ecosystem?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Whether you're a startup looking to grow or a consumer searching for authentic AYUSH products, we're here to help.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/startup/register" className="btn-primary bg-white text-ayush-purple font-medium">Register Your Startup</Link>
            <Link to="/consumer/search" className="btn-primary bg-transparent border border-white font-medium">Browse as Consumer</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;