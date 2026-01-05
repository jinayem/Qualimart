// src/App.jsx

// The following line is not necessary in React 17+ with JSX Transform
// import React from "react";
import { Routes, Route } from "react-router-dom"; // No BrowserRouter here
import Home from "./pages/Home/Home";
import ProductPage from "./pages/Product/ProductPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
