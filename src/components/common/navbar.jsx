import React from "react";
import {Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <Link className="navbar-brand pl-5" to="/">Vidly</Link>
          <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
              <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
              <div className="navbar-nav px-4">
                    <NavLink className="nav-item nav-link" to="/movies">
                        Movies 
                    </NavLink>
            
                    <NavLink className="nav-item nav-link" to="/customers">
                        Customers
                    </NavLink>
                
                    <NavLink className="nav-item nav-link" to="/rentals">
                        Rentals
                    </NavLink>

                    <NavLink className="nav-item nav-link" to="/login">
                       Login
                    </NavLink>

                    <NavLink className="nav-item nav-link" to="/register">
                       Register
                    </NavLink>
                  
              </div>
          </div>
    </nav>
  );
};

export default Navbar;
