import React from "react";

function SearchBar({ setSearchQuery }) {
  return (
    <>
      <div className="search-container">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for a country..."
        />
      </div>
    </>
  );
}

export default SearchBar;
