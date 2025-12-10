import React from "react";
import "./App.css";
// import showcaseBg from "./assets/showcase-bg.jpg";
function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar container">
        <div className="logo">
          <a href="/">Blood Bank</a>
        </div>

        <div className="nav-item-wrapper">
          <ul className="nav-items">
            <li><a href="/">Home</a></li>
            <li><a href="#BLOG">Blogs</a></li>
            <li><a href="/contact.html">Need Blood</a></li>
            <li><a href="/donate.html">Donate Blood</a></li>
          </ul>
        </div>

        <div className="nav-right">
          <button
            type="button"
            className="login-btn primary-btn"
            onClick={() => (window.location.href = "/login.html")}
          >
            Login
          </button>

          <button
            type="button"
            className="sign-up-btn secondary-btn"
            onClick={() => (window.location.href = "/signup.html")}
          >
            Sign-up
          </button>
        </div>
      </nav>

      {/* Showcase Section */}
      <section className="showcase-bg container">
        <form className="form-1">
          <input
            type="text"
            className="search-box"
            placeholder="Search for cities and drives"
          />
          <button type="submit" className="mob-btn primary-btn">
            Search
          </button>
        </form>

        <div className="bd-info-wrap">
          <h1 className="bd-info-head">Blood Donation</h1>
          <p className="bd-info-text">
            Blood donation is a voluntary procedure that helps save lives.
          </p>
          <a
            href="https://en.wikipedia.org/wiki/Blood_donation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-btn">Know More</button>
          </a>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-wrap" id="BLOG">
        <h1 className="blog-head container">Highlights</h1>
        <div className="box-wrap container">
          <div className="box">
            <h3 className="box-head">Can we donate during COVID-19?</h3>
            <p className="box-text">
              COVID-19 impacted blood donation, but it remained safe with
              precautions.
            </p>
            <a
              href="https://www.redcrossblood.org/donate-blood/dlp/coronavirus--covid-19--and-blood-donation.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="box-btn">
                <span>Read More</span>
              </div>
            </a>
          </div>

          <div className="box">
            <h3 className="box-head">Donating for the first time</h3>
            <p className="box-text">
              New donors are vital — start your journey today.
            </p>
            <a
              href="https://www.blood.co.uk/the-donation-process/giving-blood-for-the-first-time/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="box-btn">
                <span>Read More</span>
              </div>
            </a>
          </div>

          <div className="box">
            <h3 className="box-head">Donate Plasma</h3>
            <p className="box-text">
              Plasma is essential to create life-saving medicines.
            </p>
            <a
              href="https://www.blood.co.uk/plasma/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="box-btn">
                <span>Read More</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Donate & Receive Section */}
<section className="dr-wrap container">
  <div className="dr">
    <div className="dr-card donate">
      <h1>Become a Blood Donor</h1>
      <p>Your donated blood can save someone's life.</p>
      <button
        className="dr-btn"
        onClick={() => (window.location.href = "/donate.html")}
      >
        Donate
      </button>
    </div>

    <div className="dr-card receive">
      <h1>Need Blood?</h1>
      <p>We are here to help you anytime.</p>
      <button
        className="dr-btn"
        onClick={() => (window.location.href = "/contact.html")}
      >
        Contact
      </button>
    </div>
  </div>
</section>

      {/* Footer */}
<section className="footer">
  <div className="foot-wrap container">
    <div className="foot-links-wrap">
      {/* Quick Links */}
      <div className="links-wrapper">
        <h3>Quick Links</h3>
        <a
          href="https://en.wikipedia.org/wiki/Blood_donation"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          About Blood Donation
        </a>
        <a href="/donate.html" className="footer-link">
          Donate
        </a>
        <a href="/contact.html" className="footer-link">
          Contact Us
        </a>
      </div>

      {/* Important Links */}
      <div className="links-wrapper">
        <h3>Important Links</h3>
        <button className="footer-btn">Privacy</button>
        <button className="footer-btn">Cookies</button>
        <button className="footer-btn">Terms & Conditions</button>
      </div>
    </div>

    <hr className="foot-breaker" />

    <div className="right-text-wrap">
      <p className="foot-l-text">"One drop can save many lives"</p>
      <button
        type="button"
        className="primary-btn"
        onClick={() => (window.location.href = "/donate.html")}
      >
        Donate
      </button>
    </div>
  </div>

  <p className="cr-text">
    Blood Bank &copy;&nbsp;| All rights reserved
  </p>
</section>
    </div>
  );
}

export default App;
