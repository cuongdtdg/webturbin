import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './LoginPage.jsx';
import HomePage from './HomePage.jsx';
import OTPPage from './OTPPag.jsx';
import ReviewPage from './ReviewPage.jsx';
import UploadPage from './UploadPag.jsx';
import SettingsPage from './SettingsPage.jsx';
import UserManagePage from './UserManagePjsx.jsx';

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