import React from 'react';
import { Link } from 'react-router-dom';

const statusColors = {
  "Available Today": "bg-green-100 text-green-800",
  "Fully Booked": "bg-red-100 text-red-800",
  "On Leave": "bg-yellow-100 text-yellow-800",
};

function DoctorCard({ doctor }) {
  
  const colorClass = statusColors[doctor.status] || "bg-gray-100 text-gray-800";

  return (
    <Link 
      to={`/doctor/${doctor.id}`} 
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
    >
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={`Dr. ${doctor.name}`} 
          className="w-full h-48 object-cover"
        />
        <span className={`absolute top-2 right-2 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ${colorClass}`}>
          {doctor.status}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">Dr. {doctor.name}</h3>
        <p className="text-md text-gray-600 mt-1">{doctor.specialization}</p>
      </div>
    </Link>
  );
}

export default DoctorCard;