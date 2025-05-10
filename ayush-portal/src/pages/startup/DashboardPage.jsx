import React from 'react';

const DashboardPage = () => {
  // Mock data for dashboard
  const dashboardData = {
    startupName: 'Ayurveda Wellness Solutions Pvt Ltd',
    metrics: {
      customers: 250,
      certification: 67,
      mentorships: 3,
      milestones: 2
    },
    growthData: [
      { month: 'Jan', value: 40000 },
      { month: 'Feb', value: 55000 },
      { month: 'Mar', value: 75000 },
      { month: 'Apr', value: 85000 }
    ],
    updates: [
      { type: 'Grant Update', message: 'Final review stage reached', time: '2h ago' },
      { type: 'New Mentor', message: 'Dr. Sharma accepted mentorship', time: '1d ago' },
      { type: 'Certification', message: 'Stage 2 completed', time: '2d ago' }
    ]
  };

  return (
    <div className="bg-ayush-light min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-ayush-dark">AYUSH Startup Dashboard</h1>
          <p className="text-gray-600">{dashboardData.startupName}</p>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Customers */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Customers</p>
              <p className="font-bold text-2xl">{dashboardData.metrics.customers}</p>
            </div>
          </div>
          
          {/* Certification */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Certification</p>
              <p className="font-bold text-2xl">{dashboardData.metrics.certification}%</p>
            </div>
          </div>
          
          {/* Mentorships */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Mentorships</p>
              <p className="font-bold text-2xl">{dashboardData.metrics.mentorships}</p>
            </div>
          </div>
          
          {/* Milestones */}
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-gray-600 text-sm">Milestones</p>
              <p className="font-bold text-2xl">{dashboardData.metrics.milestones}</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Growth Trends Chart */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Growth Trends</h2>
            </div>
            
            <div className="h-64 relative">
              {/* Chart */}
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 200">
                  {/* Grid lines */}
                  <line x1="0" y1="0" x2="0" y2="150" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="150" x2="400" y2="150" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="100" x2="400" y2="100" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="50" x2="400" y2="50" stroke="#e5e7eb" strokeWidth="1" />
                  <line x1="0" y1="0" x2="400" y2="0" stroke="#e5e7eb" strokeWidth="1" />
                  
                  {/* Y-axis labels */}
                  <text x="5" y="150" fill="#6b7280" fontSize="10">0</text>
                  <text x="5" y="100" fill="#6b7280" fontSize="10">50k</text>
                  <text x="5" y="50" fill="#6b7280" fontSize="10">100k</text>
                  <text x="5" y="10" fill="#6b7280" fontSize="10">150k</text>
                  
                  {/* X-axis labels */}
                  <text x="100" y="170" fill="#6b7280" fontSize="10" textAnchor="middle">Jan</text>
                  <text x="200" y="170" fill="#6b7280" fontSize="10" textAnchor="middle">Feb</text>
                  <text x="300" y="170" fill="#6b7280" fontSize="10" textAnchor="middle">Mar</text>
                  <text x="400" y="170" fill="#6b7280" fontSize="10" textAnchor="middle">Apr</text>
                  
                  {/* Line */}
                  <polyline
                    points="100,110 200,95 300,75 400,65"
                    fill="none"
                    stroke="#5E4EE1"
                    strokeWidth="2"
                  />
                  
                  {/* Points */}
                  <circle cx="100" cy="110" r="4" fill="#5E4EE1" />
                  <circle cx="200" cy="95" r="4" fill="#5E4EE1" />
                  <circle cx="300" cy="75" r="4" fill="#5E4EE1" />
                  <circle cx="400" cy="65" r="4" fill="#5E4EE1" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Updates */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-lg">Updates</h2>
            </div>
            
            <div className="space-y-4">
              {dashboardData.updates.map((update, index) => (
                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium">{update.type}</h3>
                    <span className="text-xs text-gray-500">{update.time}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{update.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-ayush-purple text-white py-2 px-4 rounded-lg hover:bg-opacity-90 transition-all flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add New Product
          </button>
          
          <button className="bg-white text-ayush-purple border border-ayush-purple py-2 px-4 rounded-lg hover:bg-ayush-purple hover:text-white transition-all flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Continue Certification
          </button>
          
          <button className="bg-white text-ayush-purple border border-ayush-purple py-2 px-4 rounded-lg hover:bg-ayush-purple hover:text-white transition-all flex items-center justify-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            Contact Mentor
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;