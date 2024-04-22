import React from "react";
import { Link } from "react-router-dom";

function FooterSection() {
  return (
    <footer className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="link-wrap">
              <Link to="/">Home</Link> <br />
              <Link to="/about">About Us</Link> <br />
              <Link to="/product">Product</Link> <br />
              <Link to="/contact">Contact Us</Link> <br />
            </div>
          </div>
          <div className="col-md-4">
            <div className="link-wrap">
              <Link to="/">Home</Link> <br />
              <Link to="/about">About Us</Link> <br />
              <Link to="/product">Product</Link> <br />
              <Link to="/contact">Contact Us</Link> <br />
            </div>
          </div>
          <div className="col-md-4">
            <div className="link-wrap">
              <Link to="/">Home</Link> <br />
              <Link to="/about">About Us</Link> <br />
              <Link to="/product">Product</Link> <br />
              <Link to="/contact">Contact Us</Link> <br />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
