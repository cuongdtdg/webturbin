import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage.jsx';
import OTPPage from './pages/OTPPage.jsx';
import ReviewPage from './pages/ReviewPage.jsx';
import UploadPage from './pages/UploadPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import UserManagePage from './pages/UserManagePage.jsx';
import FilterPage from './pages/FilterPage.jsx';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OTPPage />} />

        {/* Protected routes */}
        <Route path="/review" element={
          <ProtectedRoute><ReviewPage /></ProtectedRoute>
        } />
        <Route path="/upload" element={
          <ProtectedRoute><UploadPage /></ProtectedRoute>
        } />
        <Route path="/filter" element={
          <ProtectedRoute><FilterPage /></ProtectedRoute>
        } />
        <Route path="/setting" element={
          <ProtectedRoute><SettingsPage /></ProtectedRoute>
        } />
        <Route path="/user" element={
          <ProtectedRoute><UserManagePage /></ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
