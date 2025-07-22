import React from 'react';
import "../styles/LoginPage.css"; // Assuming you have a CSS file for styles

function LoginPage() {
  return (
    <div className="login-page">
      <img
        className="login-background-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/511e3cb0e9861b7035f20692202ab4aa709aae7f?width=1676"
        alt="Industrial background"
      />

      <div className="login-form-container">
        <div className="login-form">
          <h1 className="login-title">Log in</h1>

          <form>
            <div className="form-group">
              <label className="field-label">Your username</label>
              <div className="input-container">
                <input
                  type="text"
                  className="login-input"
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="field-label">Your password</label>
              <div className="input-container">
                <input
                  type="password"
                  className="login-input"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="login-submit-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
