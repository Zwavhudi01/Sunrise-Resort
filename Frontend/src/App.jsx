import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all pages
import Home from './pages/Home';
import Activity from './pages/Activity';
import MyBookings from './pages/MyBookings';
import Profile from './pages/Profile';
import Map from './pages/Map';
import AdminDashboard from './pages/AdminDashboard';
import AdminActivities from './pages/AdminActivities';
import AdminBookings from './pages/AdminBookings';
import AdminCalendar from './pages/AdminCalendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activity" element={<Activity />} />
        <Route path="/my-bookings" element={<MyBookings />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/map" element={<Map />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/activities" element={<AdminActivities />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/calendar" element={<AdminCalendar />} />
      </Routes>
    </Router>
  );
}

export default App;