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
      className="block rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={doctor.image}
          alt={`Dr. ${doctor.name}`}
          className="w-full h-48 sm:h-56 md:h-60 object-cover transition-transform duration-300 hover:scale-105"
        />
        <span
          className={`absolute top-2 right-2 text-xs font-semibold px-3 py-1 rounded-full shadow-sm ${colorClass}`}
        >
          {doctor.status}
        </span>
      </div>

      {/* Info Section */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-tight">
          Dr. {doctor.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          {doctor.specialization}
        </p>
      </div>
    </Link>
  );
}

export default DoctorCard;