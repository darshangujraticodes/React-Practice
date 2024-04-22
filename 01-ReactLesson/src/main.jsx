import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";
import ProductDisplay from "./Pages/ProductDisplay.jsx";
import HomePage from "./Pages/HomePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutUsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="product" element={<ProductDisplay />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
