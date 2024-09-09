import React from "react";
import ReactDOM from "react-dom/client";
import { Navbar } from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import { Home, Interests, Projects } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
