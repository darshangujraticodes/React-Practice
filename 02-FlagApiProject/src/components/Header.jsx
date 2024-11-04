import React, { useContext } from "react";
import { assets } from "../assets/assetsData";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <>
      <div className="headerWrapper  sticky top-0   py-4 ">
        <div className="containerWrap">
          <div className="headerContent flex justify-between">
            <div>
              <h1 className="font-medium text-2xl">Where in the World ?</h1>
            </div>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className="font-medium text-md flex gap-1 items-center cursor-pointer  "
            >
              <span>
                {darkMode ? (
                  <img src={assets.sun} className="moonIcon" alt="" />
                ) : (
                  <img src={assets.moon} className="moonIcon" alt="" />
                )}
              </span>
              <span>{darkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
