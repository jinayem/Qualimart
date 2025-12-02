import React from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import Home from "./components/Home";
import ProductPage from "./components/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
