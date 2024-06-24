import React from "react";
import styles from "./css/Header.module.css";
import logo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="py-3">
        <nav className="container d-flex justify-content-between">
          <div className="navBrand">
            <img src={logo} alt="" />
          </div>
          <div className="navMenu">
            <ul className="d-flex">
              <li className="px-3">
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? `${styles.activeNavlink}`
                        : `${styles.navText} `
                    } `
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? `${styles.activeNavlink}`
                        : `${styles.navText} `
                    } `
                  }
                >
                  Aboutus
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  to="/service"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? `${styles.activeNavlink}`
                        : `${styles.navText} `
                    } `
                  }
                >
                  Service
                </NavLink>
              </li>
              <li className="px-3">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? `${styles.activeNavlink}`
                        : `${styles.navText} `
                    } `
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
