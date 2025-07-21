import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LANGUAGES } from '../utils/constants';
import '../styles/MyAccountPage.css';

const MyAccountPage = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [searchTerm, setSearchTerm] = useState('');
  const [userSettings, setUserSettings] = useState({
    username: user?.name || '',
    email: user?.email || ''
  });
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const handleBack = () => {
    navigate('/review');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSaveProfile = () => {
    alert('Profile saved successfully!');
  };

  const handleUpdatePassword = () => {
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Password updated successfully!');
    setPasswordForm({
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    });
  };

  const filteredLanguages = LANGUAGES.filter(lang =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    lang.nativeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="settings-page">
      {/* Main content */}
      <div className="settings-content">
        {/* Back button */}
        <div className="back-section">
          <button className="back-button" onClick={handleBack}>
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none">
              <path d="M35.625 22.5H9.375M9.375 22.5L22.5 35.625M9.375 22.5L22.5 9.375" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span className="back-text">Back</span>
        </div>

        {/* Settings sections */}
        <div className="settings-sections">
          <div className="setting-item user-setting">
            <span>User Setting</span>
          </div>

          <div className="setting-item language-setting" onClick={() => setShowLanguageModal(true)}>
            <span>Language</span>
            <svg width="35" height="35" viewBox="0 0 35 35" fill="none">
              <path d="M17.5 22.4584L8.75 13.7084L10.7917 11.6667L17.5 18.375L24.2083 11.6667L26.25 13.7084L17.5 22.4584Z" fill="#1D1B20"/>
            </svg>
          </div>

          <div className="setting-item logout-setting" onClick={handleLogout}>
            <span>Log Out</span>
          </div>
        </div>

        {/* Profile and Settings */}
        <div className="profile-settings">
          <h2 className="profile-title">Profile</h2>
          <h2 className="settings-title">Settings</h2>

          {/* User form */}
          <div className="user-form">
            <div className="form-group">
              <label>User name*</label>
              <input
                type="text"
                value={userSettings.username}
                onChange={(e) => setUserSettings({...userSettings, username: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label>E-Mail*</label>
              <input
                type="email"
                value={userSettings.email}
                onChange={(e) => setUserSettings({...userSettings, email: e.target.value})}
              />
            </div>
            <button className="save-button" onClick={handleSaveProfile}>
              Save
            </button>
          </div>

          {/* Password change section */}
          <div className="password-section">
            <h2 className="change-title">Change</h2>
            <h2 className="password-title">Password</h2>

            <div className="password-form">
              <div className="password-field">
                <span className="required">*</span>
                <span className="field-label">Current password</span>
                <input
                  type="password"
                  value={passwordForm.currentPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, currentPassword: e.target.value})}
                />
              </div>

              <div className="password-field">
                <span className="required">*</span>
                <span className="field-label">Password</span>
                <input
                  type="password"
                  value={passwordForm.newPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                />
                <a href="#" className="forgot-password">Forgot Password ?</a>
              </div>

              <div className="password-field">
                <span className="required">*</span>
                <span className="field-label">Confirm Password</span>
                <input
                  type="password"
                  value={passwordForm.confirmPassword}
                  onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                />
              </div>

              <button className="update-password-button" onClick={handleUpdatePassword}>
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Language selection modal */}
      {showLanguageModal && (
        <div className="language-modal">
          <div className="language-modal-content">
            <div className="language-header">
              <button className="language-back" onClick={() => setShowLanguageModal(false)}>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M31.6666 20H8.33325M8.33325 20L19.9999 31.6666M8.33325 20L19.9999 8.33331" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <h3>CHOOSE THE LANGUAGE</h3>
            </div>

            <div className="language-search">
              <div className="search-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.14583 15.3708 4.8875 14.1125C3.62917 12.8542 3 11.3167 3 9.5C3 7.68333 3.62917 6.14583 4.8875 4.8875C6.14583 3.62917 7.68333 3 9.5 3C11.3167 3 12.8542 3.62917 14.1125 4.8875C15.3708 6.14583 16 7.68333 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8125 13.5625 12.6875 12.6875C13.5625 11.8125 14 10.75 14 9.5C14 8.25 13.5625 7.1875 12.6875 6.3125C11.8125 5.4375 10.75 5 9.5 5C8.25 5 7.1875 5.4375 6.3125 6.3125C5.4375 7.1875 5 8.25 5 9.5C5 10.75 5.4375 11.8125 6.3125 12.6875C7.1875 13.5625 8.25 14 9.5 14Z" fill="#1D1B20"/>
                </svg>
                <input
                  type="text"
                  placeholder="Type a language name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="language-list">
              {filteredLanguages.map((language) => (
                <div
                  key={language.code}
                  className={`language-item ${selectedLanguage === language.code ? 'selected' : ''}`}
                  onClick={() => setSelectedLanguage(language.code)}
                >
                  {selectedLanguage === language.code && <span className="checkmark">✓ </span>}
                  <span>{language.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyAccountPage;
