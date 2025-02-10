import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Pro } from "@reduxjs/toolkit";

import { Provider } from "react-redux";

import { store } from "./app/store.js";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<></>}></Route>)
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
