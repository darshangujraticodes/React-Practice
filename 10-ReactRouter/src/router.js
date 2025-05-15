import { createBrowserRouter } from "react-router";
import App from "./App";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Homepage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
      { path: "service", Component: ServicePage },
    ],
  },
]);

export default router;
