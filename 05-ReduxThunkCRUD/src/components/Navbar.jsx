import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className="navbarSection my-4">
        <div className="container">
          <nav className="d-flex justify-content-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                ` menuLink ${isActive ? "menuActive" : ""}  `
              }
            >
              Home{" "}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                ` menuLink  ${isActive ? "menuActive" : ""}  `
              }
              to="/api-data"
            >
              Fetch Api Data{" "}
            </NavLink>
          </nav>
        </div>
      </section>
    </>
  );
}

export default Navbar;
