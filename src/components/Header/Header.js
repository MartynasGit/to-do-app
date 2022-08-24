import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-secondary"
                : "nav-link text-light"
            }
            to="/"
          >
            To-Do List
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-secondary"
                : "nav-link text-light"
            }
            to="/calc"
          >
            Calculator
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
