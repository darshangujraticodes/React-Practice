import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <HeaderSection />
      <Outlet />
      <FooterSection />
    </>
  );
}

export default App;
