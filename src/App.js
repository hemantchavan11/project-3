import React, { useEffect, useState } from "react";
import './App.css'
import Products from "./Products";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Home";

function App() {
  return (
    <div>
      <BrowserRouter>
      <div className="header">
        <ul className="navItems">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Products"> Product </Link></li>
          </ul>
      </div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductDetails" element={<ProductDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )

}

export default App;
