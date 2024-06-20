import React from "react";
import styles from "./css/Header.module.css";
import logo from "../assets/react.svg";

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
                <a href="" className={styles.navText}>
                  Home
                </a>
              </li>
              <li className="px-3">
                <a href="" className={styles.navText}>
                  Aboutus
                </a>
              </li>
              <li className="px-3">
                <a href="" className={styles.navText}>
                  Service
                </a>
              </li>
              <li className="px-3">
                <a href="" className={styles.navText}>
                  Contact
                </a>
              </li>
              <li className="px-3">
                <a href="" className={styles.navText}>
                  Portfolio
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
