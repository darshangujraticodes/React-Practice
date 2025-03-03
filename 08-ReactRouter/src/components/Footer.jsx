import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <Link className="navMenu" to="">
                Home
              </Link>{" "}
              <br />
              <Link className="navMenu" to="service">
                Service
              </Link>
              <br />
              <Link className="navMenu" to="about">
                About Us
              </Link>
              <br />
              <Link className="navMenu" to="contact">
                Contact
              </Link>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Link className="navMenu" to="">
                Home
              </Link>{" "}
              <br />
              <Link className="navMenu" to="service">
                Service
              </Link>
              <br />
              <Link className="navMenu" to="about">
                About Us
              </Link>
              <br />
              <Link className="navMenu" to="contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
