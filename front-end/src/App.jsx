import React from "react";
import "./App.css";
import { CarouselSlider } from "./components/slider-carousel/carousel.jsx";
import { Navbar } from "./components/navigation-bar/navbar.jsx";
import { GoldCard } from "./components/slider-carousel/goldCard.jsx";
import { SilverCard } from "./components/slider-carousel/silverCard.jsx";

function App() {
  const cards = [
    {
      key: "SUITE",
      content: <GoldCard />,
    },
    {
      key: "DELUXE",
      content: <SilverCard />,
    },
    {
      key: "STANDARD",
      content: <GoldCard />,
    },

    {
      key: "FAMILY",
      content: <SilverCard />,
    },
    {
      key: "PRESIDENTIAL",
      content: <GoldCard />,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <CarouselSlider
        cards={cards}
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}

export default App;
