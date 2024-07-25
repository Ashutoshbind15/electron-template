import React from "react";
import Home from "./interface/pages/Home.jsx";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./interface/pages/Dashboard.jsx";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">dashboard</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
