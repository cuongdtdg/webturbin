import React from 'react';
import "../styles/SettingsPage.css";

function SettingsPage() {
  return (
    <div className="settings-page">
      <div className="back-container">
        <button className="back-button">← Back</button>
      </div>

      <div className="logout-container">
        <button className="logout-button">Log Out</button>
      </div>

      <div className="form-section">
        <h2 className="title">Change password</h2>

        <form>
          <div className="form-group">
            <span className="required">*</span>
            <label className="label">Current password</label>
            <input type="password" className="input-box" />
            <div className="forgot-password-container">
              <button type="button" className="forgot-password">Forget Password?</button>
            </div>
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
            <button type="submit" className="submit-button">Update Password</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsPage;
