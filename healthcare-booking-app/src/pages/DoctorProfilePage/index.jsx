import React from 'react';
import { useParams, Link } from 'react-router-dom';
import doctorsData from '../../data/doctors.json';

// Color mapping for status
const statusColors = {
  "Available Today": "bg-green-100 text-green-700 border border-green-300",
  "Fully Booked": "bg-red-100 text-red-700 border border-red-300",
  "On Leave": "bg-yellow-100 text-yellow-800 border border-yellow-300",
};

function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Doctor not found</h2>
          <Link
            to="/"
            className="mt-4 px-4 py-2 rounded-md bg-blue-700 text-white hover:bg-blue-800 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const colorClass = statusColors[doctor.status] || "bg-gray-100 text-gray-800 border";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 py-12 px-3">
      <div className="max-w-4xl mx-auto bg-white/80 shadow-xl rounded-2xl overflow-hidden backdrop-blur-md">
        <div className="grid md:grid-cols-2">
          {/* Left: Doctor Image */}
          <div className="relative h-72 md:h-full bg-gradient-to-bl from-blue-200 to-indigo-200 flex justify-center items-center">
            <img 
              src={doctor.image} 
              alt={`Dr. ${doctor.name}`} 
              className="object-cover w-full h-full transition hover:scale-105 duration-300"
            />
          </div>

          {/* Right: Doctor Info */}
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center justify-between">
              <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-0 leading-tight">
                Dr. {doctor.name}
              </h1>
              {/* Status Badge */}
              <span className={`ml-2 px-3 py-1 rounded-full text-sm font-semibold ${colorClass}`}>
                {doctor.status}
              </span>
            </div>

            <p className="mt-3 text-lg font-medium text-blue-800">{doctor.specialization}</p>
            <div className="mt-4 mb-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Availability</h3>
              <ul className="space-y-1">
                {doctor.availability.map((slot, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-400"></span>
                    <span>
                      <strong>{slot.day}:</strong> {slot.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={`/book/${doctor.id}`}
              className="inline-block mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md focus:outline-none active:scale-95 transition"
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
