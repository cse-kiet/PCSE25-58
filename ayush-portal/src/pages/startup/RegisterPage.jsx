import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    startupName: '',
    email: '',
    phone: '',
    address: '',
    documents: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      documents: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // In a real app, we would send this data to an API
    // For this MVP, we'll just redirect to the dashboard
    navigate('/startup/dashboard');
  };

  return (
    <div className="bg-ayush-light min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-ayush-purple p-6">
            <h1 className="text-2xl font-bold text-white">Startup Registration</h1>
          </div>
          
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            <div>
              <label htmlFor="startupName" className="block text-gray-700 font-medium mb-2">
                Startup Name
              </label>
              <input
                type="text"
                id="startupName"
                name="startupName"
                placeholder="Enter startup name"
                value={formData.startupName}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter complete address"
                value={formData.address}
                onChange={handleChange}
                className="input-field"
                required
              />
            </div>
            
            <div>
              <label htmlFor="documents" className="block text-gray-700 font-medium mb-2">
                Supporting Documents
              </label>
              <div className="flex items-center">
                <input
                  type="file"
                  id="documents"
                  name="documents"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label
                  htmlFor="documents"
                  className="cursor-pointer border border-gray-300 rounded-lg py-2 px-4 text-gray-700 hover:bg-gray-50"
                >
                  Choose File
                </label>
                <span className="ml-4 text-gray-500">
                  {formData.documents ? formData.documents.name : 'No file chosen'}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Upload business registration, licenses, and other relevant documents
              </p>
            </div>
            
            <div>
              <button type="submit" className="w-full btn-primary py-3 text-center font-medium">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;