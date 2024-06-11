import React from "react";
import roadworks from "../assets/roadworks.png";
import "./Home.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={roadworks} className="App-logo" alt="logo" />
        <p>⚠️ This site is currently under construction! ⚠️</p>
        <p>Please check back later!</p>
      </header>
    </div>
  );
};

export default Home;

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.tsx</code> and save to reload. Home Page.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>
