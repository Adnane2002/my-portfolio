import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../logo.png"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-4 py-2 navbar-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img className="img-logo" src={logo} alt="logo" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto fs-4 ">
              <li className="nav-item">
                <NavLink className="nav-link ps-4 " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ps-5" to="/about">
                  About me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ps-5" to="/projet">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link ps-5" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
