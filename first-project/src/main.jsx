import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route ,Link } from "react-router-dom";
import App from "./App.jsx";
import Register from "./Register.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/reg" element={<Register />} />
    </Routes>
  </BrowserRouter>
);
