import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// ...existing code...
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';
import OTPPage from './pages/OTPPage.jsx';
import ReviewPage from './pages/ReviewPage.jsx';
import UploadPage from './pages/UploadPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import UserManagePage from './pages/UserManagePage.jsx';
import FilterPage from './pages/FilterPage.jsx';
// ...existing code...
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/setting" element={<SettingsPage />} />
        <Route path="/user" element={<UserManagePage />} />
      </Routes>
    </Router>
  );
}

export default App;