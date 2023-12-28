import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export function Navbar() {
  const [selectedMenu, setSelectedMenu] = useState("HOME");
  const [isVisible, setIsVisible] = useState(false);

  // handle which menu is selected
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  // handle whether the search bar is visible or not
  const handleSearchButtonClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="flex flex-row gap-5 justify-start p-5 items-center h-28 bg-black border-b-2 border-gray-400">
      <div
        className={
          selectedMenu === "HOME" ? "border-b-2 border-yellow-600" : ""
        }
      >
        <Link
          to="/"
          className="text-white font-inter"
          onClick={() => handleMenuClick("HOME")}
        >
          HOME
        </Link>
      </div>
      <div
        className={
          selectedMenu === "ROOM TYPE" ? "border-b-2 border-yellow-600" : ""
        }
      >
        <Link
          to="/room-type"
          className="text-white font-inter"
          onClick={() => handleMenuClick("ROOM TYPE")}
        >
          ROOM TYPE
        </Link>
      </div>
      <div
        className={
          selectedMenu === "ABOUT" ? "border-b-2 border-yellow-600" : ""
        }
      >
        <Link
          to="/about"
          className="text-white font-inter"
          onClick={() => handleMenuClick("ABOUT")}
        >
          ABOUT
        </Link>
      </div>
      <div className="ml-auto mr-auto">
        <p className="text-white mx-96 text-5xl font-playfair">
          Midnight & Haven
        </p>
      </div>
      <div className="mr-18">
        <CiSearch color="white" size={40} onClick={handleSearchButtonClick} />
      </div>
      {isVisible && (
        <input
          type="text"
          className="border-2 border-gray-400 rounded-md h-10 w-96"
        />
      )}
      <div className="mr-6">
        <IoPersonCircleOutline color="white" size={40} />
      </div>
    </div>
  );
}
