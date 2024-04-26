import React from "react";
import SearchBar from "./SearchBar";
import RegionSelector from "./RegionSelector";

function HeaderBar() {
  return (
    <>
      <header className="header-container">
        <div className="header-content">
          <h2 className="title">
            <a href="#">Find your Country Flag ?</a>
          </h2>
          <p className="theme-changer">
            <i className="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
          </p>
        </div>
      </header>
    </>
  );
}

export default HeaderBar;
