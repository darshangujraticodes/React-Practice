import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import FlagContent from "./FlagContent";
import { ThemeContext } from "../context/ThemeContext";

function PageLayout() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  //   console.log(darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      <FlagContent />
    </>
  );
}

export default PageLayout;
