// App.js
import React from "react";
import { createPortal } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./components/Navbar/Navbar";

// Routes
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      {createPortal(<Navbar />, document.getElementById("navbar"))}
      <AppRoutes />
    </Router>
  );
}

export default App;
