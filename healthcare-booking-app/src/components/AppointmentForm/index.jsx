import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AppointmentForm({ doctorId }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.includes('@')) newErrors.email = 'Enter a valid email';
    if (!formData.date) newErrors.date = 'Please select a date';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log('Appointment submitted:', {
      ...formData,
      doctorId,
    });

    setIsSubmitted(true);
  };

  if (isSubmitted) {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-semibold text-green-600">Appointment Booked Successfully!</h2>
      <p className="text-gray-600">We will contact you soon with confirmation details.</p>
      <Link
        to="/"
        className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
      >
        Book Another Appointment
      </Link>
    </div>
  );
}


  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-gray-700 mb-1">Patient Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
      </div>

      <div>
        <label className="block text-gray-700 mb-1">Appointment Date</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
            errors.date ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        {errors.date && <p className="text-sm text-red-600 mt-1">{errors.date}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition"
      >
        Confirm Appointment
      </button>
    </form>
  );
}

export default AppointmentForm;
