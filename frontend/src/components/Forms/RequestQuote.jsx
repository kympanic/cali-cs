import React, { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { FiSend } from 'react-icons/fi';
import 'react-toastify/dist/ReactToastify.css';

const RequestQuote = () => {
  const [formData, setFormData] = useState({
    contactName: '',
    companyName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const requiredFields = ['contactName', 'companyName', 'phoneNumber', 'email', 'address', 'city', 'state', 'zipCode', 'message'];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`The ${field} field is required`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await fetch('http://localhost:8000/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('🦄 Wow so easy!', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        setFormData({
          contactName: '',
          companyName: '',
          address: '',
          city: '',
          state: '',
          zipCode: '',
          phoneNumber: '',
          email: '',
          message: '',
        });
      } else {
        toast.error('Failed to submit form', {
          position: "bottom-center",
        });
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form', {
        position: "bottom-center",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4">
        {/* Form fields */}
        <h2 className="text-2xl text-left text-blue-700 font-bold mb-4">Request a Quote</h2>
        <p className="mb-4">Your Information</p>
        <div className="mb-4 flex items-center">
          <label htmlFor="contactName" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Contact Name:</label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            placeholder="Enter your name"
            value={formData.contactName}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="companyName" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="email" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="address" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            value={formData.address}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="city" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter your city"
            value={formData.city}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="state" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            placeholder="Enter your state"
            value={formData.state}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="zipCode" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Zip Code:</label>
          <input
            type="text"
            id="zipCode"
            name="zipCode"
            placeholder="Enter your zip code"
            value={formData.zipCode}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 w-1/4 text-right mr-4">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            className="p-2 block w-3/4 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="mt-4 p-2 pl-5 pr-5 bg-blue-500 text-white rounded-md flex items-center">SUBMIT QUOTE <FiSend className="ml-2" /></button>
      </form>
      <ToastContainer />
    </>
  );
};

export default RequestQuote;
