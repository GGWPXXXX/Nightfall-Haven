import React from "react";
import { FeaturedCarousel } from "./carousel.jsx";
import { HotelCard } from "./card.jsx";

export const SliderCarousel = () => {
  const cards = [
    {
      key: "SUITE",
      content: (
        <HotelCard
          background="gold"
          roomType="SUITE"
          roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"
          details="''Spacious luxury with separate living and sleeping areas.''"
        />
      ),
    },
    {
      key: "DELUXE",
      content: (
        <HotelCard
          background="silver"
          roomType="DELUXE"
          roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"
          details="''Modern elegance and premium amenities.''"
        />
      ),
    },
    {
      key: "STANDARD",
      content: (
        <HotelCard
          background="gold"
          roomType="STANDARD"
          roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"
          details="''Cozy comfort for every traveler on a budget.''"
        />
      ),
    },

    {
      key: "FAMILY",
      content: (
        <HotelCard
          background="silver"
          roomType="FAMILY"
          roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"
          details="''Family-friendly comfort for memorable getaways.''"
        />
      ),
    },
    {
      key: "PRESIDENTIAL",
      content: (
        <HotelCard
          background="gold"
          roomType="PRESIDENTIAL"
          roomPictureUrl="https://cf.bstatic.com/xdata/images/hotel/max1024x768/505997348.jpg?k=ad87c04fdb4f4df8d4e6344243a246a3798c0f98a3a8e70865f76c84e82af45e&o=&hp=1"
          details="''Ultimate luxury with exclusive services and panoramic views.''"
        />
      ),
    },
  ];
  return (
    <div>
      <div className="text-center mt-14 mb-0 text-gray-400 relative">
        <svg className="absolute inset-0">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            <textPath xlinkHref="#curve">Featured Rooms</textPath>
          </text>
          <path id="curve" d="M10 80 Q 52.5 10, 95 80" fill="transparent" />
        </svg>
      </div>

      <div className="mt-24">
        <FeaturedCarousel
          cards={cards}
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
      </div>
    </div>
  );
};
