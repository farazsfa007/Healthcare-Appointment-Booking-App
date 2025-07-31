import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctor/:id" element={<DoctorProfilePage />} />
        <Route path="/book/:id" element={<BookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;