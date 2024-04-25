import React from "react";
import SearchBar from "./SearchBar";
import RegionSelector from "./RegionSelector";

function HeaderBar() {
  return (
    <>
      <header class="header-container">
        <div class="header-content">
          <h2 class="title">
            <a href="#">Find your Country Flag ?</a>
          </h2>
          <p class="theme-changer">
            <i class="fa-regular fa-moon"></i>&nbsp;&nbsp;Dark Mode
          </p>
        </div>
      </header>
    </>
  );
}

export default HeaderBar;
