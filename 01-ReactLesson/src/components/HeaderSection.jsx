import React from "react";
import { Link, NavLink } from "react-router-dom";

function HeaderSection() {
  return (
    <header>
      <nav className="my-3">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` ${isActive ? " activeLink " : "linkTag  "} `
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` ${isActive ? " activeLink " : "linkTag  "} `
                }
              >
                About Us
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  ` ${isActive ? " activeLink " : "linkTag  "} `
                }
              >
                Product
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  ` ${isActive ? " activeLink " : "linkTag  "} `
                }
              >
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
