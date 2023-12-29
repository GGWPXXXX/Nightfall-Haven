import React from "react";
import "./App.css";
import { Carroussel } from "./components/slider-carousel/carousel.jsx";
import { Navbar } from "./components/navigation-bar/navbar.jsx";
import { FeaturedNewsCard as CardNews } from "./components/slider-carousel/featuredNewsCard.jsx";

function App() {
  const cards = [
    {
      key: "STANDARD",
      content: <CardNews />,
    },
    {
      key: "DELUXE",
      content: <CardNews />,
    },
    {
      key: "SUITE",
      content: <CardNews />,
    },
    {
      key: "FAMILY",
      content: <CardNews />,
    },
    {
      key: "PRESIDENTIAL",
      content: <CardNews />,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-row">
        <Carroussel
          cards={cards}
          height="500px"
          width="90%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </div>
  );
}

export default App;
