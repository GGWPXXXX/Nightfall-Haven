import React from "react";
import "./App.css";
import { FeaturedNewsCard } from "./components/slider-carousel/featuredNewsCard.jsx"; 
// import {Carroussel } from "./components/slider-carousel/carousel.jsx";
import { Navbar } from "./components/navigation-bar/navbar.jsx";

function App() {
  return (
      <div className="App">
        <Navbar />
        <FeaturedNewsCard />
      </div>
  );
}

export default App;
