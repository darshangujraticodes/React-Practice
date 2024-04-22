import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderSection() {
  return (
    <header>
      <nav className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NavLink to="/" className={({ isActive }) => `    `}>
                Home
              </NavLink>
              <NavLink to="/about" className="m-5">
                About Us
              </NavLink>
              <NavLink to="/product" className="m-5">
                Product
              </NavLink>
              <NavLink to="/contact" className="m-5">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default HeaderSection;
