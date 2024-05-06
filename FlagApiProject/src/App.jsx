import { useState } from "react";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HeaderBar from "./components/HeaderBar";

import "./App.css";
import SearchBar from "./components/SearchBar";
import RegionSelector from "./components/RegionSelector";
import FlagDisplay from "./components/FlagDisplay";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <HeaderBar />
      <main>
        <div className="search-filter-container">
          <SearchBar setSearchQuery={setSearchQuery} />
          <RegionSelector />
        </div>
        <div className="countries-container">
          <FlagDisplay searchQuery={searchQuery} />
        </div>
      </main>
    </>
  );
}

export default App;
