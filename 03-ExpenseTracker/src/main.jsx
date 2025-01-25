import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "../src/index.css";
import FormContextProvider from "./context/FormContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormContextProvider>
      <App />
    </FormContextProvider>
  </StrictMode>
);
