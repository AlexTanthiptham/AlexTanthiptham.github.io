import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";

// const TopNav = () => (
//   <nav>
//     <ul>
//       <li>
//         <a href="/">Home</a>
//       </li>
//       <li>
//         <a href="/about">About</a>
//       </li>
//     </ul>
//   </nav>
// );

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />,
      <Route path="/Home" element={<Home />} />,
    </Routes>
  );
}

export default App;
