// src/pages/SettingsPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SettingsPage.css';
import Sidebar from "../components/Sidebar";
function SettingsPage() {
  const [activeTab, setActiveTab] = useState('user');
  const [oldPass, setOldPass] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleNavigate = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login', { replace: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    let user;
    try {
      user = JSON.parse(localStorage.getItem('currentUser'));
    } catch {
      user = null;
    }

    if (!user) {
      setMessage('Không tìm thấy người dùng.');
      return;
    }

    if (oldPass !== user.password) {
      setMessage('Mật khẩu hiện tại không đúng.');
      return;
    }

    if (newPass !== confirmPass) {
      setMessage('Mật khẩu xác nhận không khớp.');
      return;
    }

    try {
      const res = await fetch(`https://68831eb921fa24876a9cba18.mockapi.io/users/${user.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password: newPass }),
      });

      if (res.ok) {
        user.password = newPass;
        localStorage.setItem('currentUser', JSON.stringify(user));
        setMessage('Cập nhật mật khẩu thành công.');
        setOldPass('');
        setNewPass('');
        setConfirmPass('');
      } else {
        setMessage('Lỗi khi cập nhật mật khẩu.');
      }
    } catch {
      setMessage('Lỗi kết nối đến máy chủ.');
    }
  };

  return (
    <div className="app-layout">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        <div className="logout-container">
          <button type="button" onClick={handleLogout} className="logout-button">
            Log Out
          </button>
        </div>

        <div className="form-section">
          <h2 className="title">Change password</h2>
          {message && (
            <p style={{ color: message.includes('thành công') ? 'green' : 'red', marginBottom: 10 }}>
              {message}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <span className="required">*</span>
              <label className="label">Current password</label>
              <input
                type="password"
                className="input-box"
                value={oldPass}
                onChange={(e) => setOldPass(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <span className="required">*</span>
              <label className="label">New password</label>
              <input
                type="password"
                className="input-box"
                value={newPass}
                onChange={(e) => setNewPass(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <span className="required">*</span>
              <label className="label">Confirm Password</label>
              <input
                type="password"
                className="input-box"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                required
              />
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
