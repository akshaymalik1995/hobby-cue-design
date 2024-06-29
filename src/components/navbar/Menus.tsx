"use client";
import Image from "next/image";
import { BiSolidCart } from "react-icons/bi";
import { FaBookmark } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import PurpleButton from "../PurpleButton";
import { FaCompass } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Polygon from "../icons/Polygon";
import { GoStarFill } from "react-icons/go";
import Dropdown from "./Dropdown";
import { useState } from "react";
import PolygonStar from "../icons/PolygonStar";

export default function Menus() {
  const [exploreDropdown, setExploreDropdown] = useState(false);
  const [hobbiesDropdown, setHobbiesDropdown] = useState(false);

  const toggleExploreDropdown = (e: React.MouseEvent) => {
    console.log("clicked inside explore dropdown", exploreDropdown);
    e.stopPropagation();
    setExploreDropdown(!exploreDropdown);
  };

  const toggleHobbiesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHobbiesDropdown(!hobbiesDropdown);
  };

  return (
    <div className="flex gap-6 items-center">
      <div
        onClick={(e) => toggleExploreDropdown(e)}
        className="flex cursor-pointer items-center gap-2"
      >
        <FaCompass className="text-2xl text-purple " />
        <div>Explore</div>
        <IoIosArrowDown className="text-2xl text-[#939CA3] " />
        <Dropdown
          isDropdownOpen={exploreDropdown}
          setDropdownOpen={setExploreDropdown}
        />
      </div>

      <div
        onClick={(e) => toggleHobbiesDropdown(e)}
        className="flex cursor-pointer items-center gap-2"
      >
        <PolygonStar />
        <div>Hobbies</div>
        <IoIosArrowDown className="text-2xl text-[#939CA3] " />
        <Dropdown
          isDropdownOpen={hobbiesDropdown}
          setDropdownOpen={setHobbiesDropdown}
        />
      </div>

      <div className="h-[24px] flex justify-center items-center w-[24px]">
        <FaBookmark className="text-lg text-purple " />
      </div>
      <div className="h-[24px] flex justify-center items-center w-[24px]">
        <IoIosNotifications className="text-2xl text-purple " />
      </div>
      <div className="h-[24px] flex justify-center items-center w-[24px]">
        <BiSolidCart className="text-2xl text-purple " />
      </div>
      <PurpleButton text="Sign In" />
    </div>
  );
}
