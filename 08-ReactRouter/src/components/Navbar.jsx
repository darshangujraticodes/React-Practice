import { Link, NavLink } from "react-router-dom";
import reactImg from "../assets/react.svg";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="my-3">
        <div className="container">
          <div className="navBarSection d-flex justify-content-between align-items-center">
            <div className="navLogoWrap">
              <Link to="/">
                <img src={reactImg} alt="ReactJS Logo" className="logoImg" />
              </Link>
            </div>
            <div className="navMenuWrap">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `navMenu  ${isActive ? "  navActive " : null}   `
                }
              >
                Home
              </NavLink>
              <NavLink
                to="about"
                className={({ isActive }) =>
                  `navMenu  ${isActive ? "  navActive " : null}   `
                }
              >
                About
              </NavLink>
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  `navMenu  ${isActive ? "  navActive " : null}   `
                }
              >
                Contact{" "}
              </NavLink>
              <NavLink
                to="service"
                className={({ isActive }) =>
                  `navMenu  ${isActive ? "  navActive " : null}   `
                }
              >
                Service
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
