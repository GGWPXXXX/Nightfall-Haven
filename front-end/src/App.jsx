import React from "react";
import "./App.css";
import { Routes } from "react-router-dom";
import { PostLoginNavbar } from "./components/navigation-bar/postLoginNavbar.jsx";

function App() {
  const postLoginPages = () => {
    return (
      <Routes>
        <Route path="/"></Route>
      </Routes>
    );
  }
  return (
      <div className="App">
        <PostLoginNavbar />
      </div>
  );
}

export default App;
