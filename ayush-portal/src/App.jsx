import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/startup/RegisterPage';
import DashboardPage from './pages/startup/DashboardPage';
import SearchPage from './pages/consumer/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><LandingPage /></Layout>} />
        
        {/* Startup Routes */}
        <Route path="/startup/register" element={<Layout><RegisterPage /></Layout>} />
        <Route path="/startup/dashboard" element={<Layout><DashboardPage /></Layout>} />
        
        {/* Consumer Routes */}
        <Route path="/consumer/search" element={<Layout><SearchPage /></Layout>} />
        
        {/* Fallback route */}
        <Route path="*" element={<Layout><div className="container mx-auto px-4 py-16 text-center"><h1 className="text-2xl font-bold mb-4">Page Not Found</h1><p>The page you're looking for doesn't exist.</p></div></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;