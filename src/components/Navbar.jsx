import React from "react";
import "./static/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="top-bar">
        Save <span>20%</span> On Your First Order
      </div>
      <header>
        <div className="header-content">
          <h1>Superiors.in</h1>
        </div>
        <nav>
          <a href="#">Contact Us</a>
          <a href="#">Portfolio</a>
          <a href="#">Services</a>
        </nav>
        <div>
          <div className="toggle-switch">
            🌙
          </div>
          <button className="start-project">Start Project</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
