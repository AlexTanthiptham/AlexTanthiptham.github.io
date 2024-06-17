import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import WIP from "./pages/WIP";
import Landing from "./pages/Landing";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div>
      <TopNav />
      <Routes>
        <Route path="/" element={<WIP />} />,
        <Route path="/Home" element={<Landing />} />
        <Route path="/Blog" element={<WIP />} />
      </Routes>
    </div>
  );
}

export default App;
