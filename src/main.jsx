import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ApplicationsProvider } from "./context/ApplicationsProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ApplicationsProvider>
        <App />
      </ApplicationsProvider>
    </BrowserRouter>
  </StrictMode>
);
