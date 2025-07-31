import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctorsData from '../../data/doctors.json';

const statusColors = {
  "Available Today": "bg-green-100 text-green-800",
  "Fully Booked": "bg-red-100 text-red-800",
  "On Leave": "bg-yellow-100 text-yellow-800",
};

function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">Doctor not found</h2>
      </div>
    );
  }

  const colorClass = statusColors[doctor.status] || "bg-gray-100 text-gray-800";

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="h-80 md:h-auto">
            <img 
              src={doctor.image} 
              alt={`Dr. ${doctor.name}`} 
              className="object-cover w-full h-full"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-3xl font-bold text-gray-900">Dr. {doctor.name}</h2>
              <span className={`text-sm font-medium px-3 py-1 rounded-full ${colorClass}`}>
                {doctor.status}
              </span>
            </div>
            <p className="text-lg text-gray-700 mb-4">{doctor.specialization}</p>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Availability</h3>
              <ul className="space-y-1">
                {doctor.availability.map((slot, index) => (
                  <li key={index} className="text-gray-600">
                    <strong>{slot.day}:</strong> {slot.time}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/book/${doctor.id}`}
              className="inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white text-center font-medium py-2 px-5 rounded-lg transition"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfilePage;
