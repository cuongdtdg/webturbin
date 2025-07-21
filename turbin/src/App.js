import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage';
import HomePage from './HomePage';
import OTPPage from './OTPPage';
import ReviewPage from './ReviewPage';
import UploadPage from './UploadPage';
import SettingsPage from './SettingsPage';
import UserManagePage from './UserManagePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/user" element={<UserManagePage />} />
      </Routes>
    </Router>
  );
}

export default App;