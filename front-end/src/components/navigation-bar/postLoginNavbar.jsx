import React, { useState } from "react";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

export function PostLoginNavbar() {
  const [selectedMenu, setSelectedMenu] = useState("HOME");

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
  };

  return (
    <div className="flex flex-row gap-5 justify-start p-5 items-center h-28 bg-black border-b-2 border-yellow-400">
      <div className={selectedMenu === "HOME" ? "border-b-2" : ""}>
        <a href="" className="text-white font-inter" onClick={() => handleMenuClick("HOME")}>
          HOME
        </a>
      </div>
      <div className={selectedMenu === "ROOM TYPE" ? "border-b-2" : ""}>
        <a href="" className="text-white font-inter" onClick={() => handleMenuClick("ROOM TYPE")}>
          ROOM TYPE
        </a>
      </div>
      <div className={selectedMenu === "ABOUT" ? "border-b-2" : ""}>
        <a href="" className="text-white font-inter" onClick={() => handleMenuClick("ABOUT")}>
          ABOUT
        </a>
      </div>
      <div className="ml-16">
        <p className="text-white mx-96 text-5xl font-playfair">Midnight & Haven</p>
      </div>
      <div className="mr-18">
        <CiSearch color="white" size={40} />
      </div>
      <div className="mr-6">
        <IoPersonCircleOutline color="white" size={40} />
      </div>
    </div>
  );
}
