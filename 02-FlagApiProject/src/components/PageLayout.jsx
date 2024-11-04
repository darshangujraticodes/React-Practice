import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import FlagContent from "./FlagContent";
import { ThemeContext } from "../context/ThemeContext";
import { Outlet } from "react-router-dom";

function PageLayout() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  //   console.log(darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("darkmode", "active");
    } else {
      document.documentElement.setAttribute("data-theme", "");
      localStorage.setItem("darkmode", "");
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default PageLayout;
