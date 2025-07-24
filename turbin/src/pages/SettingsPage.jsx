import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SettingsPage.css';

function SettingsPage() {
  const [activeTab, setActiveTab] = useState('user');
  const navigate = useNavigate();

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    navigate('/login', { replace: true });
  };

  return (
    <div className="app-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li
            className={activeTab === 'user' ? 'active' : ''}
            onClick={() => handleNavigate('user', '/setting')}
          >
            User
          </li>
          <li
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => handleNavigate('dashboard', '/review')}
          >
            Dashboard
          </li>
          <li
            className={activeTab === 'review' ? 'active' : ''}
            onClick={() => handleNavigate('review', '/filter')}
          >
            Review
          </li>
          <li
            className={activeTab === 'manage' ? 'active' : ''}
            onClick={() => handleNavigate('manage', '/user')}
          >
            User Manage
          </li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main-content">
        <div className="logout-container">
          {/* Đặt type="button" để không bị coi là submit */}
          <button
            type="button"
            onClick={handleLogout}
            className="logout-button"
          >
            Log Out
          </button>
        </div>

        <div className="form-section">
          <h2 className="title">Change password</h2>

          <form>
            <div className="form-group">
              <span className="required">*</span>
              <label className="label">Current password</label>
              <input type="password" className="input-box" />
            </div>

            <div className="form-group">
              <span className="required">*</span>
              <label className="label">Password</label>
              <input type="password" className="input-box" />
            </div>

            <div className="form-group">
              <span className="required">*</span>
              <label className="label">Confirm Password</label>
              <input type="password" className="input-box" />
            </div>

            <div className="submit-container">
              <button type="submit" className="submit-button">
                Update Password
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default SettingsPage;
