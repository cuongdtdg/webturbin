import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple validation - in real app would authenticate
    if (username && password) {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="world-map-background">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/511e3cb0e9861b7035f20692202ab4aa709aae7f?width=1676"
          alt="World map background"
          className="world-map-image"
        />
      </div>

      <div className="login-form-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="login-title">Log in</h1>

          <div className="form-group">
            <label className="form-label">Your username</label>
            <div className="input-container">
              <input
                type="text"
                className="form-input"
                placeholder="Enter your useername"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Your password</label>
            <div className="input-container">
              <input
                type="password"
                className="form-input"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="login-submit-button">
            <span>Login</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
