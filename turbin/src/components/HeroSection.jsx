import React from "react";
import LoginButton from "./LoginButton";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img
        className="hero-background"
        src="https://api.builder.io/api/v1/image/assets/TEMP/e4042a5c48518379dba877aabbf3f372dedccf08?width=3844"
        alt=""
      />
      <LoginButton />
    </div>
  );
};

export default HeroSection;
