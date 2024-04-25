import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HeaderBar from "./components/HeaderBar";

import "./App.css";
import SearchBar from "./components/SearchBar";
import RegionSelector from "./components/RegionSelector";
import FlagDisplay from "./components/FlagDisplay";

function App() {
  return (
    <>
      <HeaderBar />
      <main>
        <div className="search-filter-container">
          <SearchBar />
          <RegionSelector />
        </div>
        <div className="countries-container">
          <FlagDisplay />
        </div>
      </main>
    </>
  );
}

export default App;
