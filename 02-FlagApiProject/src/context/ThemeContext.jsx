import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const flagAPI = "https://restcountries.com/v3.1/all";

  const [flagData, setFlagData] = useState();
  const [apiError, setApiError] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchFlagData = async () => {
      try {
        const response = await fetch(flagAPI);
        const data = await response.json();

        setFlagData(data);
      } catch (error) {
        setApiError(true);
        console.log(error);
      }
    };

    fetchFlagData();
    // console.log("FlagContextPage | API Fetch Error = ", apiError);
    // console.log("FlagContextPage | Api flagdata", flagData);

    // localstorage theme condition checker
    if (localStorageValue === "active") {
      setDarkMode(true);
    }
  }, []);

  const value = {
    darkMode,
    setDarkMode,
    flagData,
    setFlagData,
  };

  const localStorageValue = localStorage.getItem("darkmode");

  // console.log("dark mode context value localstorage = ", localStorageValue);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
