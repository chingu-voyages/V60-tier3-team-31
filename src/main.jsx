import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import { App } from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import { Layout } from "./components/Layout.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/applications" element={<Home />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Layout>
    </BrowserRouter>
  </StrictMode>
);