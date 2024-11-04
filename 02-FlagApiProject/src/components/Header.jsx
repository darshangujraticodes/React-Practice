import React, { useContext } from "react";
import { assets } from "../assets/assetsData";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

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
            <div className="flex gap-x-5 items-center">
              <div>
                <Link
                  to="/"
                  className="font-medium text-md flex gap-1 items-center cursor-pointer "
                >
                  <span className="mr-1">
                    {darkMode ? (
                      <img
                        src={assets.whiteHome}
                        className="homeIcon"
                        alt="HomeIcon"
                      />
                    ) : (
                      <img
                        src={assets.blackHome}
                        className="homeIcon"
                        alt="HomeIcon"
                      />
                    )}
                  </span>
                  <span>Home</span>
                </Link>
              </div>
              <div
                onClick={() => setDarkMode(!darkMode)}
                className="font-medium text-md flex gap-1 items-center cursor-pointer  "
              >
                <span>
                  {darkMode ? (
                    <img src={assets.sun} className="headIcon" alt="Sun Icon" />
                  ) : (
                    <img
                      src={assets.moon}
                      className="headIcon"
                      alt="Moon Icon"
                    />
                  )}
                </span>
                <span>{darkMode ? <p>Light Mode</p> : <p>Dark Mode</p>}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
