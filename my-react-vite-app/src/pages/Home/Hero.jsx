//src/components/Hero.jsx

// The following line is not necessary in React 17+ with JSX Transform
// import React from "react";

// Importing CSS for Hero component styling
import "./Hero.css";

// The following is a simple Hero component
const Hero = () => {
  return (
    <section className="hero">
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
