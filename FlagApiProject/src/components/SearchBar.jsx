import React from "react";

function SearchBar() {
  return (
    <>
      <div class="search-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search for a country..." />
      </div>
    </>
  );
}

export default SearchBar;
