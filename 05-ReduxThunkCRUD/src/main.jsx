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

import { Provider } from "react-redux";

import { store } from "./app/store.js";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import FetchApiData from "./components/FetchApiData.jsx";
import UserInfo from "./components/UserInfo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="api-data" element={<FetchApiData />} />
      <Route path="user/:name" element={<UserInfo />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>

  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
