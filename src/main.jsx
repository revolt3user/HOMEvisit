import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App.jsx";
import Tour from "./Tour/Tour.jsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="*" element={<Navigate to="/public" replace />} />
    </Routes>
  </BrowserRouter>
);
