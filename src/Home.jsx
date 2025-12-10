import React from "react";
import "./Home.css";
import heroImage from "./hero-image.png"; // Replace with your actual image path

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <div className="logo">
          <img src={require("./logo.png")} alt="One Blood" />
          <span>ONE BLOOD</span>
        </div>
        <nav className="nav">
          <a href="#">Home</a>
          <a href="#">Blogs</a>
          <a href="#">Need Blood</a>
          <a href="#">Donate Blood</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-btn">Login</button>
          <button className="signup-btn">Sign-up</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-text">
          <h1>Blood Donation</h1>
          <p>
            A blood donation occurs when a person voluntarily has blood drawn
            and used for transfusions and/or made into biopharmaceutical
            medications by a process called fractionation (separation of whole
            blood components). Donation may be of whole blood, or of specific
            components directly (apheresis). Blood banks often participate in
            the collection process as well as the procedures that follow it.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Blood Donation Illustration" />
          <div className="search-bar">
            <input type="text" placeholder="Search for cities and drives" />
            <button>🔍</button>
          </div>
        </div>
      </section>

      <button className="floating-call-btn">📞</button>
    </div>
  );
};

export default Home;
