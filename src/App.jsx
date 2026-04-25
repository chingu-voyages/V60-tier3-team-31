import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </Layout>
  );
}