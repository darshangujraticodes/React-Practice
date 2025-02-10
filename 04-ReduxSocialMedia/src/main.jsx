import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import { Provider } from "react-redux";
import { store } from "./app/store.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
} from "react-router";
import Layout from "./components/Layout.jsx";
import HomePage from "./components/HomePage.jsx";
import CartPage from "./components/CartPage.jsx";
import { RouterProvider } from "react-router-dom";
import DisplayTodo from "./components/DisplayTodo.jsx";
import RtkApiCall from "./components/RtkApiCall.jsx";
import FetchGithubUsers from "./components/FetchGithubUsers.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/todo" element={<DisplayTodo />} />
      <Route path="/rtk-api-call" element={<RtkApiCall />} />
      <Route path="/github-users" element={<FetchGithubUsers />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
