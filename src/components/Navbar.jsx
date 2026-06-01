import React from "react";
import logo from "../../logo.png";
import "../App.css";

function Navbar() {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="navbar-desktop">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Generate Question</a>
        </div>
        <div className="buttons">
          <button className="register-btn">Register</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div className="navbar-mobile">
        <div className="mobile-top">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <button className="login-btn-mobile">Login</button>
        </div>
        <div className="mobile-bottom">
          <a href="#" className="nav-item">
            <span className="icon">🏠</span>
            <span className="text">Home</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">ℹ️</span>
            <span className="text">About Us</span>
          </a>
          <a href="#" className="nav-item">
            <span className="icon">❓</span>
            <span className="text">Generate Question</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
