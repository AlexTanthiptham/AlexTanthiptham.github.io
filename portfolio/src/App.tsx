import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import WIP from "./pages/WIP";
import Landing from "./pages/Landing";
import UtilsTopNav from "./components/UtilsTopNav";

function App() {
  return (
    <div>
      <UtilsTopNav />
      <Routes>
        <Route path="/" element={<Landing />} />,
        <Route path="/home" element={<Landing />} />
        <Route path="/blog" element={<WIP />} />
      </Routes>
    </div>
  );
}

export default App;
