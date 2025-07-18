import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="home-page">
      <div className="hero-background">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/e4042a5c48518379dba877aabbf3f372dedccf08?width=3844"
          alt="Wind turbines background"
          className="hero-image"
        />
      </div>
      <div className="login-button-container">
        <button className="login-button" onClick={handleLoginClick}>
          <span>Login</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
