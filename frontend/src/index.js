import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>

        <Router>

    <App />

        </Router>

  </>
);
