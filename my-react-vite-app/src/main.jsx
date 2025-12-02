import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ Add this
import { CartProvider } from './context/CartContext'; // ✅ Add this
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ Router wraps entire app */}
      <CartProvider> {/* ✅ Global cart context */}
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
