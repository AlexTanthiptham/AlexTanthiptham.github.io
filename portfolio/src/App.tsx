import { Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import WIP from "./pages/WIP";
import Landing from "./pages/Landing";

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
      <Route path="/" element={<WIP />} />,
      <Route path="/Home" element={<Landing />} />
    </Routes>
  );
}

export default App;
