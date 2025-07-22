import React from "react";
import "../styles/HomePage.css"; // Assuming you have a CSS file for styles

function HomePage() {
  return (
    <div className="homepage">
      <img
        className="background-image"
        src="https://api.builder.io/api/v1/image/assets/TEMP/20656bd974bc569c85cf5309d68169d713bab4b8?width=3575"
        alt="Turbine background"
      />

      <div className="login-section">
        <div className="login-button-container">
          <div className="login-button-bg"></div>
          <button className="login-button">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
