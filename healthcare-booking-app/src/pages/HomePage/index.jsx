import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar';
import DoctorCard from '../../components/DoctorCard';
import doctorsData from '../../data/doctors.json';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(doctorsData);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredDoctors(doctorsData);
      return;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    const results = doctorsData.filter(doctor =>
      doctor.name.toLowerCase().includes(lowercasedQuery) ||
      doctor.specialization.toLowerCase().includes(lowercasedQuery)
    );

    setFilteredDoctors(results);
  }, [searchQuery]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-900 drop-shadow">
            Find Your Doctor
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-gray-600">
            Book an appointment with our top-rated specialists.
          </p>
        </div>

        <div className="mb-12">
          <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

        {filteredDoctors.length > 0 ? (
          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDoctors.map(doctor => (
              <div
                key={doctor.id}
                className="transition transform hover:scale-105 hover:shadow-2xl duration-300"
              >
                <DoctorCard doctor={doctor} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-md mt-10">
            <h2 className="text-2xl font-semibold text-red-600">No Doctors Found</h2>
            <p className="text-gray-500 mt-2">Try adjusting your search.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default HomePage;
