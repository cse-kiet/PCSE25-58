import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout = ({ children }) => {
  const location = useLocation();
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-ayush-purple font-bold text-2xl">AYUSH</span>
            <span className="text-ayush-dark font-medium">Business Portal</span>
          </Link>
          
          <nav className="hidden md:flex gap-6">
            {location.pathname.includes('/startup') && (
              <>
                <Link to="/startup/dashboard" className="text-gray-700 hover:text-ayush-purple">Dashboard</Link>
                <Link to="/startup/profile" className="text-gray-700 hover:text-ayush-purple">Profile</Link>
                <Link to="/startup/certification" className="text-gray-700 hover:text-ayush-purple">Certification</Link>
              </>
            )}
            
            {location.pathname.includes('/consumer') && (
              <>
                <Link to="/consumer/search" className="text-gray-700 hover:text-ayush-purple">Search</Link>
                <Link to="/consumer/favorites" className="text-gray-700 hover:text-ayush-purple">Favorites</Link>
              </>
            )}
            
            {!location.pathname.includes('/consumer') && !location.pathname.includes('/startup') && (
              <>
                <Link to="/about" className="text-gray-700 hover:text-ayush-purple">About</Link>
                <Link to="/contact" className="text-gray-700 hover:text-ayush-purple">Contact</Link>
              </>
            )}
          </nav>
          
          {(location.pathname.includes('/consumer') || location.pathname.includes('/startup')) && (
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium">U</span>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-grow">
        {children}
      </main>
      
      <footer className="bg-ayush-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">AYUSH Business Portal</h3>
              <p className="text-gray-300">
                A government portal for promoting AYUSH-based startups in India.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-white">About</Link></li>
                <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <p className="text-gray-300">Email: info@ayushbusiness.gov.in</p>
              <p className="text-gray-300">Phone: +91-11-123-4567</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} AYUSH Business Portal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;