import React from "react";
import "./App.css";
import { CarouselSlider } from "./components/slider-carousel/carousel.jsx";
import { Navbar } from "./components/navigation-bar/navbar.jsx";
import { HotelCard } from "./components/slider-carousel/card.jsx";

function App() {
  const cards = [
    {
      key: "SUITE",
      content: <HotelCard background="gold" roomType="SUITE" roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1" />,
    },
    {
      key: "DELUXE",
      content: <HotelCard background= "silver" roomType="DELUXE" roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"/>,
    },
    {
      key: "STANDARD",
      content: <HotelCard background="gold" roomType="STANDARD" roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"/>,
    },

    {
      key: "FAMILY",
      content: <HotelCard background= "silver"roomType="FAMILY" roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"/>,
    },
    {
      key: "PRESIDENTIAL",
      content: <HotelCard background="gold" roomType="PRESIDENTIAL" roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"/>,
    },
  ];
  return (
    <div className="App">
      <Navbar />
      <div className="mt-24">
      <CarouselSlider
        cards={cards}
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
      </div>
    </div>
  );
}

export default App;
