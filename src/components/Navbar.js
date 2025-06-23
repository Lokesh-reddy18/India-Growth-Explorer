import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Assuming you have some basic styles
import { FaRegMoon, FaSun } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar-container">
      <div className="navbar-title">
        <NavLink to="/" className="navbar-title" style={{ textDecoration: 'none' }}>
          India Growth Explorer
        </NavLink>
      </div>
      <div className="navbar-links-wrapper">
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
            Dashboard
          </NavLink>
          <NavLink to="/heatmap" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
            Heatmap
          </NavLink>
          <NavLink to="/linechart" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
            Timeline
          </NavLink>
          <NavLink to="/rankings" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
            Rankings
          </NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}>
            Insights
          </NavLink>
        </div>
      </div>
      <div className="navbar-actions">
        <button
          className="darkmode-toggle"
          aria-label="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
          style={{ background: "none", border: "none", cursor: "pointer", fontSize: "1.2rem", marginRight: "0.5rem" }}
        >
          {darkMode ? <FaSun color="#FFD600" size={19} /> : <FaRegMoon color="#333" size={19} />}
        </button>
        <button
          className="navbar-hamburger"
          aria-label="Open menu"
        >
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
          <span className="hamburger-bar" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;


