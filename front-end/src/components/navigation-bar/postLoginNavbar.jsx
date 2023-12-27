import React from "react";

export function PostLoginNavbar() {
  return (
    <div className="flex flex-row gap-5 justify-start p-5  items-center h-28 bg-black">
      <div>
        <a href="" className="text-white font-inter">
          HOME
        </a>
      </div>
      <div>
        <a href="" className="text-white font-inter">
          ROOM TYPE
        </a>
      </div>
      <div>
        <a href="" className="text-white font-inter">
          ABOUT
        </a>
      </div>
      <div className="ml-16">
        <p className="text-white mx-96 text-5xl font-playfair">
          Midnight & Haven
        </p>
      </div>
    </div>
  );
}
