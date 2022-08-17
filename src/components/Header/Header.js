import React from 'react';
import { NavLink } from "react-router-dom";
import image from '../images/list-check.svg'

const Header = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <img src={image} alt="Logo" className="logo bg-light" />
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
            to="/ToDoList"
          >
            To-Do List
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "nav-link active text-secondary"
                : "nav-link text-light"
            }
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
