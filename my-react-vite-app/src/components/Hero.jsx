//src/components/Hero.jsx

// The following imports React and the necessary assets
import React from "react";
import heroImage from "../assets/hero-bg.jpg"; // Import the image
import "../styles/Hero.css";

// The following is a simple Hero component
const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="hero-content">
        <h1>Welcome to Qualimart</h1>
        <p>Your One-Stop Shop for Quality Products</p>
        <button className="cta-button">Shop Now</button>
      </div>
    </section>
  );
};

// Export the Hero component
export default Hero;
