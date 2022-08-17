import React from 'react';
import { Link } from "react-router-dom";
import image from '../images/list-check.svg'

const Header = () => (
  <nav className="navbar navbar-expand-lg">
    <div className="container-fluid">
      <img src={image} alt="Logo" className='logo'/>
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
          <Link className="nav-link" to="/ToDoList">
            To Do List 
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
