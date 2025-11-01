import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";
import { BrowserRouter } from "react-router-dom"; // ✅ Import here

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>   {/* ✅ Wrap your entire app */}
      <App />
    </BrowserRouter>
);
