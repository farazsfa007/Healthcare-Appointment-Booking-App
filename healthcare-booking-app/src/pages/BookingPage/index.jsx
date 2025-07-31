import { useParams } from 'react-router-dom';
import doctorsData from '../../data/doctors.json';
import AppointmentForm from '../../components/AppointmentForm';

function BookingPage() {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 px-4">
        <div className="bg-white rounded-lg shadow-lg p-10 max-w-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Doctor not found</h2>
          <p className="text-gray-600">Please check the link or try searching for another doctor.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
  <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-10 md:p-12">
    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 text-center sm:text-left">
      Book Appointment
    </h1>
    <p className="text-gray-700 mb-10 text-center sm:text-left text-lg sm:max-w-xl mx-auto sm:mx-0">
      You're booking an appointment with{' '}
      <strong className="text-blue-700">Dr. {doctor.name}</strong>{' '}
      <span className="italic text-gray-600">({doctor.specialization})</span>
    </p>

    <AppointmentForm doctorId={doctor.id} />
  </div>
</div>

  );
}

export default BookingPage;
