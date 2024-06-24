import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import LayoutPage from "./pages/LayoutPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutusPage from "./pages/AboutusPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutPage />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<AboutusPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="service" element={<ServicePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
