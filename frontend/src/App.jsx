import React from "react";
import "./App.css";
import { SliderCarousel } from "./components/slider-carousel/slider.jsx";
import { Navbar } from "./components/navigation-bar/navbar.jsx";


function App() {

  return (
    <div className="App">
      <Navbar />
      <SliderCarousel />
    </div>
  );
}

export default App;
