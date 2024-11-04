import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import PageLayout from "./components/PageLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import CountryInfo from "./pages/CountryInfo.jsx";
// import FlagContextProvider from "./context/FlagContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/country/:countryName" element={<CountryInfo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
    </ThemeContextProvider>
  </StrictMode>
);
