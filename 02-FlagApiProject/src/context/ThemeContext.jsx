import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const value = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
