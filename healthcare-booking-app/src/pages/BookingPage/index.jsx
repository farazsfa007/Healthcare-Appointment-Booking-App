import { useParams } from 'react-router-dom';
import doctorsData from '../../data/doctors.json';
import AppointmentForm from '../../components/AppointmentForm';

function BookingPage() {
  const { id } = useParams();
  const doctor = doctorsData.find(doc => doc.id === parseInt(id));
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">Doctor not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Book Appointment</h1>
        <p className="text-gray-700 mb-6">
          You're booking an appointment with <strong>Dr. {doctor.name}</strong> ({doctor.specialization})
        </p>

        <AppointmentForm doctorId={doctor.id} />
      </div>
    </div>
  );
}

export default BookingPage;
