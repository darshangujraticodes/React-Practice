import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";
import ReactComp from "./components/ReactComp";
import ReactComp2 from "./components/ReactComp2";

function App() {
  return (
    <>
      <div>
        <h1 className="text-center  mt-3">React Practice</h1>
      </div>
      <ReactComp />
      <ReactComp2 />
    </>
  );
}

export default App;
